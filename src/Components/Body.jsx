import { useState } from "react";
import RestrauntCard from "./RestaurantCard";

const Body = ({ restrautList }) => {
  const [listOfRestaurants, setRestaurantList] = useState(restrautList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restrautList.filter(
              (res) => res.data.avgRating >= 4
            );
            setRestaurantList(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-list">
        {listOfRestaurants.map((restaurant) => {
          return (
            <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
