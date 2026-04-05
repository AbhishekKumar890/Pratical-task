import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorageItem, setLocalStorageItem } from "../../../utils/localStorage";

const STORAGE_KEY = "itemMasterList";

const formInitialState = {
  // basics info
  itemCode: "",
  itemName: "",
  shortName: "",
  itemType: "",
  itemGroup: "",
  product: "",
  gender: "",

  //touch & weight
  touchPercent: "0.00",
  minTouch: "0.00",
  maxTouch: "0.00",
  minWestPercent: "0.00",
  maxWestPercent: "0.00",
  weight: "0.000",
  watermark: "",

  // tag settings
  tagLooseGroup: "",
  tagSplitType: "",
  tagRateFix: true,
  allowNegativeStock: true,
  stockMaintain: true,

  // tax & rates
  hsnCode: "",
  labourRateType: "",
  addSalesRate: "",
  accountStockType: "",

  // mrp & cost
  mrpRofType: "",
  mrpLessAmount: "",
  isActive: true,
};

const initialState = {
  form: formInitialState,
  itemList: getLocalStorageItem(STORAGE_KEY, []),
};

const itemMasterSlice = createSlice({
  name: "itemMaster",
  initialState,
  reducers: {
    setItemField: (state, action) => {
      const { field, value } = action.payload;
      state.form[field] = value;
    },
    toggleItemActive: (state) => {
      state.form.isActive = !state.form.isActive;
    },
    saveItem: (state) => {
      const newItem = {
        ...state.form,
        itemCode: `I${String(state.itemList.length + 1).padStart(4, "0")}`,
      };
      state.itemList.push(newItem);
      setLocalStorageItem(STORAGE_KEY, state.itemList);
      state.form = formInitialState;
    },
    resetItem: (state) => {
      state.form = formInitialState;
    },
  },
});

export const { setItemField, toggleItemActive, saveItem, resetItem } = itemMasterSlice.actions;

export default itemMasterSlice;
