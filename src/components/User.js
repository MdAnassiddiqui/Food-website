import React from "react";
import { useState } from "react";
const User =(props) =>{
    const [count] =useState(0);
    const [count1]=useState(1);
    return (
    <div className="user-card">
    {/* How we can receive function through props  */}
        <h1>Count ={count}</h1>
        <h1>Count ={count1}</h1>
        <h2>Name : {props.name}</h2>
        <h3>Location:Ghazipur</h3>
        <h4>Contact: +918933802764</h4>
    </div>
    );
};

export default User;
