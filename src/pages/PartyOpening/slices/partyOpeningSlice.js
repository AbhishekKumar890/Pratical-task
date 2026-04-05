import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorageItem, setLocalStorageItem } from "../../../utils/localStorage";

const STORAGE_KEY = "partyOpeningList";

const createEmptyRow = () => ({
  voucherNo: "",
  date: "",
  billNo: "",
  days: "",
  item: "",
  type: "",
  grossWt: "",
  netWt: "",
  touchPercent: "",
  goldFine: "",
  amount: "",
  drCr: "dr",
});

const formInitialState = {
  partyCode: "",
  partyName: "",
  isActive: true,
  transactions: [createEmptyRow()],
  openingAmountDebit: "0.00",
  openingAmountCredit: "0.00",
  goldFineDebit: "0.00",
  goldFineCredit: "0.00",
  silverFineDebit: "0.00",
  silverFineCredit: "0.00",
};

const initialState = {
  form: formInitialState,
  openingList: getLocalStorageItem(STORAGE_KEY, []),
};

const partyOpeningSlice = createSlice({
  name: "partyOpening",
  initialState,
  reducers: {
    setPartyOpeningField: (state, action) => {
      const { field, value } = action.payload;
      state.form[field] = value;
    },
    setPartyOpeningTransactionField: (state, action) => {
      const { index, field, value } = action.payload;
      state.form.transactions[index][field] = value;
    },
    addPartyOpeningRow: (state) => {
      state.form.transactions.push(createEmptyRow());
    },
    removePartyOpeningRow: (state, action) => {
      if (state.form.transactions.length === 1) {
        return;
      }
      state.form.transactions.splice(action.payload, 1);
    },
    togglePartyOpeningActive: (state) => {
      state.form.isActive = !state.form.isActive;
    },
    savePartyOpening: (state) => {
      const payload = {
        ...state.form,
        transactions: state.form.transactions.map((row, index) => ({
          ...row,
          voucherNo: row.voucherNo || `OP${String(index + 1).padStart(3, "0")}`,
        })),
      };
      state.openingList.push(payload);
      setLocalStorageItem(STORAGE_KEY, state.openingList);
    },
  },
});

export const {
  setPartyOpeningField,
  setPartyOpeningTransactionField,
  addPartyOpeningRow,
  removePartyOpeningRow,
  togglePartyOpeningActive,
  savePartyOpening,
} = partyOpeningSlice.actions;

export default partyOpeningSlice;
