import React from "react";
import { RES_URL } from "../../utils/morkData";

const RestaurantCard = (props) => {
    const { resData } = props;
    //console.log(resData);

    return (
        <div data-testid ="resCard" className=" m-4 p-4 w-[250px] rounded-lg bg-slate-300 hover:bg-slate-500">
            <img className='res-logo'
                alt="res-logo"
                src={RES_URL + resData?.info?.cloudinaryImageId} />
            <h3 className="font-bold py-3 text-lg">{resData?.info?.name}</h3>
            <h4 className='break-all'>{resData?.info?.cuisines?.join(", ")}</h4>
            <h4>{resData?.info?.avgRating} stars</h4>
            <h4>{resData?.info?.costForTwo}</h4>
            <h4>{resData?.info?.deliveryTime} minutes</h4>
        </div>
    );
};

export const withPromtedLabel=(RestaurantCard) =>{
    return (props) =>{
        return (
            <div>
            <label>Veg Promoted</label>
            <RestaurantCard {...props}/>
            </div>
        );
    };
};
export default RestaurantCard;  