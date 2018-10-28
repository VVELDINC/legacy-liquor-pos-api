// Can't use dynamic table names and still benefit from built-in SQL injection
// protection. See https://github.com/tediousjs/node-mssql/issues/446
//
// So we just hardcode table names.

let d = {}

//
// AR0000DATA database.
//

d.AR0000DATA = {}

d.AR0000DATA.ARCard = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM ARCard ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM ARCard`,
  }
}
d.AR0000DATA.ARCompany = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM ARCompany ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM ARCompany`,
  }
}
d.AR0000DATA.ARCurrency = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM ARCurrency ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM ARCurrency`,
  }
}
d.AR0000DATA.ARCustomer = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM ARCustomer ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM ARCustomer`,
  }
}
d.AR0000DATA.ARCustomerType = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM ARCustomerType ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM ARCustomerType`,
  }
}
d.AR0000DATA.ARDeletedInvoice = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM ARDeletedInvoice ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM ARDeletedInvoice`,
  }
}
d.AR0000DATA.ARDeletedPayment = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM ARDeletedPayment ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM ARDeletedPayment`,
  }
}
d.AR0000DATA.ARGLTxn = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM ARGLTxn ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM ARGLTxn`,
  }
}
d.AR0000DATA.ARInvoice = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM ARInvoice ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM ARInvoice`,
  }
}
d.AR0000DATA.ARInvoiceDetail = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM ARInvoiceDetail ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM ARInvoiceDetail`,
  }
}
d.AR0000DATA.ARLog = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM ARLog ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM ARLog`,
  }
}
d.AR0000DATA.ARNextID = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM ARNextID ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM ARNextID`,
  }
}
d.AR0000DATA.ARPayment = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM ARPayment ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM ARPayment`,
  }
}
d.AR0000DATA.ARPaymentDetail = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM ARPaymentDetail ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM ARPaymentDetail`,
  }
}
d.AR0000DATA.ARPaymentDistribute = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM ARPaymentDistribute ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM ARPaymentDistribute`,
  }
}
d.AR0000DATA.ARProfile = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM ARProfile ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM ARProfile`,
  }
}
d.AR0000DATA.ARRecurringInvoice = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM ARRecurringInvoice ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM ARRecurringInvoice`,
  }
}
d.AR0000DATA.ARRecurringInvoiceDetail = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM ARRecurringInvoiceDetail ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM ARRecurringInvoiceDetail`,
  }
}
d.AR0000DATA.ARSalesRep = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM ARSalesRep ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM ARSalesRep`,
  }
}
d.AR0000DATA.ARSecurity = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM ARSecurity ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM ARSecurity`,
  }
}
d.AR0000DATA.ARShipVia = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM ARShipVia ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM ARShipVia`,
  }
}
d.AR0000DATA.ARStore = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM ARStore ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM ARStore`,
  }
}
d.AR0000DATA.ARTemplate = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM ARTemplate ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM ARTemplate`,
  }
}
d.AR0000DATA.GLChartofAcct = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM GLChartofAcct ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM GLChartofAcct`,
  }
}
d.AR0000DATA.GLDept = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM GLDept ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM GLDept`,
  }
}

//
// FDDATA database.
//

d.FDDATA = {}

d.FDDATA.FDAwardType = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM FDAwardType ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM FDAwardType`,
  }
}
d.FDDATA.FDCompany = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM FDCompany ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM FDCompany`,
  }
}
d.FDDATA.FDProfile = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM FDProfile ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM FDProfile`,
  }
}
d.FDDATA.FDSecurity = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM FDSecurity ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM FDSecurity`,
  }
}
d.FDDATA.FDStore = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM FDStore ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM FDStore`,
  }
}
d.FDDATA.FDTxnPoint = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM FDTxnPoint ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM FDTxnPoint`,
  }
}

//
// PSCUSTOMER database.
//

d.PSCUSTOMER = {}

d.PSCUSTOMER.Customer = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM Customer ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM Customer`,
  }
}
d.PSCUSTOMER.CustomerDemographic = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM CustomerDemographic ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM CustomerDemographic`,
  }
}
d.PSCUSTOMER.CustomerSearchKey = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM CustomerSearchKey ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM CustomerSearchKey`,
  }
}
d.PSCUSTOMER.CustomerType = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM CustomerType ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM CustomerType`,
  }
}
d.PSCUSTOMER.DemographicChoice = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM DemographicChoice ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM DemographicChoice`,
  }
}
d.PSCUSTOMER.DemographicDef = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM DemographicDef ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM DemographicDef`,
  }
}
d.PSCUSTOMER.DisallowedTender = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM DisallowedTender ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM DisallowedTender`,
  }
}
d.PSCUSTOMER.FDCard = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM FDCard ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM FDCard`,
  }
}
d.PSCUSTOMER.PSNextID = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM PSNextID ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM PSNextID`,
  }
}
d.PSCUSTOMER.SearchKeyDef = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM SearchKeyDef ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM SearchKeyDef`,
  }
}

//
// PSDATA database.
//

d.PSDATA = {}

d.PSDATA.PSAccessSystem = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM PSAccessSystem ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM PSAccessSystem`,
  }
}
d.PSDATA.PSBackupServer = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM PSBackupServer ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM PSBackupServer`,
  }
}
d.PSDATA.PSFont = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM PSFont ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM PSFont`,
  }
}
d.PSDATA.PSMessage = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM PSMessage ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM PSMessage`,
  }
}
d.PSDATA.PSUser = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM PSUser ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM PSUser`,
  }
}
d.PSDATA.PSUserSystem = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM PSUserSystem ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM PSUserSystem`,
  }
}

//
// PSGIFTCARD database.
//

d.PSGIFTCARD = {}

d.PSGIFTCARD.GCCardType = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM GCCardType ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM GCCardType`,
  }
}
d.PSGIFTCARD.GCCompany = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM GCCompany ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM GCCompany`,
  }
}
d.PSGIFTCARD.GCGiftCard = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM GCGiftCard ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM GCGiftCard`,
  }
}
d.PSGIFTCARD.GCProfile = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM GCProfile ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM GCProfile`,
  }
}
d.PSGIFTCARD.GCSecurity = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM GCSecurity ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM GCSecurity`,
  }
}
d.PSGIFTCARD.GCStore = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM GCStore ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM GCStore`,
  }
}
d.PSGIFTCARD.GCTxnDetail = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM GCTxnDetail ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM GCTxnDetail`,
  }
}

//
// RS0000CUSTOMER database.
//

d.RS0000CUSTOMER = {}

d.RS0000CUSTOMER.ProfitekSystem = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM ProfitekSystem ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM ProfitekSystem`,
  }
}
d.RS0000CUSTOMER.RSCustomer = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSCustomer ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSCustomer`,
  }
}
d.RS0000CUSTOMER.RSCustomerCity = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSCustomerCity ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSCustomerCity`,
  }
}
d.RS0000CUSTOMER.RSCustomerContact = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSCustomerContact ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSCustomerContact`,
  }
}
d.RS0000CUSTOMER.RSCustomerDel = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSCustomerDel ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSCustomerDel`,
  }
}
d.RS0000CUSTOMER.RSCustomerPrefer = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSCustomerPrefer ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSCustomerPrefer`,
  }
}
d.RS0000CUSTOMER.RSCustomerProvince = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSCustomerProvince ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSCustomerProvince`,
  }
}
d.RS0000CUSTOMER.RSCustomerSubcategory = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSCustomerSubcategory ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSCustomerSubcategory`,
  }
}
d.RS0000CUSTOMER.RSCustomerType = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSCustomerType ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSCustomerType`,
  }
}

//
// RS0000DATA database.
//

d.RS0000DATA = {}

d.RS0000DATA.ProfitekSystem = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM ProfitekSystem ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM ProfitekSystem`,
  }
}
d.RS0000DATA.RSAirMilesDetail = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSAirMilesDetail ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSAirMilesDetail`,
  }
}
d.RS0000DATA.RSAirMilesOffer = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSAirMilesOffer ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSAirMilesOffer`,
  }
}
d.RS0000DATA.RSAPVendor = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSAPVendor ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSAPVendor`,
  }
}
d.RS0000DATA.RSAPVendorType = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSAPVendorType ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSAPVendorType`,
  }
}
d.RS0000DATA.RSARRequest = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSARRequest ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSARRequest`,
  }
}
d.RS0000DATA.RSAWItemBonusPoints = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSAWItemBonusPoints ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSAWItemBonusPoints`,
  }
}
d.RS0000DATA.RSAWItemPointsExempt = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSAWItemPointsExempt ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSAWItemPointsExempt`,
  }
}
d.RS0000DATA.RSAWItemRedemptionPoints = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSAWItemRedemptionPoints ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSAWItemRedemptionPoints`,
  }
}
d.RS0000DATA.RSBarcode = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSBarcode ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSBarcode`,
  }
}
d.RS0000DATA.RSCashierClosing = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSCashierClosing ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSCashierClosing`,
  }
}
d.RS0000DATA.RSCashierClosingTender = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSCashierClosingTender ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSCashierClosingTender`,
  }
}
d.RS0000DATA.RSCashierClosingTenderDetail = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSCashierClosingTenderDetail ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSCashierClosingTenderDetail`,
  }
}
d.RS0000DATA.RSCashPickup = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSCashPickup ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSCashPickup`,
  }
}
d.RS0000DATA.RSCashValue = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSCashValue ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSCashValue`,
  }
}
d.RS0000DATA.RSCategory = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSCategory ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSCategory`,
  }
}
d.RS0000DATA.RSCCACreditRequest = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSCCACreditRequest ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSCCACreditRequest`,
  }
}
d.RS0000DATA.RSCCACreditRequestBak = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSCCACreditRequestBak ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSCCACreditRequestBak`,
  }
}
d.RS0000DATA.RSCCAEncryptFail = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSCCAEncryptFail ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSCCAEncryptFail`,
  }
}
d.RS0000DATA.RSCCAProfile = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSCCAProfile ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSCCAProfile`,
  }
}
d.RS0000DATA.RSCCASummary = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSCCASummary ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSCCASummary`,
  }
}
d.RS0000DATA.RSCCAWorkStation = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSCCAWorkStation ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSCCAWorkStation`,
  }
}
d.RS0000DATA.RSColor = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSColor ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSColor`,
  }
}
d.RS0000DATA.RSCommVol = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSCommVol ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSCommVol`,
  }
}
d.RS0000DATA.RSCompanyInfo = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSCompanyInfo ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSCompanyInfo`,
  }
}
d.RS0000DATA.RSCPInvoice = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSCPInvoice ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSCPInvoice`,
  }
}
d.RS0000DATA.RSCPInvoiceDetail = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSCPInvoiceDetail ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSCPInvoiceDetail`,
  }
}
d.RS0000DATA.RSCPInvoiceTxnDetail = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSCPInvoiceTxnDetail ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSCPInvoiceTxnDetail`,
  }
}
d.RS0000DATA.RSCPVendor = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSCPVendor ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSCPVendor`,
  }
}
d.RS0000DATA.RSCUPBatchClose = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSCUPBatchClose ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSCUPBatchClose`,
  }
}
d.RS0000DATA.RSCUPRequest = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSCUPRequest ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSCUPRequest`,
  }
}
d.RS0000DATA.RSCurrency = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSCurrency ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSCurrency`,
  }
}
d.RS0000DATA.RSDailyClose = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSDailyClose ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSDailyClose`,
  }
}
d.RS0000DATA.RSDeposit = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSDeposit ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSDeposit`,
  }
}
d.RS0000DATA.RSDiscountType = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSDiscountType ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSDiscountType`,
  }
}
d.RS0000DATA.RSEmail = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSEmail ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSEmail`,
  }
}
d.RS0000DATA.RSEmployee = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSEmployee ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSEmployee`,
  }
}
d.RS0000DATA.RSEspGCLog = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSEspGCLog ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSEspGCLog`,
  }
}
d.RS0000DATA.RSEvent = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSEvent ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSEvent`,
  }
}
d.RS0000DATA.RSEventDays = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSEventDays ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSEventDays`,
  }
}
d.RS0000DATA.RSEventHoliday = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSEventHoliday ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSEventHoliday`,
  }
}
d.RS0000DATA.RSExpenseType = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSExpenseType ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSExpenseType`,
  }
}
d.RS0000DATA.RSGLChartofAcct = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSGLChartofAcct ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSGLChartofAcct`,
  }
}
d.RS0000DATA.RSGLDept = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSGLDept ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSGLDept`,
  }
}
d.RS0000DATA.RSGLJournalDay = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSGLJournalDay ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSGLJournalDay`,
  }
}
d.RS0000DATA.RSHCMessage = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSHCMessage ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSHCMessage`,
  }
}
d.RS0000DATA.RSImExOrderDownloadLog = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSImExOrderDownloadLog ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSImExOrderDownloadLog`,
  }
}
d.RS0000DATA.RSImExParameter = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSImExParameter ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSImExParameter`,
  }
}
d.RS0000DATA.RSImExTask = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSImExTask ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSImExTask`,
  }
}
d.RS0000DATA.RSInvAdjustCostDetail = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSInvAdjustCostDetail ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSInvAdjustCostDetail`,
  }
}
d.RS0000DATA.RSInvAdjustCostHead = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSInvAdjustCostHead ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSInvAdjustCostHead`,
  }
}
d.RS0000DATA.RSInvAdjustDetail = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSInvAdjustDetail ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSInvAdjustDetail`,
  }
}
d.RS0000DATA.RSInvAdjustHead = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSInvAdjustHead ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSInvAdjustHead`,
  }
}
d.RS0000DATA.RSInventory = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSInventory ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSInventory`,
  }
}
d.RS0000DATA.RSInventoryCount = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSInventoryCount ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSInventoryCount`,
  }
}
d.RS0000DATA.RSInventoryHold = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSInventoryHold ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSInventoryHold`,
  }
}
d.RS0000DATA.RSInventoryTrack = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSInventoryTrack ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSInventoryTrack`,
  }
}
d.RS0000DATA.RSInvModExpiryDateLotNumDetail = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSInvModExpiryDateLotNumDetail ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSInvModExpiryDateLotNumDetail`,
  }
}
d.RS0000DATA.RSInvModExpiryDateLotNumHead = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSInvModExpiryDateLotNumHead ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSInvModExpiryDateLotNumHead`,
  }
}
d.RS0000DATA.RSInvModSerialStatusDetail = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSInvModSerialStatusDetail ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSInvModSerialStatusDetail`,
  }
}
d.RS0000DATA.RSInvModSerialStatusHead = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSInvModSerialStatusHead ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSInvModSerialStatusHead`,
  }
}
d.RS0000DATA.RSInvPCCountDetail = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSInvPCCountDetail ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSInvPCCountDetail`,
  }
}
d.RS0000DATA.RSInvPCHead = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSInvPCHead ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSInvPCHead`,
  }
}
d.RS0000DATA.RSInvPCImageDetail = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSInvPCImageDetail ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSInvPCImageDetail`,
  }
}
d.RS0000DATA.RSInvRecDetail = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSInvRecDetail ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSInvRecDetail`,
  }
}
d.RS0000DATA.RSInvRecDetailMisc = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSInvRecDetailMisc ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSInvRecDetailMisc`,
  }
}
d.RS0000DATA.RSInvRecHead = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSInvRecHead ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSInvRecHead`,
  }
}
d.RS0000DATA.RSInvRecMoreDetail = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSInvRecMoreDetail ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSInvRecMoreDetail`,
  }
}
d.RS0000DATA.RSInvSptCmbDetail = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSInvSptCmbDetail ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSInvSptCmbDetail`,
  }
}
d.RS0000DATA.RSInvSptCmbHead = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSInvSptCmbHead ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSInvSptCmbHead`,
  }
}
d.RS0000DATA.RSInvTxfDetail = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSInvTxfDetail ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSInvTxfDetail`,
  }
}
d.RS0000DATA.RSInvTxfDetailMore = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSInvTxfDetailMore ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSInvTxfDetailMore`,
  }
}
d.RS0000DATA.RSInvTxfHead = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSInvTxfHead ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSInvTxfHead`,
  }
}
d.RS0000DATA.RSInvTxfHeadMisc = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSInvTxfHeadMisc ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSInvTxfHeadMisc`,
  }
}
d.RS0000DATA.RSInvTxfInventoryDetail = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSInvTxfInventoryDetail ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSInvTxfInventoryDetail`,
  }
}
d.RS0000DATA.RSItem = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSItem ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSItem`,
  }
}
d.RS0000DATA.RSItemCostChange = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSItemCostChange ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSItemCostChange`,
  }
}
d.RS0000DATA.RSItemDel = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSItemDel ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSItemDel`,
  }
}
d.RS0000DATA.RSItemFinishedProduct = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSItemFinishedProduct ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSItemFinishedProduct`,
  }
}
d.RS0000DATA.RSItemListTypeChange = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSItemListTypeChange ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSItemListTypeChange`,
  }
}
d.RS0000DATA.RSItemMergeLog = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSItemMergeLog ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSItemMergeLog`,
  }
}
d.RS0000DATA.RSItemPicture = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSItemPicture ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSItemPicture`,
  }
}
d.RS0000DATA.RSItemPriceChange = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSItemPriceChange ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSItemPriceChange`,
  }
}
d.RS0000DATA.RSItemRegion = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSItemRegion ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSItemRegion`,
  }
}
d.RS0000DATA.RSItemsAttrib = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSItemsAttrib ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSItemsAttrib`,
  }
}
d.RS0000DATA.RSItemSizeColor = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSItemSizeColor ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSItemSizeColor`,
  }
}
d.RS0000DATA.RSItemSizeColorPic = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSItemSizeColorPic ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSItemSizeColorPic`,
  }
}
d.RS0000DATA.RSItemSizeWidth = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSItemSizeWidth ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSItemSizeWidth`,
  }
}
d.RS0000DATA.RSItemStatus = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSItemStatus ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSItemStatus`,
  }
}
d.RS0000DATA.RSItemStockLevel = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSItemStockLevel ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSItemStockLevel`,
  }
}
d.RS0000DATA.RSItemsWebAttrib = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSItemsWebAttrib ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSItemsWebAttrib`,
  }
}
d.RS0000DATA.RSItemsWebAttribDefValue = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSItemsWebAttribDefValue ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSItemsWebAttribDefValue`,
  }
}
d.RS0000DATA.RSItemTicket = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSItemTicket ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSItemTicket`,
  }
}
d.RS0000DATA.RSItemUpdateLog = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSItemUpdateLog ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSItemUpdateLog`,
  }
}
d.RS0000DATA.RSItemVendor = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSItemVendor ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSItemVendor`,
  }
}
d.RS0000DATA.RSItemVendorRegion = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSItemVendorRegion ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSItemVendorRegion`,
  }
}
d.RS0000DATA.RSKitItem = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSKitItem ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSKitItem`,
  }
}
d.RS0000DATA.RSLabelSetting = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSLabelSetting ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSLabelSetting`,
  }
}
d.RS0000DATA.RSLayDetail = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSLayDetail ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSLayDetail`,
  }
}
d.RS0000DATA.RSLayHeader = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSLayHeader ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSLayHeader`,
  }
}
d.RS0000DATA.RSLayShip = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSLayShip ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSLayShip`,
  }
}
d.RS0000DATA.RSLinkItem = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSLinkItem ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSLinkItem`,
  }
}
d.RS0000DATA.RSLockTable = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSLockTable ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSLockTable`,
  }
}
d.RS0000DATA.RSMainButtons = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSMainButtons ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSMainButtons`,
  }
}
d.RS0000DATA.RSNextID = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSNextID ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSNextID`,
  }
}
d.RS0000DATA.RSNextIDDelPool = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSNextIDDelPool ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSNextIDDelPool`,
  }
}
d.RS0000DATA.RSOEAllocateExcept = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSOEAllocateExcept ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSOEAllocateExcept`,
  }
}
d.RS0000DATA.RSOETxnDetail = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSOETxnDetail ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSOETxnDetail`,
  }
}
d.RS0000DATA.RSOETxnDetailMore = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSOETxnDetailMore ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSOETxnDetailMore`,
  }
}
d.RS0000DATA.RSOETxnHeader = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSOETxnHeader ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSOETxnHeader`,
  }
}
d.RS0000DATA.RSOETxnShip = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSOETxnShip ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSOETxnShip`,
  }
}
d.RS0000DATA.RSOpenDrawerLog = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSOpenDrawerLog ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSOpenDrawerLog`,
  }
}
d.RS0000DATA.RSOrderTrack = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSOrderTrack ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSOrderTrack`,
  }
}
d.RS0000DATA.RSOthTxnCheck = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSOthTxnCheck ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSOthTxnCheck`,
  }
}
d.RS0000DATA.RSOthTxnCheckDetail = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSOthTxnCheckDetail ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSOthTxnCheckDetail`,
  }
}
d.RS0000DATA.RSParameter = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSParameter ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSParameter`,
  }
}
d.RS0000DATA.RSPKCOrderDetail = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSPKCOrderDetail ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSPKCOrderDetail`,
  }
}
d.RS0000DATA.RSPKCOrderHeader = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSPKCOrderHeader ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSPKCOrderHeader`,
  }
}
d.RS0000DATA.RSPKCOrderTxf = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSPKCOrderTxf ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSPKCOrderTxf`,
  }
}
d.RS0000DATA.RSPKCPickupDetail = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSPKCPickupDetail ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSPKCPickupDetail`,
  }
}
d.RS0000DATA.RSPKCPickupHeader = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSPKCPickupHeader ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSPKCPickupHeader`,
  }
}
d.RS0000DATA.RSPKCRefundOrder = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSPKCRefundOrder ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSPKCRefundOrder`,
  }
}
d.RS0000DATA.RSPriceMap = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSPriceMap ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSPriceMap`,
  }
}
d.RS0000DATA.RSPrintForm = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSPrintForm ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSPrintForm`,
  }
}
d.RS0000DATA.RSReason = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSReason ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSReason`,
  }
}
d.RS0000DATA.RSRegion = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSRegion ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSRegion`,
  }
}
d.RS0000DATA.RSRoyalDetail = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSRoyalDetail ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSRoyalDetail`,
  }
}
d.RS0000DATA.RSRoyalFee = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSRoyalFee ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSRoyalFee`,
  }
}
d.RS0000DATA.RSRoyalHeader = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSRoyalHeader ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSRoyalHeader`,
  }
}
d.RS0000DATA.RSSalesButtons = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSSalesButtons ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSSalesButtons`,
  }
}
d.RS0000DATA.RSSalesCommission = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSSalesCommission ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSSalesCommission`,
  }
}
d.RS0000DATA.RSSecGroupFns = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSSecGroupFns ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSSecGroupFns`,
  }
}
d.RS0000DATA.RSSecGroups = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSSecGroups ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSSecGroups`,
  }
}
d.RS0000DATA.RSSecGroupUsers = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSSecGroupUsers ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSSecGroupUsers`,
  }
}
d.RS0000DATA.RSSecSystemFnGroups = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSSecSystemFnGroups ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSSecSystemFnGroups`,
  }
}
d.RS0000DATA.RSSecSystemFns = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSSecSystemFns ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSSecSystemFns`,
  }
}
d.RS0000DATA.RSSecSystems = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSSecSystems ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSSecSystems`,
  }
}
d.RS0000DATA.RSSerialNumberChangeLog = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSSerialNumberChangeLog ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSSerialNumberChangeLog`,
  }
}
d.RS0000DATA.RSShift = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSShift ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSShift`,
  }
}
d.RS0000DATA.RSShipMethod = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSShipMethod ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSShipMethod`,
  }
}
d.RS0000DATA.RSSizeMatrix = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSSizeMatrix ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSSizeMatrix`,
  }
}
d.RS0000DATA.RSSizeMatrixDetail = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSSizeMatrixDetail ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSSizeMatrixDetail`,
  }
}
d.RS0000DATA.RSSpiff = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSSpiff ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSSpiff`,
  }
}
d.RS0000DATA.RSSplitItem = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSSplitItem ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSSplitItem`,
  }
}
d.RS0000DATA.RSSSBillCoupon = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSSSBillCoupon ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSSSBillCoupon`,
  }
}
d.RS0000DATA.RSSSBillDiscount = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSSSBillDiscount ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSSSBillDiscount`,
  }
}
d.RS0000DATA.RSSSBillSpecialPrice = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSSSBillSpecialPrice ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSSSBillSpecialPrice`,
  }
}
d.RS0000DATA.RSSSCoupon = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSSSCoupon ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSSSCoupon`,
  }
}
d.RS0000DATA.RSSSCouponItem = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSSSCouponItem ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSSSCouponItem`,
  }
}
d.RS0000DATA.RSSSCumuQtyDisc = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSSSCumuQtyDisc ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSSSCumuQtyDisc`,
  }
}
d.RS0000DATA.RSSSCumuQtyDiscItem = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSSSCumuQtyDiscItem ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSSSCumuQtyDiscItem`,
  }
}
d.RS0000DATA.RSSSCumuQtyDiscJoin = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSSSCumuQtyDiscJoin ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSSSCumuQtyDiscJoin`,
  }
}
d.RS0000DATA.RSSSCumuQtyDiscJoinDetail = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSSSCumuQtyDiscJoinDetail ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSSSCumuQtyDiscJoinDetail`,
  }
}
d.RS0000DATA.RSSSCustomerSpecial = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSSSCustomerSpecial ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSSSCustomerSpecial`,
  }
}
d.RS0000DATA.RSSSCustomerSpecialMarkup = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSSSCustomerSpecialMarkup ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSSSCustomerSpecialMarkup`,
  }
}
d.RS0000DATA.RSSSDiscount = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSSSDiscount ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSSSDiscount`,
  }
}
d.RS0000DATA.RSSSMixMatch = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSSSMixMatch ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSSSMixMatch`,
  }
}
d.RS0000DATA.RSSSPriceBreak = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSSSPriceBreak ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSSSPriceBreak`,
  }
}
d.RS0000DATA.RSSSPurchaseLimit = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSSSPurchaseLimit ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSSSPurchaseLimit`,
  }
}
d.RS0000DATA.RSSSSpecialPrice = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSSSSpecialPrice ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSSSSpecialPrice`,
  }
}
d.RS0000DATA.RSSSTopNQtySpecial = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSSSTopNQtySpecial ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSSSTopNQtySpecial`,
  }
}
d.RS0000DATA.RSSTMainBarFnButton = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSSTMainBarFnButton ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSSTMainBarFnButton`,
  }
}
d.RS0000DATA.RSSTMoreFnButton = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSSTMoreFnButton ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSSTMoreFnButton`,
  }
}
d.RS0000DATA.RSStore = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSStore ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSStore`,
  }
}
d.RS0000DATA.RSSTSalesButtonLayout = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSSTSalesButtonLayout ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSSTSalesButtonLayout`,
  }
}
d.RS0000DATA.RSSTSalesMenuLayout = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSSTSalesMenuLayout ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSSTSalesMenuLayout`,
  }
}
d.RS0000DATA.RSSTTenderBarFnButton = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSSTTenderBarFnButton ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSSTTenderBarFnButton`,
  }
}
d.RS0000DATA.RSSubcategory = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSSubcategory ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSSubcategory`,
  }
}
d.RS0000DATA.RSTax = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSTax ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSTax`,
  }
}
d.RS0000DATA.RSTaxArea = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSTaxArea ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSTaxArea`,
  }
}
d.RS0000DATA.RSTenderType = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSTenderType ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSTenderType`,
  }
}
d.RS0000DATA.RSTerms = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSTerms ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSTerms`,
  }
}
d.RS0000DATA.RSTxnDetail = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSTxnDetail ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSTxnDetail`,
  }
}
d.RS0000DATA.RSTxnDetailDelLog = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSTxnDetailDelLog ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSTxnDetailDelLog`,
  }
}
d.RS0000DATA.RSTxnDetailForeign = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSTxnDetailForeign ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSTxnDetailForeign`,
  }
}
d.RS0000DATA.RSTxnDetailInventory = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSTxnDetailInventory ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSTxnDetailInventory`,
  }
}
d.RS0000DATA.RSTxnDiscount = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSTxnDiscount ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSTxnDiscount`,
  }
}
d.RS0000DATA.RSTxnExpenseDtl = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSTxnExpenseDtl ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSTxnExpenseDtl`,
  }
}
d.RS0000DATA.RSTxnHeader = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSTxnHeader ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSTxnHeader`,
  }
}
d.RS0000DATA.RSTxnHeaderForeign = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSTxnHeaderForeign ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSTxnHeaderForeign`,
  }
}
d.RS0000DATA.RSTxnPayment = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSTxnPayment ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSTxnPayment`,
  }
}
d.RS0000DATA.RSTxnReason = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSTxnReason ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSTxnReason`,
  }
}
d.RS0000DATA.RSTxnShipping = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSTxnShipping ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSTxnShipping`,
  }
}
d.RS0000DATA.RSTxnTender = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSTxnTender ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSTxnTender`,
  }
}
d.RS0000DATA.RSTxnTenderForeign = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSTxnTenderForeign ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSTxnTenderForeign`,
  }
}
d.RS0000DATA.RSUserDrawer = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSUserDrawer ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSUserDrawer`,
  }
}
d.RS0000DATA.RSUserProfile = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSUserProfile ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSUserProfile`,
  }
}
d.RS0000DATA.RSWidth = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSWidth ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSWidth`,
  }
}
d.RS0000DATA.RSWorkstation = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSWorkstation ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSWorkstation`,
  }
}
d.RS0000DATA.RSWorkStationLog = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSWorkStationLog ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSWorkStationLog`,
  }
}

//
// RS0000HISTORY database.
//

d.RS0000HISTORY = {}

d.RS0000HISTORY.RSCashierClosingTender = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSCashierClosingTender ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSCashierClosingTender`,
  }
}
d.RS0000HISTORY.RSCashierClosingTenderDetail = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSCashierClosingTenderDetail ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSCashierClosingTenderDetail`,
  }
}
d.RS0000HISTORY.RSCashPickup = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSCashPickup ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSCashPickup`,
  }
}
d.RS0000HISTORY.RSCCACreditRequest = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSCCACreditRequest ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSCCACreditRequest`,
  }
}
d.RS0000HISTORY.RSCCASummary = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSCCASummary ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSCCASummary`,
  }
}
d.RS0000HISTORY.RSCUPBatchClose = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSCUPBatchClose ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSCUPBatchClose`,
  }
}
d.RS0000HISTORY.RSCUPRequest = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSCUPRequest ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSCUPRequest`,
  }
}
d.RS0000HISTORY.RSDailyClose = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSDailyClose ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSDailyClose`,
  }
}
d.RS0000HISTORY.RSGLJournal = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSGLJournal ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSGLJournal`,
  }
}
d.RS0000HISTORY.RSSalesCommission = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSSalesCommission ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSSalesCommission`,
  }
}
d.RS0000HISTORY.RSTxnDeletedDetail = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSTxnDeletedDetail ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSTxnDeletedDetail`,
  }
}
d.RS0000HISTORY.RSTxnDetail = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSTxnDetail ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSTxnDetail`,
  }
}
d.RS0000HISTORY.RSTxnDetailForeign = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSTxnDetailForeign ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSTxnDetailForeign`,
  }
}
d.RS0000HISTORY.RSTxnExpenseDtl = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSTxnExpenseDtl ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSTxnExpenseDtl`,
  }
}
d.RS0000HISTORY.RSTxnHeader = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSTxnHeader ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSTxnHeader`,
  }
}
d.RS0000HISTORY.RSTxnHeaderForeign = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSTxnHeaderForeign ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSTxnHeaderForeign`,
  }
}
d.RS0000HISTORY.RSTxnPayment = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSTxnPayment ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSTxnPayment`,
  }
}
d.RS0000HISTORY.RSTxnReason = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSTxnReason ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSTxnReason`,
  }
}
d.RS0000HISTORY.RSTxnShipping = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSTxnShipping ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSTxnShipping`,
  }
}
d.RS0000HISTORY.RSTxnTender = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSTxnTender ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSTxnTender`,
  }
}
d.RS0000HISTORY.RSTxnTenderForeign = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSTxnTenderForeign ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSTxnTenderForeign`,
  }
}
d.RS0000HISTORY.RSAirMilesDetail = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSAirMilesDetail ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSAirMilesDetail`,
  }
}
d.RS0000HISTORY.RSOpenDrawerLog = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSOpenDrawerLog ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSOpenDrawerLog`,
  }
}
d.RS0000HISTORY.ProfitekSystem = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM ProfitekSystem ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM ProfitekSystem`,
  }
}
d.RS0000HISTORY.RSARRequest = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSARRequest ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSARRequest`,
  }
}
d.RS0000HISTORY.RSCashierClosing = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSCashierClosing ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSCashierClosing`,
  }
}

//
// RS0000PODATA database.
//

d.RS0000PODATA = {}

d.RS0000PODATA.POHeader = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM POHeader ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM POHeader`,
  }
}
d.RS0000PODATA.POParameter = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM POParameter ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM POParameter`,
  }
}
d.RS0000PODATA.PORemark = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM PORemark ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM PORemark`,
  }
}
d.RS0000PODATA.POShipToAddress = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM POShipToAddress ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM POShipToAddress`,
  }
}
d.RS0000PODATA.ProfitekSystem = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM ProfitekSystem ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM ProfitekSystem`,
  }
}
d.RS0000PODATA.POCompanyInfo = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM POCompanyInfo ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM POCompanyInfo`,
  }
}
d.RS0000PODATA.PODetail = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM PODetail ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM PODetail`,
  }
}
d.RS0000PODATA.PODetailSize = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM PODetailSize ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM PODetailSize`,
  }
}

//
// RS0000WNDATA database.
//

d.RS0000WNDATA = {}

d.RS0000WNDATA.RSWNFormSubcategory = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSWNFormSubcategory ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSWNFormSubcategory`,
  }
}
d.RS0000WNDATA.RSWNItemImportSubcatMatch = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSWNItemImportSubcatMatch ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSWNItemImportSubcatMatch`,
  }
}
d.RS0000WNDATA.RSWNParameter = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSWNParameter ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSWNParameter`,
  }
}
d.RS0000WNDATA.RSWNPeriodMonth = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSWNPeriodMonth ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSWNPeriodMonth`,
  }
}
d.RS0000WNDATA.RSWNPeriodTask = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSWNPeriodTask ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSWNPeriodTask`,
  }
}
d.RS0000WNDATA.RSWNPeriodTaskInvRange = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSWNPeriodTaskInvRange ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSWNPeriodTaskInvRange`,
  }
}
d.RS0000WNDATA.RSWNPeriodTaskSalesRange = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSWNPeriodTaskSalesRange ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSWNPeriodTaskSalesRange`,
  }
}
d.RS0000WNDATA.RSWNPeriodYear = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSWNPeriodYear ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSWNPeriodYear`,
  }
}
d.RS0000WNDATA.RSWNRentalItem = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSWNRentalItem ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSWNRentalItem`,
  }
}
d.RS0000WNDATA.ProfitekSystem = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM ProfitekSystem ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM ProfitekSystem`,
  }
}
d.RS0000WNDATA.RSWNBatchReport = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSWNBatchReport ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSWNBatchReport`,
  }
}
d.RS0000WNDATA.RSWNFormCustType = r => {
  return {
    random: r.query`SELECT TOP 20 * FROM RSWNFormCustType ORDER BY NEWID()`,
    count: r.query`SELECT COUNT(*) FROM RSWNFormCustType`,
  }
}


// Export all queries in one object
module.exports = d
