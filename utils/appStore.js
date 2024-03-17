import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import  cartReducer  from "./cartSlice";
// CartReducer is a slice of whole Reducer 

const appStore= configureStore({
    //This is a single reducer
    reducer:{
        cart:cartReducer,
    }
});
export default appStore;