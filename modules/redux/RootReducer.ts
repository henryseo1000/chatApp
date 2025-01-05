import { combineReducers } from "@reduxjs/toolkit";
import templateSlice from "./slice/AccountSlice";

const RootReducer = combineReducers({
    template: templateSlice
});

export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;