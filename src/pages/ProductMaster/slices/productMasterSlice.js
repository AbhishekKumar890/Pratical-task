import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorageItem, setLocalStorageItem } from "../../../utils/localStorage";

const STORAGE_KEY = "productMasterList";

const formInitialState = {
  productCode: "",
  productName: "",
  shortName: "",
  isActive: true,
  dailyCounterStockNotManage: false,
  loosePcsDailyCounterStockManager: false,
};

const initialState = {
  form: formInitialState,
  productList: getLocalStorageItem(STORAGE_KEY, []),
};

const productMasterSlice = createSlice({
  name: "productMaster",
  initialState,
  reducers: {
    setProductField: (state, action) => {
      const { field, value } = action.payload;
      state.form[field] = value;
    },
    saveProduct: (state) => {
      const newProduct = {
        ...state.form,
        productCode: `PR${String(state.productList.length + 1).padStart(3, "0")}`,
      };
      state.productList.push(newProduct);
      setLocalStorageItem(STORAGE_KEY, state.productList);
      state.form = formInitialState;
    },
    resetProduct: (state) => {
      state.form = formInitialState;
    },
  },
});

export const { setProductField, saveProduct, resetProduct } = productMasterSlice.actions;

export default productMasterSlice;
