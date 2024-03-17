import React from "react";
import UserContext from "../../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component{
    constructor(props){

        super(props);
    }

componentDidMount() {
    console.log("Parent Component Did Mount");
}

render() {
    console.log("Parent Render");
    return(
        <div>
            <h1>
                About Class Component
            </h1>
            <div>
                loggedIn User
                <UserContext.Consumer>
                    {({loggedInUser}) =>(
                        <h1 className="text-xl font-bold">{loggedInUser}</h1>
                    )}
                </UserContext.Consumer>
            </div>
            <h2>
                This is My World
            </h2>
            <UserClass name={"First"} location={"React Class"}/>
        </div>
    );
}
}
// const About = () =>{
//     return(
//         <>
//         <h1> Hell Every-One</h1>;
//         <h2> This is my react courses </h2>;
//         {/* we can pass to the function components */}
//         <User name={"This is Md Anas"}/>
//         <UserClass Age={"AGE : 25"} Name={"Name:Md Anas"}/>
//         </>
//     );
// };
export default About;