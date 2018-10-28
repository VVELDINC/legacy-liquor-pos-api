# Legacy Liquor POS API

Designed to work with the Legacy Liquor (LL) Storefront and the LL Admin App.

This repo contains various tools and resources for working with Legacy Liquor's POS data. The source POS data resides on a Microsoft SQL Server (MS SQL).

At the moment, this repo contains documentation on the various POS databases and their tables, along with sample data.

[View all databases and their tables](DATABASES.md)

## Potentially relevant tables for various types of data:

### Sales & Orders

 - [FDDATA.FDTxnPoint](DATABASES.md#fdtxnpoint-1333696-rows) (1,333,696 rows)
 - [RS0000DATA.RSTxnDetail](DATABASES.md#rstxndetail-1249-rows) (1,249 rows)
 - [RS0000DATA.RSTxnHeader](DATABASES.md#rstxnheader-490-rows) (490 rows)
 - [RS0000HISTORY.RSTxnDetail](DATABASES.md#rstxndetail-4710294-rows) (4,710,294 rows)
 - [RS0000HISTORY.RSTxnHeader](DATABASES.md#rstxnheader-1977798-rows) (1,977,798 rows)
 - [RS0000HISTORY.RSTxnPayment](DATABASES.md#rstxnpayment-4021-rows) (4,021 rows)
 - [RS0000HISTORY.RSTxnReason](DATABASES.md#rstxnreason-5936-rows) (5,936 rows)
 - [RS0000HISTORY.RSTxnShipping](DATABASES.md#rstxnshipping-7633-rows) (7,633 rows)
 - [RS0000HISTORY.RSTxnTender](DATABASES.md#rstxntender-2489942-rows) (2,489,942 rows)

### Inventory (with par level, age, wholesale and retail prices, margins)

 - [RS0000DATA.RSInventory](DATABASES.md#rsinventory-12763-rows) (12,763 rows)
 - [RS0000DATA.RSInventoryTrack](DATABASES.md#rsinventorytrack-3568517-rows) (3,568,517 rows)
 - [RS0000DATA.RSItem](DATABASES.md#rsitem-21949-rows) (21,949 rows)
 - [RS0000DATA.RSItemCostChange](DATABASES.md#rsitemcostchange-30768-rows) (30,768 rows)
 - [RS0000DATA.RSItemDel](DATABASES.md#rsitemdel-22409-rows) (22,409 rows)
 - [RS0000DATA.RSItemMergeLog](DATABASES.md#rsitemmergelog-1748-rows) (1,748 rows)
 - [RS0000DATA.RSItemPicture](DATABASES.md#rsitempicture-5677-rows) (5,677 rows)
 - [RS0000DATA.RSItemPriceChange](DATABASES.md#rsitempricechange-295842-rows) (295,842 rows)
 - [RS0000DATA.RSItemsAttrib](DATABASES.md#rsitemsattrib-241-rows) (241 rows)
 - [RS0000DATA.RSItemStockLevel](DATABASES.md#rsitemstocklevel-21630-rows) (21,630 rows)
 - [RS0000DATA.RSItemVendor](DATABASES.md#rsitemvendor-22393-rows) (22,393 rows)
 - [RS0000DATA.RSKitItem](DATABASES.md#rskititem-112-rows) (112 rows)

### Customers

 - [AR0000DATA.ARCustomer](DATABASES.md#arcustomer-7926-rows) (7,926 rows)
 - [PSCUSTOMER.Customer](DATABASES.md#customer-76150-rows) (76,150 rows)
 - [RS0000CUSTOMER.RSCustomer](DATABASES.md#rscustomer-78601-rows) (78,601 rows) (probably need to ensure the customer does not appear in [RS0000CUSTOMER.RSCustomerDel](DATABASES.md#rscustomerdel-526-rows))

### Adjustments

 - [RS0000DATA.RSInvAdjustCostDetail](DATABASES.md#rsinvadjustcostdetail-7346-rows) (7,346 rows) - Adjustments to cost
 - [RS0000DATA.RSInvAdjustCostHead](DATABASES.md#rsinvadjustcosthead-1293-rows) (1,293 rows)
 - [RS0000DATA.RSInvAdjustDetail](DATABASES.md#rsinvadjustdetail-34409-rows) (34,409 rows) - Adjustments to qty (and cost?)
 - [RS0000DATA.RSInvAdjustHead](DATABASES.md#rsinvadjusthead-5483-rows) (5,483 rows)

### Gift Cards

 - [PSGIFTCARD.GCGiftCard](DATABASES.md#gcgiftcard-4199-rows) (4,199 rows)
 - [PSGIFTCARD.GCTxnDetail](DATABASES.md#gctxndetail-29285-rows) (29,285 rows)

### Events

 - [RS0000DATA.RSEventDays](DATABASES.md#rseventdays-397-rows) (397 rows)

## Data required for the LL Storefront

TODO

## Data required for the LL Admin App

### Manager - Dashboard

 - Total sales (in dollars) per month
 - Total number of orders per month
 - Sales (in dollars) per category (wine, beer, spirit, etc) per month
 - Bestselling product order quantity (this month?)
 - New customers / top customers - what is this?
 - Sales trend - what's the difference with just "Sales"?
 - Total sales this month
 - Orders this month
 - Products sold this month - what's the difference with "orders"?

### Manager - Sales Reports

 - Daily (or monthly?) sales data for all years
 - Daily (or monthly?) sales data per category (wine, beer, spirit)
 - Daily (or monthly?) sales data per type (what is a type?)
 - Daily (or monthly?) sales data per brand
 - Daily (or monthly?) sales data per SKU
 - Every sale (including data on qty sold and qty left in inventory)

### Manager - Sales

 - Every sale (with qty sold and qty left in inventory)

### Manager - Inventory

 - Every product in inventory (with price, par level, qty in inventory, age)

### Manager - Par Levels

 - Every product in inventory (with price, par level, qty in inventory, age)
 - Manager's contact email (who is a manager in this context?)

### Manager - Gross Margin

 - Gross margins for: last week, last month, last 3 months, last year
 - Gross margins per category for: last week, last month, last 3 months, last year
 - Wholesale price and margin for every product
 - Retail price and margin for every product

### Marketing Manager - Events

 - Event details
 - Maybe contact details of potential attendees?

### eCommerce Manager - Inbox

 - There does not seem to be anything in the POS data related to emails (except maybe contact details?)

### eCommerce Manager - Customers

 - Every customer, with their contact info
 - For every customer we also need their status, date added, shipping and billing details, list of all their orders

### eCommerce Manager - Orders

 - Every order (with the order total, tax, shipping cost, qty, risk and status)
 - For every order we also need customer ID, name and phone number, shipping address and shipping ID, billing name, address and phone, transaction ID and credit card's last 4 digits

### Admin - Dashboard

 - Total sales (in dollars) per month
 - Total number of orders per month
 - Bestselling products (with price and order qty)
 - New customers
 - Top customers

### CFO - Inventory

 - Every product in inventory (with price, par level, qty in inventory, age)
 - Notifications on adjustments

### CFO - Adjustments

 - All product adjustments (with category, par level, qty before and qty after, brand, adjustment date, and contact of manager who performed the adjustment)
 - Notifications on low inventory and high inventory
