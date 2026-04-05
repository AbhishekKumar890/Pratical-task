import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorageItem, setLocalStorageItem } from "../../../utils/localStorage";

const STORAGE_KEY = "supplierLabourList";

const defaultMappings = [
  { product: "necklace", touch: "91.6", labourPct: "0.2", type: "percentage", rate: "500", itemRate: "6520" },
  { product: "necklace", touch: "91.6", labourPct: "0.3", type: "percentage", rate: "400", itemRate: "6520" },
  { product: "necklace", touch: "75.0", labourPct: "0.1", type: "fixed", rate: "800", itemRate: "5400" },
];

const formInitialState = {
  partyCode: "",
  partyName: "",
  isActive: true,
  mappings: defaultMappings,
};

const initialState = {
  form: formInitialState,
  labourList: getLocalStorageItem(STORAGE_KEY, []),
};

const supplierLabourSlice = createSlice({
  name: "supplierLabour",
  initialState,
  reducers: {
    setSupplierLabourField: (state, action) => {
      const { field, value } = action.payload;
      state.form[field] = value;
    },
    setSupplierLabourMappingField: (state, action) => {
      const { index, field, value } = action.payload;
      state.form.mappings[index][field] = value;
    },
    toggleSupplierLabourActive: (state) => {
      state.form.isActive = !state.form.isActive;
    },
    saveSupplierLabour: (state) => {
      const payload = {
        ...state.form,
        mappings: state.form.mappings.map((mapping) => ({ ...mapping })),
      };
      state.labourList.push(payload);
      setLocalStorageItem(STORAGE_KEY, state.labourList);
    },
  },
});

export const {
  setSupplierLabourField,
  setSupplierLabourMappingField,
  toggleSupplierLabourActive,
  saveSupplierLabour,
} = supplierLabourSlice.actions;

export default supplierLabourSlice;
