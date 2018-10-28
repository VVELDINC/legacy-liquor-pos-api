# Legacy Liquor POS API

Designed to work with the Legacy Liquor (LL) Storefront and the LL Admin App.

This repo contains various tools and resources for working with Legacy Liquor's
POS data. The source POS data resides on a Microsoft SQL Server (MS SQL).

At the moment, this repo contains documentation on the various POS databases
and their tables, along with sample data.

[View all databases and their tables](DATABASES.md)

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
 - Gross margins per category for: last week, last month, last 3 months, last
year
 - Wholesale price and margin for every product
 - Retail price and margin for every product

### Marketing Manager - Events

 - There does not seem to be anything in the POS data related to events (except
maybe contact details of potential attendees?)

### eCommerce Manager - Inbox

 - There does not seem to be anything in the POS data related to emails (except
maybe contact details?)

### eCommerce Manager - Customers

 - Every customer, with their contact info
 - For every customer we also need their status, date added, shipping
and billing details, list of all their orders

### eCommerce Manager - Orders

 - Every order (with the order total, tax, shipping cost, qty, risk and status)
 - For every order we also need customer ID, name and phone number, shipping
address and shipping ID, billing name, address and phone, transaction ID
and credit card's last 4 digits

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

 - All product adjustments (with category, par level, qty before and qty after,
brand, adjustment date, and contact of manager who performed the adjustment)
 - Notifications on low inventory and high inventory
