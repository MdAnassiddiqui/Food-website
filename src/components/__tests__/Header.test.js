import React from "react"
import { BrowserRouter } from "react-router-dom"
import appStore from "../../../utils/appStore"
import Header from "../Header"
import { Provider } from "react-redux"
import{fireEvent,render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
it("Should render Header Component with a login button",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
           <Header/>
        </Provider>
        </BrowserRouter>
    );
    const loginButton = screen.getByRole("button");
    //If there is multiple button we want to select one single button
    //then we can use ("button ",{name="login"})
    expect(loginButton).toBeInTheDocument();
});
it("Should render Header Component with a Cart item",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
           <Header/>
        </Provider>
        </BrowserRouter>
    );
    const Cart = screen.getByText(/Cart/);
   //we can also use regex = /cart/
    expect(Cart).toBeInTheDocument();
});

it("Should render Header Component with a Cart item",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
           <Header/>
        </Provider>
        </BrowserRouter>
    );
    const Cart = screen.getByText("Cart- (0 items)");
   
    expect(Cart).toBeInTheDocument();
});
it("Should render Header Component when I click loginButton then It logout the button and when logout then login in Cart item",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
           <Header/>
        </Provider>
        </BrowserRouter>
    );
    const loginButton = screen.getByRole("button" ,{name :"Login"});
    fireEvent.click(loginButton);
    const logoutButton =screen.getByRole("button" ,{name:"Logout"});
   //we can also use regex = /cart/
    expect(logoutButton).toBeInTheDocument();
});
