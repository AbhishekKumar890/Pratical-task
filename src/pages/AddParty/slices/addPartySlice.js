import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorageItem, setLocalStorageItem } from "../../../utils/localStorage";

const STORAGE_KEY = "partyList";

const formInitialState = {
  // Identification
  partyCode: "",
  accountCode: "",
  accountName: "",
  shortName: "",
  accountGroup: "",
  accountCategory: "",
  customerCategory: "",
  isActive: true,

  // Contact & Address
  mobile1: "",
  mobile2: "",
  contactPerson: "",
  email: "",
  website: "",
  address1: "",
  address2: "",
  city: "",
  region: "",
  district: "",
  state: "",
  country: "India",
  pincode: "",

  // Statutory
  gstNumber: "",
  gstType: "",
  panNumber: "",
  aadhaarNumber: "",
  passportNumber: "",
  hallmarkLicenceNo: "",
  licenceNumber: "",

  // Bank Details
  bankName: "",
  accountNumber: "",
  ifscCode: "",
  swiftCode: "",
  branchName: "",
  bankAddress: "",

  // Credit & Control
  creditDays: "",
  creditLimit: "",
  interestPercent: "",
  interestAccount: "",
  birthDate: "",
  anniversaryDate: "",
  referenceBy: "",

  // Opening Balance
  openingAmountDebit: "0.00",
  openingAmountCredit: "0.00",
  goldFineDebit: "0.000",
  goldFineCredit: "0.000",
  silverFineDebit: "0.000",
  silverFineCredit: "0.000",
  remarks: "",
};

const initialState = {
  form: formInitialState,
  partyList: getLocalStorageItem(STORAGE_KEY, []),
};

const addPartySlice = createSlice({
  name: "addParty",
  initialState,
  reducers: {
    // Update any single field by key
    setField: (state, action) => {
      const { field, value } = action.payload;
      state.form[field] = value;
    },

    // Toggle active status
    toggleActive: (state) => {
      state.form.isActive = !state.form.isActive;
    },

    // Bulk update multiple fields at once (e.g. prefill from API)
    setPartyData: (state, action) => {
      state.form = { ...state.form, ...action.payload };
    },

    // Reset the entire form back to initial state
    saveParty: (state) => {
      const newParty = {
        ...state.form,
        partyCode: `P${String(state.partyList.length + 1).padStart(3, "0")}`,
      };
      state.partyList.push(newParty);
      setLocalStorageItem(STORAGE_KEY, state.partyList);
      state.form = formInitialState;
    },

    // Reset only the form
    resetParty: (state) => {
      state.form = formInitialState;
    },
  },
});

export const { setField, toggleActive, setPartyData, saveParty, resetParty } = addPartySlice.actions;

export default addPartySlice;
