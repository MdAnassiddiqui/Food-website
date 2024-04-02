import React from "react";
import RestaurantCard,{withPromtedLabel} from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import reslist from "../../utils/Constant";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../../utils/useOnlineStatus";
import  {Link} from "react-router-dom";
import UserContext from "../../utils/UserContext";
const Body =()=>{


//useState is generally used to filter the items according to over need it is super power variable
const [listOfRestaurants,setListOfRestaurant]=useState([]);
const [filteredRestaurant ,setfilteredRestaurant]=useState([]);
const [searchText , setSearchText] =useState("");

const RestaurantCardPromoted =withPromtedLabel(RestaurantCard);
  useEffect(()=>{
    fetchData();
} ,[]
  );
 const fetchData = async () =>{
    const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.88619112039174&lng=80.96986122429371&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    console.log(json);
    setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
 };
 
 const onlineStatus =useOnlineStatus();
 if(onlineStatus ===false) 
 return <h1> Looks like you're offline !! please check</h1>
 
 const {loggedInUser,setUserName} =useContext(UserContext);

// Conditional Rendering
//  if(listOfRestaurants.length === 0){
//     return 
//     <Shimmer />;
//     return( );   
//       or
//  }
// ? is ternary operator

return listOfRestaurants.length === 0 ? (
    <Shimmer/>
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setfilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setfilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>UserName : </label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          
          <Link
            key={restaurant?.info.id}
            to={"/restaurants/" + restaurant?.info.id}
          >
            {restaurant?.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;