import RestaurantCard from "./RestaurantCard";
import { useState } from "react";




const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{}}>Top Rated Restaurant</button>
      </div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

export default Body;
