import React from "react";
import {render ,screen} from "@testing-library/react";
import Body from "../Body";
import { fireEvent } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import {act} from "react-dom/test-utils";
import "@testing-library/jest-dom";
global.fetch =jest.fn(() =>{
    return Promise.resolve({
        json:() =>{
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("Should render the Body Component with Search" ,async() =>{
    await act(async() =>
    render(
        <BrowserRouter>
        <Body/>
        </BrowserRouter>
    ));
    const cardsBeforSearch =screen.getAllByTestId("resCard");

    expect(cardsBeforSearch.length).toBe(20);
    
    const searchBtn = screen.getByRole("button" ,{name:"Search"});
    const searchInput =screen.getByTestId("searchInput"); 
    fireEvent.change(searchInput,{target:{value:"burger"}});
    fireEvent.click(searchBtn);
    const cardsAfterSearch =screen.getAllByTestId("resCard");
    //expect(searchBtn).toBeInTheDocument();
   //screen should load 4 res cards
 // const card= screen.getAllByTestId("resCard");
 //   expect(card.length).toBe(2);
 expect(cardsAfterSearch.length).toBe(2);
});

it("Should render the Body Component to be filter" ,async() =>{
    await act(async() =>
    render(
        <BrowserRouter>
        <Body/>
        </BrowserRouter>
    ));
    const cardsBeforeFilter =screen.getAllByTestId("resCard");

    expect(cardsBeforeFilter.length).toBe(20);
    const topRatedBtn =screen.getByRole("button" ,{
        name:"Top Rated Restaurants",
    });
    fireEvent.click(topRatedBtn);
    const cardsAfterFilter =screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(20);
})
