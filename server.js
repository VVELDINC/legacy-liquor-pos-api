const express = require('express')
const app = express()
const sql = require('mssql')
const tableQueries = require('./queries/allTables')
const DATABASES = require('./databases')
const DOWNLOADED_DATA = require('./downloaded-data.json')["data"]

const PORT = process.env.PORT || 3000
const mssqlConfigPath = process.argv[2]
if ( ! mssqlConfigPath) {
  throw `You need to pass a path to the MSSQL config file. For example:
nodemon server.js ./mssql-config.json`
}
const MSSQL_CONFIG = require("./" + mssqlConfigPath)
if ( ! MSSQL_CONFIG.server) {
  throw 'Invalid MSSQL config file ' + mssqlConfigPath
}

const TABLE_SIZE_THRESHOLD = 100

sql.on('error', err => {
  console.log('MSSQL Error!')
  console.log(err)
})

app.get('/', async (req, res) => {
  let data = null
  let error = null
  res.json({
    data: data,
    error: error
  })
})

app.get('/download-databases', async (req, res) => {
  let data = []

  for (let db of DATABASES) {
    let database = {
      name: db.name,
      tables: [],
    }

    let config = MSSQL_CONFIG
    config['database'] = db.name
    const pool = await sql.connect(config)
    const request = pool.request()

    for (let table of db.tables) {
      console.log('')
      console.log(`Querying ${db.name}.${table.name}`)
      const query = tableQueries[db.name][table.name](request)
      const randomResult = await query.random
      const records = randomResult.recordset
      const countResult = await query.count
      const count = Object.values(countResult.recordset[0])[0]
      database['tables'].push({
        name: table.name,
        columns: records.length && Object.keys(records[0]) || [],
        data: records || [],
        count: count || 0,
      })
    }

    data.push(database)
    sql.close()
  }
  console.log('')
  console.log('Finished querying tables.')

  res.json({
    data: data,
  })
})

app.get('/render', async (req, res) => {
  let response = ''
  
  let filteredDatabases = DOWNLOADED_DATA.map(db => {
    return {
      name: db.name,
      tables: db.tables.filter(t => t.count >= TABLE_SIZE_THRESHOLD)
    }
  })
  response += renderTOC(filteredDatabases)

  for (let db of DOWNLOADED_DATA) {
    // Find the corresponding DB in our own file
    const ourDb = DATABASES.filter(d => d.name === db.name)[0]
    if ( ! ourDb) {
      continue
    }
    response += renderDatabaseHeader(db.name)
    // Filter out tables with too few rows
    const tables = db.tables.filter(t => t.count >= TABLE_SIZE_THRESHOLD)
    if (tables.length) {
      response += renderDatabaseExplanation()
    } else {
      response += renderEmptyDatabaseExplanation()
    }
    for (let table of tables) {
      // Find this table in ourDb
      const ourTable = ourDb.tables.filter(t => t.name === table.name)[0]
      if ( ! ourTable) {
        continue
      }
      const name = table.name
      const columns = table.columns
      const data = table.data.slice(0, 12)
      const count = table.count
      const notes = ourTable.notes
      if (data.length > 0) {
        response += renderTable(name, columns, data, count, notes)
      } else {
        response += renderEmptyTable(name, columns)
      }
    }
  }

  res.type('text/plain')
  res.send(response)
})

const renderTOC = (databases) => `
# Table of Contents

**List of tables with at least ${TABLE_SIZE_THRESHOLD} rows:**

${ databases.map(renderTOCDatabase).join('\n') }
`

const renderTOCDatabase = (db) => `
[${ db.name }](#${ db.name })
${ db.tables.map(renderTOCTable).join('\n') }
`

const renderTOCTable = (t) =>
  `- [${ t.name }](#${ renderTableLink(t) }) (${ renderCount(t.count) })`

const renderTableLink = (t) =>
  `${ t.name }-${ renderCount(t.count).replace(/,/g, '').replace(/ /g, '-') }`

const renderDatabaseHeader = (name) => `
# ${ name }
`

const renderDatabaseExplanation = (name) => `
Showing tables with at least ${TABLE_SIZE_THRESHOLD} rows.
`

const renderEmptyDatabaseExplanation = (name) => `
This database contains no tables with at least ${TABLE_SIZE_THRESHOLD} rows.
`

const renderTable = (title, columns, data, count, notes) => `
### ${ title } (${ renderCount(count) })

${notes || ''}

<details>
<summary>View random sample</summary>

| ${ columns.join(' | ') } |
| ${ columns.map(_ => '---').join(' | ') } |
${ data.map(r => renderRow(r, columns)).join('\n') }

</details>
`

const renderEmptyTable = (title, columns) => `
### ${ title } (0 rows)
`

const renderRow = (r, cols) =>
  `| ${ cols.map(c => renderCell(r[c])).join(' | ') } |`

const renderCell = cell =>
  `${(cell && cell.replace) ? cell.replace(/[\n\r]/g, ' ') : cell}`

const renderCount = (count) =>
  `${ count.toLocaleString() } row${ count === 1 ? '' : 's' }`

app.listen(PORT, () => console.log(`App listening on port ${PORT}.`))
