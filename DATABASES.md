
# Table of Contents

**List of tables with at least 100 rows:**


[AR0000DATA](#AR0000DATA)
- [ARCustomer](#ARCustomer) (7,926 rows)
- [ARInvoice](#ARInvoice) (4,101 rows)
- [ARInvoiceDetail](#ARInvoiceDetail) (4,065 rows)
- [ARLog](#ARLog) (792 rows)
- [ARPayment](#ARPayment) (1,744 rows)
- [ARPaymentDetail](#ARPaymentDetail) (3,823 rows)
- [ARPaymentDistribute](#ARPaymentDistribute) (1,682 rows)


[FDDATA](#FDDATA)
- [FDTxnPoint](#FDTxnPoint) (1,333,696 rows)


[PSCUSTOMER](#PSCUSTOMER)
- [Customer](#Customer) (76,150 rows)


[PSDATA](#PSDATA)



[PSGIFTCARD](#PSGIFTCARD)
- [GCGiftCard](#GCGiftCard) (4,199 rows)
- [GCTxnDetail](#GCTxnDetail) (29,285 rows)


[RS0000CUSTOMER](#RS0000CUSTOMER)
- [RSCustomer](#RSCustomer) (78,601 rows)
- [RSCustomerDel](#RSCustomerDel) (526 rows)


[RS0000DATA](#RS0000DATA)
- [RSAPVendor](#RSAPVendor) (521 rows)
- [RSBarcode](#RSBarcode) (27,911 rows)
- [RSDeposit](#RSDeposit) (211 rows)
- [RSEventDays](#RSEventDays) (397 rows)
- [RSInvAdjustCostDetail](#RSInvAdjustCostDetail) (7,346 rows)
- [RSInvAdjustCostHead](#RSInvAdjustCostHead) (1,293 rows)
- [RSInvAdjustDetail](#RSInvAdjustDetail) (34,409 rows)
- [RSInvAdjustHead](#RSInvAdjustHead) (5,483 rows)
- [RSInventory](#RSInventory) (12,763 rows)
- [RSInventoryTrack](#RSInventoryTrack) (3,568,517 rows)
- [RSInvPCCountDetail](#RSInvPCCountDetail) (47,837 rows)
- [RSInvPCImageDetail](#RSInvPCImageDetail) (87,391 rows)
- [RSInvRecDetail](#RSInvRecDetail) (303,383 rows)
- [RSInvRecDetailMisc](#RSInvRecDetailMisc) (43,304 rows)
- [RSInvRecHead](#RSInvRecHead) (30,872 rows)
- [RSInvTxfDetail](#RSInvTxfDetail) (1,634 rows)
- [RSInvTxfInventoryDetail](#RSInvTxfInventoryDetail) (1,397 rows)
- [RSItem](#RSItem) (21,949 rows)
- [RSItemCostChange](#RSItemCostChange) (30,768 rows)
- [RSItemDel](#RSItemDel) (22,409 rows)
- [RSItemMergeLog](#RSItemMergeLog) (1,748 rows)
- [RSItemPicture](#RSItemPicture) (5,677 rows)
- [RSItemPriceChange](#RSItemPriceChange) (295,842 rows)
- [RSItemsAttrib](#RSItemsAttrib) (241 rows)
- [RSItemStockLevel](#RSItemStockLevel) (21,630 rows)
- [RSItemsWebAttribDefValue](#RSItemsWebAttribDefValue) (213 rows)
- [RSItemVendor](#RSItemVendor) (22,393 rows)
- [RSKitItem](#RSKitItem) (112 rows)
- [RSLabelSetting](#RSLabelSetting) (477 rows)
- [RSParameter](#RSParameter) (517 rows)
- [RSSecGroupFns](#RSSecGroupFns) (1,620 rows)
- [RSSecGroupUsers](#RSSecGroupUsers) (162 rows)
- [RSSecSystemFns](#RSSecSystemFns) (405 rows)
- [RSSSSpecialPrice](#RSSSSpecialPrice) (288 rows)
- [RSSubcategory](#RSSubcategory) (138 rows)
- [RSTxnDetail](#RSTxnDetail) (1,249 rows)
- [RSTxnHeader](#RSTxnHeader) (490 rows)
- [RSUserDrawer](#RSUserDrawer) (1,793 rows)


[RS0000HISTORY](#RS0000HISTORY)
- [RSCashierClosingTender](#RSCashierClosingTender) (113,162 rows)
- [RSCashierClosingTenderDetail](#RSCashierClosingTenderDetail) (137,093 rows)
- [RSCCACreditRequest](#RSCCACreditRequest) (132,498 rows)
- [RSCCASummary](#RSCCASummary) (3,579 rows)
- [RSDailyClose](#RSDailyClose) (2,015 rows)
- [RSTxnDetail](#RSTxnDetail) (4,710,294 rows)
- [RSTxnHeader](#RSTxnHeader) (1,977,798 rows)
- [RSTxnPayment](#RSTxnPayment) (4,021 rows)
- [RSTxnReason](#RSTxnReason) (5,936 rows)
- [RSTxnShipping](#RSTxnShipping) (7,633 rows)
- [RSTxnTender](#RSTxnTender) (2,489,942 rows)
- [RSOpenDrawerLog](#RSOpenDrawerLog) (59,966 rows)
- [RSCashierClosing](#RSCashierClosing) (18,111 rows)


[RS0000PODATA](#RS0000PODATA)
- [POHeader](#POHeader) (3,981 rows)
- [PODetail](#PODetail) (719,892 rows)


[RS0000WNDATA](#RS0000WNDATA)



# AR0000DATA

Showing tables with at least 100 rows.

### ARCustomer (7,926 rows)

Customer data, such as Customer ID, name, phone, acct open date, credit limit, price group, etc.

<details>
<summary>View random sample</summary>

| CustomerID | AccountName | CustType | Contact | Address | City | Province | PostalCode | Country | Phone | Phone2 | Fax | Email | WebSite | OpenAcctDate | Status | CurrencyCode | CreditLimit | DaysDue | DiscountDay | DiscountRate | GSTNum | PrintStmt | CreatorID | LastUpdateID | LastUpdateDate | PriceGroup | SalesDiscountRate | SalesRepCode | Notes | TermType | Address2 | Address3 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 112974 | Landry, Jayne & Jason | null | null |    | Vancouver | BC |  | Canada | 6047313483 |  |  | jayne.landry@sab.com | null | 2012-03-23T00:00:00.000Z | A | CDN | 0 | 0 | 0 | 0 | null | 1 | Convert | Convert | 2013-06-11T09:53:00.337Z | 0 | 0 |  |  | N | null | null |
| 114602 | Van Rijn, Jessie - Greenfield, Steven | null | null | null | Vancouver | BC | null | Canada | 7788379225 | null | null | null | null | 2017-07-30T00:00:00.000Z | A | CDN | 0 | 0 | 0 | 0 | null | 1 | Convert | Convert | 2013-06-11T09:53:00.337Z | 1 | 0 | null | null | N | null | null |
| 112842 | Chandra, Aaron | null | null |    | Vancouver | BC |  | Canada | 6047006569 |  |  | null | null | 2012-03-17T00:00:00.000Z | A | CDN | 0 | 0 | 0 | 0 | null | 1 | Convert | Convert | 2013-06-11T09:53:00.337Z | 0 | 0 |  |  | N | null | null |
| 113221 | pimm, denis | null | null |    | Vancouver | BC |  | Canada | 16043125353 |  |  | null | null | 2012-04-01T00:00:00.000Z | A | CDN | 0 | 0 | 0 | 0 | null | 1 | Convert | Convert | 2013-06-11T09:53:00.337Z | 0 | 0 |  |  | N | null | null |
| 300199 | Hootsuite Media Inc. | null | null | 5 East 8th Avenue | Vancouver | BC | V5T1R6 | Canada | 6046814668 | null | null | null | null | 2018-04-24T00:00:00.000Z | A | CDN | 0 | 0 | 0 | 0 | null | 1 | null | null | null | 1 | 0 | null | Charlene Robertson | Executive Assistant | Hootsuite  VISA 4538 2619 4282 0011  EXP 01/20  CVC 674    David King | Facilities Specialist | Hootsuite  VISA 4516 0700 1131 0713  EXP 06/20  CVC 980  Cardholder: Kaitlin Mooney    Purchase to be charged to Ryan Holmes' Card:  VISA 4515 0427 0026 0351  EXP 03/21  CVC 279    Hootsuite Corporate Card  4516 0760 0302 5904  10/19  950  Ryan Holmes | N | null | null |
| 112830 | YEN, CHRISTINA | null | null |    | Vancouver | BC |  | Canada | 7785588859 |  |  | null | null | 2012-03-17T00:00:00.000Z | A | CDN | 0 | 0 | 0 | 0 | null | 1 | Convert | Convert | 2013-06-11T09:53:00.337Z | 0 | 0 |  |  | N | null | null |
| 301962 | Manson, Jeoff | null | null | null | Vancouver | BC | null | Canada | 7786680113 | null | null | null | null | 2015-02-25T00:00:00.000Z | A | CDN | 0 | 0 | 0 | 0 | null | 1 | Convert | Convert | 2013-06-11T09:53:00.337Z | 1 | 0 | null | null | N | null | null |
| 301930 | Moosavi, Ali | null | null | null | Vancouver | BC | null | Canada | 7783207979 | null | null | null | null | 2015-03-11T00:00:00.000Z | A | CDN | 0 | 0 | 0 | 0 | null | 1 | Convert | Convert | 2013-06-11T09:53:00.337Z | 1 | 0 | null | null | N | null | null |
| 301900 | Kwon, Sophena | null | null | null | Vancouver | BC | null | Canada | 6047240344 | null | null | null | null | 2015-01-31T00:00:00.000Z | A | CDN | 0 | 0 | 0 | 0 | null | 1 | Convert | Convert | 2013-06-11T09:53:00.337Z | 1 | 0 | null | null | N | null | null |
| 301150 | Fane, Katherine | null | null | null | Vancouver | BC | null | Canada | 6049161555 | null | null | KATIEMFANE@GMAIL.COM | null | 2014-12-03T00:00:00.000Z | A | CDN | 0 | 0 | 0 | 0 | null | 1 | Convert | Convert | 2013-06-11T09:53:00.337Z | 1 | 0 | null | null | N | null | null |
| 300492 | toolsee,teressa | null | null | null | Vancouver | BC | null | Canada | 6048170566 | null | null | ttoolsee@telus.net | null | 2014-01-06T00:00:00.000Z | A | CDN | 0 | 0 | 0 | 0 | null | 1 | Convert | Convert | 2013-06-11T09:53:00.337Z | 1 | 0 | null | null | N | null | null |
| 301390 | Forsyth, Max | CP | null | null | Vancouver | BC | null | Canada | 7782314205 | null | null | null | null | 2016-07-03T00:00:00.000Z | A | CDN | 0 | 0 | 0 | 0 | null | 1 | Convert | Convert | 2013-06-11T09:53:00.337Z | 1 | 0 | null | camra member expiry october 31, 2015 (jericho) | N | null | null |

</details>

### ARInvoice (4,101 rows)

Customer invoices, with data such as customer ID, amount, etc.

<details>
<summary>View random sample</summary>

| InvoiceID | CustomerID | StoreNum | InvoiceNum | Date | DueDate | Amount | Balance | ForAmount | ForBalance | Reference | Printed | Type | EntryDate | LastUpdateDate | IsInterest | LastInterestDate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2085 | 508547 | 0 | 00867020 | 2015-04-02T00:00:00.000Z | 2015-04-02T00:00:00.000Z | 387.65 | 0 | 387.65 | 0 | Head Office | false | R | 2015-04-02T08:24:03.233Z | 2015-04-02T08:24:03.233Z | false | null |
| 260 | 102 | 0 | 00198793 | 2012-07-26T00:00:00.000Z | 2012-07-26T00:00:00.000Z | 107.85 | 0 | 107.85 | 0 |  | false | R | 2012-07-26T00:00:00.000Z | 2012-07-26T00:00:00.000Z | false | 1899-12-30T00:00:00.000Z |
| 81 | 101935 | 0 | 00067671 | 2011-09-09T00:00:00.000Z | 2011-09-09T00:00:00.000Z | 2.45 | 0 | 2.45 | 0 |  | false | R | 2011-09-09T00:00:00.000Z | 2011-09-09T00:00:00.000Z | false | 1899-12-30T00:00:00.000Z |
| 854 | 100102 | 0 | 00409706 | 2013-07-09T00:00:00.000Z | 2013-07-09T00:00:00.000Z | 8.27 | 0 | 8.27 | 0 | Head Office | false | R | 2013-07-09T17:13:18.790Z | 2013-07-09T17:13:18.790Z | false | null |
| 246 | 102 | 0 | 00191036 | 2012-07-13T00:00:00.000Z | 2012-07-13T00:00:00.000Z | 65.2 | 0 | 65.2 | 0 |  | false | R | 2012-07-13T00:00:00.000Z | 2012-07-13T00:00:00.000Z | false | 1899-12-30T00:00:00.000Z |
| 2565 | 523098 | 0 | 01105026 | 2016-01-18T00:00:00.000Z | 2016-01-18T00:00:00.000Z | 1049.6 | 0 | 1049.6 | 0 | Head Office | false | R | 2016-01-18T14:40:08.303Z | 2016-01-18T14:40:08.303Z | false | null |
| 999 | 101920 | 0 | 00456661 | 2013-09-05T00:00:00.000Z | 2013-09-05T00:00:00.000Z | 84 | 0 | 84 | 0 | Head Office | false | R | 2013-09-05T15:33:53.453Z | 2013-09-05T15:33:53.453Z | false | null |
| 3333 | 500057 | 0 | 01528066 | 2017-06-14T00:00:00.000Z | 2017-06-14T00:00:00.000Z | 897.86 | 0 | 897.86 | 0 | MPC_JUN23 | false | R | 2017-06-14T11:01:14.427Z | 2017-06-14T11:01:14.427Z | false | null |
| 3524 | 518703 | 0 | 01651777 | 2017-10-23T00:00:00.000Z | 2017-10-23T00:00:00.000Z | 675.1 | 0 | 675.1 | 0 | Head Office | false | R | 2017-10-23T10:23:30.940Z | 2017-10-23T10:23:30.940Z | false | null |
| 2497 | 500057 | 0 | 01066959 | 2015-11-27T00:00:00.000Z | 2015-11-27T00:00:00.000Z | 1096.39 | 0 | 1096.39 | 0 | 11/27/2015 | false | R | 2015-11-27T08:29:30.927Z | 2015-11-27T08:29:30.927Z | false | null |
| 1148 | 500057 | 0 | 00513464 | 2013-11-29T00:00:00.000Z | 2013-11-29T00:00:00.000Z | 538.75 | 0 | 538.75 | 0 | Friday, November 29 | false | R | 2013-11-29T14:49:47.537Z | 2013-11-29T14:49:47.537Z | false | null |
| 1877 | 101920 | 0 | 00779873 | 2014-11-26T00:00:00.000Z | 2014-11-26T00:00:00.000Z | 154 | 0 | 154 | 0 | 10881 | false | R | 2014-11-26T14:07:58.187Z | 2014-11-26T14:07:58.187Z | false | null |

</details>

### ARInvoiceDetail (4,065 rows)

Invoice details. Not many columns here, just line number, amount, “for amount”, and a few others.

<details>
<summary>View random sample</summary>

| InvoiceID | LineNum | GLAcct | GLDept | Description | Amount | ForAmount |
| --- | --- | --- | --- | --- | --- | --- |
| 3421 | 1 | null | null | On Account | -3092.8 | -3092.8 |
| 511 | 1 |  | 000 | On Account | 177.95 | 177.95 |
| 3697 | 1 | null | null | On Account | 965.3 | 965.3 |
| 2335 | 1 | null | null | On Account | 498 | 498 |
| 3453 | 1 | null | null | On Account | -411.78 | -411.78 |
| 146 | 1 |  | 000 | On Account | 546.9 | 546.9 |
| 524 | 1 |  | 000 | On Account | 330.16 | 330.16 |
| 3824 | 1 | null | null | On Account | 39.5 | 39.5 |
| 2572 | 1 | null | null | On Account | 644.28 | 644.28 |
| 1600 | 1 | null | null | On Account | 1024.8 | 1024.8 |
| 3468 | 1 | null | null | On Account | 542 | 542 |
| 2416 | 1 | null | null | On Account | 1663.2 | 1663.2 |

</details>

### ARLog (792 rows)

Seem to be admin logs.

<details>
<summary>View random sample</summary>

| RowID | Code | Time | UserID | UserName | UserID2 | UserName2 | Level | Allowed |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 487 | ARDetailListing | 2016-05-30T10:44:12.127Z | 1056 | Dylan Palmer | null | null | 0 | true |
| 499 | AccountInquiry | 2016-06-22T08:11:53.080Z | 9890 | Ken James | null | null | 0 | true |
| 12 | ARDetailListing | 2013-06-24T11:44:16.203Z | InfoSpec | InfoSpec | null | null | 0 | true |
| 524 | Statement | 2016-09-06T16:31:23.397Z | 9890 | Ken James | null | null | 0 | true |
| 332 | Statement | 2015-05-27T10:55:49.207Z | 1056 | Dylan Palmer | null | null | 0 | true |
| 207 | AgedARReport | 2014-05-07T14:44:23.577Z | ADMIN | Administrator | null | null | 0 | true |
| 168 | ARDetailListing | 2014-02-24T07:30:12.217Z | ADMIN | Administrator | null | null | 0 | true |
| 179 | ARDetailListing | 2014-03-07T14:22:01.513Z | ADMIN | Administrator | null | null | 0 | true |
| 36 | Statement | 2013-08-26T16:24:47.390Z | ADMIN | Administrator | null | null | 0 | true |
| 230 | InvoiceList | 2014-06-25T09:45:17.310Z | ADMIN | Administrator | null | null | 0 | true |
| 321 | ARDetailListing | 2015-04-06T16:19:21.017Z | 1056 | Dylan Palmer | null | null | 0 | true |
| 56 | AgedARReport | 2013-08-28T11:29:44.540Z | ADMIN | Administrator | null | null | 0 | true |

</details>

### ARPayment (1,744 rows)

Payment info for different customers, including amounts and dates.

<details>
<summary>View random sample</summary>

| PaymentID | CustomerID | StoreNum | Date | ChequeNum | Amount | ForAmount | ForOverAmount | OverAmount | OverInvoiceID | Printed | EntryDate | LastUpdateDate | PaymentType |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1727 | 500057 | 0 | 2018-10-02T00:00:00.000Z | null | 930.03 | 930.03 | 0 | 0 | 0 | false | 2018-10-02T11:34:20.683Z | 2018-10-02T11:34:20.683Z | P |
| 402 | 304108 | 0 | 2014-03-29T00:00:00.000Z | null | 674.4 | 674.4 | 0 | 0 | 0 | false | 2014-03-29T15:30:03.520Z | 2014-03-29T15:30:03.520Z | P |
| 18 | 108992 | 0 | 2011-11-03T00:00:00.000Z |  | 1414.12 | 1414.12 | 0 | 0 | 0 | false | 2011-11-03T00:00:00.000Z | 2011-11-03T00:00:00.000Z | P |
| 630 | 101920 | 0 | 2014-11-28T00:00:00.000Z | null | 856 | 856 | 0 | 0 | 0 | false | 2014-11-28T10:10:33.540Z | 2014-11-28T10:10:33.540Z | P |
| 392 | 100637 | 0 | 2014-03-14T00:00:00.000Z | null | 992.95 | 992.95 | 0 | 0 | 0 | false | 2014-03-14T12:00:50.463Z | 2014-03-14T12:00:50.463Z | P |
| 941 | 301305 | 0 | 2016-02-26T00:00:00.000Z | null | 1534.7 | 1534.7 | 0 | 0 | 0 | false | 2016-02-26T11:43:48.660Z | 2016-02-26T11:43:48.660Z | P |
| 1189 | 531103 | 0 | 2017-01-17T00:00:00.000Z | null | 1419.1 | 1419.1 | 0 | 0 | 0 | false | 2017-01-17T12:09:32.153Z | 2017-01-17T12:09:32.153Z | P |
| 668 | 500057 | 0 | 2014-12-29T00:00:00.000Z | null | 1970.05 | 1970.05 | 0 | 0 | 0 | false | 2014-12-29T11:30:27.057Z | 2014-12-29T11:30:27.057Z | P |
| 467 | 101920 | 0 | 2014-07-11T00:00:00.000Z | 1571 | 240 | 240 | 0 | 0 | 0 | false | 2014-07-11T11:19:00.793Z | 2014-07-11T11:19:00.793Z | P |
| 1107 | 514377 | 0 | 2016-11-02T00:00:00.000Z | null | 0 | 0 | 0 | 0 | 0 | false | 2016-11-02T13:25:43.217Z | 2016-11-02T13:25:43.217Z | P |
| 1500 | 300199 | 0 | 2017-12-13T00:00:00.000Z | null | 534.26 | 534.26 | 0 | 0 | 0 | false | 2017-12-13T17:27:53.063Z | 2017-12-13T17:27:53.063Z | P |
| 953 | 514377 | 0 | 2016-03-14T00:00:00.000Z | null | 1249.2 | 1249.2 | 0 | 0 | 0 | false | 2016-03-14T16:02:28.630Z | 2016-03-14T16:02:28.630Z | P |

</details>

### ARPaymentDetail (3,823 rows)

Table linking payments to invoices.

<details>
<summary>View random sample</summary>

| PaymentID | InvoiceID | Amount | ForAmount | Date |
| --- | --- | --- | --- | --- |
| 1293 | 3285 | 475.55 | 475.55 | 2017-05-31T00:00:00.000Z |
| 1002 | 1951 | 112 | 112 | 2016-06-01T00:00:00.000Z |
| 261 | 652 | 360.84 | 360.84 | 2013-07-09T00:00:00.000Z |
| 1455 | 2099 | 82 | 82 | 2017-12-05T00:00:00.000Z |
| 529 | 1632 | 2343.6 | 2343.6 | 2014-09-08T00:00:00.000Z |
| 1743 | 4087 | 658.8 | 658.8 | 2018-10-24T00:00:00.000Z |
| 1488 | 3611 | -44.95 | -44.95 | 2017-12-08T00:00:00.000Z |
| 1473 | 3539 | -180 | -180 | 2017-12-07T00:00:00.000Z |
| 1376 | 3332 | 254.25 | 254.25 | 2017-08-25T00:00:00.000Z |
| 1707 | 3942 | 368.52 | 368.52 | 2018-09-05T00:00:00.000Z |
| 1233 | 3138 | 831.71 | 831.71 | 2017-03-20T00:00:00.000Z |
| 1197 | 3074 | 1157.8 | 1157.8 | 2017-01-27T00:00:00.000Z |

</details>

### ARPaymentDistribute (1,682 rows)

A table containing payment id, line number, payment amount.

<details>
<summary>View random sample</summary>

| PaymentID | LineNum | GLDeptNum | GLAcctNum | Amount | ForAmount |
| --- | --- | --- | --- | --- | --- |
| 1484 | 1 | null | null | 0.02 | 0.02 |
| 1343 | 1 | null | null | 410.6 | 410.6 |
| 1542 | 1 | null | null | 506.32 | 506.32 |
| 856 | 1 | null | null | 3177.15 | 3177.15 |
| 1548 | 1 | null | null | 755.02 | 755.02 |
| 850 | 1 | null | null | 2495.95 | 2495.95 |
| 796 | 1 | null | null | 81.9 | 81.9 |
| 160 | 1 | null | null | 3834.8 | 3834.8 |
| 1239 | 1 | null | null | 221.67 | 221.67 |
| 1186 | 1 | null | null | 327.9 | 327.9 |
| 567 | 1 | null | null | 350 | 350 |
| 1040 | 1 | null | null | 516 | 516 |

</details>

# FDDATA

Showing tables with at least 100 rows.

### FDTxnPoint (1,333,696 rows)

Transaction history for some sort of store points, along with remarks

<details>
<summary>View random sample</summary>

| TxnPointID | TxnType | TxnDate | StoreNum | TxnID | CustomerID | TotalSales | NumOfVisit | Points | BonusPoints | BonusType | TotalPoints | Remark | AdjustBy | AdjustOn | NumOfGuest | RedeemedPoints | AwardType | Reference | DiscountAmount |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1196132 | P | 2018-03-23T13:56:26.813Z | 0 | 1771836 | 000-00519962 | 29.8 | 1 | 29 | 0 | null | 29 | null | null | null | null | 29 | null | null | null |
| 1217262 | R | 2018-04-28T21:44:55.767Z | 0 | 1802885 | 000-00106183 | 0 | 0 | -1000 | 0 | null | -1000 | null | null | null | null | 0 | null | null | 0 |
| 1325839 | P | 2018-10-13T13:40:45.527Z | 0 | 1967046 | 000-00413414 | 33.45 | 1 | 33 | 0 | null | 33 | null | null | null | null | 0 | null | null | null |
| 951400 | P | 2017-01-19T15:55:47.297Z | 0 | 1412981 | 000-00528075 | 15 | 1 | 15 | 0 | null | 15 | null | null | null | null | 0 | null | null | null |
| 839253 | P | 2016-07-08T11:37:58.793Z | 0 | 1249555 | 000-00507352 | 20.2 | 1 | 20 | 0 | null | 20 | null | null | null | null | 0 | null | null | null |
| 892362 | P | 2016-09-30T19:45:49.343Z | 0 | 1328069 | 000-00524826 | 24.5 | 1 | 24 | 0 | null | 24 | null | null | null | null | 24 | null | null | null |
| 1205865 | P | 2018-04-09T17:50:42.123Z | 0 | 1785946 | 000-00401994 | 7.5 | 1 | 7 | 0 | null | 7 | null | null | null | null | 7 | null | null | null |
| 463815 | P | 2014-07-14T22:25:35.167Z | 0 | 682885 | 000-00113432 | 9.7 | 1 | 9 | 0 | null | 9 | null | null | null | null | 9 | null | null | null |
| 1030577 | P | 2017-06-10T17:39:31.433Z | 0 | 1528263 | 000-00404068 | 36.05 | 1 | 36 | 0 | null | 36 | null | null | null | null | 0 | null | null | null |
| 1089084 | P | 2017-09-08T15:02:09.247Z | 0 | 1618018 | 000-00303600 | 8.15 | 1 | 8 | 0 | null | 8 | null | null | null | null | 8 | null | null | null |
| 739566 | P | 2016-01-13T19:16:25.157Z | 0 | 1104620 | 000-00505868 | 17.2 | 1 | 17 | 0 | null | 17 | null | null | null | null | 17 | null | null | null |
| 788875 | P | 2016-04-16T22:12:45.740Z | 0 | 1174839 | 000-00505739 | 14.65 | 1 | 14 | 0 | null | 14 | null | null | null | null | 14 | null | null | null |

</details>

# PSCUSTOMER

Showing tables with at least 100 rows.

### Customer (76,150 rows)

Customer info, such as name, contacts, etc. Very messy and incomplete.

<details>
<summary>View random sample</summary>

| CustomerID | FirstName | LastName | Title | CompanyName | CustType | AreaCode | Phone | CellAreaCode | CellPhone | WorkAreaCode | WorkPhone | Extension | Fax | LongDistanceFax | Address | City | Province | Country | PostalCode | Buzzer | Zone | Birthday | Email | ReceiveEmail | MailingList | OpenAcctDate | FromDate | ToDate | Status | PriceGroup | DiscountID | DiscountRate | TaxExempt1 | TaxExempt2 | TaxExempt3 | TaxExempt4 | TaxExemptRef | CreditCardNum | CreditCardExpiryDate | CreditCardHolder | Notes | NoteMark | LastVisit | LastUpdate | VisitCount | PurchaseTotal | IsAR | IsDelivery | IsVIP | IsFDT | Remark | ExemptPoints | MapCode | ApplyDeliveryCharge | SuiteNumber | StreetNumber | Street | StreetType | Mileage | MapImage | Image | UseCardInfoToPay | DisplayDemographicData | PrintNotesOnReceipt | Warning | CreditAmount | DrivingDirection | ContactTime | PrintCardTime | PickupTime | Extra | PrintNotesInKitchen | FDCardNum | HomeStoreNum |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 000-00405944 | woodington, Jeremy | null | null | null | CP | 604 | 616-0219 | null | null | null | null | null | null | null | null | Vancouver | BC | Canada | null | null | null | null | null | null | null | 2017-09-02T19:13:30.597Z | null | null | A | null | null | null | null | null | null | null | null | null | null | null | null | null | 2018-05-19T21:17:00.000Z | null | null | null | null | null | null | true | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | 0 |
| 000-00107033 | Preswick, Alex |  |  |  |  | 604 | 880-9111 |  |  |  |  |  |  | false |  | Vancouver | BC | Canada |  | null | null | null |  | null | null | 2011-08-19T00:00:00.000Z | null | null | null | 1 | null | 0 | false | false | false | false | null | null | null | null |  | null | 2018-10-13T14:40:00.000Z | null | null | null | null | null | null | true | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null |
| 000-00508039 | Gallagher, Keighty | null | null | null | null | 604 | 760-7509 | null | null | null | null | null | null | null | null | Vancouver | BC | Canada | null | null | null | null | null | null | null | 2014-02-15T15:33:13.023Z | null | null | A | null | null | null | null | null | null | null | null | null | null | null | null | null | 2018-09-23T18:03:00.000Z | null | null | null | null | null | null | true | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | 0 |
| 000-00116051 | Baglote, Jeff |  |  |  |  | 604 | 852-5807 |  |  |  |  |  |  | false |  | Vancouver | BC | Canada |  | null | null | null |  | null | null | 2012-06-24T00:00:00.000Z | null | null | null | 1 | null | 0 | false | false | false | false | null | null | null | null |  | null | null | null | null | null | null | null | null | true | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null |
| 000-00411004 | Zano, Nick | null | null | null | CP | 323 | 793-2147 | null | null | null | null | null | null | null | null | Vancouver | BC | Canada | null | null | null | null | null | null | null | 2018-05-08T13:55:48.313Z | null | null | A | null | null | null | null | null | null | null | null | null | null | null | null | null | 2018-05-08T13:56:00.000Z | null | null | null | null | null | null | true | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | 0 |
| 000-00410072 | Patterson, Joanne | null | null | null | CP | 604 | 788-3316 | null | null | null | null | null | null | null | null | Vancouver | BC | Canada | null | null | null | null | null | null | null | 2018-03-29T12:42:18.653Z | null | null | A | null | null | null | null | null | null | null | null | null | null | null | null | null | 2018-03-29T12:43:00.000Z | null | null | null | null | null | null | true | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | 0 |
| 000-00411808 | Kooner, Surj | null | null | null | CP | 604 | 327-2308 | null | null | null | null | null | null | null | null | Vancouver | BC | Canada | null | null | null | null | null | null | null | 2018-06-10T15:47:12.007Z | null | null | A | null | null | null | null | null | null | null | null | null | null | null | null | null | 2018-06-10T15:50:00.000Z | null | null | null | null | null | null | true | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | 0 |
| 000-00122505 | Kellock, Steve |  |  |  |  | 604 | 649-4595 |  |  |  |  |  |  | false |  | Vancouver | BC | Canada |  | null | null | null |  | null | null | 2012-12-16T00:00:00.000Z | null | null | null | 1 | null | 0 | false | false | false | false | null | null | null | null |  | null | 2018-05-23T12:53:00.000Z | null | null | null | null | null | null | true | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null |
| 000-00408675 | Mayo, Toby& Robinson | null | null | null | CP | 778 | 668-0107 | null | null | null | null | null | null | null | null | Vancouver | BC | Canada | null | null | null | null | null | null | null | 2018-01-09T17:00:11.333Z | null | null | A | null | null | null | null | null | null | null | null | null | null | null | null | null | 2018-09-15T17:23:00.000Z | null | null | null | null | null | null | true | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | 0 |
| 000-00528365 | Johnson, Andrea | null | null | null | CP | 604 | 767-5763 | null | null | null | null | null | null | null | null | Vancouver | BC | Canada | null | null | null | null | andrea_k_johnson@yahoo.ca | null | null | 2016-05-29T17:53:35.760Z | null | null | A | null | null | null | null | null | null | null | null | null | null | null | null | null | 2018-10-23T16:43:00.000Z | null | null | null | null | null | null | true | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | 0 |
| 000-00109640 | TOLONEN, RAUNO |  |  |  |  | 778 | 223-3948 |  |  |  |  |  |  | false |  | Vancouver | BC | Canada |  | null | null | null | RAUNO.TOLONEN@GMAIL.COM | null | null | 2011-11-19T00:00:00.000Z | null | null | null | 1 | null | 0 | false | false | false | false | null | null | null | null |  | null | 2015-11-22T16:04:00.000Z | null | null | null | null | null | null | true | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null |
| 000-00505701 | Giffen, Joel |  | null | null | null | 604 | 789-3424 | null | null | null | null | null | null | null |  | Vancouver | BC | Canada |  | null | null | null |  | null | null | 2013-11-28T22:21:50.160Z | null | null | A | null | null | null | null | null | null | null | null | null | null | null | null | null | 2018-07-31T18:06:00.000Z | null | null | null | null | null | null | true | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | 0 |

</details>

# PSDATA

This database contains no tables with at least 100 rows.

# PSGIFTCARD

Showing tables with at least 100 rows.

### GCGiftCard (4,199 rows)

Contains gift card data with dollar value, issue date, etc.

<details>
<summary>View random sample</summary>

| CardNumber | InitValue | DollarValue | Redeemed | IssueDate | ExpiryDate | Refillable | Status | ExpiryPeriod | Reference | RedemptionMode | CardType | SeqNum |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 861150388863 | 0 | 25 | 18.65 | 2017-10-29T15:52:46.860Z | null | true | A | 0 |  | P |  | 3161 |
| 820579616453 | 0 | 100 | 50 | 2012-12-02T17:05:10.010Z | null | true | A | 0 |  | P | REG | 1088 |
| 801138173813 | 0 | 100 | 100 | 2011-01-08T19:36:09.637Z | null | true | A | 0 |  | P | REG | 51 |
| 850337176208 | 0 | 425 | 414.9 | 2016-06-29T14:01:20.173Z | null | true | A | 0 |  | P |  | 2076 |
| 801142088383 | 0 | 30 | null | 2011-12-15T16:20:44.510Z | null | true | A | 0 |  | P | REG | 460 |
| 820540918133 | 0 | 50 | 49.7 | 2012-07-31T11:24:13.177Z | null | true | A | 0 |  | P | REG | 1973 |
| 861153911974 | 0 | 25 | 25 | 2018-01-23T16:44:54.383Z | null | true | A | 0 |  | P |  | 3359 |
| 861123744878 | 0 | 75 | 75 | 2018-01-18T13:06:49.323Z | null | true | A | 0 |  | P |  | 3313 |
| 861140107308 | 0 | 190 | 189.5 | 2017-12-11T18:22:02.517Z | null | true | A | 0 |  | P |  | 3350 |
| 820520447600 | 0 | 445 | 445 | 2013-12-19T14:11:01.943Z | null | true | A | 0 |  | P | REG | 1809 |
| 850311925498 | 0 | 350 | 348.4 | 2016-09-08T14:23:58.497Z | null | true | A | 0 |  | P |  | 2134 |
| 2591 | 0 | null | null | null | null | true | A | 0 |  | P | REG | 0 |

</details>

### GCTxnDetail (29,285 rows)

Gift card transaction details.

<details>
<summary>View random sample</summary>

| CardNumber | LineNum | TxnAmount | TxnDate | TxnType | TxnID | EmployeeID | StoreNumber | ActionCode | Status | Batch |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 850343007596 | 7 | -19.05 | 2015-10-02T10:44:07.993Z | RS | 1029420 | MICHAEL | 0 | R | null | null |
| 820579193848 | 11 | -0.47 | 2015-04-14T21:53:19.177Z | RS | 879823 | BECKY | 0 | R | null | null |
| 861123191247 | 11 | -10.4 | 2017-02-04T13:52:18.743Z | RS | 1423831 | KITTY | 0 | R | null | null |
| 861150589340 | 13 | -5 | 2018-09-21T15:23:38.013Z | RS | 1948054 | JADINE | 0 | R | null | null |
| 861151211624 | 14 | -5.8 | 2018-10-03T20:10:16.450Z | RS | 1958638 | SARA | 0 | R | null | null |
| 801183090539 | 2 | -29.45 | 2011-05-23T14:22:49.893Z | RS | 29369 | MIRKO | 0 | R | null | null |
| 801161543646 | 9 | -3.2 | 2011-06-16T20:05:06.263Z | RS | 37427 | BEN | 0 | R | null | null |
| 850321841646 | 26 | 50 | 2017-05-10T17:49:15.563Z | RS | 1497828 | JESSICA | 0 | P | null | null |
| 861117136452 | 4 | -49.45 | 2017-12-30T17:00:48.207Z | RS | 1711908 | JYOTI | 0 | R | null | null |
| 801154892198 | 3 | -53.3 | 2012-03-17T12:19:14.613Z | RS | 134983 | CHRISTOPHE | 0 | R | null | null |
| 820570386188 | 3 | 25 | 2013-07-26T19:18:03.770Z | RS | 426871 | Carly | 0 | P | null | null |
| 850396772473 | 8 | 25 | 2016-03-29T19:07:48.933Z | RS | 1158295 | STEVEN | 0 | P | null | null |

</details>

# RS0000CUSTOMER

Showing tables with at least 100 rows.

### RSCustomer (78,601 rows)

Contains lots of customer information, including financials such as purchase totals and credit limits. Much of the data is incomplete, though.

<details>
<summary>View random sample</summary>

| CustStore | CustomerID | CustType | Status | ExpiryDate | CurrencyCode | Name | Title | Phone | Extension | WorkPhone | WorkExtension | CellPhone | ShippingPhone | Fax | LongFax | Address | City | Province | Country | PostalCode | BirthDate | Email | ReceiveEmail | MailingList | PrintFlag | EntryDate | LastVisit | VisitCount | PurchaseTotal | Note | Notemark | Warning | Statement | ARCustomerNumber | Terms | DaysDue | CreditLimit | OutBalance | PriceLevel | DiscountRate | Markup | SalespersonCode | AskShipMethod | AskPONumber | Preference1 | Preference2 | Preference3 | Preference4 | Preference5 | Preference6 | Preference7 | Preference8 | Preference9 | Preference10 | TaxExempt1 | TaxExempt2 | TaxExempt3 | TaxExempt4 | TaxReference1 | TaxReference2 | TaxReference3 | TaxReference4 | DefaultShipName | DefaultShipAddress | DefaultShipMethodCode | DefaultShipPostalCode | CollectPersonalInfo | HQCustStore | HQCustomerID | AwardBalance | Picture | LastUpdate | DisallowTenderType | Extra | UserID | Password | PrtOutBalance | InterestOnOverdueInvoice | OID | AwardUseType | PrimaryARAcct | Contact | TaxAreaCode | DefaultShipInstruction | AllocateInventory |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 512484 | CP | A | null |  | Fortier, Bleau |  | 6044544726 |  |  |  |  |  |  | false | || | Vancouver | BC | Canada |  | null |  | false | false | false | 2014-08-23T22:05:34.000Z | null | 0 | 0 |  | false |  | T |  | COD | 0 | 0 | 0 | 1 | 0 | 0 |  | false | false |  |  |  |  |  |  |  |  |  |  | false | false | false | false |  |  |  |  |  | || |  |  | false | 0 | 0 | 0 | null | 2014-12-07T22:53:25.000Z | /1/3/4/5/6/7/8/9/10/11/12/15/17/18/ |  |  |  | true | true | 41396 | D | false |  |  |  | false |
| 0 | 506339 |  | A | null |  | terrett, anni |  | 6045614968 |  |  |  |  |  |  | false | || | Vancouver | BC | Canada |  | null |  | false | false | false | 2013-12-14T22:21:17.000Z | null | 0 | 0 |  | false |  | T |  | COD | 0 | 0 | 0 | 1 | 0 | 0 |  | false | false |  |  |  |  |  |  |  |  |  |  | false | false | false | false |  |  |  |  |  | || |  |  | false | 0 | 0 | 0 | null | 2013-12-14T22:21:32.000Z | /1/3/4/5/6/7/8/9/10/11/15/12/17/18/ |  |  |  | true | true | 34843 | D | false |  |  |  | false |
| 0 | 514650 |  | A | null |  | Shen, Jennifer |  | 6046271177 |  |  |  |  |  |  | false | || | Vancouver | BC | Canada |  | null |  | false | false | false | 2014-12-09T13:21:35.000Z | null | 0 | 0 |  | false |  | T |  | COD | 0 | 0 | 0 | 1 | 0 | 0 |  | false | false |  |  |  |  |  |  |  |  |  |  | false | false | false | false |  |  |  |  |  | || |  |  | false | 0 | 0 | 0 | null | 2014-12-09T13:21:49.000Z | /1/3/4/5/6/7/8/9/10/11/12/15/17/18/ |  |  |  | true | true | 43702 | D | false |  |  |  | false |
| 0 | 517495 | CP | A | null |  | foxon, jackie |  | 6048129811 |  |  |  |  |  |  | false | || | Vancouver | BC | Canada |  | null | jfoxon@deltacontrols.com | true | false | false | 2015-04-14T19:50:54.000Z | null | 0 | 0 |  | false |  | T |  | COD | 0 | 0 | 0 | 1 | 0 | 0 |  | false | false |  |  |  |  |  |  |  |  |  |  | false | false | false | false |  |  |  |  |  | || |  |  | false | 0 | 0 | 0 | null | 2015-04-14T19:51:23.000Z | /1/3/4/5/6/7/8/9/10/11/12/15/17/18/ |  |  |  | true | true | 46699 | D | false |  |  |  | false |
| 0 | 516566 |  | A | null |  | Klassen, Amanda |  | 6047818195 |  |  |  |  |  |  | false | || | Vancouver | BC | Canada |  | null |  | false | false | false | 2015-03-05T15:08:06.000Z | null | 0 | 0 |  | false |  | T |  | COD | 0 | 0 | 0 | 1 | 0 | 0 |  | false | false |  |  |  |  |  |  |  |  |  |  | false | false | false | false |  |  |  |  |  | || |  |  | false | 0 | 0 | 0 | null | 2015-03-05T15:08:27.000Z | /1/3/4/5/6/7/8/9/10/11/12/15/17/18/ |  |  |  | true | true | 45722 | D | false |  |  |  | false |
| 0 | 505239 |  | A | null |  | Thoburn, Jared |  | 7786895022 |  |  |  |  |  |  | false | || | Vancouver | BC | Canada |  | null | jared.thoburn@gmail.com | false | false | false | 2013-11-13T20:33:57.000Z | null | 0 | 0 |  | false |  | T |  | COD | 0 | 0 | 0 | 1 | 0 | 0 |  | false | false |  |  |  |  |  |  |  |  |  |  | false | false | false | false |  |  |  |  |  | || |  |  | false | 0 | 0 | 0 | null | 2013-11-13T20:34:42.000Z | /1/3/4/5/6/7/8/9/10/11/15/12/17/18/ |  |  |  | true | true | 33687 | D | false |  |  |  | false |
| 0 | 301305 | XP | A | null |  | Ramirez, Marcelo |  | 6047904266 |  |  |  |  | 6045598226 |  | false | 1622 Comercial Drive|| | Vancouver | BC | Canada |  | null |  | false | false | true | 2013-03-04T00:00:00.000Z | null | 0 | 0 |  | true | Marcelo Ramirez | Owner | La Mezcaleria Commercial  **CC receipts to accounting@lamezcaleria.ca    THE FOLLOWING MAY ALSO USE ACCOUNT:    Ignacio Arrieta   Tara Davies - General Manager  Lautaro Mallo Gonzalez  - Bar Manager        VISA 4520 7100 0216 8653  EXP 06/19  CVC 934 | T | 301305 | COD | 0 | 0 | 0 | 5 | 0 | 0 |  | true | false |  |  |  |  |  |  |  |  |  |  | false | false | false | false |  |  |  |  | Tacorporation | La Mezcaleria|1622 Commercial Drive|Vancouver, BC |  | V5L3Y4 | true | 0 | 0 | 0 | null | 2018-10-10T12:28:22.000Z | /1/2/3/4/5/6/7/8/9/10/11/12/13/14/15/17/18/23/ |  |  |  | false | true | 25304 | E | true |  |  |  | false |
| 0 | 408235 | CP | A | null |  | Graham, melissa |  | 2508886038 |  |  |  |  |  |  | false | || | Vancouver | BC | Canada |  | null |  | false | false | false | 2017-12-19T19:35:47.000Z | null | 0 | 0 |  | false |  | T |  | COD | 0 | 0 | 0 | 1 | 0 | 0 |  | false | false |  |  |  |  |  |  |  |  |  |  | false | false | false | false |  |  |  |  |  | || |  |  | false | 0 | 0 | 0 | null | 2017-12-19T19:35:56.000Z | /1/3/4/5/6/7/8/9/10/11/12/15/17/18/ |  |  |  | true | true | 72723 | D | false |  |  |  | false |
| 0 | 104201 |  | A | 1899-12-30T00:00:00.000Z |  | PASCUAL, J.P. |  | 6043552720 |  |  |  |  |  |  | false | || | Vancouver | BC | Canada |  | null | PASCUAL0184@GMAIL.COM | false | false | false | 2011-05-22T00:00:00.000Z | null | 0 | 0 | null | false |  | T |  | COD | 0 | 0 | 0 | 1 | 0 | 0 |  | false | false |  |  |  |  |  |  |  |  |  |  | false | false | false | false |  |  |  |  |  | || |  |  | false | 0 | 0 | 0 | null | null | /1/3/4/5/6/7/11/15/13/8/9/10/12/17/18/ | null |  |  | false | true | 5178 | D | false |  |  |  | false |
| 0 | 524811 | CP | A | null |  | Lucci, Vera |  | 9057451981 |  |  |  |  |  |  | false | || | Vancouver | BC | Canada |  | null | luccivm@gmail.com | false | false | false | 2016-01-19T22:02:16.000Z | null | 0 | 0 |  | false |  | T |  | COD | 0 | 0 | 0 | 1 | 0 | 0 |  | false | false |  |  |  |  |  |  |  |  |  |  | false | false | false | false |  |  |  |  |  | || |  |  | false | 0 | 0 | 0 | null | 2016-01-19T22:03:01.000Z | /1/3/4/5/6/7/8/9/10/11/12/15/17/18/ |  |  |  | true | true | 54382 | D | false |  |  |  | false |
| 0 | 270300 |  | A | null |  | Don McTyre |  |  |  |  |  |  |  |  | false | 9220 Kimmer Drive|Suite 230| | Lone Tree | CO | US | 80124 | null |  | false | false | false | 2016-02-22T19:09:09.000Z | null | 0 | 0 |  | false |  | N |  | COD | 0 | 0 | 0 | 1 | 0 | 0 |  | false | false |  |  |  |  |  |  |  |  |  |  | false | false | false | false |  |  |  |  |  | || |  |  | false | 0 | 0 | 0 | null | 2016-04-05T16:05:42.000Z | /1/3/4/5/6/7/8/9/10/11/12/15/17/18/ |  |  |  | false | true | 55351 | D | false |  |  |  | false |
| 0 | 504155 |  | A | null |  | Dufton, John |  | 7783492769 |  |  |  |  |  |  | false | || | Vancouver | BC | Canada |  | null | jdufton@hotmail.com | false | false | false | 2013-10-12T12:34:46.000Z | null | 0 | 0 |  | false |  | T |  | COD | 0 | 0 | 0 | 1 | 0 | 0 |  | false | false |  |  |  |  |  |  |  |  |  |  | false | false | false | false |  |  |  |  |  | || |  |  | false | 0 | 0 | 0 | null | 2013-10-12T12:35:12.000Z | /1/3/4/5/6/7/8/9/10/11/15/12/17/18/ |  |  |  | true | true | 32568 | D | false |  |  |  | false |

</details>

### RSCustomerDel (526 rows)

Seems to contain data on deleted customers, with dates as well as customer ID and names.

<details>
<summary>View random sample</summary>

| RecordID | CustStore | CustomerID | CustomerName | CustType | DelDate | DelEmployeeID |
| --- | --- | --- | --- | --- | --- | --- |
| 514 | 0 | 529515 | Wallis, Tara | CP | 2018-08-16T18:46:38.000Z | 1056 |
| 39 | 0 | 100436 | SCAROLA, MARIANNA |  | 2011-02-20T17:43:00.000Z | DARRYL |
| 24 | 0 | 100381 | Howard, Chris |  | 2011-01-06T13:16:44.000Z | SUPERV |
| 124 | 0 | 111909 | Merged to cust#000-113431 from Smith, Be |  | 2012-07-12T19:46:48.000Z | SUPERV |
| 12 | 0 | 100894 | FORZANI SANDI |  | 2011-01-05T18:36:43.000Z | SUPERV |
| 292 | 0 | 513075 | herzog, noah |  | 2014-11-22T19:15:50.000Z | 11 |
| 377 | 0 | 516109 | Lee, David | CP | 2016-08-17T14:05:35.000Z | 999 |
| 436 | 0 | 521767 | Mihailides, Kirsten | CP | 2017-06-20T12:33:07.000Z | 16 |
| 426 | 0 | 500717 | Blight, Bryan |  | 2017-04-14T13:27:59.000Z | 1056 |
| 366 | 0 | 101881 | Belway, Kendra | XP | 2016-04-06T08:41:38.000Z | 1056 |
| 40 | 0 | 100614 | May, Mark |  | 2011-02-22T11:16:40.000Z | DARRYL |
| 64 | 0 | 103338 | Mudry, Steven |  | 2011-06-08T22:04:59.000Z | SUPERV |

</details>

# RS0000DATA

Showing tables with at least 100 rows.

### RSAPVendor (521 rows)

Vendor information, including contacts and financials.

<details>
<summary>View random sample</summary>

| VendorNum | VendorName | Address | City | Province | Country | Postal | Phone | Extension | Fax | Email | LongDistanceFax | Contact | Website | Status | NetDay | DiscountDay | DiscountRate | DiscountB4Tax | PrintContOnCheck | AccountNum | GSTNum | Taxable | YTDPurchase | LastYearPurchase | LastInvoiceDate | LastInvoiceAmount | LastPaymentDate | LastPaymentAmount | OutstandingAmount | APVendorTypeId | CreditLimit | Remark | CurrencyId | OpenAccountDate | LastUpdateId | LastModifyDate | Type1 | Type2 | Type3 | DayOfMonth | NumOfMonth | CostIncludeTax1 | CostIncludeDeposit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 112 | DIRTY LAUNDRY | | |  |  |  |  |  |  |  |  | false |  |  | A | 0 | 0 | 0 | false | false |  |  | 1 | 0 | 0 | null | 0 | null | 0 | 0 | 0 | 0 |   |  | null |  | null |  |  |  | 1 | 0 | false | E |
| 205 | PARALLEL 49 VINEYARDS | 10B-1500 ALBERNI ST| | VANCOUVER | BC |  | B6G3C9 |  |  |  |  | false |  |  | A | 0 | 0 | 0 | false | false |  |  | 1 | 0 | 0 | null | 0 | null | 0 | 0 | 0 | 0 |   |  | null |  | null |  |  |  | 1 | 0 | false | E |
| 393 | GOOD COMPANY | || |  |  |  |  |  |  |  |  | false |  |  | A | 0 | 0 | 0 | false | false |  |  | 0 | 0 | 0 | null | 0 | null | 0 | 0 | 0 | 0 |  |  | 2016-07-04T13:32:47.000Z | 77 | 2016-07-04T13:32:47.000Z |  |  |  | 0 | 0 | false | E |
| 408 | PARKSIDE BREWING | || |  |  |  |  |  |  |  |  | false |  |  | A | 0 | 0 | 0 | false | false |  |  | 0 | 0 | 0 | null | 0 | null | 0 | 0 | 0 | 0 |  |  | 2016-10-14T08:12:23.000Z | 44 | 2016-10-14T08:12:23.000Z |  |  |  | 0 | 0 | false | E |
| 272 | FOUR WINDS BREWING | 4-7355 72ND STREET|| | DELTA | BC | CANADA | V4G1L5 |  |  |  | adam@fourwindsbrewing.ca | false |  |  | A | 0 | 0 | 0 | false | false |  |  | 0 | 0 | 0 | null | 0 | null | 0 | 0 | 0 | 0 |  |  | 2013-10-03T18:25:51.000Z | DL | 2016-12-04T11:09:55.000Z |  |  |  | 0 | 0 | false | E |
| 277 | MORAINE ESTATE WINERY | 1865 NARAMATA RD|| | PENTICTION | BC | CANADA | V2A8T9 | 2504601836 |  | 7784765553 | INFO@MORAINEWINERY.COM | false |  |  | A | 0 | 0 | 0 | false | false |  |  | 0 | 0 | 0 | null | 0 | null | 0 | 0 | 0 | 0 |  |  | 2013-11-21T14:55:55.000Z | 77 | 2015-04-08T11:05:10.000Z |  |  |  | 0 | 0 | false | E |
| 228 | ACE BEVERAGE | 101-5910 No6 RD| | RICHMOND | BC |  | V6V1Z1 | (604) 304-0401 |  | 6046488232 | SALES@ACEBEVERAGE.COM | false |  |  | A | 0 | 0 | 0 | false | false |  |  | 1 | 0 | 0 | null | 0 | null | 0 | 0 | 0 | 0 |   |  | null |  | null |  |  |  | 1 | 0 | false | E |
| 344 | CAMPBELL'S GOLD HONEY FARM & MEADERY | 2595 LEFEUVRE RD|| | ABBOTSFORD | BC |  | V4X1L5 |  |  |  |  | false |  |  | A | 0 | 0 | 0 | false | false |  |  | 0 | 0 | 0 | null | 0 | null | 0 | 0 | 0 | 0 |  |  | 2015-04-30T18:48:59.000Z | 1056 | 2015-04-30T18:48:59.000Z |  |  |  | 0 | 0 | false | E |
| 489 | RUST WINE CO | || |  |  |  |  |  |  |  |  | false |  |  | A | 0 | 0 | 0 | false | false |  |  | 0 | 0 | 0 | null | 0 | null | 0 | 0 | 0 | 0 |  |  | 2018-07-04T08:22:53.000Z | 1056 | 2018-07-04T08:22:53.000Z |  |  |  | 0 | 0 | false | E |
| 372 | FUGGLES & WARLOCK | 103 - 11220 HORSESHOE WAY|| | RICHMOND | BC | CANADA | V7A4V5 |  |  |  | massey@fuggleswarlok.com | false |  |  | A | 0 | 0 | 0 | false | false |  |  | 0 | 0 | 0 | null | 0 | null | 0 | 0 | 0 | 0 |  |  | 2016-02-03T16:08:26.000Z | DL | 2016-12-04T11:22:27.000Z |  |  |  | 0 | 0 | false | E |
| 782 | FIREHALL BREWING | 6077 MAIN STREET|| | OLIVER | BC | CANADA |  |  |  |  |  | false |  |  | A | 0 | 0 | 0 | false | false |  |  | 0 | 0 | 0 | null | 0 | null | 0 | 0 | 0 | 0 |  |  | 2017-06-02T11:48:42.000Z | 16 | 2017-06-02T11:48:42.000Z |  |  |  | 0 | 0 | false | E |
| 248 | NATURELAND PRODUCTS | 3876 NORLAND AVE|| | BURNABY | BC |  | V5G4T9 |  |  |  |  | false |  |  | I | 0 | 0 | 0 | false | false |  |  | 0 | 0 | 0 | null | 0 | null | 0 | 0 | 0 | 0 |  |  | null | 1056 | 2017-07-13T08:46:34.000Z |  |  |  | 1 | 0 | false | E |

</details>

### RSBarcode (27,911 rows)

Barcode, item code, size code, color code, width code.

<details>
<summary>View random sample</summary>

| Barcode | ItemCode | SizeCode | ColorCode | WidthCode |
| --- | --- | --- | --- | --- |
| 26990207429 | 594788 |  |  |  |
| 3180290048122 | GIFFARD TRIPLE SEC |  |  |  |
| 855287001789 | 628206 |  |  |  |
| 8010471003051 | 214236 |  |  |  |
| 0000001417 | 18870 |  |  |  |
| 26990053521 | 330704 |  |  |  |
| 53901006011 | 628222 |  |  |  |
| 62067121340 | 133892 |  |  |  |
| 00626990178521 | 458471 |  |  |  |
| 5412858000081 | 728071 |  |  |  |
| 876529000247 | 183001 |  |  |  |
| 76545400123 | 814137 |  |  |  |

</details>

### RSDeposit (211 rows)

Some sort of customer transaction data.

<details>
<summary>View random sample</summary>

| RecordID | CustStore | CustomerID | RedeemedID | TxnID | Reference | Amount | ForeignAmount | Redeemed | ForeignRedeemed | Balance | ForeignBalance | TxnType | DepositType |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 14 | 0 | 518120 | 0 | 1072339 | 20TH ANNIVERSARY GIFT FROM CLARK WILSON | 2000 | 0 | 2000 | 0 | 0 | 0 | D | D |
| 160 | 0 | 409962 | 141 | 1779482 |  | 52300 | 0 | 0 | 0 | 0 | 0 | S | P |
| 210 | 0 | 100639 | 193 | 1970274 |  | 490.04 | 0 | 0 | 0 | 0 | 0 | S | P |
| 177 | 0 | 409964 | 139 | 1781668 |  | 786 | 0 | 0 | 0 | 0 | 0 | S | P |
| 112 | 0 | 113379 | 102 | 1545055 |  | 7.9 | 0 | 0 | 0 | 0 | 0 | S | P |
| 119 | 0 | 120847 | 0 | 1647043 | DARRYL BLANTONS ERROR | 85.5 | 0 | 85.5 | 0 | 0 | 0 | D | D |
| 90 | 0 | 529585 | 62 | 1348159 |  | 52.3 | 0 | 0 | 0 | 0 | 0 | S | P |
| 38 | 0 | 527272 | 30 | 1189548 |  | 233.1 | 0 | 0 | 0 | 0 | 0 | S | P |
| 155 | 0 | 409962 | 0 | 1777480 | Union Pay | 4000 | 0 | 4000 | 0 | 0 | 0 | D | D |
| 30 | 0 | 527272 | 0 | 1176690 | antinori dinner order #449421 | 233.1 | 0 | 233.1 | 0 | 0 | 0 | D | D |
| 205 | 0 | 413545 | 0 | 1956986 | canceled smws tickets | 100 | 0 | 0 | 0 | 100 | 0 | D | D |
| 49 | 0 | 528140 | 46 | 1217118 |  | 745 | 0 | 0 | 0 | 0 | 0 | S | P |

</details>

### RSEventDays (397 rows)

Event day related info, including start/end times.

<details>
<summary>View random sample</summary>

| EventNumber | Line | DaysType | DaysDesc1 | DaysDesc2 | StartTime | EndTime | StartDate | EndDate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 57 | 7 | -7 |  |  | 2000-01-01T00:00:00.000Z | 2000-01-01T23:59:59.000Z | 2018-08-30T00:00:00.000Z | 2018-08-30T00:00:00.000Z |
| 49 | 5 | -5 |  |  | 2000-01-01T00:00:00.000Z | 2000-01-01T23:59:59.000Z | 2018-04-26T00:00:00.000Z | 2018-04-26T00:00:00.000Z |
| 60 | 4 | -4 |  |  | 2000-01-01T00:00:00.000Z | 2000-01-01T23:59:59.000Z | 2018-09-27T00:00:00.000Z | 2018-09-27T00:00:00.000Z |
| 59 | 4 | -4 |  |  | 2000-01-01T00:00:00.000Z | 2000-01-01T23:59:59.000Z | 2018-09-11T00:00:00.000Z | 2018-09-11T00:00:00.000Z |
| 62 | 5 | -5 |  |  | 2000-01-01T00:00:00.000Z | 2000-01-01T23:59:59.000Z | 2018-10-01T00:00:00.000Z | 2018-10-01T00:00:00.000Z |
| 60 | 3 | -3 |  |  | 2000-01-01T00:00:00.000Z | 2000-01-01T23:59:59.000Z | 2018-09-27T00:00:00.000Z | 2018-09-27T00:00:00.000Z |
| 47 | 3 | -3 |  |  | 2000-01-01T00:00:00.000Z | 2000-01-01T23:59:59.000Z | 2018-04-17T00:00:00.000Z | 2018-04-17T00:00:00.000Z |
| 45 | 5 | -5 |  |  | 2000-01-01T00:00:00.000Z | 2000-01-01T23:59:59.000Z | 2018-04-12T00:00:00.000Z | 2018-04-12T00:00:00.000Z |
| 55 | 6 | -6 |  |  | 2000-01-01T00:00:00.000Z | 2000-01-01T23:59:59.000Z | 2018-07-12T00:00:00.000Z | 2018-07-12T00:00:00.000Z |
| 39 | 7 | -7 |  |  | 2000-01-01T00:00:00.000Z | 2000-01-01T23:59:59.000Z | 2017-11-22T00:00:00.000Z | 2017-11-22T00:00:00.000Z |
| 31 | 6 | -6 |  |  | 2000-01-01T00:00:00.000Z | 2000-01-01T23:59:59.000Z | 2017-08-04T00:00:00.000Z | 2017-08-07T00:00:00.000Z |
| 15 | 3 | -3 |  |  | 2000-01-01T00:00:00.000Z | 2000-01-01T23:59:59.000Z | 2015-09-02T00:00:00.000Z | 2015-09-26T00:00:00.000Z |

</details>

### RSInvAdjustCostDetail (7,346 rows)

Cost adjustments, contains item code, qty, cost, modified 'cost', item description, inv record ID.

<details>
<summary>View random sample</summary>

| AuditID | Line | ItemCode | SizeCode | ColorCode | WidthCode | SerialNumber | Qty | Cost | ModifiedCost | ItemDescription | InvRecordID |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 370 | 10 | 815399 |  |  |  |  | -1 | -18.99 | -19.01 | NEW AMSTERDAM GIN | 192036 |
| 485 | 12 | 772368 |  |  |  |  | -1 | -3.64 | -3.65 | CAZADORES REPOSADO 50ml | 197707 |
| 531 | 15 | 172197 |  |  |  |  | -1 | -3.22 | -3.11 | FRESITA SINGLE BOTTLE | 204215 |
| 548 | 20 | 794206 |  |  |  |  | -1 | -6.29 | -6.27 | 8 WIRED SAISON SAUVIN | 188750 |
| 410 | 30 | 827139 |  |  |  |  | -1 | -2.23 | -2.22 | MONGOZO PILSNER GLUTEN FREE | 196159 |
| 153 | 15 | #1313 |  |  |  |  | -1 | -9.45 | -9.44 | REDNEK WINE GLASS | 164052 |
| 678 | 22 | 426PK |  |  |  |  | -1 | -6.71 | -6.7 | Red Bull 250ml 4pk | 211647 |
| 331 | 4 | 537258 |  |  |  |  | -4 | -6.3 | -6.35 | TIGER TALL CAN | 188936 |
| 217 | 1 | 449132 |  |  |  |  | -1 | -19.72 | -18.26 | HAYWIRE PINOT NOIR | 181652 |
| 668 | 17 | C465917 |  |  |  |  | -1 | -7.41 | -8.54 | MACDONALD SPECIAL SMOOTH KING BLUE | 221146 |
| 1137 | 9 | R10 |  |  |  |  | -20 | 2 | 0 | RETURNS 10 cents | 164255 |
| 625 | 13 | 157461 |  |  |  |  | -1 | -4.08 | -4.07 | MOON UNDER WATER TRANQUILITY IPA | 209752 |

</details>

### RSInvAdjustCostHead (1,293 rows)

Seems to contain adjustments to invoices or inventory, with 'data' about invoice date and source txn ID.

<details>
<summary>View random sample</summary>

| AuditID | StoreID | EntryDate | InvoiceDate | EmployeeID | Status | Remark | Source | SourceTxnId |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1044 | 0 | 2015-10-22T07:46:31.000Z | 2015-10-22T07:46:31.000Z |  | C |  | 0 | 14164 |
| 1197 | 0 | 2017-07-05T12:10:40.000Z | 2017-07-05T12:10:40.000Z |  | C |  | 0 | 22824 |
| 804 | 0 | 2014-08-28T10:52:24.000Z | 2014-08-28T10:52:24.000Z |  | C |  | 0 | 9902 |
| 83 | 0 | 2013-07-11T13:15:57.000Z | 2013-07-11T13:15:57.000Z |  | C |  | 0 | 6409 |
| 621 | 0 | 2014-05-08T10:27:33.000Z | 2014-05-08T10:27:33.000Z |  | C |  | 0 | 8907 |
| 720 | 0 | 2014-07-10T09:16:53.000Z | 2014-07-10T09:16:53.000Z |  | C |  | 0 | 9463 |
| 488 | 0 | 2014-01-31T13:35:24.000Z | 2014-01-31T13:35:24.000Z |  | C |  | 1 | 8317 |
| 46 | 0 | 2013-06-27T17:35:57.000Z | 2013-06-27T17:35:57.000Z |  | C |  | 0 | 6282 |
| 936 | 0 | 2015-03-18T11:47:03.000Z | 2015-03-18T11:47:03.000Z |  | C |  | 0 | 11731 |
| 454 | 0 | 2014-01-09T12:53:43.000Z | 2014-01-09T12:53:43.000Z |  | C |  | 1 | 8268 |
| 1220 | 0 | 2017-10-27T08:03:14.000Z | 2017-10-27T08:03:14.000Z |  | C |  | 6 | 5694 |
| 930 | 0 | 2015-02-12T15:35:17.000Z | 2015-02-12T15:35:17.000Z |  | C |  | 0 | 11441 |

</details>

### RSInvAdjustDetail (34,409 rows)

Adjustment details, containing audit ID, line, item code, qty, 'cost', item description and other columns.

<details>
<summary>View random sample</summary>

| AuditID | Line | ItemCode | SizeCode | ColorCode | WidthCode | SerialNumber | Qty | Cost | ItemDeposit | ItemDescription | LotNum | ExpiryDate | InvRecordID |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8462 | 44 | 126136 |  |  |  |  | 3 | 22.57 | 0.3 | UPRIGHT FIVE |  | null | 0 |
| 10087 | 10 | 163027 |  |  |  |  | -2 | -14.98 | 0 | FEE BROTHERS MOLASSES BITTERS |  | null | 289990 |
| 8986 | 13 | 271965 |  |  |  |  | 19 | 106.88 | 1.9 | SMIRNOFF VODKA 200ml |  | null | 0 |
| 11340 | 21 | 535294 |  |  |  |  | -1 | -1.7 | -0.1 | GROLSCH LAGER TALL CAN |  | null | 421840 |
| 2256 | 117 | 156349 |  |  |  |  | -5 | -44.06 | 0 | RUSSELL CREAM ALE 6C |  | null | -1 |
| 11718 | 7 | 884338 |  |  |  |  | -1 | -1.57 | -0.1 | PFUNGSTADTER WEIZEN |  | null | 460020 |
| 12154 | 1 | 635698 |  |  |  |  | -5 | 3 | -3 | POSTMARK SEVENS IPA 6C |  | null | 466449 |
| 3047 | 11 | 671958 |  |  |  |  | -1 | -11.99 | 0 | LA GRAVETTE MINERVOIS |  | null | -1 |
| 8738 | 3 | 506295 |  |  |  |  | -1 | -19.65 | -0.1 | BARTIER BROS. CHARDONNAY OAKED |  | null | 219150 |
| 11483 | 3 | 777961 |  |  |  |  | -1 | -1.63 | -0.1 | LONETREE APPLE SB |  | null | 429893 |
| 7922 | 41 | 119735 |  |  |  |  | -1 | -10.07 | -0.6 | DOS EQUIS AMBAR |  | null | 170567 |
| 5115 | 3 | D10 |  |  |  |  | -2 | -0.2 | 0 | Deposit 10 cents |  | null | -1 |

</details>

### RSInvAdjustHead (5,483 rows)

More adjustment data.

<details>
<summary>View random sample</summary>

| AuditID | StoreID | VendorNum | EntryDate | InvoiceDate | EmployeeID | Status | Remark | Reference |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 3407 | 0 |  | 2012-04-12T00:00:00.000Z | 2012-04-12T00:00:00.000Z |  | C | SFU WOODWARDS EVENT APR 5 |  |
| 8480 | 0 | LDB | 2014-04-02T11:00:39.000Z | 2014-04-02T10:58:59.000Z | 1056 | C | SMWS APRIL RELEASE |  |
| 7065 | 0 |  | 2013-03-31T00:00:00.000Z | 2013-03-31T00:00:00.000Z |  | C | breakage |  |
| 11129 | 0 |  | 2017-04-10T17:07:47.000Z | 2017-04-10T17:07:04.000Z | JEFF | C | EVENT | EVENT TICKETS |
| 8130 | 0 |  | 2013-10-23T15:40:58.000Z | 2013-10-23T15:39:26.000Z | 44 | C | inventory count - white south africa |  |
| 8790 | 0 |  | 2014-07-20T16:03:58.000Z | 2014-07-20T16:03:36.000Z | DL | C | wrong product sold |  |
| 8096 | 0 |  | 2013-10-16T11:10:08.000Z | 2013-10-16T11:08:48.000Z | 13 | C | inventory count - soaring eagle |  |
| 12093 | 0 |  | 2018-07-31T11:53:42.000Z | 2018-07-31T11:52:33.000Z | 1056 | C | MISCELLANEOUS | OWE REP PRODUCT |
| 8695 | 0 |  | 2014-06-11T13:58:42.000Z | 2014-06-11T13:57:04.000Z | SUPERV | C | peller | heather |
| 9975 | 0 |  | 2016-03-09T17:57:06.000Z | 2016-03-09T17:56:33.000Z | DL | C | NECKTIES |  |
| 9882 | 0 |  | 2016-02-15T15:58:47.000Z | 2016-02-15T15:54:58.000Z | 1056 | C | PROMO | FEB 14 CHARITY |
| 1780 | 0 |  | 2011-09-14T00:00:00.000Z | 2011-09-14T00:00:00.000Z |  | C | NEW SKU |  |

</details>

### RSInventory (12,763 rows)

Inventory data, containing record ID, item code, serial number, qty, 'cost', source and source txn ID, as well as other columns. No descriptions or other data like 'that'.

<details>
<summary>View random sample</summary>

| RecordID | ItemCode | SizeCode | ColorCode | WidthCode | SerialNumber | Qty | Cost | EntryDate | ExpiryDate | LocationCode | LotNum | Source | SourceTxnId |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 343497 | GC |  |  |  | 850356338012 | -1 | 0 | 2016-04-13T12:56:37.000Z | null |  |  | S | 1171368 |
| 509319 | #3289 |  |  |  |  | 6 | 11.43 | 2018-09-17T11:25:25.000Z | null |  |  | 0 | 30149 |
| 485129 | BITTERMENS_XO |  |  |  |  | -1 | -16.95 | 2018-05-21T17:33:58.000Z | null |  |  | S | 1825801 |
| 480197 | 283820 |  |  |  |  | 8 | 159.88 | 2018-04-27T16:23:36.000Z | null |  |  | 0 | 27618 |
| 410569 | BS001 |  |  |  |  | -1 | -0.5 | 2017-04-19T18:28:27.000Z | null |  |  | S | 1479222 |
| 396959 | GC |  |  |  | 861162777574 | -1 | 0 | 2017-01-23T15:14:34.000Z | null |  |  | S | 1416116 |
| 161955 | GC |  |  |  | 820599727893 | 1 | 0 | 2013-06-11T10:05:04.000Z | null |  |  | 6 | 5667 |
| 175114 | GC |  |  |  | 820586613412 | -1 | 0 | 2013-08-10T19:14:44.000Z | null |  |  | S | 439757 |
| 463832 | 131535 |  |  |  |  | 1 | 9018.96 | 2018-01-26T16:05:10.000Z | null |  |  | 0 | 26096 |
| 506431 | 170767 |  |  |  |  | 4 | 43.08 | 2018-09-03T10:44:52.000Z | null |  |  | 0 | 29926 |
| 511644 | 751487 |  |  |  |  | 4 | 33.8 | 2018-10-01T12:32:01.000Z | null |  |  | 0 | 30386 |
| 390020 | #2897 |  |  |  |  | -1 | -2.81 | 2016-12-15T20:35:34.000Z | null |  |  | S | 1387274 |

</details>

### RSInventoryTrack (3,568,517 rows)

Seems to track inventory, and contains record ID, item code, 'cost', qty, inv record ID, and other columns.

<details>
<summary>View random sample</summary>

| RecordID | StoreID | ItemCode | SizeCode | ColorCode | WidthCode | InvoiceNO | TicketNO | SerialNumber | VendorNum | VendorReference | ReceiveDate | PostDate | ExpiryDate | Cost | Qty | Source | SourceTxnId | SourceLine | SourceSubLine | LotNum | InvRecordID |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1752753 | 0 | 527374 |  |  |  |  |  |  |  |  | null | 2016-04-05T14:18:46.000Z | null | -1.89 | -1 | U | 1164480 | 1 | 0 |  | 341328 |
| 2231129 | 0 | 58206 |  |  |  |  |  |  |  |  | null | 2016-12-06T12:20:52.000Z | null | -9.09 | -3 | U | 1379432 | 17 | 0 |  | 380655 |
| 3309690 | 0 | 181410 |  |  |  |  |  |  |  |  | null | 2018-06-23T11:40:23.000Z | null | -287.28 | -36 | U | 1858137 | 2 | 0 |  | 488041 |
| 2171755 | 0 | 570 |  |  |  | 100496576 |  |  | LDB |  | 2016-11-03T16:43:01.000Z | 2016-11-03T18:33:28.000Z | null | 220.44 | 12 | 0 | 19224 | 4 | 0 |  | 381773 |
| 687583 | 0 | 824094 |  |  |  |  |  |  |  |  | null | 2014-07-18T19:57:59.000Z | null | -4.02 | -1 | U | 685980 | 1 | 0 |  | 229550 |
| 393896 | 0 | 290684 |  |  |  |  |  |  |  |  | null | 2014-01-19T15:37:13.000Z | null | -14.6 | -1 | U | 550363 | 6 | 0 |  | 199182 |
| 806148 | 0 | 177832 |  |  |  |  |  |  |  |  | null | 2014-09-27T10:31:59.000Z | null | -4.02 | -1 | U | 741685 | 8 | 0 |  | 241629 |
| 3274509 | 0 | 447961 |  |  |  |  |  |  |  |  | null | 2018-06-07T20:26:30.000Z | null | -6.41 | -1 | U | 1842266 | 3 | 0 |  | 480567 |
| 225804 | 0 | 503961 |  |  |  |  |  |  |  |  | null | 2013-10-06T19:40:30.000Z | null | -2.55 | -1 | U | 480539 | 1 | 0 |  | 181367 |
| 1116411 | 0 | 520155 |  |  |  | 100378593 |  |  | LDB |  | 2015-04-13T08:12:02.000Z | 2015-04-13T10:19:49.000Z | null | 11.94 | 1 | 0 | 11941 | 112 | 0 |  | 273440 |
| 2058586 | 0 | 535294 |  |  |  |  |  |  |  |  | null | 2016-09-04T17:41:18.000Z | null | -1.63 | -1 | U | 1306557 | 1 | 0 |  | 371046 |
| 2814535 | 0 | 48413 |  |  |  |  |  |  |  |  | null | 2017-10-07T18:47:52.000Z | null | -6.59 | -1 | U | 1643249 | 1 | 0 |  | 437632 |

</details>

### RSInvPCCountDetail (47,837 rows)

Not sure what this table contains, but columns are: PCID, post 'index', item code, description, cost and qty, as well as others.

<details>
<summary>View random sample</summary>

| PCID | PostIndex | ItemCode | SizeCode | ColorCode | WidthCode | SerialNumber | Description | GLDept | GLAccount | OnHandQty | OnHandCost | CountQty | AdjCost | AdjItemDeposit | PostStatus | PostDate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 5701 | 1 | 569525 |  |  |  |  | CRUET VIN DE SAVOIR JACQUERE |  |  | 12 | 241.97 | 12 | 0 | 0 | C | 2018-07-25T08:43:44.000Z |
| 5715 | 1 | 8102 |  |  |  |  | LA STELLA FORTISSIMO | 000 | INV | 8 | 199.92 | 8 | 0 | 0 | C | 2018-10-23T14:52:25.000Z |
| 5682 | 1 | 500512 |  |  |  |  | CAPTAIN MORGAN SPICED 750ml | 000 | INV | 7 | 137.31 | 6 | -19.62 | -0.1 | C | 2017-04-25T14:21:40.000Z |
| 5692 | 1 | 849547 |  |  |  |  | KUP THIA SHIRAZ | 000 | INV | 51 | 612.51 | 51 | 0 | 0 | C | 2017-10-25T13:23:34.000Z |
| 5666 | 1 | 853903 |  |  |  |  | ROCKY MOUNTAIN |  |  | 0 | 0 | 20 | 116.8 | 0 | C | 2013-06-11T10:04:57.000Z |
| 5680 | 1 | 482448 |  |  |  |  | KOKANEE 12C |  |  | 9 | 139.2 | 8 | -15.47 | -1.2 | C | 2017-04-12T08:03:11.000Z |
| 5680 | 3 | 34538 |  |  |  |  | GROUND BREAKER DARK ALE |  |  | 0 | 0 | 0 | 0 | 0 | N | null |
| 5695 | 1 | 124057 |  |  |  |  | DUCHESSE DE BOURGOGNE | 000 | INV | 19 | 66.12 | 16 | -10.44 | -0.3 | C | 2017-10-31T08:22:27.000Z |
| 5707 | 1 | 140828 |  |  |  |  | ARETTE SUAVE REPOSADO | 000 | INV | 6 | 499.02 | 6 | 0 | 0 | C | 2018-09-26T11:52:07.000Z |
| 5667 | 1 | 430306 |  |  |  |  | GEHRINGER  PR PINOT NOIR | 000 | INV | 0 | 0 | 9 | 107.95 | 0.9 | C | 2013-06-11T10:05:04.000Z |
| 5666 | 1 | 282384 |  |  |  |  | MEURSAULT LES CLOUS BOUCHARD PERE & FILS |  |  | 0 | 0 | -7 | -262.47 | 0 | C | 2013-06-11T10:04:57.000Z |
| 5680 | 1 | 19458 |  |  |  |  | RUSSELL BARREL AGED ROOT BEER MILK STOUT |  |  | 37 | 280.83 | 37 | 0 | 0 | C | 2017-04-12T08:03:11.000Z |

</details>

### RSInvPCImageDetail (87,391 rows)

Not sure about this table, columns are PCID, item code, 'description', image qty, image cost, count qty, count cost, and others.

<details>
<summary>View random sample</summary>

| PCID | ItemCode | SizeCode | ColorCode | WidthCode | SerialNumber | Description | FirstDate | LastDate | ImageQty | ImageCost | CountQty | CountCost | PostTimes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 5701 | 734541 |  |  |  |  | BLASTED CHURCH CABERNET MERLOT | 2018-05-02T08:38:49.000Z | 2018-05-02T08:38:49.000Z | 10 | 239.9 | 0 | 0 | 0 |
| 5696 | GC |  |  |  | 820599212144 | NEW GIFT CARD | 2013-06-11T10:05:04.000Z | 2017-10-30T15:59:28.000Z | 1 | 0 | 0 | 0 | 0 |
| 5698 | 696948 |  |  |  |  | HEARTHSTONE PILS 4C | 2018-01-31T07:12:49.000Z | 2018-01-31T07:12:49.000Z | 0 | 0 | 0 | 0 | 1 |
| 5696 | GC |  |  |  | 801115291651 | NEW GIFT CARD | 2013-06-11T10:05:04.000Z | 2017-10-30T15:59:28.000Z | 1 | 0 | 0 | 0 | 0 |
| 5709 | 3061 |  |  |  |  | MACALLAN 1824 GOLD | 2018-08-02T08:01:26.000Z | 2018-08-02T08:01:26.000Z | 39 | 2000.31 | 0 | 0 | 0 |
| 5668 | 326223 |  |  |  |  | WRAY & NEPHEW OVERPROOF | 2015-10-08T21:36:25.000Z | 2015-10-08T21:36:25.000Z | 3 | 79.86 | 0 | 0 | 0 |
| 5685 | 476028 |  |  |  |  | MAS DE DAUMAS GASSAC - LANGUEDOC | 2017-05-04T13:38:09.000Z | 2017-05-04T13:38:09.000Z | 0 | 0 | 0 | 0 | 1 |
| 5701 | 622621 |  |  |  |  | VIVOLO DI SASSO PINOT BIANCO | 2018-07-25T08:43:44.000Z | 2018-07-25T08:43:44.000Z | 0 | 0 | 0 | 0 | 1 |
| 5696 | BBQRUB |  |  |  |  | HOUSE OF Q BBQ RUB | 2017-10-31T18:40:25.000Z | 2017-10-31T18:40:25.000Z | 0 | 0 | 0 | 0 | 1 |
| 5692 | 852129 |  |  |  |  | BLUE MOUNTAIN RESERVE BRUT | 2017-10-25T13:23:34.000Z | 2017-10-25T13:23:34.000Z | 0 | 0 | 0 | 0 | 1 |
| 5694 | 847038 |  |  |  |  | DARROZE 1986 | 2016-06-07T11:24:24.000Z | 2016-06-07T11:24:24.000Z | 2 | 299.98 | 2 | 299.98 | 1 |
| 5692 | 685461 |  |  |  |  | ROCKFORD SEMILLON | 2017-10-25T13:23:34.000Z | 2017-10-25T13:23:34.000Z | 0 | 0 | 0 | 0 | 1 |

</details>

### RSInvRecDetail (303,383 rows)

audit ID, line, item code, item description, unit code, qty, cost, 'local' cost, landed cost, price, markup, GP, inv record ID, and others.

<details>
<summary>View random sample</summary>

| AuditID | Line | ItemCode | ItemDescription | UnitCode | Qty | Cost | LocalCost | ItemDepositCost | LocalItemDepositCost | LandedCost | GLDept | Part | GLAccount | Conversion | LocationCode | Seq | LotNum | ExpiryDate | Price | Markup | GP | InvRecordID | PODetailLine | IsFromPO | ReceivingTaxID | UnitCost |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 20117 | 15 | 4986 | JEFFERSON'S RESERVE BOURBON |  | 6 | 291.12 | 291.12 | 0.6 | 0.6 | 291.12 | 000 |  | INV | 1 |  | 0 |  | null | 74.4 | 33.34000015258789 | 25 | 0 | 0 | false | 1 | 48.52 |
| 24578 | 364 | 991794 | GOOD COMPANY 6C | 6PK4 | 12 | 87 | 87 | 7.2 | 7.2 | 87 | 000 |  | INV | 1 |  | 0 |  | null | 11.35 | 36.130001068115234 | 26.540000915527344 | 0 | 0 | false | 1 | 7.25 |
| 17491 | 45 | 311357 | OLDE ENGLISH 800 MALT LIQUOR | 8 | 8 | 35.92 | 35.92 | 1.6 | 1.6 | 35.92 | 000 |  | INV | 1 |  | 0 |  | null | 7.95 | 53.95000076293945 | 35.04999923706055 | 0 | 0 | false | 1 | 4.49 |
| 17419 | 187 | 315119 | CHATEAU DE CABRIAC ROUGE CORBIERES |  | 12 | 155.76 | 155.76 | 1.2 | 1.2 | 155.76 | 000 |  | INV | 1 |  | 0 |  | null | 22.45 | 50.400001525878906 | 33.5099983215332 | 0 | 0 | false | 1 | 12.98 |
| 10329 | 120 | 138917 | BOWEN ISLAND REEF BREAK HEMP BLOND 6C | 6PK4 | 4 | 35.8 | 35.8 | 2.4 | 2.4 | 26.17 | 000 |  | INV | 1 |  | 0 |  | null | 10 | 32.900001525878906 | 24.760000228881836 | 0 | 0 | false | 1 | 8.95 |
| 22504 | 217 | 573055 | PARALLEL 49 LAGER 6C |  | 24 | 217.68 | 217.68 | 14.4 | 14.4 | 217.68 | 000 |  | INV | 1 |  | 0 |  | null | 13.95 | 33.7400016784668 | 25.229999542236328 | 0 | 0 | false | 1 | 9.07 |
| 10624 | 138 | 488155 | OKANAGAN PREMIUM ORCHARD PEACH | 6PK4 | 8 | 79.92 | 79.92 | 4.8 | 4.8 | 58.45 | 000 |  | INV | 1 |  | 0 |  | null | 11.2 | 33.290000915527344 | 24.979999542236328 | 0 | 0 | false | 1 | 9.99 |
| 6805 | 133 | 389619 | CH. STE. MICHELLE DRY RIESLNG | 12 | 12 | 227.88 | 227.88 | 1.2 | 1.2 | 166.54 | 000 |  | INV | 1 |  | 0 |  | null | 23.85 | 49.439998626708984 | 33.08000183105469 | 0 | 0 | false | 1 | null |
| 8046 | 93 | 173088 | POGGIO MORINO VERMENTINO | 12 | 12 | 179.88 | 179.88 | 1.2 | 1.2 | 131.49 | 000 |  | INV | 1 |  | 0 |  | null | 18.85 | 49.59000015258789 | 33.150001525878906 | 0 | 0 | false | 1 | null |
| 4896 | 193 | 663898 | LAS MORAS MALBEC | 12 | 12 | 160.61 | 160.61 | 0 | 0 | 135.01 |  |  |  | 1 |  | 0 |  | 1899-12-30T00:00:00.000Z | 18.95 | 0.5037999749183655 | 33.504600524902344 | 0 | 0 | true | 1 | null |
| 8590 | 10 | GIFFARD PEAR | SYRUP PEAR |  | 12 | 108 | 108 | 0 | 0 | 108 | 000 |  | INV | 1 |  | 0 |  | null | 18 | 78.56999969482422 | 44 | 0 | 0 | false | 0 | null |
| 12438 | 23 | 17582 | ROCK & VINE CABERNET SAUVIGNON | 12 | 24 | 350.4 | 350.4 | 2.4 | 2.4 | 350.58 | 000 |  | INV | 1 |  | 0 |  | null | 25.05 | 49.119998931884766 | 32.939998626708984 | 0 | 0 | false | 1 | 14.6 |

</details>

### RSInvRecDetailMisc (43,304 rows)



<details>
<summary>View random sample</summary>

| AuditID | SubHeaderCode | SubHeaderName | ProRate | Amount | LocalAmount | LandedAmount | GLDept | GLAccount | ReceivingTaxID |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1991 | 5 | Tax | I | 58.95 | 58.95 | 0 |  |  | 0 |
| 11383 | 5 | GST |  | 10.91 | 10.91 | 10.91 |  |  | 0 |
| 10148 | 5 | GST |  | 15.75 | 15.75 | 15.75 |  |  | 0 |
| 18609 | 5 | GST |  | 9.31 | 9.31 | 9.31 |  |  | 0 |
| 1503 | 0 | LRS Factor | I | -180.39 | -180.39 | 0 |  |  | 1 |
| 18342 | 5 | GST |  | -4.37 | -4.37 | -4.37 |  |  | 0 |
| 3253 | 0 | LRS Factor | I | -103.68 | -103.68 | 0 |  |  | 1 |
| 20941 | 5 | GST |  | 25.8 | 25.8 | 25.8 |  |  | 0 |
| 20155 | 5 | GST |  | 19.07 | 19.07 | 19.07 |  |  | 0 |
| 280 | 0 | LRS Factor | I | -76.8 | -76.8 | 0 |  |  | 1 |
| 27584 | 5 | GST |  | 8.8 | 8.8 | 8.8 |  |  | 0 |
| 5439 | 0 | LRS Factor | I | -270.48 | -270.48 | 0 |  |  | 1 |

</details>

### RSInvRecHead (30,872 rows)



<details>
<summary>View random sample</summary>

| AuditID | StoreID | VendorNum | VendorInvoiceNumber | PONumber | POPrefix | EntryDate | InvoiceDate | DueDate | Type | Extra | Reference | EmployeeID | Status | Remark | CurrencyID | ExchangeRate | Printed | PostedToAP | CostIncTax | CostIncItemDeposit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 26461 | 0 | 057 | 27671 | 0 | 000 | 2018-02-21T12:06:02.000Z | 2018-02-21T12:05:41.000Z | 2018-02-21T00:00:00.000Z |  |  |  | 1056 | C |  |  | 1 | Y | false | false | E |
| 25416 | 0 | BDL | 7320972 | 0 | 000 | 2017-12-15T16:38:26.000Z | 2017-12-15T16:37:38.000Z | 2017-12-15T00:00:00.000Z |  |  |  | 1056 | C |  |  | 1 | Y | false | false | E |
| 30877 | 0 | 068 | 8919 | 0 | 000 | 2018-10-26T13:35:54.000Z | 2018-10-26T13:33:18.000Z | 2018-10-26T00:00:00.000Z |  |  |  | 1056 | C |  |  | 1 |  | false | false | E |
| 18271 | 0 | 159 | 101292 | 0 | 000 | 2016-08-26T13:56:17.000Z | 2016-08-26T13:56:07.000Z | 2016-08-26T00:00:00.000Z |  |  |  | 1056 | C |  |  | 1 | Y | false | false | E |
| 9870 | 0 | 019 | 2940130 | 0 | 000 | 2014-08-26T16:12:49.000Z | 2014-08-26T11:19:37.000Z | 2014-09-01T00:00:00.000Z |  |  |  | SUPERV | C |  |  | 1 | Y | false | true | E |
| 7455 | 0 | 773 | 61155 | 0 | 000 | 2013-11-11T09:57:34.000Z | 2013-11-11T09:57:13.000Z | 2013-11-11T00:00:00.000Z |  |  |  | 1056 | C |  |  | 1 | Y | false | true | E |
| 19438 | 0 | 014 | 5306296 | 0 | 000 | 2016-11-22T11:38:07.000Z | 2016-11-22T11:37:30.000Z | 2016-11-22T00:00:00.000Z |  |  |  | 1056 | C |  |  | 1 | Y | false | false | E |
| 24851 | 0 | 349 | 115021 | 0 | 000 | 2017-11-14T16:07:23.000Z | 2017-11-14T16:06:52.000Z | 2017-11-14T16:06:52.000Z |  |  |  | 0216 | C |  |  | 1 | Y | false | false | E |
| 12462 | 0 | 014 | 5180896 | 0 | 000 | 2015-05-29T19:33:00.000Z | 2015-05-29T19:25:18.000Z | 2015-05-29T00:00:00.000Z |  |  | NOV 3 | 1056 | C |  |  | 1 | Y | false | false | E |
| 13085 | 0 | 286 | 5172 | 0 | 000 | 2015-07-24T10:21:53.000Z | 2015-07-24T10:21:44.000Z | 2015-07-24T10:21:44.000Z |  |  |  | 1056 | C |  |  | 1 | Y | false | false | E |
| 22988 | 0 | 272 | 447R | 0 | 000 | 2017-07-13T08:13:58.000Z | 2017-07-13T08:13:27.000Z | 2017-07-13T08:13:27.000Z |  |  |  | 1056 | C | Reverse Audit # 22947 |  | 1 | Y | false | false | E |
| 5225 | 0 | LDB | 129001011213 | 0 |  | 2012-10-31T00:00:00.000Z | 2012-10-31T00:00:00.000Z | 2012-10-31T00:00:00.000Z | R |  |  |  | C |  |  | 1 | Y | true | true | E |

</details>

### RSInvTxfDetail (1,634 rows)



<details>
<summary>View random sample</summary>

| TxfId | TxfDetailLine | ItemCode | ItemType | ItemSizeMatrixCode | ItemDesc1 | ItemDesc2 | ChildType | ChildQtyRate | ChildParentLine | Price | SalesPrice | UnitDeposit | Tax1Inc | Tax2Inc | Tax3Inc | Tax4Inc | Tax1Status | Tax2Status | Tax3Status | Tax4Status | Qty | QPA | QPAAmount | Amount | NetAmount | DepositAmount | Cost | LotNum | ExpiryDate | InsEmployeeId | InsTime | UpdEmployeeId | UpdTime | ExtraData |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 20 | 62 | 132407 | N |  | RIJCKAERT LES SARRES COTES DU JURA BLANC | RIJCKAERT LES SARRES COTES DU JURA BLANC |  | 0 | 0 | 27.08 | 27.08 | 0.1 | false | false | false | false | E | E | X | X | 6 | A | 162.48 | 162.48 | 162.48 | 0.6 | 162.48 |  | null | 1056 | 2017-11-07T13:02:00.000Z | 1056 | 2017-11-07T13:02:00.000Z |  |
| 1827 | 171 | 412122 | N |  | WESTON'S ORGANIC CIDER | WESTON'S ORGANIC CIDER |  | 0 | 0 | 3.65 | 0 | 0 | false | false | false | false | X | X | X | X | 6 |  | 0 | 21.91 | 21.91 | 0 | 21.91 |  | null | Tran | 2011-09-20T00:00:00.000Z | Tran | 2011-09-20T00:00:00.000Z |  |
| 10 | 98 | 543033 | N |  | HOWARD PARK MIAMUP CABERNET SAUVIGNON | HOWARD PARK MIAMUP CABERNET SAUVIGNON |  | 0 | 0 | 22.61 | 22.61 | 0.1 | false | false | false | false | E | E | X | X | 24 | A | 542.64 | 542.64 | 542.64 | 2.4 | 542.64 |  | null | 1056 | 2016-11-10T08:54:15.000Z | 1056 | 2016-11-10T08:54:15.000Z |  |
| 23 | 39 | 94912 | N |  | SEGURA VIUDAS HEREDAD BRUT RESERVE | SEGURA VIUDAS HEREDAD BRUT RESERVE |  | 0 | 0 | 0 | 0 | 0 | false | false | false | false | X | X | X | X | 12 |  | 0 | 0 | 0 | 0 | 0 |  | null | 1056 | 2017-11-22T11:13:32.000Z | 1056 | 2017-11-22T11:13:32.000Z |  |
| 24 | 109 | 301671 | N |  | KUNG FU GIRL RIESLING | KUNG FU GIRL RIESLING |  | 0 | 0 | 16.2 | 16.2 | 0.1 | false | false | false | false | Y | X | X | X | 12 |  | 0 | 194.4 | 194.4 | 1.2 | 194.4 |  | null | 1056 | 2017-11-22T11:17:49.000Z | 1056 | 2017-11-22T11:17:49.000Z |  |
| 2 | 38 | 554238 | N |  | HIGHLAND QUEEN 16 YO MAJESTY | HIGHLAND QUEEN 16 YO MAJESTY |  | 0 | 0 | 73.19 | 73.19 | 0.1 | false | false | false | false | E | X | X | X | 3 |  | 0 | 219.57 | 219.57 | 0.3 | 219.57 |  | null | 44 | 2016-01-19T09:19:45.000Z | 44 | 2016-01-19T09:19:45.000Z |  |
| 20 | 148 | 862425 | N |  | BLACK BOTTLE | BLACK BOTTLE |  | 0 | 0 | 25.66 | 25.66 | 0.1 | false | false | false | false | E | E | X | X | 3 | A | 76.98 | 76.98 | 76.98 | 0.3 | 76.98 |  | null | 1056 | 2017-11-07T13:02:00.000Z | 1056 | 2017-11-07T13:02:00.000Z |  |
| 1827 | 348 | 865030 | N |  | LOST COAST INDICA IPA | LOST COAST INDICA IPA |  | 0 | 0 | 3.98 | 0 | 0 | false | false | false | false | X | X | X | X | 1 |  | 0 | 3.98 | 3.98 | 0 | 3.98 |  | null | Tran | 2011-09-20T00:00:00.000Z | Tran | 2011-09-20T00:00:00.000Z |  |
| 11 | 13 | 324178 | N |  | CH FUISSE LE CLOS POUILLY FUISSE | CH FUISSE LE CLOS POUILLY FUISSE |  | 0 | 0 | 59.99 | 59.99 | 0.1 | false | false | false | false | E | E | X | X | 1 | A | 59.99 | 59.99 | 59.99 | 0.1 | 59.99 |  | null | 1056 | 2016-11-10T14:52:29.000Z | 1056 | 2016-11-10T14:52:29.000Z |  |
| 1827 | 279 | 67447 | N |  | CARIBOO CREAM ALE 6C | CARIBOO CREAM ALE 6C |  | 0 | 0 | 5.99 | 0 | 0 | false | false | false | false | X | X | X | X | 2 |  | 0 | 11.98 | 11.98 | 0 | 11.98 |  | null | Tran | 2011-09-20T00:00:00.000Z | Tran | 2011-09-20T00:00:00.000Z |  |
| 10 | 18 | 67231 | N |  | JOEL GOTT ZINFANDEL | JOEL GOTT ZINFANDEL |  | 0 | 0 | 19.99 | 19.99 | 0.1 | false | false | false | false | E | E | X | X | 12 | A | 239.88 | 239.88 | 239.88 | 1.2 | 239.88 |  | null | 1056 | 2016-11-10T08:54:15.000Z | 1056 | 2016-11-10T08:54:15.000Z |  |
| 23 | 118 | 641357 | N |  | FORT BERENS ESTATE RIESLING | FORT BERENS ESTATE RIESLING |  | 0 | 0 | 0 | 0 | 0 | false | false | false | false | X | X | X | X | 12 |  | 0 | 0 | 0 | 0 | 0 |  | null | 1056 | 2017-11-22T11:13:32.000Z | 1056 | 2017-11-22T11:13:32.000Z |  |

</details>

### RSInvTxfInventoryDetail (1,397 rows)



<details>
<summary>View random sample</summary>

| TxfId | TxfInventoryDetailLine | ItemCode | ItemType | ItemDesc | SizeCode | ColorCode | WidthCode | SerialNumber | Qty | Deposit | Cost | Profit | InsEmployeeId | InsTime | UpdEmployeeId | UpdTime | ExtraData |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2 | 7 | 880237 | N | AMRUT - NAARANGI |  |  |  |  | 3 | 0.3 | 393.66 | 0 | 44 | 2016-01-19T09:19:45.000Z | 44 | 2016-01-19T09:19:45.000Z |  |
| 26 | 77 | 839449 | N | BOMBER IPA 6C |  |  |  |  | 4 | 2.4 | 38.44 | 0 | 1056 | 2018-07-04T12:07:33.000Z | 1056 | 2018-07-04T12:07:33.000Z |  |
| 24 | 85 | 19735 | N | VINA VENTISQUERO CHARDONNAY GREY |  |  |  |  | 6 | 0.6 | 117.06 | 0 | 1056 | 2017-11-22T11:17:49.000Z | 1056 | 2017-11-22T11:17:49.000Z |  |
| 15 | 84 | 493593 | N | LA ROSIERE SAVOIE JONGIEUX |  |  |  |  | 12 | 1.2 | 195 | 0 | 1056 | 2016-11-24T20:54:28.000Z | 1056 | 2016-11-24T20:54:28.000Z |  |
| 1827 | 215 | 513663 | N | GALIL MOUNTAIN CABERNET SAUVIGNON - |  |  |  |  | 1 | 0 | 13.5 | 0 | Tran | 2011-09-20T00:00:00.000Z | Tran | 2011-09-20T00:00:00.000Z |  |
| 2 | 19 | 853077 | N | KAVALAN FINO CASK |  |  |  |  | 3 | 0.3 | 1034.56 | 0 | 44 | 2016-01-19T09:19:45.000Z | 44 | 2016-01-19T09:19:45.000Z |  |
| 24 | 28 | 30163 | N | LAMBRUSCO REGGIANO FRIZZANTE LINI 910 |  |  |  |  | 12 | 1.2 | 180.12 | 0 | 1056 | 2017-11-22T11:17:49.000Z | 1056 | 2017-11-22T11:17:49.000Z |  |
| 24 | 6 | 337402 | N | SEVEN DEADLY ZINS LODI ZINFANDEL |  |  |  |  | 12 | 1.2 | 213.72 | 0 | 1056 | 2017-11-22T11:17:49.000Z | 1056 | 2017-11-22T11:17:49.000Z |  |
| 28 | 22 | 191957 | N | INNIS & GUNN OAK AGED BEER |  |  |  |  | 24 | 2.4 | 48.52 | 0 | 1056 | 2018-08-22T14:43:27.000Z | 1056 | 2018-08-22T14:43:27.000Z |  |
| 20 | 29 | 71902 | N | HOPE TROUBLEMAKER ASSEMBLAGE 3 PASO |  |  |  |  | 12 | 1.2 | 264 | 0 | 1056 | 2017-11-07T13:02:00.000Z | 1056 | 2017-11-07T13:02:00.000Z |  |
| 10 | 141 | 743104 | N | GIUSTI PINOT GRIGIO DELLE VENEZIE |  |  |  |  | 12 | 1.2 | 179.76 | 0 | 1056 | 2016-11-10T08:54:15.000Z | 1056 | 2016-11-10T08:54:15.000Z |  |
| 20 | 151 | 789768 | N | MONKEY SHOULDER |  |  |  |  | 3 | 0.3 | 148.17 | 0 | 1056 | 2017-11-07T13:02:00.000Z | 1056 | 2017-11-07T13:02:00.000Z |  |

</details>

### RSItem (21,949 rows)



<details>
<summary>View random sample</summary>

| ItemCode | Desc1 | Desc2 | ExtDesc | Attribute1 | Attribute2 | Attribute3 | Attribute4 | SubcatCode | Status | ItemType | SizeMatrixCode | HasLinkItem | HasMixAndMatch | QtyPriceBreak | HasSpecialItem | Discountable | AllowFractionalQty | PrintLabel | ShowComponent | Cost | ForeignCost | MiscCharge1Perc | MiscOverHead | LandedCost | Markup | GP | Taxable1 | Taxable2 | Taxable3 | Taxable4 | ItemDeposit | Price1 | Price2 | Price3 | Price4 | Price5 | Price6 | Price7 | Price8 | Price9 | MinPrice | ZeroPrice | SellingUnit | TaxCount | Extra | Tare | LimitCount | EntryDate | LastSoldDate | LastUpdate | LastUpdateID | LastReceiveCost | OID |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 44818 | ELYSIAN DARK O' THE MOON PUMPKIN STOUT | ELYSIAN DARK O' THE MOON PUMPKIN STOUT | ELYSIAN BREWING CO. | 650ML | BE | BEER THIRS | X | 3004 | D | N |  | false | false |  | false | true | false | true | false | 7.3028 | 0 | 0 | 0 | 7.3028 | 49.38999938964844 | 33.060001373291016 | true | true | false | false | 0.1 | 12.55 | 0 | 0 | 9 | 9.6 | 14.05 | 9.49 | 0 | 0 | 0 | false | 650ML | 0 | <CSV> <Ver>1</Ver> <SD></SD> <DD></DD> <PF>Small</PF> <PT></PT> <ATT1>No</ATT1> <ATT2>2</ATT2> <ATT3>Beer</ATT3> <ATT4></ATT4> <ATT5></ATT5> <ATT6></ATT6> <ATT7></ATT7> <ATT8>United States</ATT8> <ATT9></ATT9> <ATT10></ATT10> <ATT11></ATT11> <ATT12></ATT12> <ATT13></ATT13> <ATT14></ATT14> <ATT15></ATT15> <ATT16></ATT16></CSV> | 0 | 0 | 2012-10-19T00:00:00.000Z | 2012-11-11T00:00:00.000Z | 2018-01-03T13:10:31.000Z | 1056 | 7.3028 | 4532 |
| 233976 | DUNCAN TAYLOR HIGHLAND PARK 2005 | DUNCAN TAYLOR HIGHLAND PARK 2005 | LEGACY LIMITED EDITION | 700ML | SL | FOUNTANA | X | 4060 | A | N |  | false | false |  | false | true | false | true | false | 172.79 | 0 | 0 | 0 | 172.79 | 49.439998626708984 | 33.08000183105469 | true | true | false | false | 0.1 | 296.95 | 235.09 | 258 | 212.53 | 222.9 | 357.56 | 229.85 | 260.95 | 266.9 | 207.35 | false | 700ML | 0 | <CSV> <Ver>1</Ver> <SD></SD> <DD></DD> <PF>Small</PF> <PT></PT> <ATT1>Yes</ATT1> <ATT2>0</ATT2> <ATT3>Spirits</ATT3> <ATT4>Premium Spirits</ATT4> <ATT5></ATT5> <ATT6></ATT6> <ATT7></ATT7> <ATT8>Scotland</ATT8> <ATT9></ATT9> <ATT10>Scotch Whisky</ATT10> <ATT11></ATT11> <ATT12></ATT12> <ATT13>54.1</ATT13> <ATT14>700ML</ATT14> <ATT15></ATT15> <ATT16></ATT16></CSV> | 0 | 0 | 2018-05-15T14:55:25.000Z | 2018-10-23T11:49:52.000Z | 2018-06-18T09:33:35.000Z | DL | 172.79 | 23518 |
| 112573 | RUSSELL - EXTRA SPECIAL LAGER | RUSSELL - EXTRA SPECIAL LAGER | RUSSELL BREWING COMPANY LTD. | 6*341ML |  | RUSSELL BR | S | 3005 | D | N |  | true | false | N | false | true | false | true | false | 7.67 | 0 | 0 | 0 | 7.67 | 33.77000045776367 | 25.239999771118164 | true | true | false | false | 0.6 | 11.8 | 10.5 | 0 | 9.45 | 10 | 0 | 9.97 | 10.4 | 10.6 | 9.2 | false | 6B | 0 | <CSV> <Ver>1</Ver> <SD></SD> <DD></DD> <PF>Small</PF> <PT></PT> <ATT1>No</ATT1> <ATT2>2</ATT2> <ATT3>Beer</ATT3> <ATT4></ATT4> <ATT5></ATT5> <ATT6></ATT6> <ATT7></ATT7> <ATT8>Canada</ATT8> <ATT9>British Columbia</ATT9> <ATT10></ATT10> <ATT11></ATT11> <ATT12></ATT12> <ATT13></ATT13> <ATT14></ATT14> <ATT15></ATT15> <ATT16></ATT16></CSV> | 0 | 0 | 2010-10-12T00:00:00.000Z | 2014-08-10T19:05:58.000Z | 2017-05-04T15:03:04.000Z | LRS | 10.5 | 376 |
| 201277 | BRUICHLADDICH ISLAY BARLEY DUNLOSSIT | BRUICHLADDICH ISLAY BARLEY DUNLOSSIT | BRUICHLADDICH DISTILLERY CO | 700ML | SL | FREE HOUSE | X | 4060 | D | N |  | true | false | N | false | false | false | true | false | 57.7 | 0 | 0 | 0 | 57.7 | 49.27000045776367 | 33.0099983215332 | true | true | false | false | 0.1 | 99.05 | 0 | 0 | 71 | 75.05 | 110.95 | 75.01 | 0 | 0 | 69.67 | false |  | 0 | <CSV> <Ver>1</Ver> <SD></SD> <DD></DD> <PF>Small</PF> <PT></PT> <ATT1>No</ATT1> <ATT2>2</ATT2> <ATT3>Spirits</ATT3> <ATT4></ATT4> <ATT5></ATT5> <ATT6></ATT6> <ATT7></ATT7> <ATT8>Scotland</ATT8> <ATT9></ATT9> <ATT10>Scotch Whisky</ATT10> <ATT11></ATT11> <ATT12></ATT12> <ATT13></ATT13> <ATT14></ATT14> <ATT15></ATT15> <ATT16></ATT16></CSV> | 0 | 0 | 2012-11-03T00:00:00.000Z | 2012-11-04T00:00:00.000Z | 2017-05-04T15:03:04.000Z | LRS | 78.99 | 2186 |
| 149690 | WINGSPAN PINOT NOIR | WINGSPAN PINOT NOIR | WOOLLASTON | 750ML | NZL | SIMMER | X | 5160 | D | N |  | true | false | N | false | true | false | true | false | 16.07 | 0 | 0 | 0 | 16.07 | 63.15999984741211 | 38.709999084472656 | true | true | false | false | 0.1 | 30.15 | 0 | 0 | 19.8 | 20.9 | 33.75 | 20.89 | 0 | 0 | 19.4 | false |  | 0 | <CSV> <Ver>1</Ver> <SD></SD> <DD></DD> <PF>Small</PF> <PT></PT> <ATT1>No</ATT1> <ATT2>2</ATT2> <ATT3>Wine</ATT3> <ATT4></ATT4> <ATT5></ATT5> <ATT6></ATT6> <ATT7></ATT7> <ATT8>New Zealand</ATT8> <ATT9>Other New Zealand</ATT9> <ATT10>Red Wine</ATT10> <ATT11></ATT11> <ATT12></ATT12> <ATT13></ATT13> <ATT14></ATT14> <ATT15></ATT15> <ATT16></ATT16></CSV> | 0 | 0 | 2011-01-06T00:00:00.000Z | 2014-02-27T17:19:04.000Z | 2017-05-04T15:03:04.000Z | LRS | 21.99 | 1163 |
| 127217 | RED ROOSTER CHARDONNAY | RED ROOSTER CHARDONNAY | RED ROOSTER WINERY | 750ML |  | RED ROOSTE | X | 5225 | D | N |  | false | false | N | false | true | false | true | false | 9.488 | 0 | 0 | 0 | 9.49 | 49.630001068115234 | 33.16999816894531 | true | true | false | false | 0.1 | 16.33 | 12.99 | 14.21 | 11.9 | 12.35 | 18.31 | 12.34 | 14.35 | 14.7 | 11.4 | false |  | 0 | <CSV> <Ver>1</Ver> <SD></SD> <DD></DD> <PF>Small</PF> <PT></PT> <ATT1>No</ATT1> <ATT2>2</ATT2> <ATT3>Wine</ATT3> <ATT4></ATT4> <ATT5></ATT5> <ATT6></ATT6> <ATT7></ATT7> <ATT8>Canada</ATT8> <ATT9>British Columbia</ATT9> <ATT10>White Wine</ATT10> <ATT11></ATT11> <ATT12></ATT12> <ATT13></ATT13> <ATT14></ATT14> <ATT15></ATT15> <ATT16></ATT16></CSV> | 0 | 0 | 2010-10-12T00:00:00.000Z | 2015-06-14T19:36:46.000Z | 2017-05-04T15:03:04.000Z | 11 | 12.99 | 714 |
| 217364 | HACKER PSCHORR OKTOBERFEST BIER | HACKER PSCHORR OKTOBERFEST BIER |  | 50L | SOA | PREMIER | X | 2010 | X | N |  | false | false |  | false | true | false | true | false | 245.5 | 0 | 0 | 0 | 245.5 | 23.229999542236328 | 18.850000381469727 | true | true | false | false | 30 | 347.9 | 326.59 | 302.67 | 301.97 | 316.7 | 308.95 | 319.15 | 306.15 | 313.1 | 294.6 | false | 50L | 0 | <CSV> <Ver>1</Ver> <SD></SD> <DD></DD> <PF>Small</PF> <PT></PT> <ATT1>No</ATT1> <ATT2>0</ATT2> <ATT3>Beer</ATT3> <ATT4>Kegs</ATT4> <ATT5></ATT5> <ATT6></ATT6> <ATT7></ATT7> <ATT8>Germany</ATT8> <ATT9></ATT9> <ATT10></ATT10> <ATT11></ATT11> <ATT12></ATT12> <ATT13>5.5</ATT13> <ATT14></ATT14> <ATT15></ATT15> <ATT16></ATT16></CSV> | 0 | 0 | 2016-09-09T12:16:22.000Z | 2017-09-15T13:42:05.000Z | 2017-09-01T13:50:21.000Z | 1056 | 245.5 | 18776 |
| 381822 | FINNRIVER - HABANERO CIDER | FINNRIVER - HABANERO CIDER | FINNRIVER CIDERY CENTRAL VALLEY ORCHARDS | 500ML | CC | UNTAPPED | X | 1006 | D | N |  | false | false |  | false | true | false | true | false | 11.75 | 0 | 0 | 0.007000000216066837 | 11.76 | 39.029998779296875 | 28.06999969482422 | true | true | false | false | 0.1 | 18.8 | 15.59 | 16.36 | 14.46 | 15.05 | 31.3 | 15.29 | 16.55 | 16.9 | 14.1 | false | 500ML | 0 | <CSV> <Ver>1</Ver> <SD>FINNRIVER - HABANERO CIDER</SD> <DD>FINNRIVER - HABANERO CIDER</DD> <PF>Small</PF> <PT></PT> <ATT1>No</ATT1> <ATT2></ATT2> <ATT3>Ciders</ATT3> <ATT4></ATT4> <ATT5></ATT5> <ATT6></ATT6> <ATT7></ATT7> <ATT8>United States</ATT8> <ATT9></ATT9> <ATT10></ATT10> <ATT11></ATT11> <ATT12></ATT12> <ATT13>6.5</ATT13> <ATT14></ATT14> <ATT15></ATT15> <ATT16></ATT16></CSV> | 0 | 0 | 2014-10-22T13:27:51.000Z | 2016-02-06T11:30:27.000Z | 2017-05-04T15:03:05.000Z | DL | 11.75 | 12760 |
| 566307 | PHILLIPS ANXIETY ALE | PHILLIPS ANXIETY ALE | BELGIAN QUAD  DISCONTINUED DP FEB 27 2017 | 650ML | DBC | PHILLIPS B | S | 3003 | D | N |  | false | false |  | false | true | false | true | false | 4.89 | 0 | 0 | 0 | 4.89 | 37.83000183105469 | 27.450000762939453 | true | true | false | false | 0.1 | 7.75 | 6.49 | 6.74 | 6.01 | 6.3 | 6.94 | 6.36 | 6.8 | 7 | 5.85 | false | 650ML | 0 | <CSV> <Ver>1</Ver> <SD></SD> <DD></DD> <PF>Small</PF> <PT></PT> <ATT1>No</ATT1> <ATT2>2</ATT2> <ATT3>Beer</ATT3> <ATT4></ATT4> <ATT5></ATT5> <ATT6></ATT6> <ATT7></ATT7> <ATT8>Canada</ATT8> <ATT9>British Columbia</ATT9> <ATT10></ATT10> <ATT11></ATT11> <ATT12></ATT12> <ATT13>8.0</ATT13> <ATT14></ATT14> <ATT15></ATT15> <ATT16></ATT16></CSV> | 0 | 0 | 2016-11-21T11:44:42.000Z | 2016-12-09T21:26:13.000Z | 2017-05-04T15:03:05.000Z | 222 | 4.89 | 19391 |
| 630004 | SMIRNOFF VODKA LIMITED EDITION 750ML | SMIRNOFF VODKA LIMITED EDITION 750ML | DIAGEO CANADA INC. | 750ML | VOD | DIAGEO CAN | G | 4050 | D | N |  | false | false |  | false | true | false | true | false | 17.39 | 0 | 0 | 0 | 17.39 | 43.0099983215332 | 30.079999923706055 | true | true | false | false | 0.1 | 28.6 | 23.75 | 0 | 21.4 | 22.65 | 32.03 | 22.61 | 25.15 | 25.75 | 21 | false |  | 0 | <CSV> <Ver>1</Ver> <SD></SD> <DD></DD> <PF>Small</PF> <PT></PT> <ATT1>No</ATT1> <ATT2>2</ATT2> <ATT3>Spirits</ATT3> <ATT4></ATT4> <ATT5></ATT5> <ATT6></ATT6> <ATT7></ATT7> <ATT8>United States</ATT8> <ATT9></ATT9> <ATT10>Vodka</ATT10> <ATT11></ATT11> <ATT12></ATT12> <ATT13></ATT13> <ATT14></ATT14> <ATT15></ATT15> <ATT16></ATT16></CSV> | 0 | 0 | 2013-06-23T13:03:59.000Z | 2013-09-10T18:17:38.000Z | 2017-05-04T15:03:05.000Z | LRS | 23.75 | 9492 |
| 852954 | BOCOPA ALICANTE MONASTRELL PETIT VERDOT | BOCOPA ALICANTE MONASTRELL PETIT VERDOT | BOCOPA ALICANTE MONASTRELL PETIT VERDOT | 750ML | SOA | DIRECT CURRENT WINES | X | 5180 | D | N |  | false | false |  | false | true | false | true | false | 16.96 | 0 | 0 | 0 | 16.96 | 48.939998626708984 | 32.86000061035156 | true | true | false | false | 0.1 | 29.05 | 22.59 | 25.27 | 20.86 | 21.75 | 16.74 | 22.05 | 25.55 | 26.15 | 20.35 | false | 750ML | 0 | <CSV> <Ver>1</Ver> <SD></SD> <DD></DD> <PF>Small</PF> <PT></PT> <ATT1>No</ATT1> <ATT2>0</ATT2> <ATT3>Wine</ATT3> <ATT4></ATT4> <ATT5></ATT5> <ATT6></ATT6> <ATT7></ATT7> <ATT8>Spain</ATT8> <ATT9></ATT9> <ATT10>Red Wine</ATT10> <ATT11></ATT11> <ATT12></ATT12> <ATT13></ATT13> <ATT14></ATT14> <ATT15></ATT15> <ATT16></ATT16></CSV> | 0 | 0 | 2016-02-01T15:49:39.000Z | 2016-02-09T13:55:10.000Z | 2017-05-04T15:03:05.000Z | 77 | 16.96 | 17162 |
| 618280 | INCLUDE WINE BORDEAUX STYLE RED | INCLUDE WINE BORDEAUX STYLE RED | INCLUDE WINE BORDEAUX STYLE RED | 750ML | BC | ARTISAN FOOD | X | 5125 | D | N |  | false | false |  | false | true | false | true | false | 14.6 | 0 | 0 | 0 | 14.6 | 49.18000030517578 | 32.970001220703125 | true | true | false | false | 0.1 | 25.05 | 25 | 0 | 22.5 | 23.75 | 37.8 | 18.98 | 27.6 | 28.2 | 21.9 | false | 750ML | 0 | <CSV> <Ver>1</Ver> <SD></SD> <DD></DD> <PF>Small</PF> <PT></PT> <ATT1>No</ATT1> <ATT2>2</ATT2> <ATT3>Wine</ATT3> <ATT4></ATT4> <ATT5></ATT5> <ATT6></ATT6> <ATT7></ATT7> <ATT8>Canada</ATT8> <ATT9>British Columbia</ATT9> <ATT10>Red Wine</ATT10> <ATT11></ATT11> <ATT12></ATT12> <ATT13></ATT13> <ATT14></ATT14> <ATT15></ATT15> <ATT16></ATT16></CSV> | 0 | 0 | 2013-08-19T10:08:32.000Z | 2015-12-03T18:09:05.000Z | 2017-05-04T15:03:05.000Z | 11 | 25 | 9793 |

</details>

### RSItemCostChange (30,768 rows)



<details>
<summary>View random sample</summary>

| RecordID | Date | ItemCode | VendorNum | VendorInvoiceNo | OldCost | NewCost | EntryDate | EmployeeID |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 32536 | 2016-08-03T09:21:25.000Z | 904052 | BDL | 6700347 | 7.37 | 7.43 | 2016-08-03T09:21:25.000Z | 1056 |
| 48730 | 2018-03-09T12:30:15.000Z | 359547 | LDB | 100674142 | 24.74 | 27.71 | 2018-03-09T12:30:15.000Z | 1056 |
| 49190 | 2018-03-23T19:32:21.000Z | 843771 | LDB | 100677202 | 51.6 | 49.99 | 2018-03-23T19:32:21.000Z | 44 |
| 27727 | 2016-02-22T14:06:50.000Z | 136945 | LDB | 100443014 | 21.78 | 21.77 | 2016-02-22T14:06:50.000Z | 1056 |
| 55195 | 2018-08-24T20:34:21.000Z | 473744 | LDB | 100713090 | 18.11 | 18.13 | 2018-08-24T20:34:21.000Z | 1056 |
| 39457 | 2017-04-13T18:54:23.000Z | 645465 | LDB | 100529623 | 28.5 | 28.68 | 2017-04-13T18:54:23.000Z | 1056 |
| 50250 | 2018-04-16T17:15:52.000Z | 508739 | 349 | 118976 | 9.55 | 9.8 | 2018-04-16T17:15:52.000Z | 222 |
| 52288 | 2018-06-08T11:41:44.000Z | 126885 | 441 | E-1871 | 2.62 | 2.625 | 2018-06-08T11:41:44.000Z | 1056 |
| 28621 | 2016-03-10T18:03:38.000Z | 600676 | LDB | 100446865 | 13.4 | 14.39 | 2016-03-10T18:03:38.000Z | 1056 |
| 43272 | 2017-08-04T07:39:09.000Z | 677310 | LDB | 100553451 | 5.6 | 4.6 | 2017-08-04T07:39:09.000Z | 1056 |
| 47930 | 2018-02-16T17:32:01.000Z | 270298 | LDB | 100668988 | 13.1 | 13.08 | 2018-02-16T17:32:01.000Z | 1056 |
| 42389 | 2017-06-30T07:34:40.000Z | 161547 | LDB | 100545888 | 3.28 | 2.95 | 2017-06-30T07:34:40.000Z | 1056 |

</details>

### RSItemDel (22,409 rows)



<details>
<summary>View random sample</summary>

| RecordId | ItemCode | Desc1 | Desc2 | ExtDesc | SubcatCode | CatCode | Status | ItemType | SizeMatrixCode | Price1 | Price2 | Price3 | Price4 | Price5 | Price6 | Price7 | Price8 | Price9 | DelDate | DelEmployeeID | Reference |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8964 | 441469 | BUZET GRANDE RESERVE | BUZET GRANDE RESERVE |  | 5140 | 50 | A | N |  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2012-11-22T11:39:11.000Z | SUPERV |  |
| 10943 | 528992 | SPLASH ICED TEA - ARONIA & BLUEBERRY | SPLASH ICED TEA - ARONIA & BLUEBERRY |  | 1010 | 10 | A | N |  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2012-11-22T11:40:48.000Z | SUPERV |  |
| 17904 | 851675 | CHARDONNAY - WHAT CHA MA CALL IT | CHARDONNAY - WHAT CHA MA CALL IT |  | 5290 | 50 | A | N |  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2012-11-22T11:48:15.000Z | SUPERV |  |
| 14580 | 687848 | CHATEAU HAUT BERGEY BLANC 2007 | CHATEAU HAUT BERGEY BLANC 2007 |  | 5215 | 50 | A | N |  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2012-11-22T11:43:52.000Z | SUPERV |  |
| 5019 | 259093 | PILLITTERI - SEMILLON ICEWINE | PILLITTERI - SEMILLON ICEWINE |  | 5225 | 50 | A | N |  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2012-11-22T11:35:31.000Z | SUPERV |  |
| 10674 | 514695 | MAREMMA TOSCANA IGT - BRANCAIA ILATRAIA | MAREMMA TOSCANA IGT - BRANCAIA ILATRAIA |  | 5155 | 50 | A | N |  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2012-11-22T11:40:35.000Z | SUPERV |  |
| 1990 | 137885 | QUAILS GATE - CABERNET SAUVIGNON MERLOT | QUAILS GATE - CABERNET SAUVIGNON MERLOT |  | 5125 | 50 | A | N |  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2012-11-22T11:32:21.000Z | SUPERV |  |
| 7301 | 37473 | CHARDONNAY 07 - STAG'S HOLLOW | CHARDONNAY 07 - STAG'S HOLLOW |  | 5225 | 50 | A | N |  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2012-11-22T11:37:47.000Z | SUPERV |  |
| 20755 | 512657 | PAINTED ROCK RED ICON | PAINTED ROCK RED ICON | PAINTED ROCK ESTATE WINERY LTD | 5125 | 50 | D | N |  | 61.9 | 0 | 0 | 49.41 | 0 | 0 | 0 | 0 | 0 | 2016-05-18T09:47:05.000Z | 1056 | Merged with item # 468900 |
| 957 | 116442 | LAIRD FAMILY ESTATE COLD CREEK RANCH PIN | LAIRD FAMILY ESTATE COLD CREEK RANCH PIN |  | 5290 | 50 | A | N |  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2012-11-22T11:31:25.000Z | SUPERV |  |
| 6117 | 320044 | GRANITE CREEK ESTATE - VIOGNIER 2008 | GRANITE CREEK ESTATE - VIOGNIER 2008 |  | 5225 | 50 | A | N |  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2012-11-22T11:36:43.000Z | SUPERV |  |
| 6110 | 31930 | SYRAH SEVEN HILLS COLUMBIA VALLEY WINERY | SYRAH SEVEN HILLS COLUMBIA VALLEY WINERY |  | 5190 | 50 | A | N |  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2012-11-22T11:36:42.000Z | SUPERV |  |

</details>

### RSItemMergeLog (1,748 rows)



<details>
<summary>View random sample</summary>

| MergeId | StoreNo | FromItemCode | ToItemCode | ProcessStatus | Message | CreateDate | ProcessDate |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 809 | 111 | 388264 | 628511 | N |  | 2016-09-28T12:40:46.000Z | null |
| 1663 | 111 | 5278 | 874123 | N |  | 2018-08-28T12:31:03.000Z | null |
| 418 | 888 | 856971 | 59550 | N |  | 2016-06-07T08:17:46.000Z | null |
| 1374 | 888 | 657239 | 661389 | N |  | 2017-11-21T09:42:26.000Z | null |
| 415 | 111 | 666545 | 340232 | N |  | 2016-06-07T08:17:25.000Z | null |
| 1076 | 888 | 767954 | 871970 | N |  | 2017-01-06T10:03:57.000Z | null |
| 381 | 111 | 104794 | 37515 | N |  | 2016-06-07T08:12:08.000Z | null |
| 837 | 111 | 115055 | 241026 | N |  | 2016-10-14T14:08:05.000Z | null |
| 932 | 888 | 137612 | 558171 | N |  | 2016-10-14T14:29:48.000Z | null |
| 1389 | 111 | XOLOLAT4.5 | XOXOLAT4.5 | N |  | 2018-01-04T10:46:25.000Z | null |
| 1108 | 888 | 173377 | 340240 | N |  | 2017-01-24T10:45:17.000Z | null |
| 1139 | 111 | 775726 | 452169 | N |  | 2017-02-16T14:34:39.000Z | null |

</details>

### RSItemPicture (5,677 rows)



<details>
<summary>View random sample</summary>

| ItemCode | PictureType | Picture | MD5Code |
| --- | --- | --- | --- |
| 660852 | M | null | 660852.jpg |
| 197012 | M | null | 197012.jpg |
| 80036 | M | null | 80036.jpg |
| 221861 | M | null | 221861.jpg |
| 671958 | M | null | 671958.jpg |
| WINEACCESS | M | null | WINEACCESS.jpg |
| 63206 | M | null | 63206.jpg |
| 114611 | M | null | 114611.png |
| 557330 | M | null | 557330.jpg |
| 123596 | M | null | 123596.jpg |
| 657742 | M | null | 657742.jpg |
| 107524 | M | null | 107524.jpg |

</details>

### RSItemPriceChange (295,842 rows)



<details>
<summary>View random sample</summary>

| RecordID | Date | ItemCode | PriceType | OldPrice | NewPrice | OldZeroPrice | NewZeroPrice | EntryDate | Remark | EmployeeID |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1745504 | 2018-08-08T18:12:21.000Z | 836908 | M | 25.55 | 25.6 | false | false | 2018-08-08T18:12:21.000Z | Receiving | 1056 |
| 1751430 | 2018-08-30T11:59:19.000Z | 480624 | M | 45.8 | 48.85 | false | false | 2018-08-30T11:59:19.000Z | Receiving | 1056 |
| 1522562 | 2017-05-31T13:06:50.000Z | 157198 | 5 | 46.1 | 46.25 | false | false | 2017-05-31T13:06:50.000Z | Receiving | 1056 |
| 1608534 | 2017-11-09T01:30:24.000Z | 121001 | 1 | 2.95 | 2.75 | false | false | 2017-11-09T01:30:24.000Z | Enter/Modify Item | 28 |
| 1489970 | 2017-04-27T18:32:24.000Z | 123349 | 9 | 14 | 14 | false | false | 2017-04-27T18:32:24.000Z | Receiving | 1056 |
| 1747298 | 2018-08-15T17:33:39.000Z | 194571 | 7 | 59.9 | 59.9 | false | false | 2018-08-15T17:33:39.000Z | Receiving | 1056 |
| 1573255 | 2017-09-14T18:59:00.000Z | 464941 | 7 | 55.07 | 58.15 | false | false | 2017-09-14T18:59:00.000Z | Receiving | 1056 |
| 1627288 | 2017-12-07T09:28:11.000Z | 161992 | 6 | 3.3 | 3.3 | false | false | 2017-12-07T09:28:11.000Z | Receiving | 1056 |
| 1594582 | 2017-10-25T11:08:45.000Z | 475608 | 3 | 6.92 | 6.92 | false | false | 2017-10-25T11:08:45.000Z | Receiving | 1056 |
| 1701452 | 2018-05-02T17:12:00.000Z | 429704 | 8 | 38.65 | 38.65 | false | false | 2018-05-02T17:12:00.000Z | Receiving | 1056 |
| 1720917 | 2018-06-13T14:42:53.000Z | 895797 | 5 | 22.75 | 20.15 | false | false | 2018-06-13T14:42:53.000Z | Receiving | 1056 |
| 1657442 | 2018-02-15T08:58:39.000Z | 164756 | 8 | 30.15 | 30.15 | false | false | 2018-02-15T08:58:39.000Z | Receiving | 44 |

</details>

### RSItemsAttrib (241 rows)



<details>
<summary>View random sample</summary>

| ItemAttribute | ItemAttr1 | ItemAttr2 | ItemAttr3 | ItemAttr4 | Desc1 | Desc2 |
| --- | --- | --- | --- | --- | --- | --- |
| SC | false | true | false | false | Coolers | Coolers |
| CH | false | true | false | false | Champagne | Champagne |
| 30*355ML | true | false | false | false | 30*355ML | 30*355ML |
| TCC | false | true | false | false | Tall Cans Cooler | Tall Cans Cooler |
| SW13 | false | true | false | false | Spirits Wall 13 | Spirits Wall 13 |
| SW18 | false | true | false | false | Spirits Wall 18 | Spirits Wall 18 |
| BLACK DOG | false | false | true | false | BLACK DOG | BLACK DOG |
| SG3 | false | true | false | false | Spirits G3 | Spirits G3 |
| 8*355ML | true | false | false | false | 8*355ML | 8*355ML |
| BENCH 1775 | false | false | true | false | BENCH 1775 WINERY | BENCH 1775 WINERY |
| 750ML | true | false | false | false | 750ML | 750ML |
| SL12 | false | true | false | false | Spirits Lounge 12 | Spirits Lounge 12 |

</details>

### RSItemStockLevel (21,630 rows)



<details>
<summary>View random sample</summary>

| RecordID | ItemCode | SizeCode | ColorCode | WidthCode | MinStock01 | MinStock02 | MinStock03 | MinStock04 | MinStock05 | MinStock06 | MinStock07 | MinStock08 | MinStock09 | MinStock10 | MinStock11 | MinStock12 | MaxStock01 | MaxStock02 | MaxStock03 | MaxStock04 | MaxStock05 | MaxStock06 | MaxStock07 | MaxStock08 | MaxStock09 | MaxStock10 | MaxStock11 | MaxStock12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 5214 | 648774 |  |  |  | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 12 | 12 | 12 | 12 | 12 | 12 | 12 | 12 | 12 | 12 | 12 | 12 |
| 27116 | 335935 |  |  |  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 18940 | 724168 |  |  |  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 9944 | #843 |  |  |  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 101402 | 762344 |  |  |  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 94745 | 21306 |  |  |  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 34054 | 738534 |  |  |  | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 10 |
| 62228 | NC.APD.MGO.HB.BU |  |  |  | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 |
| 34770 | 634329 |  |  |  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 18387 | 365098 |  |  |  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 76854 | 02LEG0001 |  |  |  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 90737 | 506717 |  |  |  | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 |

</details>

### RSItemsWebAttribDefValue (213 rows)



<details>
<summary>View random sample</summary>

| AttrId | Value | ValueName | OrderIndex |
| --- | --- | --- | --- |
| 10 | Tequila | Tequila | 0 |
| 8 | Chile |  | 0 |
| 10 | Port | Port | 0 |
| 9 | Marlborough | New Zealand | 0 |
| 9 | Adelaide Hills | Australia | 0 |
| 9 | Waiheke Island | New Zealand | 0 |
| 5 | Sustainable |  | 0 |
| 9 | Salta  | Argentina | 0 |
| 3 | Sake |  | 0 |
| 9 | Burgundy | France | 0 |
| 8 | Anguilla |  | 0 |
| 8 | Thailand |  | 0 |

</details>

### RSItemVendor (22,393 rows)



<details>
<summary>View random sample</summary>

| VendorNum | ItemCode | Cost | ForeignCost | StockNumber | UnitCode | Conversion | MinReorderQty | PrimaryVendor | LastReceiveDate | LastReceiveCost | OID |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 286 | 827386 | 4.2 | 0 |  | 12 | 1 | 12 | true | 2017-06-02T12:45:48.000Z | 4.2 | 85391 |
| 377 | 283499 | 55.58 | 0 |  | 12 | 1 | 12 | true | 2018-08-22T11:41:51.000Z | 55.58 | 101888 |
| LDB | 115017 | 2.188 | 12.75 |  | 4P-BD | 4 | 6 | true | 2017-12-04T12:08:18.000Z | 2.188 | 103690 |
| LDB | 545244 | 9.06 | 0 |  |  | 1 | 12 | true | null | 8.99 | 91391 |
| 354 | 44693 | 17.64 | 0 |  |  | 1 | 0 | true | null | 17.64 | 54884 |
| LDB | 776534 | 34.13 | 0 |  | 12PK | 1 | 6 | true | 2017-06-05T10:54:09.000Z | 34.13 | 74966 |
| LDB | 511857 | 117.7 | 0 |  | 6 | 1 | 6 | true | null | 0 | 71279 |
| 054 | 896928 | 13 | 0 |  | 12 | 1 | 12 | true | 2018-09-01T09:51:55.000Z | 13 | 109747 |
| LDB | 131649 | 23.96 | 0 |  |  | 1 | 0 | true | null | 23.96 | 25125 |
| LDB | 33536 | 169.71 | 0 |  | 6 | 1 | 6 | true | 2017-01-16T13:08:49.000Z | 169.71 | 71093 |
| LDB | 828012 | 38.71 | 31.99 |  | 6 | 1 | 6 | true | 2018-03-16T15:55:01.000Z | 38.71 | 104148 |
| LDB | 11932 | 14.5 | 14.17 |  | 6PK4 | 1 | 4 | true | null | 14.5 | 45637 |

</details>

### RSKitItem (112 rows)



<details>
<summary>View random sample</summary>

| KitItemCode | Line | ItemCode | SizeCode | ColorCode | WidthCode | Qty | Price |
| --- | --- | --- | --- | --- | --- | --- | --- |
| TOBSPARKLE | 2 | 30445 |  |  |  | 1 | 0 |
| AROUNDWORLD | 6 | 65698 |  |  |  | 1 | 0 |
| AROUNDWORLD | 1 | GIFT003 |  |  |  | 1 | 0 |
| GIFTBASKETGLASSWARE | 2 | #2046 |  |  |  | 1 | 0 |
| AFICIONADOSCLUB | 3 | 16295 |  |  |  | 1 | 0 |
| GIFTBASKETWINE | 4 | #1088 |  |  |  | 1 | 0 |
| GIFTBASKETBEER | 1 | IPAGLASS |  |  |  | 1 | 0 |
| PFUNGSTADTER4C | 3 | 884338 |  |  |  | 1 | 2.55 |
| BESTBREWS | 1 | GIFT003 |  |  |  | 1 | 0 |
| BESTBREWS | 6 | 225219 |  |  |  | 1 | 0 |
| SAMPLERCLUB | 3 | SHIPPING10 |  |  |  | 1 | 0 |
| TOBSPIRITS | 1 | 112110 |  |  |  | 1 | 0 |

</details>

### RSLabelSetting (477 rows)



<details>
<summary>View random sample</summary>

| LabelID | CellID | Name | Version | ModuleType | PrinterType | PrinterHDPI | PrinterVDPI | PaperLandscape | PaperLeftMargin | PaperTopMargin | PaperVSpacing | PaperHSpacing | PaperRowCount | PaperColCount | LabelWidth | LabelHeight | LabelBarcodeType | LabelBarcodeCurLen | LabelBarcodeMaxLen | CellType | CellFieldName | CellFieldValue | CellLocationLeft | CellLocationTop | CellHeight | CellWidth | CellFontName | CellFontSize | CellFontBold | CellHZoomRate | CellVZoomRate | CellEmptyHidden | CellPositionFixed | CellHAlign | CellRemark |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 702 | 7 | Boca Admission Ticket | 1 | K | B | 0 | 0 | false | 0 | 0 | 0 | 0 | 1 | 1 | 5.47 | 1.968 | 0 | 10 | 13 | S | PRICE |  | 3.23 | 1.225 | 1 | 1 |  | 3 | false | 0 | 0 | false | false |  |  |
| 505 | 6 | 2.833" x 1" - 3 Across (with Deposit Amount) | 20 | S | W | 0 | 0 | false | 0.01 | 0.5 | 0.01 | 0 | 10 | 3 | 2.83 | 1 |  | 20 | 20 | S | BARCODE |  | 0.33 | 0.56 | 0.12 | 2.5 |  | 7.5 | false | 0 | 0 | false | false |  |  |
| 522 | 2 | 2.75" x 1" - 3 Across (Barcode) | 16 | S | W | 0 | 0 | false | 0.1 | 0.5 | 0 | 0 | 10 | 3 | 2.75 | 1 |  | 20 | 20 | B | ITEMCODE |  | 0.08 | 0.32 | 0.16 | 1.58 | 3 of 9 barcode | 16 | false | 0 | 0 | false | false |  |  |
| 510 | 2 | 2.833" x 1.25" - 3 Across x 8 Row | 16 | S | W | 0 | 0 | false | 0 | 0.5 | 0 | 0 | 8 | 3 | 2.83 | 1.25 |  | 20 | 20 | S | ATTR_DIV1 |  | 0.15 | 0.5 | 0.15 | 1.33 |  | 10 | false | 0 | 0 | false | false |  |  |
| 7 | 4 | Order Tracking Label | 15 | T | P | 0 | 0 | false | 0 | 0 | 0 | 0 | 8 | 1 | 2 | 1.772 | 0 | 20 | 20 | S | CUSTOMER_NAME |  | 0.419 | 0.778 | 0.079 | 1.772 |  | 4 | true | 1 | 1 | false | false |  |  |
| 604 | 2 | 1.75" x 0.5" - 4 Across | 19 | I | W | 0 | 0 | false | 0.3 | 0.5 | 0 | 0.3 | 20 | 4 | 1.75 | 0.5 |  | 10 | 13 | S | ITEM_CODE |  | 0 | 0.24 | 0.2 | 1.75 |  | 7.5 | false | 0 | 0 | false | false |  |  |
| 651 | 11 | 1.5" x 1" - 5 Across (20 digits Item #) | 19 | I | W | 0 | 0 | false | 0.5 | 0.5 | 0 | 0 | 10 | 5 | 1.5 | 1 |  | 10 | 13 | S | ORG_PRICE |  | 0.63 | 0.81 | 0.15 | 0.8 |  | 11 | true | 0 | 0 | false | false | R |  |
| 511 | 1 | 3" x 1.25" - 3 Across x 6 Row (Landscape) | 15 | S | W | 0 | 0 | true | 0.5 | 0.9 | 0 | 0 | 6 | 3 | 3 | 1.25 |  | 20 | 20 | S | DESC |  | 0.13 | 0.18 | 0.19 | 2.78 |  | 12 | true | 0 | 0 | false | false |  |  |
| 601 | 2 | 2.833" x 1" - 3 Across | 21 | I | W | 0 | 0 | true | 0 | 0 | 0 | 0 | 10 | 3 | 2.83 | 1 | 0 | 10 | 13 | B | BARCODE |  | 0.33 | 0.25 | 0.2 | 2.41 | 3 of 9 barcode | 18 | false | 0 | 0 | false | false |  |  |
| 515 | 2 | 4" x 1.33" - 2 Across x 7 Row (JWEBB SELECTION) | 1 | S | W | 0 | 0 | false | 0.25 | 0.25 | 0 | 0 | 7 | 2 | 4 | 1.33 |  | 20 | 20 | S | SALESPRICE |  | 2.13 | 0.16 | 0.27 | 1.1 |  | 18 | true | 0 | 0 | false | false | R |  |
| 604 | 3 | 1.75" x 0.5" - 4 Across | 19 | I | W | 0 | 0 | false | 0.3 | 0.5 | 0 | 0.3 | 20 | 4 | 1.75 | 0.5 |  | 10 | 13 | S | ORG_PRICE |  | 0.9 | 0.24 | 0.2 | 0.8 |  | 7.5 | false | 0 | 0 | false | false | R |  |
| 651 | 7 | 1.5" x 1" - 5 Across (20 digits Item #) | 19 | I | W | 0 | 0 | false | 0.5 | 0.5 | 0 | 0 | 10 | 5 | 1.5 | 1 |  | 10 | 13 | S | REAL_BARCODE |  | 0.05 | 0.71 | 0.11 | 1.45 |  | 6 | false | 0 | 0 | false | false |  |  |

</details>

### RSParameter (517 rows)



<details>
<summary>View random sample</summary>

| ParameterName | ParameterValue | Remark | Section |
| --- | --- | --- | --- |
| ShippingLabelID | 1 |  |  |
| SYSGenTxnBasedOn | 0 | null |  |
| SupportAward | Y |  |  |
| InvPrtAttribDesc | N |  |  |
| LblAutoGenBarcode | Y | null |  |
| SysItemPictureFolder | I:\Web Photos | null |  |
| DCExpense | N |  |  |
| OrdTackPrtLabelLMargin | 0 |  |  |
| NewItemDefRegStock10 | 0 | null |  |
| TermAllowModify | N | null |  |
| DCItemsRetExpense | N | null |  |
| SYSUseShipDateAsInvDateForOrderEntry | N |  |  |

</details>

### RSSecGroupFns (1,620 rows)



<details>
<summary>View random sample</summary>

| GroupID | AppSystemFnID | Enabled |
| --- | --- | --- |
| 001001 | CR_Feature_Discount14 | false |
| 001003 | RSW_Inv_InventoryReceiveReturn | true |
| 001004 | RPT_TXN_RptSalesReportByDailyOrCashierClosing | true |
| 001003 | RSW_System_CustomerSalesHistory | true |
| 001001 | RSW_System_ItemSearchbySty | false |
| 001003 | RPT_INV_RptInventoryByLot | true |
| 001002 | RSW_Inv_SplitCombineInventory | true |
| 001003 | RSW_RSWHousekeeping_ExportPItem | true |
| 001003 | CR_MainForm_Payment | true |
| 001001 | CR_Feature_DropoffPickup | true |
| 001003 | CR_Feature_CustomerTypeLevel4 | true |
| 001001 | RSW_Item_AddNewItem | false |

</details>

### RSSecGroupUsers (162 rows)



<details>
<summary>View random sample</summary>

| GroupID | EmployeeID |
| --- | --- |
| 001004 | 9880 |
| 001001 | 28 |
| 001001 | 42 |
| 001002 | 876 |
| 001002 | 25 |
| 001003 | 101 |
| 001003 | 6 |
| 001003 | 83 |
| 001002 | DL |
| 001001 | 24 |
| 001001 | 8980 |
| 001001 | 88 |

</details>

### RSSecSystemFns (405 rows)



<details>
<summary>View random sample</summary>

| AppSystemFnID | AppSystemID | AppSystemFnGroupID | SortIndex | Detail |
| --- | --- | --- | --- | --- |
| CR_Feature_Discount14 | C | C01 | 34 | Discount 14 |
| CR_Feature_3ndSalesperson | C | C01 | 57 | Modify 3nd Salesperson |
| RSW_Item_FinishedProduct | R | R00 | 13 | Enter/Modify Parts for Finished Product |
| RPT_TXN_SalesTransaction | R | R05 | 50 | Sales Transaction Register |
| RPT_TXN_RptCustomerSpending | R | R05 | 11 | Customer Spending Report |
| RSW_Item_ItemListByStyle | R | R00 | 18 | Item List by Style |
| CR_Feature_CustomerTypeLevel1 | C | C01 | 2 | Customer Type Level 1 |
| RSW_Item_DeleteItemVendor | R | R00 | 6 | Delete Item Vendor |
| CR_Feature_Discount3 | C | C01 | 23 | Discount 3 |
| RSW_System_CustomerSalesHistory | R | R06 | 0 | Customer Sales History |
| CR_Feature_Tender19 | C | C01 | 99 | Tender 19 |
| CR_Feature_CustomerTypeLevel14 | C | C01 | 15 | Customer Type Level 14 |

</details>

### RSSSSpecialPrice (288 rows)



<details>
<summary>View random sample</summary>

| EventNumber | CustType | CatCode | SubcatCode | ItemCode | PriceType | DiscountRate | Price | LimitsQty | PrintMsg | LastUpdate | CommissionType | CommissionRate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 57 |  |  |  | 210008 | P | 0.10000000149011612 | 0 | 0 | false | 2018-08-30T18:38:48.000Z | C | 0 |
| 2 |  |  |  | 570 | A | 0 | 26.79 | 0 | false | 2016-06-09T15:29:24.000Z | C | 0 |
| 37 |  |  |  | 601195 | P | 0.05000000074505806 | 0 | 0 | false | 2017-11-20T19:13:58.000Z | C | 0 |
| 56 |  |  |  | 864710 | P | 0.10000000149011612 | 0 | 0 | false | 2018-08-21T17:56:49.000Z | C | 0 |
| 62 |  |  |  | 216570 | P | 0.05000000074505806 | 0 | 0 | false | 2018-10-01T17:47:44.000Z | C | 0 |
| 43 |  |  |  | 132969 | A | 0 | 97.66 | 0 | false | 2018-02-14T19:03:33.000Z | C | 0 |
| 61 | WC |  |  | 190023 | A | 0 | 27.54 | 0 | false | 2018-10-04T18:02:20.000Z | C | 0 |
| 18 |  |  |  | 441030 | P | 0.10000000149011612 | 0 | 0 | false | 2016-06-14T12:31:20.000Z | C | 0 |
| 52 |  |  |  | 124453 | P | 0.05000000074505806 | 0 | 0 | false | 2018-05-17T19:46:49.000Z | C | 0 |
| 2 |  |  |  | 816512 | A | 0 | 60.09 | 0 | false | 2016-06-09T16:10:10.000Z | C | 0 |
| 23 |  |  |  | 407403 | A | 0 | 36.15 | 0 | false | 2017-04-26T16:39:22.000Z | C | 0 |
| 63 |  |  |  | 853614 | P | 0.05000000074505806 | 0 | 0 | false | 2018-10-18T18:53:11.000Z | C | 0 |

</details>

### RSSubcategory (138 rows)



<details>
<summary>View random sample</summary>

| SubcatCode | CatCode | Desc1 | Desc2 | CommissionRateA | CommissionRateB | CommissionRateC | CommissionRateD | CommissionRateE | SalesDept | SalesAccount | InventoryDept | InventoryAccount | CostDept | CostAccount | DefaultTaxable1 | DefaultTaxable2 | DefaultTaxable3 | DefaultTaxable4 | PriceIncTax1 | PriceIncTax2 | PriceIncTax3 | PriceIncTax4 | DefaultMarkup | DefaultGP | RecalBasedOnDefault |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 4040 | 40 | TEQUILA | TEQUILA | 0 | 0 | 0 | 0 | 0 | 000 | SALE | 000 | INV | 000 | COST | true | true | false | false | true | true | false | false | 0 | 0 | false |
| CD01 | CD | CASH DROP | CASH DROP | 0 | 0 | 0 | 0 | 0 |  |  |  |  |  |  | false | false | false | false | false | false | false | false | 0 | 0 | false |
| 5095 | 50 | OTHER WINE | OTHER WINE | 0 | 0 | 0 | 0 | 0 | 000 | SALE | 000 | INV | 000 | COST | true | true | false | false | true | true | false | false | 0 | 0 | false |
| 3035 | 30 | NA BEER | NA BEER | 0 | 0 | 0 | 0 | 0 |  |  |  |  |  |  | true | false | true | false | true | false | true | false | 0 | 0 | false |
| 9009 | 90 | WOOD BOXES | WOOD BOXES | 0 | 0 | 0 | 0 | 0 |  |  |  |  |  |  | true | false | true | false | true | false | true | false | 0 | 0 | false |
| 5000 | 50 | DRAUGHT-WINE | DRAUGHT-WINE | 0 | 0 | 0 | 0 | 0 | 000 | SALE | 000 | INV | 000 | COST | true | true | false | false | true | true | false | false | 0 | 0 | false |
| 5391 | 50 | CELLAR-WHT-USA | CELLAR WHT USA | 0 | 0 | 0 | 0 | 0 |  |  |  |  |  |  | true | true | false | false | true | true | false | false | 0 | 0 | false |
| 5245 | 50 | WHITE-GERMANY | WHITE-GERMANY | 0 | 0 | 0 | 0 | 0 | 000 | SALE | 000 | INV | 000 | COST | true | true | false | false | true | true | false | false | 0 | 0 | false |
| 5150 | 50 | RED-GREECE | RED-GREECE | 0 | 0 | 0 | 0 | 0 | 000 | SALE | 000 | INV | 000 | COST | true | true | false | false | true | true | false | false | 0 | 0 | false |
| 9005 | 90 | MISCELLANEOUS | MISCELLANEOUS | 0 | 0 | 0 | 0 | 0 |  |  |  |  |  |  | true | false | true | false | true | false | true | false | 0 | 0 | false |
| 4003 | 40 | BC CRAFT | BC CRAFT | 0 | 0 | 0 | 0 | 0 |  |  |  |  |  |  | true | true | false | false | true | true | false | false | 0 | 33 | false |
| 5390 | 50 | CELLAR-RED-USA | CELLAR RED USA | 0 | 0 | 0 | 0 | 0 |  |  |  |  |  |  | true | true | false | false | true | true | false | false | 0 | 0 | false |

</details>

### RSTxnDetail (1,249 rows)



<details>
<summary>View random sample</summary>

| TxnID | Line | SalesPersonID | SalesPerson2ID | SalesPerson3ID | EntryTime | ItemCode | ItemType | SizeCode | ColorCode | WidthCode | SerialNumber | Desc1 | Desc2 | ExtDesc | ItemDeposit | SalesType | Qty | OrgPrice | OrgPriceType | Price | PriceType | SalesPrice | NetPrice | Amount | NetAmount | QPA | QPAAmount | DiscountAmount | DiscountNetAmount | DepositAmount | TxnDiscountAmount | DiscountTypeID | DiscountOption | DiscountType | DiscountTypeRate | DiscountTypeAmt | TaxInc1 | TaxInc2 | TaxInc3 | TaxInc4 | Taxable1 | Taxable2 | Taxable3 | Taxable4 | Cost | InventoryUpdated | InventoryRecordID | Status | GroupType | GroupParentLine | GroupTopParentLine | LinkType | SpecialCommissionRate | Extra | Memo |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| -470099 | 4 | 5317 |  |  | 2018-10-26T15:30:13.000Z | 61580 | N |  |  |  |  | SARL ARLAUD GC ECHEZEAUX 2013 | 2013; GC; Not Rated | SARL ARLAUD   | 0.1 | N | 6 | 226.95 | 5 | 226.95 | 5 | 226.95 | 0 | 1361.7 | 1184.09 | Q | 0 | 0 | 0 | 0.6 | 0 | 0 | N | N | 0 | 0 | true | true | false | false | Y | Y | N | N | 0 | false | 0 |  |  | 0 | 0 |  | null | #SSORGPRICEB#289.05#SSORGPRICEE##SSORGPRICETYPEB#1#SSORGPRICETYPEE##REORGSTIDB#0#REORGSTIDE# |  |
| -469217 | 7 | 232 |  |  | 2018-09-19T11:00:01.000Z | 39347 | N |  |  |  |  | SEQUEL SYRAH | SEQUEL SYRAH 2014 | LONG SHADOWS VINTNERS   | 0.1 | N | 1 | 106.75 | 1 | 106.75 | 1 | 106.75 | 0 | 106.75 | 92.83 | Q | 0 | 0 | 0 | 0.1 | 0 | 0 | N | N | 0 | 0 | true | true | false | false | Y | Y | N | N | 0 | false | 0 |  |  | 0 | 0 |  | null | #SSORGPRICEB#106.75#SSORGPRICEE##SSORGPRICETYPEB#1#SSORGPRICETYPEE##REORGSTIDB#0#REORGSTIDE# | Sep 17th Private Charity Tasting wine |
| -469145 | 5 | 6864 |  |  | 2018-09-27T10:43:26.000Z | 556951 | N |  |  |  |  | BITTERHOUSE LADAME AMARO | BITTERHOUSE LADAME AMARO | G&W DISTILLING INC. | 0.1 | N | 1 | 34.35 | 1 | 34.35 | 1 | 34.35 | 0 | 34.35 | 29.87 | Q | 0 | 0 | 0 | 0.1 | 0 | 0 | N | N | 0 | 0 | true | true | false | false | Y | Y | N | N | 0 | false | 0 |  |  | 0 | 0 |  | null | #SSORGPRICEB#34.3500#SSORGPRICEE##SSORGPRICETYPEB#1#SSORGPRICETYPEE##REORGSTIDB#0#REORGSTIDE# |  |
| -466589 | 6 | 2222 |  |  | 2018-05-23T16:35:47.000Z | 168625 | N |  |  |  |  | XADREZ VINHO VERDE | XADREZ VINHO VERDE | DAO SUL | 0.1 | N | 1 | 15.25 | 1 | 15.25 | 1 | 15.25 | 0 | 15.25 | 13.26 | Q | 0 | 0 | 0 | 0.1 | 0 | 0 | N | N | 0 | 0 | true | true | false | false | Y | Y | N | N | 0 | false | 0 |  |  | 0 | 0 |  | null | #SSORGPRICEB#15.25#SSORGPRICEE##SSORGPRICETYPEB#1#SSORGPRICETYPEE##REORGSTIDB#0#REORGSTIDE# |  |
| -467056 | 1 | 253 |  |  | 2018-06-11T20:26:57.000Z | 126370 | N |  |  |  |  | NUDE VODKA SODA CUCUMBER MINT 6C | NUDE VODKA SODA CUCUMBER MINT 6C | NUDE VODKA SODA CUCUMBER MINT 6C | 0.6 | N | 1 | 15.3 | 1 | 15.3 | 1 | 15.3 | 0 | 15.3 | 13.3 | Q | 0 | 0 | 0 | 0.6 | 0 | 0 | N | N | 0 | 0 | true | true | false | false | Y | Y | N | N | 0 | false | 0 |  |  | 0 | 0 |  | null | #SSORGPRICEB#15.3#SSORGPRICEE##SSORGPRICETYPEB#1#SSORGPRICETYPEE##REORGSTIDB#0#REORGSTIDE# |  |
| -467008 | 25 | 35 |  |  | 2018-10-27T11:30:58.000Z | 796961 | N |  |  |  |  | FLOR DE CANA 25 YO | FLOR DE CANA 25 YO | RUM TRADING INTERNATIONAL CORP. | 0.1 | N | 2 | 214.9 | 1 | 214.9 | 1 | 214.9 | 0 | 429.8 | 373.74 | Q | 0 | 0 | 0 | 0.2 | 0 | 0 | N | N | 0 | 0 | true | true | false | false | Y | Y | N | N | 0 | false | 0 |  |  | 0 | 0 |  | null | #SSORGPRICEB#214.9#SSORGPRICEE##SSORGPRICETYPEB#1#SSORGPRICETYPEE##AWENPNTB#1074#AWENPNTE##REORGSTIDB#0#REORGSTIDE# |  |
| -468086 | 5 | 308 |  |  | 2018-07-25T19:39:25.000Z | 131066 | N |  |  |  |  | PARKSIDE DREAMBOAT TC | PARKSIDE DREAMBOAT TC |  | 0.1 | N | 1 | 5.1 | 1 | 5.1 | 1 | 5.1 | 0 | 5.1 | 4.43 | Q | 0 | 0 | 0 | 0.1 | 0 | 0 | N | N | 0 | 0 | true | true | false | false | Y | Y | N | N | 0 | false | 0 |  |  | 0 | 0 |  | null | #SSORGPRICEB#5.1#SSORGPRICEE##SSORGPRICETYPEB#1#SSORGPRICETYPEE##REORGSTIDB#0#REORGSTIDE# |  |
| -466491 | 2 | 250 |  |  | 2018-05-17T15:30:14.000Z | 972422 | N |  |  |  |  | STANLEY PARK SUNSETTER ALE 6C | STANLEY PARK SUNSETTER ALE 6C | SUMMER ALE | 0.6 | N | 1 | 11.95 | 5 | 11.95 | 5 | 11.95 | 0 | 11.95 | 10.39 | Q | 0 | 0 | 0 | 0.6 | 0 | 0 | N | N | 0 | 0 | true | true | false | false | Y | Y | N | N | 0 | false | 0 |  |  | 0 | 0 |  | null | #SSORGPRICEB#14.5#SSORGPRICEE##SSORGPRICETYPEB#1#SSORGPRICETYPEE##REORGSTIDB#0#REORGSTIDE# |  |
| -467168 | 1 | 308 |  |  | 2018-06-27T12:21:08.000Z | 181342 | N |  |  |  |  | TALISKER 6 YO DOUGLAS LAING PROVENANCE | TALISKER 6 YO DOUGLAS LAING PROVENANCE |  | 0.1 | N | 1 | 154.02 | 4 | 154.02 | 4 | 154.02 | 0 | 154.02 | 133.93 | Q | 0 | 0 | 0 | 0.1 | 0 | 0 | N | N | 0 | 0 | true | true | false | false | Y | Y | N | N | 0 | false | 0 |  |  | 0 | 0 |  | null | #SSORGPRICEB#214.85#SSORGPRICEE##SSORGPRICETYPEB#1#SSORGPRICETYPEE##REORGSTIDB#0#REORGSTIDE##AWENPNTB#154#AWENPNTE# |  |
| -459734 | 2 | 5000 |  |  | 2017-07-22T10:58:49.000Z | 512046 | N |  |  |  |  | ROCKSTAR VODKA TC | ROCKSTAR VODKA TC | MARK ANTHONY BRANDS | 0.1 | N | 1 | 4.55 | 1 | 4.55 | 1 | 4.55 | 0 | 4.55 | 3.96 | Q | 0 | 0 | 0 | 0.1 | 0 | 0 | N | N | 0 | 0 | true | true | false | false | Y | Y | N | N | 0 | false | 0 |  |  | 0 | 0 |  | null | #SSORGPRICEB#4.55#SSORGPRICEE##SSORGPRICETYPEB#1#SSORGPRICETYPEE##REORGSTIDB#0#REORGSTIDE# |  |
| -468911 | 1 | 994 |  |  | 2018-08-31T18:54:58.000Z | 602557 | N |  |  |  |  | FRULI STRAWBERRY BEER | FRULI STRAWBERRY BEER | STRAWBERRY WHEAT | 0.1 | N | 10 | 3.8 | 1 | 3.8 | 1 | 3.8 | 0 | 38 | 33.04 | Q | 0 | 0 | 0 | 1 | 0 | 0 | N | N | 0 | 0 | true | true | false | false | Y | Y | N | N | 0 | false | 0 |  |  | 0 | 0 |  | null | #SSORGPRICEB#3.8#SSORGPRICEE##SSORGPRICETYPEB#1#SSORGPRICETYPEE##REORGSTIDB#0#REORGSTIDE# |  |
| -467379 | 1 | 253 |  |  | 2018-06-25T20:05:24.000Z | ICE2 | N |  |  |  |  | ICE | ICE |  | 0 | N | 1 | 2 | 1 | 2 | 1 | 2 | 0 | 2 | 2 | Q | 0 | 0 | 0 | 0 | 0 | 0 | N | N | 0 | 0 | false | false | false | false | N | N | N | N | 0 | false | 0 |  |  | 0 | 0 |  | null | #SSORGPRICEB#2#SSORGPRICEE##SSORGPRICETYPEB#1#SSORGPRICETYPEE##REORGSTIDB#0#REORGSTIDE# |  |

</details>

### RSTxnHeader (490 rows)



<details>
<summary>View random sample</summary>

| TxnID | InvoiceNO | TxnType | TxnDate | CustStore | CustomerID | CustType | OrderID | SalesPersonID | SalesPerson2ID | Total | SubTotal | NetSubTotal | TotalDiscountAmount | TotalDiscountNetAmount | ItemDepositTotal | TxnDiscountTotal | Tax1 | Tax2 | Tax3 | Tax4 | TaxIncludedAmt1 | TaxIncludedAmt2 | TaxIncludedAmt3 | TaxIncludedAmt4 | TaxRate1 | TaxRate2 | TaxRate3 | TaxRate4 | CurrencyCode | ExchangeRate | Status | DeptCode | WSCode | ShiftID | CustomerPONumber | Terms | Extra | CashierClosingID | RolloverCount | ReasonCode | EmployeeID | VoidEmployeeID | Remark | RecallTime | AmountPaid | CustTaxAreaCode |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| -467942 | 0 | S | 2018-07-19T18:57:59.000Z | 0 | 406526 | CP | 0 | 647 |  | 10.2 | 9.6 | 8.35 | 0 | 0 | 0.6 | 0 | 0 | 0 | 0 | 0 | 0.42 | 0.83 | 0 | 0 | 0.05000000074505806 | 0.10000000149011612 | 0.07000000029802322 | 0.05000000074505806 | CDN | 1 | P | 1 | 1 | 0 |  |  | #AWVIPCNOB#000-00406526#AWVIPCNOE##AWVIPNMB#Escobar, Agustine#AWVIPNME##AWOPBALB#49#AWOPBALE# | 0 | 0 |  | CASH |  |  | null | 0 |  |
| -466978 | 0 | S | 2018-06-07T20:13:59.000Z | 0 | 1 |  | 0 | 308 |  | 5.5 | 5.4 | 4.7 | 0 | 0 | 0.1 | 0 | 0 | 0 | 0 | 0 | 0.23 | 0.47 | 0 | 0 | 0.05000000074505806 | 0.10000000149011612 | 0.07000000029802322 | 0.05000000074505806 | CDN | 1 | P | 1 | 1 | 0 |  |  |  | 0 | 0 |  | CASH |  |  | null | 0 |  |
| -467624 | 0 | S | 2018-07-06T22:02:40.000Z | 0 | 1 |  | 0 | 646 |  | 6.5 | 6.4 | 6.1 | 0 | 0 | 0.1 | 0 | 0 | 0 | 0 | 0 | 0.3 | 0 | 0 | 0 | 0.05000000074505806 | 0.10000000149011612 | 0.07000000029802322 | 0.05000000074505806 | CDN | 1 | P | 7 | 7 | 0 |  |  |  | 0 | 0 |  | CASH |  |  | 2018-07-06T16:47:33.000Z | 0 |  |
| -469248 | 0 | S | 2018-09-15T17:12:48.000Z | 0 | 414010 | CP | 0 | 876 |  | 141.5 | 141.4 | 122.96 | 0 | 0 | 0.1 | 0 | 0 | 0 | 0 | 0 | 6.14 | 12.3 | 0 | 0 | 0.05000000074505806 | 0.10000000149011612 | 0.07000000029802322 | 0.05000000074505806 | CDN | 1 | P | 6 | 6 | 0 |  |  | #AWVIPCNOB#000-00414010#AWVIPCNOE##AWVIPNMB#Adcock, Jessie#AWVIPNME# | 0 | 0 |  | CASH |  |  | null | 0 |  |
| -470076 | 0 | S | 2018-10-25T15:50:18.000Z | 0 | 412433 | XP | 0 | DL |  | 163.2 | 163 | 141.74 | 0 | 0 | 0.2 | 0 | 0 | 0 | 0 | 0 | 7.09 | 14.17 | 0 | 0 | 0.05000000074505806 | 0.10000000149011612 | 0.07000000029802322 | 0.05000000074505806 | CDN | 1 | P | 94 | 94 | 0 |  |  |  | 0 | 0 |  | CASH |  |  | null | 0 |  |
| -466632 | 0 | S | 2018-05-24T14:33:36.000Z | 0 | 411388 | CP | 0 | 1056 |  | 30 | 29.9 | 26 | 0 | 0 | 0.1 | 0 | 0 | 0 | 0 | 0 | 1.3 | 2.6 | 0 | 0 | 0.05000000074505806 | 0.10000000149011612 | 0.07000000029802322 | 0.05000000074505806 | CDN | 1 | P | 98 | 98 | 0 |  |  | #AWVIPCNOB#000-00411388#AWVIPCNOE##AWVIPNMB#Schutz, Kane#AWVIPNME# | 0 | 0 |  | CASH |  |  | null | 0 |  |
| -468882 | 0 | S | 2018-08-30T17:39:56.000Z | 0 | 1 |  | 0 | 44 |  | 80.4 | 78 | 67.83 | 0 | 0 | 2.4 | 0 | 0 | 0 | 0 | 0 | 3.39 | 6.78 | 0 | 0 | 0.05000000074505806 | 0.10000000149011612 | 0.07000000029802322 | 0.05000000074505806 | CDN | 1 | P | 6 | 6 | 0 |  |  |  | 0 | 0 |  | CASH |  |  | null | 0 |  |
| -466792 | 0 | S | 2018-05-30T15:39:31.000Z | 0 | 526147 | CP | 0 | 989 |  | 28.7 | 28.6 | 24.87 | 0 | 0 | 0.1 | 0 | 0 | 0 | 0 | 0 | 1.24 | 2.49 | 0 | 0 | 0.05000000074505806 | 0.10000000149011612 | 0.07000000029802322 | 0.05000000074505806 | CDN | 1 | P | 2 | 2 | 0 |  |  | #AWOPBALB#279#AWOPBALE##AWVIPCNOB#000-00526147#AWVIPCNOE##AWVIPNMB#Schell, Alexandra#AWVIPNME# | 0 | 0 |  | CASH |  |  | 2018-05-30T15:38:15.000Z | 0 |  |
| -467106 | 0 | S | 2018-06-16T10:09:31.000Z | 0 | 1 |  | 0 | 0216 |  | 2107.8 | 2097 | 1823.48 | 0 | 0 | 10.8 | 0 | 0 | 0 | 0 | 0 | 91.17 | 182.35 | 0 | 0 | 0.05000000074505806 | 0.10000000149011612 | 0.07000000029802322 | 0.05000000074505806 | CDN | 1 | P | 87 | 87 | 0 |  |  |  | 0 | 0 |  | CASH |  |  | 2018-06-13T17:54:18.000Z | 0 |  |
| -466148 | 0 | S | 2018-05-02T16:19:55.000Z | 0 | 1 |  | 0 | 35 |  | 1554 | 1487.4 | 1293.39 | 0 | 0 | 66.6 | 0 | 0 | 0 | 0 | 0 | 64.67 | 129.34 | 0 | 0 | 0.05000000074505806 | 0.10000000149011612 | 0.07000000029802322 | 0.05000000074505806 | CDN | 1 | P | 6 | 6 | 0 |  |  |  | 0 | 0 |  | CASH |  |  | null | 0 |  |
| -468120 | 0 | S | 2018-07-26T21:09:57.000Z | 0 | 412949 | CP | 0 | 1974 |  | 190.65 | 190.35 | 165.51 | 0 | 0 | 0.3 | 0 | 0 | 0 | 0 | 0 | 8.29 | 16.55 | 0 | 0 | 0.05000000074505806 | 0.10000000149011612 | 0.07000000029802322 | 0.05000000074505806 | CDN | 1 | P | 2 | 2 | 0 |  |  | #AWVIPCNOB#000-00412949#AWVIPCNOE##AWVIPNMB#wayne#AWVIPNME# | 0 | 0 |  | CASH |  |  | null | 0 |  |
| -469358 | 0 | S | 2018-09-21T14:20:51.000Z | 0 | 112739 |  | 0 | DL |  | 3.2 | 3.1 | 2.7 | 0 | 0 | 0.1 | 0 | 0 | 0 | 0 | 0 | 0.13 | 0.27 | 0 | 0 | 0.05000000074505806 | 0.10000000149011612 | 0.07000000029802322 | 0.05000000074505806 | CDN | 1 | P | 6 | 6 | 0 |  |  |  | 0 | 0 |  | CASH |  |  | null | 0 |  |

</details>

### RSUserDrawer (1,793 rows)



<details>
<summary>View random sample</summary>

| EmployeeID | WSCode | CashDrawerID |
| --- | --- | --- |
| 16 | 4 | 1111 |
| 308 | 96 | 1111 |
| 9890 | 89 | 1111 |
| 6050 | 85 | 1111 |
| 24 | 89 | 1111 |
| 7821 | 85 | 1111 |
| 647 | 93 | 1111 |
| 0259 | 7 | 1111 |
| 16 | 5 | 1111 |
| 0605 | 2 | 1111 |
| 1938 | 3 | 1111 |
| 1216 | 86 | 1111 |

</details>

# RS0000HISTORY

Showing tables with at least 100 rows.

### RSCashierClosingTender (113,162 rows)



<details>
<summary>View random sample</summary>

| CashierClosingID | TenderTypeID | ExchangeRate | PosCash | ForeignPosCash | FloatCash | DistributeCash | ActualCash | ShortOver |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 17918 | 13 | 1 | 930.03 | 930.03 | 0 | 930.03 | 930.03 | 0 |
| 14534 | 3 | 1 | 7482.86 | 7482.86 | 0 | 7482.86 | 7482.86 | 0 |
| 8239 | 15 | 1 | 50 | 50 | 0 | 50 | 50 | 0 |
| 15639 | 5 | 1 | 204.3 | 204.3 | 0 | 204.3 | 204.3 | 0 |
| 15353 | 4 | 1 | 1825.16 | 1825.16 | 0 | 1825.16 | 1825.16 | 0 |
| 13679 | 1 | 1 | 213.1 | 213.1 | 300 | 513.1 | 213.1 | 0 |
| 10180 | 7 | 1 | 19.4 | 19.4 | 0 | 19.4 | 19.4 | 0 |
| 550 | 15 | 1 | 25 | 25 | 0 | 25 | 25 | 0 |
| 14241 | 15 | 1 | 150 | 150 | 0 | 150 | 150 | 0 |
| 4622 | 1 | 1 | 174.45 | 174.45 | 300 | 474.45 | 174.45 | 0 |
| 2987 | 4 | 1 | 646.68 | 646.68 | 0 | 646.68 | 646.68 | 0 |
| 3548 | 1 | 1 | 1397.75 | 1397.75 | 300 | 1697.75 | 1397.75 | 0 |

</details>

### RSCashierClosingTenderDetail (137,093 rows)



<details>
<summary>View random sample</summary>

| CashierClosingID | TenderTypeID | FaceDescription | FaceValue | Count | Amount | SortNo |
| --- | --- | --- | --- | --- | --- | --- |
| 17032 | 1 | 10 Cents | 0.1 | 48 | 4.8 | 10 |
| 12089 | 1 | 1 Cents | 0.01 | 0 | 0 | 8 |
| 2891 | 1 | $ 5 | 5 | 27 | 135 | 3 |
| 12698 | 1 | 5 Cents | 0.05 | 32 | 1.6 | 9 |
| 2275 | 1 | $ 1 | 1 | 37 | 37 | 1 |
| 4026 | 1 | 5 Cents | 0.05 | 47 | 2.35 | 9 |
| 16153 | 1 | $ 1 | 1 | 37 | 37 | 1 |
| 9687 | 1 | $ 100 | 100 | 0 | 0 | 7 |
| 3644 | 1 | $ 1 | 1 | 37 | 37 | 1 |
| 13040 | 1 | $ 100 | 100 | 0 | 0 | 7 |
| 7606 | 1 | $ 10 | 10 | 1 | 10 | 4 |
| 17429 | 1 | $ 10 | 10 | 22 | 220 | 4 |

</details>

### RSCCACreditRequest (132,498 rows)



<details>
<summary>View random sample</summary>

| CCACreditRequestID | TxnID | LineNum | CustStore | CustomerID | TxnCode | TrackII | CardNumber | ExpiryDate | PreAuthAmount | Amount | AuthNum | TxnDate | CompletionDate | Status | CardPlan | EmployeeID | EmployeeName | Batch | BatchClosed | ItemNumber | ResponseCode | AccountType | RefData | ZipCode | AVSResult | TransID | SettlementNum | TerminalID | ISOCode | ResponseMessage | CardHolderName | TrackI | OriginalTransID | CVResult | DestZipCode | CreditType | DataStatus | DailyCloseDelete | MaskedCardNumber | ByVoice | TipAmount | OrderID | OriginalOrderID | Lang | EntryMode | AID | AppLabel | AppPreferredName | CvmIndicator | ARQC | TvrARQC | TvrTCACC | TCACC | MerchantID | MerchantReceipt | CustomerReceipt | TerminalGroup | ConditionCode | Extra | RetrieveRefNum |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1093804 | 1920637 | 1 | 0 | 109783 | PU |  |  |  | 0 | 25.6 | 004318 | 2018-08-21T16:25:52.000Z | 2018-08-21T16:26:19.000Z | C | DB | 8980 | MILANA |  | false |  |  | F | 126 |  |  | 000000000 |  | 016 |  | Approved |  |  |  |  |  | D | OK | false | ************6415 | false | 0 | 001-082118162554 |  | En | 2 | A0000002771010 | INTERAC |  | N |  | 8000008000 |  | 00000052 | 5771768 | ACCOUNT WILL BE DEBITED WITH THE|ABOVE AMOUNT|(OR CREDITED IF CREDIT VOUCHER)|RETAIN THIS COPY FOR STATEMENT|VERIFICATION|^THANK YOU|PLEASE COME AGAIN|^ |  |  |  |  | 00000052 |
| 1020722 | 1823916 | 1 | 0 | 531475 | PU |  |  |  | 0 | 4.95 | 226974 | 2018-05-19T19:51:01.000Z | 2018-05-19T19:51:16.000Z | C | DB | 647 | JENNA |  | false |  |  | F | 296 |  |  | 000000000 |  | 016 |  | Approved |  |  |  |  |  | D | OK | false | ************0295 | false | 0 | 001-051918195105 |  | En | 2 | A0000002771010 | Interac |  | N |  | 8000008000 |  | 00000125 | 5771768 | ACCOUNT WILL BE DEBITED WITH THE|ABOVE AMOUNT|(OR CREDITED IF CREDIT VOUCHER)|RETAIN THIS COPY FOR STATEMENT|VERIFICATION|^THANK YOU|PLEASE COME AGAIN|^ |  |  |  |  | 00000125 |
| 1044752 | 1855708 | 1 | 0 | 1 | PU |  |  |  | 0 | 195.8 | 888822 | 2018-06-20T22:39:10.000Z | 2018-06-20T22:39:39.000Z | C | AM | 1216 | JOSEF |  | false |  |  |  | 266 |  |  | 000000000 |  | 017 |  | Approved |  |  |  |  |  | C | OK | false | ************2038 | false | 0 | 002-062018223927 |  | En | 2 | A000000025010801 | AMERICAN EXPRESS |  | S |  | 0000008000 |  |  | 5771768 | I AGREE TO PAY ABOVE TOTAL AMOUNT|IN ACCORDANCE WITH CARD ISSUER'S|AGREEMENT|(MERCHANT AGREEMENT IF CREDIT VOUCHER)|RETAIN THIS COPY FOR STATEMENT|VERIFICATION|^THANK YOU|PLEASE COME AGAIN|^ |  |  |  | #TSIB#E800#TSIE# |  |
| 1069443 | 1888380 | 1 | 0 | 1 | PU |  |  |  | 0 | 44.2 | 04606F | 2018-07-21T18:48:08.000Z | 2018-07-21T18:48:58.000Z | C | VI | 876 | JOE |  | false |  |  |  | 163 |  |  | 000000000 |  | 018 |  | Approved |  |  |  |  |  | C | OK | false | ************0413 | false | 0 | 005-072118184844 |  | Un | 2 | A0000000031010 | Visa CREDIT |  | N |  | 0000000000 |  |  | 5771768 | I AGREE TO PAY ABOVE TOTAL AMOUNT|IN ACCORDANCE WITH CARD ISSUER'S|AGREEMENT|(MERCHANT AGREEMENT IF CREDIT VOUCHER)|RETAIN THIS COPY FOR STATEMENT|VERIFICATION|^THANK YOU|PLEASE COME AGAIN|^ |  |  |  |  |  |
| 1051921 | 1865242 | 1 | 0 | 520275 | PU |  |  |  | 0 | 12.55 | 460431 | 2018-06-30T14:56:30.000Z | 2018-06-30T14:56:46.000Z | C | DB | 1216 | JOSEF |  | false |  |  | F | 63 |  |  | 000000000 |  | 017 |  | Approved |  |  |  |  |  | D | OK | false | ************4344 | false | 0 | 002-063018145637 |  | En | 2 | A0000002771010 | Interac |  | N |  | 8000008000 |  | 00000027 | 5771768 | ACCOUNT WILL BE DEBITED WITH THE|ABOVE AMOUNT|(OR CREDITED IF CREDIT VOUCHER)|RETAIN THIS COPY FOR STATEMENT|VERIFICATION|^THANK YOU|PLEASE COME AGAIN|^ |  |  |  |  | 00000027 |
| 1016797 | 1818769 | 1 | 0 | 527505 | PU |  |  |  | 0 | 25.8 | 023355 | 2018-05-14T18:07:25.000Z | 2018-05-14T18:07:52.000Z | C | VI | 253 | AMANDA |  | false |  |  |  | 102 |  |  | 000000000 |  | 017 |  | Approved |  |  |  |  |  | C | OK | false | ************8973 | false | 0 | 002-051418180728 |  | En | 2 | A0000000031010 | VISA CREDIT |  | N |  | 0000000000 |  |  | 5771768 | I AGREE TO PAY ABOVE TOTAL AMOUNT|IN ACCORDANCE WITH CARD ISSUER'S|AGREEMENT|(MERCHANT AGREEMENT IF CREDIT VOUCHER)|RETAIN THIS COPY FOR STATEMENT|VERIFICATION|^THANK YOU|PLEASE COME AGAIN|^ |  |  |  |  |  |
| 1105756 | 1936825 | 1 | 0 | 1 | PU |  |  |  | 0 | 42.15 | 02520I | 2018-09-07T14:17:33.000Z | 2018-09-07T14:17:48.000Z | C | VI | 6864 | JADINE |  | false |  |  |  | 31 |  |  | 000000000 |  | 017 |  | Approved |  |  |  |  |  | C | OK | false | ************3419 | false | 0 | 002-090718141731 |  | En | 2 | A0000000031010 | Visa Credit |  | N |  | 0000000000 |  |  | 5771768 | I AGREE TO PAY ABOVE TOTAL AMOUNT|IN ACCORDANCE WITH CARD ISSUER'S|AGREEMENT|(MERCHANT AGREEMENT IF CREDIT VOUCHER)|RETAIN THIS COPY FOR STATEMENT|VERIFICATION|^THANK YOU|PLEASE COME AGAIN|^ |  |  |  |  |  |
| 1114188 | 1947928 | 2 | 0 | 414102 | PU |  |  |  | 0 | 95.35 | 05618I | 2018-09-21T13:08:23.000Z | 2018-09-21T13:08:59.000Z | C | VI | 6864 | JADINE |  | false |  |  |  | 58 |  |  | 000000000 |  | 016 |  | Approved |  |  |  |  |  | C | OK | false | ************8460 | false | 0 | 001-092118130847 |  | En | 2 | A0000000031010 | VISA CREDIT |  | N |  | 0000000000 |  |  | 5771768 | I AGREE TO PAY ABOVE TOTAL AMOUNT|IN ACCORDANCE WITH CARD ISSUER'S|AGREEMENT|(MERCHANT AGREEMENT IF CREDIT VOUCHER)|RETAIN THIS COPY FOR STATEMENT|VERIFICATION|^THANK YOU|PLEASE COME AGAIN|^ |  |  |  |  |  |
| 1110839 | 1943550 | 1 | 0 | 413723 | PU |  |  |  | 0 | 40.05 | 092651 | 2018-09-15T14:16:03.000Z | 2018-09-15T14:16:45.000Z | C | VI | 6864 | JADINE |  | false |  |  |  | 87 |  |  | 000000000 |  | 016 |  | Approved |  |  |  |  |  | C | OK | false | ************4072 | false | 0 | 001-091518141602 |  | En | 1 | A0000000031010 | Visa Credit |  | P |  | 0080008000 |  |  | 5771768 | BY ENTERING A VERIFIED PIN, CARDHOLDER AGREES|TO PAY ISSUER SUCH TOTAL IN ACCORDANCE WITH|ISSUERS AGREEMENT WITH CARDHOLDER|ACCORDANCE WITH ISSUER'S|AGREEMENT|WITH CARDHOLDER|^THANK YOU|PLEASE COME AGAIN|^ |  |  |  | #TSIB#F800#TSIE# |  |
| 1115785 | 1949889 | 1 | 0 | 1 | PU |  |  |  | 0 | 12.8 | 014590 | 2018-09-22T21:30:39.000Z | 2018-09-22T21:30:55.000Z | C | DB | 1974 | JOHANNE |  | false |  |  | F | 327 |  |  | 000000000 |  | 016 |  | Approved |  |  |  |  |  | D | OK | false | ************4308 | false | 0 | 001-092218213042 |  | En | 2 | A0000002771010 | Interac |  | N |  | 8000008000 |  | 00000130 | 5771768 | ACCOUNT WILL BE DEBITED WITH THE|ABOVE AMOUNT|(OR CREDITED IF CREDIT VOUCHER)|RETAIN THIS COPY FOR STATEMENT|VERIFICATION|^THANK YOU|PLEASE COME AGAIN|^ |  |  |  |  | 00000130 |
| 1091546 | 1917587 | 1 | 0 | 527564 | PU |  |  |  | 0 | 15.9 | 447546 | 2018-08-17T22:59:18.000Z | 2018-08-17T22:59:23.000Z | C | VI | 1974 | JOHANNE |  | false |  |  |  | 303 |  |  | 000000000 |  | 017 |  | Approved |  |  |  |  |  | C | OK | false | ************3030 | false | 0 | 002-081718225911 |  | En | 2 | A0000000031010 | SCOTIABANK VISA |  | N |  | 0000000000 |  |  | 5771768 | I AGREE TO PAY ABOVE TOTAL AMOUNT|IN ACCORDANCE WITH CARD ISSUER'S|AGREEMENT|(MERCHANT AGREEMENT IF CREDIT VOUCHER)|RETAIN THIS COPY FOR STATEMENT|VERIFICATION|^THANK YOU|PLEASE COME AGAIN|^ |  |  |  |  |  |
| 1095645 | 1923178 | 1 | 0 | 113666 | PU |  |  |  | 0 | 13.05 | 02069S | 2018-08-24T13:37:22.000Z | 2018-08-24T13:37:37.000Z | C | MC | 8750 | BLUE |  | false |  |  |  | 58 |  |  | 000000000 |  | 016 |  | Approved |  |  |  |  |  | C | OK | false | ************8734 | false | 0 | 001-082418133722 |  | En | 1 | A0000000041010 | MasterCard |  | P |  | 0000008000 |  |  | 5771768 | BY ENTERING A VERIFIED PIN, CARDHOLDER AGREES|TO PAY ISSUER SUCH TOTAL IN ACCORDANCE WITH|ISSUERS AGREEMENT WITH CARDHOLDER|ACCORDANCE WITH ISSUER'S|AGREEMENT|WITH CARDHOLDER|^THANK YOU|PLEASE COME AGAIN|^ |  |  |  | #TSIB#E800#TSIE# |  |

</details>

### RSCCASummary (3,579 rows)



<details>
<summary>View random sample</summary>

| DailyClosingID | CardPlan | Batch | PosPostQty | PosPostAmt | PosUnPostQty | PosUnPostAmt | PosCancelQty | PosCancelAmt | ActPurchaseQty | ActPurchaseAmt | ActRefundQty | ActRefundAmt | ActVoidQty | ActVoidAmt |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 485 | AX |  | 17 | 6013.05 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 184 | VI |  | 230 | 13523.34 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 512 | VI |  | 289 | 17298.79 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 1114 | ALL |  | 1093 | 49379.69 | 0 | 0 | 0 | 0 | 1093 | 49379.69 | 0 | 0 | 0 | 0 |
| 1394 | ALL |  | 647 | 29661.69 | 0 | 0 | 0 | 0 | 647 | 29661.69 | 0 | 0 | 0 | 0 |
| 1531 | ALL |  | 510 | 22590.26 | 0 | 0 | 0 | 0 | 510 | 22590.26 | 0 | 0 | 0 | 0 |
| 992 | ALL |  | 312 | 18593.72 | 4 | -161.75 | 0 | 0 | 38 | 3032.8 | 0 | 0 | 0 | 0 |
| 513 | VI |  | 173 | 6557.49 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 370 | AX |  | 11 | 943.95 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 1976 | ALL |  | 550 | 24640.5 | 0 | 0 | 0 | 0 | 550 | 24640.5 | 0 | 0 | 0 | 0 |
| 1529 | ALL |  | 1142 | 62561.46 | 0 | 0 | 0 | 0 | 1142 | 62561.46 | 0 | 0 | 0 | 0 |
| 246 | AX |  | 10 | 533.9 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

</details>

### RSDailyClose (2,015 rows)



<details>
<summary>View random sample</summary>

| DailyClosingID | ClosingTime | BusinessDate | EmployeeID |
| --- | --- | --- | --- |
| 479 | 2014-09-02T09:41:15.000Z | 2014-09-01T00:00:00.000Z | CASH |
| 1550 | 2017-07-07T23:40:31.000Z | 2017-07-07T00:00:00.000Z | CASH |
| 1329 | 2016-12-02T23:48:24.000Z | 2016-12-02T00:00:00.000Z | CASH |
| 990 | 2016-01-04T23:25:59.000Z | 2016-01-04T00:00:00.000Z | CASH |
| 1307 | 2016-11-11T23:49:00.000Z | 2016-11-11T00:00:00.000Z | CASH |
| 1072 | 2016-03-25T23:44:12.000Z | 2016-03-25T00:00:00.000Z | CASH |
| 1830 | 2018-04-04T23:22:39.000Z | 2018-04-04T00:00:00.000Z | CASH |
| 1926 | 2018-07-07T23:40:55.000Z | 2018-07-07T00:00:00.000Z | CASH |
| 746 | 2015-05-14T23:45:17.000Z | 2015-05-14T00:00:00.000Z | CASH |
| 1795 | 2018-03-01T23:24:17.000Z | 2018-03-01T00:00:00.000Z | CASH |
| 1592 | 2017-08-17T23:30:07.000Z | 2017-08-17T00:00:00.000Z | CASH |
| 1824 | 2018-03-29T23:22:38.000Z | 2018-03-29T00:00:00.000Z | CASH |

</details>

### RSTxnDetail (4,710,294 rows)



<details>
<summary>View random sample</summary>

| TxnID | Line | SalesPersonID | SalesPerson2ID | SalesPerson3ID | EntryTime | ItemCode | ItemType | SizeCode | ColorCode | WidthCode | SerialNumber | Desc1 | Desc2 | ExtDesc | ItemDeposit | SalesType | Qty | OrgPrice | OrgPriceType | Price | PriceType | SalesPrice | NetPrice | Amount | NetAmount | QPA | QPAAmount | DiscountAmount | DiscountNetAmount | DepositAmount | TxnDiscountAmount | DiscountTypeID | DiscountOption | DiscountType | DiscountTypeRate | DiscountTypeAmt | TaxInc1 | TaxInc2 | TaxInc3 | TaxInc4 | Taxable1 | Taxable2 | Taxable3 | Taxable4 | Cost | InventoryUpdated | InventoryRecordID | Status | GroupType | GroupParentLine | GroupTopParentLine | LinkType | SpecialCommissionRate | Extra | Memo |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1496011 | 1 | 5000 |  |  | 2017-05-07T20:01:12.000Z | 89888 | N |  |  |  |  | PABST BLUE RIBBON 8C | PABST BLUE RIBBON 8C | OKANAGAN SPRING BREWERY LTD.  STANDARD AMERICAN LAGER | 0.8 | N | 1 | 12.9 | 1 | 12.9 | 1 | 12.9 | 0 | 12.9 | 11.22 | Q | 0 | 0 | 0 | 0.8 | 0 | 0 | N | N | 0 | 0 | true | true | false | false | Y | Y | N | N | 8.97 | true | 0 |  |  | 0 | 0 |  | null | #SSORGPRICEB#12.9#SSORGPRICEE##SSORGPRICETYPEB#1#SSORGPRICETYPEE##REORGSTIDB#0#REORGSTIDE##AWENPNTB#12#AWENPNTE# |  |
| 1427490 | 1 | 35 |  |  | 2017-02-10T13:29:01.000Z | 639625 | N |  |  |  |  | QUAILS GATE OLD VINES FOCH | QUAILS GATE OLD VINES FOCH | QUAILS' GATE ESTATE WINERY | 0.1 | N | 1 | 31.34 | 1 | 31.34 | 1 | 31.34 | 0 | 31.34 | 27.25 | Q | 0 | 0 | 0 | 0.1 | 0 | 0 | N | N | 0 | 0 | true | true | false | false | Y | Y | N | N | 19.31 | true | 0 |  |  | 0 | 0 |  | null | #SSORGPRICEB#31.34#SSORGPRICEE##SSORGPRICETYPEB#1#SSORGPRICETYPEE##REORGSTIDB#0#REORGSTIDE##AWENPNTB#33#AWENPNTE# |  |
| 428506 | 1 | 7 |  |  | 2013-07-28T12:41:28.000Z | 49445 | N |  |  |  |  | DOUBLE TROUBLE PRISON BREAK | DOUBLE TROUBLE PRISON BREAK |  | 0.1 | N | 1 | 6.25 | 1 | 6.25 | 1 | 6.25 | 0 | 6.25 | 5.43 | Q | 0 | 0 | 0 | 0.1 | 0 | 0 | N | N | 0 | 0 | true | true | false | false | Y | Y | N | N | 3.66 | true | 0 |  |  | 0 | 0 |  | null | #SSORGPRICEB#6.25#SSORGPRICEE##SSORGPRICETYPEB#1#SSORGPRICETYPEE##AWENPNTB#6#AWENPNTE# |  |
| 954850 | 1 | 25 |  |  | 2015-07-04T14:52:51.000Z | 318741 | N |  |  |  |  | HACKER PSCHORR MUNICH GOLD | HACKER PSCHORR MUNICH GOLD | MUNICH HELLES | 0.1 | N | 6 | 4.35 | 1 | 4.35 | 1 | 4.35 | 0 | 26.1 | 22.7 | Q | 0 | 0 | 0 | 0.6 | 0 | 0 | N | N | 0 | 0 | true | true | false | false | Y | Y | N | N | 15.62 | true | 0 |  |  | 0 | 0 |  | null | #SSORGPRICEB#4.35#SSORGPRICEE##SSORGPRICETYPEB#1#SSORGPRICETYPEE##REORGSTIDB#0#REORGSTIDE##AWENPNTB#27#AWENPNTE# |  |
| 982277 | 4 | 70 |  |  | 2015-08-03T20:59:36.000Z | 602557 | N |  |  |  |  | FRULI STRAWBERRY BEER | FRULI STRAWBERRY BEER | FLANDERS RED | 0.1 | N | 1 | 3.8 | 1 | 3.8 | 1 | 3.8 | 0 | 3.8 | 3.3 | Q | 0 | 0 | 0 | 0.1 | 0 | 0 | N | N | 0 | 0 | true | true | false | false | Y | Y | N | N | 2.42 | true | 0 |  |  | 0 | 0 |  | null | #SSORGPRICEB#3.8#SSORGPRICEE##SSORGPRICETYPEB#1#SSORGPRICETYPEE##REORGSTIDB#0#REORGSTIDE##AWENPNTB#2#AWENPNTE# |  |
| 269878 | 6 | 1988 |  |  | 2012-11-22T19:06:29.000Z | D10 | N |  |  |  |  | Deposit 10 cents |  |  | 0 | N | 1 | 0.1 | 1 | 0.1 | 1 | 0.1 | 0 | 0.1 | 0.1 | Q | 0 | 0 | 0 | 0 | 0 | 0 | N | N | 0 | 0 | true | true | true | false | N | N | N | N | 0.1 | false | 0 | L | L | 5 | 5 | F | 0 |  |  |
| 182646 | 1 | 1988 |  |  | 2012-06-27T17:24:27.000Z | 6072 | N |  |  |  |  | BOLS 750ml |  | MEAGHER'S DISTILLERY (B.C.) LTD. | 0 | N | 1 | 26.7 | 1 | 26.7 | 1 | 26.7 | 0 | 26.7 | 23.84 | Q | 0 | 0 | 0 | 0 | 0 | 0 | N | N | 0 | 0 | true | true | true | false | Y | N | N | N | 17.82 | false | 0 | R |  | 0 | 0 |  | 0 |  |  |
| 57054 | 3 | 250 |  |  | 2011-08-12T21:31:05.000Z | 904151 | N |  |  |  |  | OLD STYLE PILS TALL 6C |  | MOLSON BREWERY B.C. LTD. | 0 | N | 1 | 16.3 | 1 | 16.3 | 1 | 16.3 | 0 | 16.3 | 14.55 | Q | 0 | 0 | 0 | 0 | 0 | 0 | N | N | 0 | 0 | true | true | true | false | Y | N | N | N | 9.74 | false | 0 | R |  | 0 | 0 |  | 0 |  |  |
| 1379974 | 1 | 456 |  |  | 2016-12-06T21:32:46.000Z | 904805 | N |  |  |  |  | CANADIAN 12C | CANADIAN 12C | MOLSON BREWERY B.C. LTD.  STANDARD AMERICAN LAGER | 1.2 | N | 1 | 21.4 | 1 | 21.4 | 1 | 21.4 | 0 | 21.4 | 18.61 | Q | 0 | 0 | 0 | 1.2 | 0 | 0 | N | N | 0 | 0 | true | true | false | false | Y | Y | N | N | 14.71 | true | 0 |  |  | 0 | 0 |  | null | #SSORGPRICEB#21.4#SSORGPRICEE##SSORGPRICETYPEB#1#SSORGPRICETYPEE##REORGSTIDB#0#REORGSTIDE##AWENPNTB#21#AWENPNTE# |  |
| 715677 | 1 | 28 |  |  | 2014-08-23T16:34:13.000Z | 591289 | N |  |  |  |  | TREE BREWING GROOVE TALL CAN | TREE BREWING GROOVE TALL CAN | SESSION ALE | 0.1 | N | 1 | 3.15 | 1 | 3.15 | 1 | 3.15 | 0 | 3.15 | 2.74 | Q | 0 | 0 | 0 | 0.1 | 0 | 0 | N | N | 0 | 0 | true | true | false | false | Y | Y | N | N | 1.65 | true | 0 |  |  | 0 | 0 |  | null | #SSORGPRICEB#3.15#SSORGPRICEE##SSORGPRICETYPEB#1#SSORGPRICETYPEE##AWENPNTB#7#AWENPNTE# |  |
| 69633 | 6 | 1988 |  |  | 2011-09-14T20:38:52.000Z | D10 | N |  |  |  |  | Deposit 10cents |  |  | 0 | N | 1 | 0.1 | 1 | 0.1 | 1 | 0.1 | 0 | 0.1 | 0.1 | Q | 0 | 0 | 0 | 0 | 0 | 0 | N | N | 0 | 0 | true | true | true | false | N | N | N | N | 0.1 | false | 0 | L | L | 5 | 5 | F | 0 |  |  |
| 1547981 | 1 | 8980 |  |  | 2017-06-30T16:52:48.000Z | 214130 | N |  |  |  |  | CEDAR CREEK PROP. WHITE | CEDAR CREEK PROP. WHITE | CEDAR CREEK ESTATE WINERY | 0.1 | N | 1 | 19.15 | 1 | 19.15 | 1 | 19.15 | 0 | 19.15 | 16.65 | Q | 0 | 0 | 0 | 0.1 | 0 | 0 | N | N | 0 | 0 | true | true | false | false | Y | Y | N | N | 11.16 | true | 0 |  |  | 0 | 0 |  | null | #SSORGPRICEB#19.15#SSORGPRICEE##SSORGPRICETYPEB#1#SSORGPRICETYPEE##REORGSTIDB#0#REORGSTIDE##AWENPNTB#19#AWENPNTE# |  |

</details>

### RSTxnHeader (1,977,798 rows)



<details>
<summary>View random sample</summary>

| TxnID | InvoiceNO | TxnType | TxnDate | CustStore | CustomerID | CustType | OrderID | SalesPersonID | SalesPerson2ID | Total | SubTotal | NetSubTotal | TotalDiscountAmount | TotalDiscountNetAmount | ItemDepositTotal | TxnDiscountTotal | Tax1 | Tax2 | Tax3 | Tax4 | TaxIncludedAmt1 | TaxIncludedAmt2 | TaxIncludedAmt3 | TaxIncludedAmt4 | TaxRate1 | TaxRate2 | TaxRate3 | TaxRate4 | CurrencyCode | ExchangeRate | Status | DeptCode | WSCode | ShiftID | CustomerPONumber | Terms | Extra | CashierClosingID | RolloverCount | ReasonCode | EmployeeID | VoidEmployeeID | Remark | RecallTime | AmountPaid | DailyClosingID | BusinessDate | CustTaxAreaCode |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1343834 | 1340935 | S | 2016-10-21T16:24:49.000Z | 0 | 523411 | CP | 0 | 3 |  | 28.4 | 27.6 | 24 | 0 | 0 | 0.8 | 0 | 0 | 0 | 0 | 0 | 1.2 | 2.4 | 0 | 0 | 0.05000000074505806 | 0.10000000149011612 | 0.07000000029802322 | 0.05000000074505806 | CDN | 1 | X | 3 | 3 | 0 |  | VIP # 000-00523411 (Thomas, Ivan)  Opening Balance: 71  Current Points Earned: 27  Current Balance: 98    Thank You! Please come again.  Proof of purchase required for all refunds or exchanges.  No exchange or refund past 14 days of purchase.  Valid ID must be shown to redeem account points.     | #AWVIPCNOB#000-00523411#AWVIPCNOE##AWVIPNMB#Thomas, Ivan#AWVIPNME##AWOPBALB#71#AWOPBALE##AWSEPB#27#AWSEPE##AWCBALB#98#AWCBALE##AWERPOSTB#S#AWERPOSTE# | 10646 | 0 |  | CASH |  |  | null | 0 | 1286 | 2016-10-21T00:00:00.000Z |  |
| 883539 | 881069 | S | 2015-04-18T19:50:41.000Z | 0 | 113742 |  | 0 | 1989 |  | 22.7 | 22.6 | 19.65 | 0 | 0 | 0.1 | 0 | 0 | 0 | 0 | 0 | 0.98 | 1.97 | 0 | 0 | 0.05000000074505806 | 0.10000000149011612 | 0.07000000029802322 | 0.05000000074505806 | CDN | 1 | X | 3 | 3 | 0 |  | VIP # 000-00113742 (Smith, Stacy/ smith,)  Opening Balance: 425  Current Points Earned: 22  Current Balance: 447    Thank You! Please come again.  Please retain receipt for refund. No exchange or refund after 14 days.    ATTENTION: As of April 1, 2015 we will be switching to TAX OUT PRICING on our shelves.     | #AWVIPCNOB#000-00113742#AWVIPCNOE##AWVIPNMB#Smith, Stacy/ smith,#AWVIPNME##AWOPBALB#425#AWOPBALE##AWSEPB#22#AWSEPE##AWCBALB#447#AWCBALE##AWERPOSTB#S#AWERPOSTE# | 5288 | 0 |  | CASH |  |  | null | 0 | 717 | 2015-04-18T00:00:00.000Z |  |
| 551811 | 549745 | S | 2014-01-22T17:57:50.000Z | 0 | 100237 | XP | 0 | 5513 |  | 9.05 | 8.45 | 7.35 | 0 | 0 | 0.6 | 0 | 0 | 0 | 0 | 0 | 0.37 | 0.73 | 0 | 0 | 0.05000000074505806 | 0.10000000149011612 | 0.07000000029802322 | 0.05000000074505806 | CDN | 1 | X | 4 | 4 | 0 |  | Thank You! Please come again.  Please retain receipt for refund. No exchange or refund after 14 days.     | #AWSEPB#8#AWSEPE# | 1824 | 0 |  | CASH |  |  | null | 0 | 249 | 2014-01-22T00:00:00.000Z |  |
| 1146182 | 1143473 | S | 2016-03-14T19:30:07.000Z | 0 | 516590 |  | 0 | 35 |  | 16 | 15.4 | 13.39 | 0 | 0 | 0.6 | 0 | 0 | 0 | 0 | 0 | 0.67 | 1.34 | 0 | 0 | 0.05000000074505806 | 0.10000000149011612 | 0.07000000029802322 | 0.05000000074505806 | CDN | 1 | X | 4 | 4 | 0 |  | VIP # 000-00516590 (Rigg, Brad)  Opening Balance: 25  Current Points Earned: 15  Current Balance: 40    Thank You! Please come again.  Proof of purchase required for all refunds or exchanges.  No exchange or refund past 14 days of purchase.  Valid ID must be shown to redeem account points.     | #AWVIPCNOB#000-00516590#AWVIPCNOE##AWVIPNMB#Rigg, Brad#AWVIPNME##AWOPBALB#25#AWOPBALE##AWSEPB#15#AWSEPE##AWCBALB#40#AWCBALE##AWERPOSTB#S#AWERPOSTE# | 8346 | 0 |  | CASH |  |  | null | 0 | 1061 | 2016-03-14T00:00:00.000Z |  |
| 1024347 | 1021762 | S | 2015-09-25T16:29:08.000Z | 0 | 300868 |  | 0 | 021 |  | 18.6 | 18.4 | 15.8 | 0 | 0 | 0.2 | 0 | 0 | 0 | 0 | 0 | 0.87 | 1.73 | 0 | 0 | 0.05000000074505806 | 0.10000000149011612 | 0.07000000029802322 | 0.05000000074505806 | CDN | 1 | X | 2 | 2 | 0 |  | VIP # 000-00300868 (Clancy, Kevin)  Opening Balance: 389  Current Points Earned: 18  Current Balance: 407    Thank You! Please come again.  Proof of purchase required for all refunds or exchanges.  No exchange or refund past 14 days of purchase.     | #AWVIPCNOB#000-00300868#AWVIPCNOE##AWVIPNMB#Clancy, Kevin#AWVIPNME##AWOPBALB#389#AWOPBALE##AWSEPB#18#AWSEPE##AWCBALB#407#AWCBALE##AWERPOSTB#S#AWERPOSTE# | 6733 | 0 |  | CASH |  |  | null | 0 | 887 | 2015-09-25T00:00:00.000Z |  |
| 375396 | 373514 | S | 2013-05-23T13:25:15.000Z | 0 | 103399 |  | 0 | 88 |  | 9.1 | 9.1 | 7.94 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0.39 | 0.77 | 0 | 0 | 0 | 0 | 0 | 0 | CDN | 1 | X | 3 | 3 | 0 |  | Opening Balance: 24939  Current Points Earned: 9  Current Balance: 24948              Thank You! Please come again.  Please retain receipt for refund. No exchange or refund after 14 days.     |  | 0 | 0 |  | 88 |  |  | null | 0 | 0 | 2013-05-23T13:25:15.000Z |  |
| 1587539 | 1584325 | S | 2017-08-07T13:18:43.000Z | 0 | 1 |  | 0 | 994 |  | 8.1 | 7.9 | 6.87 | 0 | 0 | 0.2 | 0 | 0 | 0 | 0 | 0 | 0.34 | 0.69 | 0 | 0 | 0.05000000074505806 | 0.10000000149011612 | 0.07000000029802322 | 0.05000000074505806 | CDN | 1 | X | 1 | 1 | 0 |  | Thank You! Please come again.  Proof of purchase required for all refunds or exchanges.  No exchange or refund past 14 days of purchase.  Returns more than 50% of original purchase price could be subject to 10% restocking fee.  Valid ID must be shown to redeem account points.     | #AWSEPB#7#AWSEPE# | 13600 | 0 |  | CASH |  |  | null | 0 | 1582 | 2017-08-07T00:00:00.000Z |  |
| 275022 | 273555 | S | 2012-12-01T20:55:30.000Z | 0 | 119347 |  | 0 | 44 |  | -3 | -3 | -2.68 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | -0.32 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | CDN | 1 | X | 2 | 2 | 0 |  | Opening Balance: 33  Current Points Earned: -3  Current Balance: 30              Thank You! Please come again.  Please retain receipt for refund. No exchange or refund after 14 days.     |  | 0 | 0 |  | 44 |  |  | null | 0 | 0 | 2012-12-01T20:55:30.000Z |  |
| 1515729 | 1512595 | S | 2017-05-28T14:18:44.000Z | 0 | 104886 |  | 0 | 97 |  | 28.1 | 26.6 | 23.13 | 0 | 0 | 1.5 | 0 | 0 | 0 | 0 | 0 | 1.16 | 2.31 | 0 | 0 | 0.05000000074505806 | 0.10000000149011612 | 0.07000000029802322 | 0.05000000074505806 | CDN | 1 | X | 2 | 2 | 0 |  | VIP # 000-00104886 (rodrigui, michael)  Opening Balance: 554  Current Points Earned: 26  Current Balance: 580    Thank You! Please come again.  Proof of purchase required for all refunds or exchanges.  No exchange or refund past 14 days of purchase.  Returns more than 50% of original purchase price could be subject to 10% restocking fee.  Valid ID must be shown to redeem account points.     | #AWVIPCNOB#000-00104886#AWVIPCNOE##AWVIPNMB#rodrigui, michael#AWVIPNME##AWOPBALB#554#AWOPBALE##AWSEPB#26#AWSEPE##AWCBALB#580#AWCBALE##AWERPOSTB#S#AWERPOSTE# | 12849 | 0 |  | CASH |  |  | null | 0 | 1510 | 2017-05-28T00:00:00.000Z |  |
| 1603693 | 1600459 | S | 2017-08-24T16:14:26.000Z | 0 | 531218 | CP | 0 | 2316 |  | 14.95 | 14.85 | 12.91 | 0 | 0 | 0.1 | 0 | 0 | 0 | 0 | 0 | 0.65 | 1.29 | 0 | 0 | 0.05000000074505806 | 0.10000000149011612 | 0.07000000029802322 | 0.05000000074505806 | CDN | 1 | X | 1 | 1 | 0 |  | VIP # 000-00531218 (De Wit, Tony)  Opening Balance: 219  Current Points Earned: 14  Current Balance: 233    Thank You! Please come again.  Proof of purchase required for all refunds or exchanges.  No exchange or refund past 14 days of purchase.  Returns more than 50% of original purchase price could be subject to 10% restocking fee.  Valid ID must be shown to redeem account points.     | #AWVIPCNOB#000-00531218#AWVIPCNOE##AWVIPNMB#De Wit, Tony#AWVIPNME##AWOPBALB#219#AWOPBALE##AWSEPB#14#AWSEPE##AWCBALB#233#AWCBALE##AWERPOSTB#S#AWERPOSTE# | 13788 | 0 |  | CASH |  |  | null | 0 | 1599 | 2017-08-24T00:00:00.000Z |  |
| 1227915 | 1225128 | S | 2016-06-14T15:58:52.000Z | 0 | 1 |  | 0 | 1989 |  | -3.1 | -3.1 | -3.1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0.05000000074505806 | 0.10000000149011612 | 0.07000000029802322 | 0.05000000074505806 | CDN | 1 | X | 1 | 1 | 0 |  | Thank You! Please come again.  Proof of purchase required for all refunds or exchanges.  No exchange or refund past 14 days of purchase.  Valid ID must be shown to redeem account points.     | #AWSEPB#-3#AWSEPE# | 9303 | 0 |  | CASH |  |  | null | 0 | 1156 | 2016-06-14T00:00:00.000Z |  |
| 521396 | 519361 | S | 2013-12-07T17:18:43.000Z | 0 | 1 | XP | 0 | 27 |  | 18.95 | 18.85 | 16.39 | 0 | 0 | 0.1 | 0 | 0 | 0 | 0 | 0 | 0.82 | 1.64 | 0 | 0 | 0.05000000074505806 | 0.10000000149011612 | 0.07000000029802322 | 0.05000000074505806 | CDN | 1 | X | 4 | 4 | 0 |  | Thank You! Please come again.  Please retain receipt for refund. No exchange or refund after 14 days.     | #AWSEPB#18#AWSEPE# | 1477 | 0 |  | CASH |  |  | null | 0 | 203 | 2013-12-07T00:00:00.000Z |  |

</details>

### RSTxnPayment (4,021 rows)



<details>
<summary>View random sample</summary>

| TxnID | Line | DetailType | InvoiceNO | ARDate | DueDate | Amount | ForeignAmount | Redeemed | ForeignRedeemed | NowPaying | ForeignNowPaying |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 793666 | 8 | P | 680157 | 2014-07-14T00:00:00.000Z | 2014-07-14T00:00:00.000Z | -189.9 | 0 | 0 | 0 | -189.9 | 0 |
| 550839 | 1 | P | 526119 | 2013-12-17T00:00:00.000Z | 2013-12-17T00:00:00.000Z | 1012.4 | 0 | 0 | 0 | 1012.4 | 0 |
| 247561 | 3 | P | 210900 | 2012-08-13T00:00:00.000Z | null | 39.76 | 0 | 0 | 0 | 39.76 | 0 |
| 1511547 | 1 | P | 1335747 | 2016-10-14T00:00:00.000Z | 2016-10-14T00:00:00.000Z | 35.5 | 0 | 0 | 0 | 35.5 | 0 |
| 24065 | 24 | P | 22177 | 2011-04-25T00:00:00.000Z | null | 2.2 | 0 | 0 | 0 | 2.2 | 0 |
| 1968937 | 2 | P | 1931569 | 2018-09-05T00:00:00.000Z | 2018-10-05T00:00:00.000Z | 76.6 | 0 | 0 | 0 | 76.6 | 0 |
| 1331346 | 1 | P | 1328106 | 2016-10-04T00:00:00.000Z | 2016-10-04T00:00:00.000Z | 147.78 | 0 | 0 | 0 | 147.78 | 0 |
| 707599 | 3 | P | 582843 | 2014-03-16T00:00:00.000Z | 2014-03-16T00:00:00.000Z | 168 | 0 | 0 | 0 | 168 | 0 |
| 544454 | 2 | P | 424054 | 2013-07-25T00:00:00.000Z | 2013-07-25T00:00:00.000Z | 5.45 | 0 | 0 | 0 | 5.45 | 0 |
| 347066 | 4 | P | 334200 | 2013-03-25T00:00:00.000Z | null | 356 | 0 | 0 | 0 | 356 | 0 |
| 622183 | 1 | P | 603835 | 2014-04-16T00:00:00.000Z | 2014-04-16T00:00:00.000Z | 719.1 | 0 | 0 | 0 | 719.1 | 0 |
| 1629613 | 1 | P | 1618257 | 2017-09-12T00:00:00.000Z | 2017-09-12T00:00:00.000Z | 542 | 0 | 0 | 0 | 542 | 0 |

</details>

### RSTxnReason (5,936 rows)



<details>
<summary>View random sample</summary>

| TxnID | Line | ReasonType | ReasonDescript |
| --- | --- | --- | --- |
| 1247206 | 1 | R | spent too much       |
| 1114148 | 3 | R | EVENT RETURN         |
| 1965798 | 2 | R | doesn't want it      |
| 1227933 | 2 | R | wrong prouct         |
| 1641674 | 1 | R | wedding rtn          |
| 1936915 | 1 | R | customer no sulfite  |
| 1676897 | 15 | R | WRONG PRICING        |
| 1395735 | 1 | R | Wrong bottle         |
| 1471911 | 2 | R | RETURNED             |
| 1032494 | 6 | R | CUSTOMER RETURN      |
| 1967811 | 1 | R | WRONG pRICE, CHOICE  |
| 1457499 | 1 | R | off                  |

</details>

### RSTxnShipping (7,633 rows)



<details>
<summary>View random sample</summary>

| TxnID | ShipName | ShipAddress | ShipMethodCode | ShipPostalCode | ShipPhone | ShipInstruction |
| --- | --- | --- | --- | --- | --- | --- |
| 251767 | 3784 | || |  |  |  |  |
| 938255 | HootSuite Media Inc. | 5 East 8th Avenue|Vancouver, BC| |  |  |  |  |
| 1836178 | AMEND TO ORDER | || |  |  |  |  |
| 1753313 | Mateo Novacovici | 516 Cardiff Way|Port Moody, BC| | CP | V3H3T3 | 7783858582 |  |
| 712968 | Tymac Launch Service | N ft Main Street|Vancouver, BC| |  |  | 604.681.8628 |  |
| 859315 | Trattoria | #102-4501 Kingsway|Burnaby, BC| |  | V5H4V8 |  |  |
| 860306 | Moving Pictures Canada | 840 Cambie Street|Vancouver, BC|Contact Nick for delivery |  |  | 6043155378 |  |
| 1348045 | Animal Logic | 840 Cambie Street, 4/F|Vancouver, B.C.| |  | V6B2P6 | 6043984800 |  |
| 1436274 | The Vancouver Club | 915 W Hastings Street|Vancouver, B.C.| |  | V6C1C6 | 6043317015 |  |
| 1651239 | Marc Levesque | Sandman Signature|10251 St Edwards Dr, Richmond, BC| |  | V6X2M9 |  |  |
| 1319751 | Tacorporation | La Mezcaleria|1622 Commercial Drive|Vancouver, BC |  | V5L3Y4 | 6045598226 |  |
| 1544021 | ILM Vancouver | #400-21 Water Street|Vancouver, BC| |  | V6B1A1 | 4157464849 |  |

</details>

### RSTxnTender (2,489,942 rows)



<details>
<summary>View random sample</summary>

| TxnID | Line | TenderTypeID | TenderTypeDesc1 | TenderTypeDesc2 | Amount | ForeignAmount | Reference | ExchangeRate | DepositLine | Interface | IsChange | IsGainLoss | ExtraMemo | PaidAmount | LastPaidDate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1289748 | 2 | 1 | Cash | Cash | -5.75 | 0 | Change | 1 | 0 | N | true | false |  | null | null |
| 65680 | 1 | 15 | AWARD |  | 25 | 0 |  | 1 | 0 | W | false | false |  | 0 | null |
| 857399 | 1 | 1 | Cash | Cash | 40 | 0 |  | 1 | 0 | N | false | false |  | null | null |
| 224287 | 2 | 1 | Cash |  | -1.15 | 0 | Change | 1 | 0 | O | true | false |  | 0 | null |
| 857280 | 1 | 1 | Cash | Cash | 20 | 0 |  | 1 | 0 | N | false | false |  | null | null |
| 1348018 | 2 | 1 | Cash | Cash | -5.8 | 0 | Change | 1 | 0 | N | true | false |  | null | null |
| 1597496 | 1 | 1 | Cash | Cash | 20 | 0 |  | 1 | 0 | N | false | false |  | null | null |
| 287286 | 1 | 4 | MasterCard |  | 133 | 0 | ************7800 | 1 | 0 | C | false | false |  | 0 | null |
| 1962173 | 1 | 6 | Debit | Debit | 116.85 | 0 |  | 1 | 0 | D | false | false | #CCACNOB#************3659#CCACNOE# | null | null |
| 542483 | 1 | 6 | Debit | Debit | 37.6 | 0 |  | 1 | 0 | D | false | false | #CCACNOB#589297XXXXXXXXX0501#CCACNOE# | null | null |
| 1478119 | 1 | 1 | Cash | Cash | 40 | 0 |  | 1 | 0 | N | false | false |  | null | null |
| 184143 | 1 | 6 | Debit |  | 270.41 | 0 | ************7707 | 1 | 0 | D | false | false |  | 0 | null |

</details>

### RSOpenDrawerLog (59,966 rows)



<details>
<summary>View random sample</summary>

| RecordID | EmployeeID | WSCode | CashDrawerID | OpenTime | DailyClosingID |
| --- | --- | --- | --- | --- | --- |
| 45623 | 994 | 3 | 0 | 2017-10-06T16:09:30.000Z | 1644 |
| 15964 | 1989 | 3 | 0 | 2015-08-01T15:48:39.000Z | 832 |
| 56546 | 850 | 1 | 0 | 2018-08-25T16:08:16.000Z | 1975 |
| 2968 | 250 | 3 | 0 | 2014-11-18T16:25:44.000Z | 558 |
| 6563 | 555 | 2 | 0 | 2015-01-24T21:19:26.000Z | 626 |
| 46653 | 8980 | 1 | 0 | 2017-11-07T20:36:11.000Z | 1677 |
| 2523 | 27 | 4 | 0 | 2014-11-11T17:48:15.000Z | 551 |
| 8032 | 66 | 2 | 0 | 2015-02-26T15:44:29.000Z | 660 |
| 23802 | 66 | 3 | 0 | 2016-01-18T09:46:57.000Z | 1004 |
| 38537 | 994 | 2 | 0 | 2017-03-05T15:52:18.000Z | 1423 |
| 52884 | 989 | 2 | 0 | 2018-06-06T15:38:23.000Z | 1895 |
| 8167 | 23 | 3 | 0 | 2015-03-01T23:04:56.000Z | 663 |

</details>

### RSCashierClosing (18,111 rows)



<details>
<summary>View random sample</summary>

| CashierClosingID | ClosingTime | ShiftID | SalesPersonID | DeptCode | CloseType | PrintCount | EmployeeID | DailyClosingID | BusinessDate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 13597 | 2017-08-07T07:44:53.000Z | 0 | DL |  | C | 1 | DL | 1581 | 2017-08-07T00:00:00.000Z |
| 12792 | 2017-05-23T15:18:10.000Z | 0 | 222 |  | C | 1 | 222 | 1505 | 2017-05-23T00:00:00.000Z |
| 12112 | 2017-03-17T15:51:56.000Z | 0 | 16 |  | C | 1 | 16 | 1436 | 2017-03-17T00:00:00.000Z |
| 8302 | 2016-03-09T23:36:48.000Z | 0 |  |  | A | 1 | CASH | 1056 | 2016-03-09T00:00:00.000Z |
| 8006 | 2016-02-07T16:29:13.000Z | 0 | 55 |  | C | 1 | 55 | 1024 | 2016-02-07T00:00:00.000Z |
| 10709 | 2016-10-27T23:10:41.000Z | 0 | 1989 |  | C | 1 | 1989 | 1292 | 2016-10-27T00:00:00.000Z |
| 2204 | 2014-03-13T23:07:33.000Z | 0 | 26 |  | C | 0 | 26 | 299 | 2014-03-13T00:00:00.000Z |
| 8860 | 2016-05-04T16:04:20.000Z | 0 | 29 |  | C | 1 | 29 | 1112 | 2016-05-04T00:00:00.000Z |
| 17320 | 2018-08-06T15:52:25.000Z | 0 | 250 |  | C | 1 | 250 | 1956 | 2018-08-06T00:00:00.000Z |
| 6164 | 2015-07-25T13:22:11.000Z | 0 | 1056 |  | C | 0 | 1056 | 825 | 2015-07-25T00:00:00.000Z |
| 16293 | 2018-04-30T22:56:28.000Z | 0 | 4255 |  | C | 1 | 4255 | 1857 | 2018-04-30T00:00:00.000Z |
| 6716 | 2015-09-23T23:17:11.000Z | 0 | 1056 |  | C | 1 | 1056 | 885 | 2015-09-23T00:00:00.000Z |

</details>

# RS0000PODATA

Showing tables with at least 100 rows.

### POHeader (3,981 rows)



<details>
<summary>View random sample</summary>

| PONumber | POPrefix | Vendor | ShipToAddress | ShipToCity | ShipToProvince | ShipToCountry | ShipToPostalCode | ShipToPhone | ShipVia | PODate | EnterByID | OrderBy | LastUpdate | LastUpdateID | NumModified | ETDDate | ETADate | Complete | PrintFlag | CostIncGST | CostIncDeposit | Total | GST | Deposit | Freight | MiscCharge1 | ProRate1 | ProRate2 | MC1ReceivingTaxID | MC2ReceivingTaxID | Currency | LastRecvInvNo | LastRecvInvDate | RecvInvGST | RecvInvFreight | Remarks | ShipToCode | ShipMethodCode | RecvInvMiscChargel | ExchangeRate | Locked | LockedBy | LockedTime | Extra |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2732 | 000 | BDL |  |  |  |  |  |  |  | 2016-05-30T11:24:40.000Z | 44 | 44 | 2016-05-30T11:25:21.000Z | 44 | 0 | null | null | C | Y | false | E | 1577.61 | 70.44 | 98.4 | 0 | 0 | I | Q | 1 | 1 |  | 0 | null | 0 | 0 |  |  |  | 0 | 1 | false |  | null |  |
| 2339 | 000 | LDB |  |  |  |  |  |  |  | 2015-08-11T08:37:30.000Z | 77 | 77 | 2015-08-11T08:43:57.000Z | 77 | 0 | null | null | C | Y | false | E | 358846.07 | 16971.56 | 2443.4 | 0 | -61.83 | I | Q | 1 | 1 |  | 0 | null | 0 | 0 |  |  |  | 0 | 1 | false |  | null |  |
| 56 | 000 | LDB |  |  |  |  |  |  |  | 2010-12-23T00:00:00.000Z |  |  | 1899-12-30T00:00:00.000Z |  | 0 | 1899-12-30T00:00:00.000Z | 1899-12-30T00:00:00.000Z | C | Y | false | E | 22368.97 | 2013.22 | 0 | 0 | -3578.99 |  |  | 1 | 1 |  | 0 | 1899-12-30T00:00:00.000Z | 0 | 0 |  |  |  | 0 | 0 | false |  | null |  |
| 2809 | 000 | 004 |  |  |  |  |  |  |  | 2016-07-19T13:40:17.000Z | 1056 | 1056 | 2016-07-19T13:40:39.000Z | 1056 | 0 | null | null | C | Y | false | E | 555.59 | 24.06 | 50.4 | 0 | 0 | I | Q | 1 | 1 |  | 0 | null | 0 | 0 |  |  |  | 0 | 1 | false |  | null |  |
| 1519 | 000 | LDB |  |  |  |  |  |  |  | 2013-12-13T09:09:29.000Z | 1056 | 1056 | 2013-12-13T09:17:03.000Z | 1056 | 0 | null | null | C | Y | true | E | 155946.34 | 7351.89 | 1556.6 | 0 | -44032.26 | I | Q | 1 | 1 |  | 0 | null | 0 | 0 |  |  |  | 0 | 1 | false |  | null |  |
| 530 | 000 | LDB |  |  |  |  |  |  |  | 2012-01-17T00:00:00.000Z |  |  | 1899-12-30T00:00:00.000Z |  | 1 | 1899-12-30T00:00:00.000Z | 1899-12-30T00:00:00.000Z | C | Y | false | E | 79523.92 | 7157.17 | 0 | 0 | -12723.67 |  |  | 1 | 1 |  | 0 | 1899-12-30T00:00:00.000Z | 0 | 0 |  |  |  | 0 | 0 | false |  | null |  |
| 644 | 000 | LDB |  |  |  |  |  |  |  | 2012-04-04T00:00:00.000Z |  |  | 1899-12-30T00:00:00.000Z |  | 1 | 1899-12-30T00:00:00.000Z | 1899-12-30T00:00:00.000Z | C | Y | false | E | 31476.97 | 2839.4 | 0 | 0 | -5047.77 |  |  | 1 | 1 |  | 0 | 1899-12-30T00:00:00.000Z | 0 | 0 |  |  |  | 0 | 0 | false |  | null |  |
| 2285 | 000 | 004 |  |  |  |  |  |  |  | 2015-07-06T11:48:12.000Z | 77 | 77 | 2015-07-06T11:48:30.000Z | 77 | 0 | null | null | C | Y | false | E | 405.14 | 18.18 | 23.3 | 0 | 0 | I | Q | 1 | 1 |  | 0 | null | 0 | 0 |  |  |  | 0 | 1 | false |  | null |  |
| 1853 | 000 | 004 |  |  |  |  |  |  |  | 2014-08-19T14:04:19.000Z | 1056 | 1056 | 2014-08-19T15:09:54.000Z | 1056 | 0 | null | null | C | N | true | E | 2948.13 | 130.5 | 207.6 | 0 | -781.72 | I | Q | 1 | 1 |  | 0 | null | 0 | 0 |  |  |  | 0 | 1 | false |  | null |  |
| 2174 | 000 | 008 |  |  |  |  |  |  |  | 2015-04-14T14:53:14.000Z | 1056 | 1056 | 2015-04-14T14:57:03.000Z | 1056 | 0 | null | null | C | N | false | E | 1082.8 | 48.48 | 64.8 | 0 | 0 | I | Q | 1 | 1 |  | 0 | null | 0 | 0 |  |  |  | 0 | 1 | false |  | null |  |
| 3167 | 000 | LDB |  |  |  |  |  |  |  | 2017-01-10T13:40:05.000Z | 44 | 44 | 2017-01-10T13:44:11.000Z | 44 | 0 | null | null | C | Y | false | E | 20761474083.21 | 983843874.64 | 100752715.8 | 0 | 0 | I | Q | 1 | 1 |  | 0 | null | 0 | 0 |  |  |  | 0 | 1 | false |  | null |  |
| 1885 | 000 | 014 |  |  |  |  |  |  |  | 2014-09-15T13:28:31.000Z | SUPERV | SUPERV | 2014-09-15T13:46:45.000Z | SUPERV | 0 | null | null | C | N | true | E | 1508.26 | 71.08 | 15.6 | 0 | -425.78 | I | Q | 1 | 1 |  | 0 | null | 0 | 0 |  |  |  | 0 | 1 | false |  | null |  |

</details>

### PODetail (719,892 rows)



<details>
<summary>View random sample</summary>

| PONumber | POPrefix | Line | ItemCode | Desc1 | Desc2 | StockNumber | SizeMatrixCode | ReceivingTaxID | PurchaseUnit | Conversion | Cost | Deposit | TotalCost | Qty | Shipped | ShipDate | RecvInvCost | Notes | RecInvDeposit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 3558 | 000 | 235 | 243311 | PLUVIUM MERSEGUERA SAUVIGNON BLANC | PLUVIUM MERSEGUERA SAUVIGNON BLANC |  |  | 1 | 12 | 1 | 7.98 | 1.2 | 95.76 | 12 | 0 | 2017-10-17T14:59:13.000Z | 0 |  | 0 |
| 1942 | 000 | 370 | 34637 | CANADIAN CLUB 1.75L | CANADIAN CLUB 1.75L |  |  | 1 | BTL | 1 | 56.41 | 0.4 | 112.82 | 2 | 0 | 2014-10-24T07:29:06.000Z | 0 |  | 0 |
| 1742 | 000 | 695 | 535294 | GROLSCH LAGER TALL CAN | GROLSCH LAGER TALL CAN |  |  | 1 | 24 | 1 | 2.24 | 4.8 | 107.52 | 48 | 0 | 2014-06-03T14:52:18.000Z | 0 |  | 0 |
| 3390 | 000 | 724 | 860791 | CROTALO REPOSADO | CROTALO REPOSADO |  |  | 1 |  | 1 | 90.99 | 0.6 | 545.94 | 6 | 0 | 2017-05-12T06:14:40.000Z | 0 |  | 0 |
| 3435 | 000 | 22 | 517458 | MISSION HILL RIESLING RESERVE | MISSION HILL RIESLING RESERVE |  |  | 1 |  | 1 | 14.24 | 0.1 | 14.24 | 1 | 0 | 2017-06-26T09:43:42.000Z | 0 |  | 0 |
| 2570 | 000 | 754 | 685883 | ALIPUS MEZCAL SAN ANDRES | ALIPUS MEZCAL SAN ANDRES |  |  | 1 | 6 | 1 | 51.87 | 0.6 | 311.22 | 6 | 0 | 2016-01-29T07:50:34.000Z | 0 |  | 0 |
| 3565 | 000 | 388 | 375568 | BARONE RICASOLI CHIANTI DOCG | BARONE RICASOLI CHIANTI DOCG |  |  | 1 | 12 | 1 | 11.62 | 1.2 | 139.44 | 12 | 0 | 2017-10-27T08:12:28.000Z | 0 |  | 0 |
| 863 | 000 | 386 | 506766 | WARSTEINER 5L | WARSTEINER 5L |  |  | 1 | 6 | 1 | 33.69 | 0 | 202.14 | 6 | 0 | 2012-08-23T00:00:00.000Z | 3 |  | 0 |
| 2873 | 000 | 57 | 667170 | KOKANEE SLEEK 30C | KOKANEE SLEEK 30C |  |  | 1 | 1 | 1 | 28.27 | 3 | 28.27 | 1 | 0 | 2016-08-29T11:40:26.000Z | 0 |  | 0 |
| 2657 | 000 | 14 | 510735 | SUMAC RIDGE RIDGE WHITE | SUMAC RIDGE RIDGE WHITE |  |  | 1 | 12 | 1 | 7.76 | 0.1 | 7.76 | 1 | 0 | 2016-04-04T12:50:36.000Z | 0 |  | 0 |
| 1300 | 000 | 48 | 291138 | NEW PLANET OFF GRID PALE ALE | NEW PLANET OFF GRID PALE ALE |  |  | 1 | 4PK6 | 1 | 10.95 | 0 | 131.4 | 12 | 0 | 2013-05-07T00:00:00.000Z | 0 |  | 0 |
| 2550 | 000 | 386 | 412684 | APOCALYPTO REPOSADO | APOCALYPTO REPOSADO |  |  | 1 | 48 | 1 | 6.08 | 4.8 | 291.84 | 48 | 0 | 2016-01-15T07:48:36.000Z | 0 |  | 0 |

</details>

# RS0000WNDATA

This database contains no tables with at least 100 rows.