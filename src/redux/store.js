import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./redusers/counter-slice";
 export const store = configureStore({
    reducer:{
      counter:  counterSlice,
    },
})