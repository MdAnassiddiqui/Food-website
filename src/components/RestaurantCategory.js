import React from "react";
import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory =({data ,showItems,setShowIndex,dummy}) =>{
    // const [showItems , setShowItems]=useState(false);
    
    const handleClick=() =>{
        setShowIndex();
    // console.log("clicked")
     //if I have items show item otherwise not show means when click on it it show and again click it not show
     //this is know as accordion
     //setShowItems(!showItems);
    }
    return(
        <div >
           {/* Header */}
           <div className="w-6/12 mx-auto my-5 shadow-lg p-4  bg-gray-50">
           <div className="flex justify-between cursor-pointer " onClick={handleClick}>
                      <span className="font-bold text-lg">
                {data.title} ({data.itemCards.length})</span>
            <span><i class="fa fa-arrow-down" aria-hidden="true"></i></span>
            </div>
            {/* if my showItem have ItemList the show it otherwise not  */}
          {showItems && <ItemList items={data.itemCards} dummy={dummy}/>}  
           </div>
        </div>
    );
};
export default RestaurantCategory;