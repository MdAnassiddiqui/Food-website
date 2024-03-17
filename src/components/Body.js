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

if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  } else {
    return (
      <div className="body">
       <div className="filter flex">
        <div className=" m-4 p-4">
            <input type="text" 
            data-testid="searchInput"
            className="border border-solid border-black"
            value={searchText}
            //value me freeze the text we cannot write anything 
            //when we write onchange event the text start writting 
            //and find the search value using setSearchText and put the 
            //value to searchtext and render it
            onChange={(e) =>
            {
                setSearchText(e.target.value);
            }}/>
            <button className="px-4 py-1  bg-green-100 m-2 rounded-3xl"
            onClick={() =>{
                //Filter the restraunt cards and update the UI
                const filteredRestaurant =listOfRestaurants.filter(
                    (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setfilteredRestaurant(filteredRestaurant);
            }}>
            Search
            </button>
        </div>
        <div className="m-4 p-4">
        <button className="px-4 py-1  bg-gray-100 m-2 rounded-3xl "
        onClick={() =>{
            const filteredList =listOfRestaurants.filter(
                (res) => res.info.avgRating>4
            );
            setListOfRestaurant(filteredList);
        }}
        >
            Top Rated Restaurants
        </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
            <label> UserName: </label>
            <input className="border border-black p-2  "
            value={loggedInUser}
            onChange={(e) =>setUserName(e.target.value)} ></input>
        </div>
       </div>
       <div className="flex flex-wrap">
        {/* <RestaurantCard resData={reslist[0]}/>
        <RestaurantCard resData={reslist[1]}/>
        <RestaurantCard resData={reslist[2]}/>
        <RestaurantCard resData={reslist[3]}/>
        <RestaurantCard resData={reslist[4]}/>
        <RestaurantCard resData={reslist[5]}/>
        <RestaurantCard resData={reslist[6]}/>
        <RestaurantCard resData={reslist[7]}/> 
        <RestaurantCard resData={reslist[8]}/>
        <RestaurantCard resData={reslist[9]}/>
        <RestaurantCard resData={reslist[10]}/>
        <RestaurantCard resData={reslist[11]}/> */}
        {/* or */}
            {filteredRestaurant.map((restaurants)=>(
                <Link 
                key={restaurants.id} 
                to={"/restaurants/"+restaurants.id}>  

                {restaurants.name? (
                    <RestaurantCardPromoted resData={restaurants}/>
                ):(            
                <RestaurantCard    
              resData={restaurants}/>
                )}
             
              </Link>
            ))}
            {/* {filteredRestaurant.map((restaurants)=>(
                <RestaurantCard key={restaurants.id}
                resData={restaurants}/>
            ))} */}
        {/* or if u dont have a key use key as a index  */}
              {/* {reslist.map((restaurant,index)=>(
              <RestaurantCard key={restaurant.index} resData={restaurant}/>
            ))} */}
       </div>
     </div>
     
    );
};
};
export default Body;