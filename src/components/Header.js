import React from "react";
import { LOGO_URL } from "../../utils/morkData";
import{useState , useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";
//Link tag is use in place of ankar tag because we do not route 
// the whole page in react we can only route the component
// thatswhy we can use ankar tag
const Header=()=>{
    const [btnNameReact , setBtnNameReact] =useState("Login");
    const onlineStatus =useOnlineStatus();
    const {loggedInUser} =useContext(UserContext);
    //if no dependency array[] => useEffect is called on every time
    //if deoendency array[]=> useEffect is called on initial render(just once)
    //if dependency array[] is btnNameReact => called everytime btnNameReact is update
    //means when it change login to logout

    // useEffect(() =>{
        
    // },[btnNameReact])
    //Subscribing to the store using a Selector means updating or reading to store
    const cartItems =useSelector((store) => store.cart.items);
    return(
        <div className="flex justify-between bg-pink-500 shadow-lg sm:bg-yellow-100 lg:bg-blue-400">
            {/*sm:bg-yellow-100 means if background color sm is badha ho to yellow color aur sm ho to pink color  means greater than sm and lg  */}
            <div className='logo-container'>
                <img className='w-54 h-35' src={LOGO_URL} height="80px" width="80px" alt="Anas"/>
            </div>
            
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online status:{onlineStatus ? "True": "False"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                        </li>
                    <li className="px-4">
                    <Link to="/about">About</Link></li>
                    <li className="px-4">
                    <Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                   
                    <li className="px-4 font-bold text-xl">
                    <Link to="/cart">
                    Cart- ({cartItems.length} items)
                    </Link>
                       
                    </li>
                    <button className="login" onClick={() =>{
                        btnNameReact ==="Login" ? setBtnNameReact("Logout")
                        : setBtnNameReact("Login");
                        // This line means that if over button show login 
                        // onclick event change to logout otherwise login
                    }}
                    >
                        {btnNameReact}
                    </button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
                </div>            
        </div>
    );
};

export default Header;