import {useParams} from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import React from 'react';
import  { useState } from "react";
const RestaurantMenu =() =>{
   
    const dummy ="Hello every one";
    const {resId} =useParams();
    const resInfo= useRestaurantMenu(resId);
    const [showIndex ,setShowIndex] =useState(null);
     if(resInfo ===null) return <Shimmer/>;
    
    
    const {name ,cuisines , costForTwoMessage} =resInfo?.cards[0]?.card?.card?.info;
    

    const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card ;
    
    console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
         c.card?.["card"]?.["@type"] ===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    console.log(categories);
   //console.log(restaurants);
    return(
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(",")} - {costForTwoMessage}</p>
            <p className="font-bold text-lg">{costForTwoMessage}</p>
            {/* categories accordions */}
            {/* RestaurantCategory is controlled by RestaurantMenu */}
            {categories.map((category ,index)=>(
                <RestaurantCategory key={category?.card?.card?.title}  
                data={category?.card?.card}
                showItems={index === showIndex ? true :false}
                setShowIndex={() =>setShowIndex(index)}
                dummy={dummy}
                 />
            ))}
            {/* <ul>
            {itemCards.map((item) => (
           <li key={item.card.id}>
           {item.card.info.name} - price {item.card.info.price/100}
            </li>
           ))} */}
           {/* <li>{itemCards[0].card.info.name}</li> */}

                {/* <li>{restaurants[0].info.name}</li>
                <li>{restaurants[1].info.name}</li>
                <li>{restaurants[2].info.name}</li> */}
            {/* </ul> */}
        </div>
    );
};

export default RestaurantMenu;