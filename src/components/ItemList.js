import React from "react";
import { addItem } from "../../utils/cartSlice";
import {RES_URL} from "../../utils/morkData";
import {  useDispatch } from "react-redux";
const ItemList =({items ,dummy}) =>{
    console.log(dummy);
    const dispatch =useDispatch();
    const handleAddItem =(item) =>{
        //I want a dispatch an action
        dispatch(addItem(item));
        //addItem calls action.payload from reducer
    };
    return(
        <div>
            {items.map((item) =>
            <div 
            data-testid="foodItems"
            key={item.card.info.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
         
            <div className="w-9/12">
            <div className="p-2">
                <span>{item.card.info.name}</span> 
                <span> --₹{item.card.info.price ? item.card.info.price/100 :item.card.info.DefaultPrice/100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
            </div>
           
            <div className="w-3/12"> 
            <div className="absolute "> 
            <button className="p-2 rounded-lg bg-black text-white shadow-lg  my-4 mx-12"
            onClick={() => handleAddItem(item)}>
            {/* capture the new function of every item render when we click on onclick event */}
            {/* onClick={() =>handleAddItem(item) capture and immediately run without create new functions} */}
            Add +
            
            </button>
            </div>
            <img src ={RES_URL + item.card.info.imageId} className="w-80 p-4"/>
           
           </div>
            </div>
            )}
        </div>
    )
}
export default ItemList;