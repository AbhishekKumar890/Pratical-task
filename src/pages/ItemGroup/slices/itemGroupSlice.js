import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorageItem, setLocalStorageItem } from "../../../utils/localStorage";

const STORAGE_KEY = "itemGroupList";

const formInitialState = {
  groupCode: "",
  groupName: "",
  shortName: "",
  metalType: "",
  measurementUnitCode: "",
  touchPercent: "",
  rateDecimal: "",
  roundOffType: "",
  stockJobworkType: "",
  purchaseRateType: "",
  salesRateType: "",
  purchaseBaseRatePercent: "0.00",
  salesBaseRatePercent: "0.00",
  purchaseAddAmount: "0.00",
  salesAddAmount: "0.00",
  fromRate: "0.00",
  toRate: "0.00",
  minOrderDeliveryDays: "0.00",
  salesAccount: "",
  purchaseAccount: "",
  openingStockAccount: "",
  closingStockBsa: "",
  closingStockPlAccount: "",
  isActive: true,
};

const initialState = {
  form: formInitialState,
  groupList: getLocalStorageItem(STORAGE_KEY, []),
};

const itemGroupSlice = createSlice({
  name: "itemGroup",
  initialState,
  reducers: {
    setItemGroupField: (state, action) => {
      const { field, value } = action.payload;
      state.form[field] = value;
    },
    toggleItemGroupActive: (state) => {
      state.form.isActive = !state.form.isActive;
    },
    saveItemGroup: (state) => {
      const newGroup = {
        ...state.form,
        groupCode: `IG${String(state.groupList.length + 1).padStart(3, "0")}`,
      };
      state.groupList.push(newGroup);
      setLocalStorageItem(STORAGE_KEY, state.groupList);
      state.form = formInitialState;
    },
    resetItemGroup: (state) => {
      state.form = formInitialState;
    },
  },
});

export const {
  setItemGroupField,
  toggleItemGroupActive,
  saveItemGroup,
  resetItemGroup,
} = itemGroupSlice.actions;

export default itemGroupSlice;
