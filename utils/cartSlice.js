import React from "react";
import {createSlice} from "@reduxjs/toolkit";
const cartSlice =createSlice({
    name:'cart',
    initialState:{
      items:[],
    },

    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
    // Redux Toolkit we have to mutate or update the state
    // First we have the state is simple and push the state then
    // it compare into the state with the new state and show that
    //state into the page  
        },
        removeItem:(state )=>{
            state.items.pop();
        },
        //originalState= {items:["pizza"]}
        clearCart:(state) =>{
            state.items.length =0; //[]
            //return {items:[]};  above line will be hide 
            // return line make same sense
        },
    },
});

export const {addItem , removeItem ,clearCart} =cartSlice.actions;
export default cartSlice.reducer;