import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice"
export const Store = configureStore({
         reducer:{
          user: userSlice
         }
})