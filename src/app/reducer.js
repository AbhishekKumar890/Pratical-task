import { combineReducers } from "@reduxjs/toolkit";
import addParty from "../pages/AddParty/slices/addPartySlice";
import itemGroup from "../pages/ItemGroup/slices/itemGroupSlice";
import itemMaster from "../pages/ItemMaster/slices/itemMasterSlice";
import partyOpening from "../pages/PartyOpening/slices/partyOpeningSlice";
import productMaster from "../pages/ProductMaster/slices/productMasterSlice";
import supplierLabour from "../pages/SupplierLabour/slices/supplierLabourSlice";

export const reducer = combineReducers({
    [addParty.name]: addParty.reducer,
    [itemGroup.name]: itemGroup.reducer,
    [itemMaster.name]: itemMaster.reducer,
    [partyOpening.name]: partyOpening.reducer,
    [productMaster.name]: productMaster.reducer,
    [supplierLabour.name]: supplierLabour.reducer,
})
