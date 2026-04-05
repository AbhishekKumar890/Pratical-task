export const newPartyValidation = (formData) => {
  const errors = {};

  const accountCode = formData.accountCode?.trim();
  if (!accountCode) {
    errors.accountCode = 'Account Code is required';
  }

  const accountName = formData.accountName?.trim();
  if (!accountName) {
    errors.accountName = 'Account Name is required';
  }

  const shortName = formData.shortName?.trim();
  if (!shortName) {
    errors.shortName = 'Short Name is required';
  }

  const accountGroup = formData.accountGroup?.trim();
  if (!accountGroup) {
    errors.accountGroup = 'Account Group is required';
  }

  const accountCategory = formData.accountCategory?.trim();
  if (!accountCategory) {
    errors.accountCategory = 'Account Category is required';
  }

  const customerCategory = formData.customerCategory?.trim();
  if (!customerCategory) {
    errors.customerCategory = 'Customer Category is required';
  }

  const mobile1 = formData.mobile1?.trim();
  if (!mobile1) {
    errors.mobile1 = "Mobile 1 is required";
  }

  const mobile2 = formData.mobile2?.trim();
  if (!mobile2) {
    errors.mobile2 = "Mobile 2 is required";
  }
  const contactPerson = formData.contactPerson?.trim();
  if (!contactPerson) {
    errors.contactPerson = "ContactPerson is required";
  }

  const email = formData.email?.trim();
  if (!email) {
    errors.email = "EmailAddress is required";
  }

  const website = formData.website?.trim();
  if (!website) {
    errors.website = "Website is required";
  }

  const address1 = formData.address1?.trim();
  if (!address1) {
    errors.address1 = "Address1 is required";
  }

  const address2 = formData.address2?.trim();
  if (!address2) {
    errors.address2 = "Address2 is required";
  }

  const city = formData.city?.trim();
  if (!city) {
    errors.city = "City is required";
  }

  const region = formData.region?.trim();
  if (!region) {
    errors.region = "Region is required";
  }

  const district = formData.district?.trim();
  if (!district) {
    errors.district = "District is required";
  }

  const state = formData.state?.trim();
  if (!state) {
    errors.state = "State is required";
  }

  const country = formData.country?.trim();
  if (!country) {
    errors.country = "Country is required";
  }

  const pincode = formData.pincode?.trim();
  if (!pincode) {
    errors.pincode = "PinCode is required";
  }

  const gstNumber = formData.gstNumber?.trim();
  if (!gstNumber) {
    errors.gstNumber = "GST Number is required";
  }

  const gstType = formData.gstType?.trim();
  if (!gstType) {
    errors.gstType = "GST Type is required";
  }

  const panNumber = formData.panNumber?.trim();
  if (!panNumber) {
    errors.panNumber = "PanNumber is required";
  }

  const aadhaarNumber = formData.aadhaarNumber?.trim();
  if (!aadhaarNumber) {
    errors.aadhaarNumber = "AadhaarNumber is required";
  }


  const passportNumber = formData.passportNumber?.trim();
  if (!passportNumber) {
    errors.passportNumber = "PassportNumber is required";
  }

  const hallmarkLicenceNo = formData.hallmarkLicenceNo?.trim();
  if (!hallmarkLicenceNo) {
    errors.hallmarkLicenceNo = "Hallmark LicenceNo is required";
  }

  const licenceNumber = formData.licenceNumber?.trim();
  if (!licenceNumber) {
    errors.licenceNumber = "LicenceNumber is required";
  }

  const bankName = formData.bankName?.trim();
  if (!bankName) {
    errors.bankName = "BankName is required";
  }

  const accountNumber = formData.accountNumber?.trim();
  if (!accountNumber) {
    errors.accountNumber = "AccountNumber is required";
  }

  const ifscCode = formData.ifscCode?.trim();
  if (!ifscCode) {
    errors.ifscCode = "IFSC Code is required";
  }

  const swiftCode = formData.swiftCode?.trim();
  if (!swiftCode) {
    errors.swiftCode = "SwiftCode is required";
  }

  const branchName = formData.branchName?.trim();
  if (!branchName) {
    errors.branchName = "BranchName is required";
  }

  const bankAddress = formData.bankAddress?.trim();
  if (!bankAddress) {
    errors.bankAddress = "BankAddress is required";
  }

  const creditDays = formData.creditDays?.trim();
  if (!creditDays) {
    errors.creditDays = "CreditDays is required";
  }

  const creditLimit = formData.creditLimit?.trim();
  if (!creditLimit) {
    errors.creditLimit = "CreditLimit is required";
  }

  const interestPercent = formData.interestPercent?.trim();
  if (!interestPercent) {
    errors.interestPercent = "InterestPercent is required";
  }

  const birthDate = formData.birthDate?.trim();
  if (!birthDate) {
    errors.birthDate = "BirthDate is required";
  }

  const anniversaryDate = formData.anniversaryDate?.trim();
  if (!anniversaryDate) {
    errors.anniversaryDate = "AnniversaryDate is required";
  }

  const referenceBy = formData.referenceBy?.trim();
  if (!referenceBy) {
    errors.referenceBy = "ReferenceBy is required";
  }

  const openingAmountDebit = formData.openingAmountDebit?.trim();
  if (!openingAmountDebit) {
    errors.openingAmountDebit = "OpeningAmountDebit is required";
  }

  const openingAmountCredit = formData.openingAmountCredit?.trim();
  if (!openingAmountCredit) {
    errors.openingAmountCredit = "OpeningAmountCredit is required";
  }

  const goldFineDebit = formData.goldFineDebit?.trim();
  if (!goldFineDebit) {
    errors.goldFineDebit = "GoldFineDebit is required";
  }
  const goldFineCredit = formData.goldFineCredit?.trim();
  if (!goldFineCredit) {
    errors.goldFineCredit = "GoldFineCredit is required";
  }
  const silverFineDebit = formData.silverFineDebit?.trim();
  if (!silverFineDebit) {
    errors.silverFineDebit = "SilverFineDebit is required";
  }
  const silverFineCredit = formData.silverFineCredit?.trim();
  if (!silverFineCredit) {
    errors.silverFineCredit = "SilverFineCredit is required";
  }

  if (Object.keys(errors)?.length) {
    return { errorMessage: errors }
  }
}

export const newItemValidation = (formData) => {
  const errors = {};

  if (!formData.itemName?.trim()) {
    errors.itemName = "Item Name is required";
  }

  if (!formData.shortName?.trim()) {
    errors.shortName = "Short Name is required";
  }

  if (!formData.itemType?.trim()) {
    errors.itemType = "Item Type is required";
  }

  if (!formData.itemGroup?.trim()) {
    errors.itemGroup = "Item Group is required";
  }

  if (!formData.product?.trim()) {
    errors.product = "Product is required";
  }

  if (!formData.gender?.trim()) {
    errors.gender = "Gender is required";
  }

  if (!formData.touchPercent?.trim()) {
    errors.touchPercent = "Touch % is required";
  }

  if (!formData.minTouch?.trim()) {
    errors.minTouch = "Minimum Touch is required";
  }

  if (!formData.maxTouch?.trim()) {
    errors.maxTouch = "Maximum Touch is required";
  }

  if (!formData.weight?.trim()) {
    errors.weight = "Weight is required";
  }

  if (!formData.tagLooseGroup?.trim()) {
    errors.tagLooseGroup = "Tag / Loose / Group is required";
  }

  if (!formData.tagSplitType?.trim()) {
    errors.tagSplitType = "Tag Split Type is required";
  }

  if (!formData.hsnCode?.trim()) {
    errors.hsnCode = "HSN Code is required";
  }

  if (!formData.labourRateType?.trim()) {
    errors.labourRateType = "Labour Rate Type is required";
  }

  if (!formData.accountStockType?.trim()) {
    errors.accountStockType = "Account Stock Type is required";
  }

  if (!formData.mrpRofType?.trim()) {
    errors.mrpRofType = "MRP ROF Type is required";
  }

  if (!formData.mrpLessAmount?.trim()) {
    errors.mrpLessAmount = "MRP Less Amount is required";
  }

  if (Object.keys(errors).length) {
    return { errorMessage: errors };
  }
};

export const newItemGroupValidation = (formData) => {
  const errors = {};

  if (!formData.groupName?.trim()) {
    errors.groupName = "Group Name is required";
  }

  if (!formData.shortName?.trim()) {
    errors.shortName = "Short Name is required";
  }

  if (!formData.metalType?.trim()) {
    errors.metalType = "Metal Type is required";
  }

  if (!formData.measurementUnitCode?.trim()) {
    errors.measurementUnitCode = "Measurement Unit Code is required";
  }

  if (!formData.touchPercent?.trim()) {
    errors.touchPercent = "Touch % is required";
  }

  if (!formData.rateDecimal?.trim()) {
    errors.rateDecimal = "Rate Decimal is required";
  }

  if (!formData.roundOffType?.trim()) {
    errors.roundOffType = "Round Off Type is required";
  }

  if (!formData.stockJobworkType?.trim()) {
    errors.stockJobworkType = "Stock / Job work Type is required";
  }

  if (!formData.purchaseRateType?.trim()) {
    errors.purchaseRateType = "Purchase Rate Type is required";
  }

  if (!formData.salesRateType?.trim()) {
    errors.salesRateType = "Sales Rate Type is required";
  }

  if (!formData.salesAccount?.trim()) {
    errors.salesAccount = "Sales Account is required";
  }

  if (!formData.purchaseAccount?.trim()) {
    errors.purchaseAccount = "Purchase Account is required";
  }

  if (!formData.openingStockAccount?.trim()) {
    errors.openingStockAccount = "Opening Stock Account is required";
  }

  if (!formData.closingStockBsa?.trim()) {
    errors.closingStockBsa = "Closing Stock - B.S.A is required";
  }

  if (!formData.closingStockPlAccount?.trim()) {
    errors.closingStockPlAccount = "Closing Stock - P&L Account is required";
  }

  if (Object.keys(errors).length) {
    return { errorMessage: errors };
  }
};

export const newProductValidation = (formData) => {
  const errors = {};

  if (!formData.productName?.trim()) {
    errors.productName = "Product Name is required";
  }

  if (!formData.shortName?.trim()) {
    errors.shortName = "Short Name is required";
  }

  if (Object.keys(errors).length) {
    return { errorMessage: errors };
  }
};

export const newSupplierLabourValidation = (formData) => {
  const errors = {};

  if (!formData.partyCode?.trim()) {
    errors.partyCode = "Party Code is required";
  }

  formData.mappings.forEach((mapping, index) => {
    if (!mapping.product?.trim()) {
      errors[`mappings.${index}.product`] = "Product is required";
    }
    if (!mapping.touch?.trim()) {
      errors[`mappings.${index}.touch`] = "Touch % is required";
    }
    if (!mapping.labourPct?.trim()) {
      errors[`mappings.${index}.labourPct`] = "Labour % is required";
    }
    if (!mapping.type?.trim()) {
      errors[`mappings.${index}.type`] = "Labour Type is required";
    }
    if (!mapping.rate?.trim()) {
      errors[`mappings.${index}.rate`] = "Labour Rate is required";
    }
    if (!mapping.itemRate?.trim()) {
      errors[`mappings.${index}.itemRate`] = "Item Rate is required";
    }
  });

  if (Object.keys(errors).length) {
    return { errorMessage: errors };
  }
};

export const newPartyOpeningValidation = (formData) => {
  const errors = {};

  if (!formData.partyCode?.trim()) {
    errors.partyCode = "Party Code is required";
  }

  if (!formData.partyName?.trim()) {
    errors.partyName = "Party Name is required";
  }

  formData.transactions.forEach((row, index) => {
    if (!row.date?.trim()) {
      errors[`transactions.${index}.date`] = "Date is required";
    }
    if (!row.billNo?.trim()) {
      errors[`transactions.${index}.billNo`] = "Bill No is required";
    }
    if (!row.item?.trim()) {
      errors[`transactions.${index}.item`] = "Item is required";
    }
    if (!row.type?.trim()) {
      errors[`transactions.${index}.type`] = "Type is required";
    }
    if (!row.amount?.trim()) {
      errors[`transactions.${index}.amount`] = "Amount is required";
    }
    if (!row.drCr?.trim()) {
      errors[`transactions.${index}.drCr`] = "Dr/Cr is required";
    }
  });

  if (Object.keys(errors).length) {
    return { errorMessage: errors };
  }
};
