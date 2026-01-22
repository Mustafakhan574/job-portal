import { configureStore } from "@reduxjs/toolkit";
import companySlice from "./companySlice"
export const Store = configureStore({
         reducer:{
          company: companySlice
         }
})