// Headers body footer
import React, {Suspense, lazy, useEffect ,useState}from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header';
import {createBrowserRouter , RouterProvider ,Outlet } from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Body from './src/components/Body';
import Contact from './src/components/Content';
import RestaurantMenu from './src/components/RestaurantMenu';
//import Grocery from './src/components/Grocery';
import UserContext from './utils/UserContext';
import {Provider} from "react-redux";
import appStore from './utils/appStore';
import Cart from './src/components/Cart';

// // const Footer=()=>{
// //     return(
      
// //     )
// // }
// buddle splitting is know as chunking
//code splitting
//Dynamic Bundling
//lazy Loading
//on demand loading
const Grocery = lazy(() => import ("./src/components/Grocery")); 
const AppLogo=()=>{
    const [userName , setUserName] =useState();
    useEffect (() =>{
        //Make an Api call and send username and password
        const data ={
            name: "Md.Anas",
        };
        setUserName(data.name);
    } ,[]);
    return(
   <Provider store={appStore}>
     <UserContext.Provider value={{loggedInUser:userName ,setUserName}}>
        <div className="fullcontainer">
            <Header/>
            <Outlet/> 
        </div>
    </UserContext.Provider>   
   </Provider> 
    );
};
// createBrowserRouter is used to route those component you want according to there path

const appRouter =createBrowserRouter([
    {
        path:"/",
        element:<AppLogo/>,
        children:[
            {
                path:"/",
                element:<Body/>
            }
            ,
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>,
            },
            {
                path:"/grocery",
                element:(
                <Suspense fallback={<h1>Loading....</h1>}>
                <Grocery/>
                </Suspense>
),
            },
            {
                path:"/cart",
                element:<Cart/>,
            },
        ],
        errorElement:<Error/>,

    },
    
  
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/> );

