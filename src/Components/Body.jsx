import { useEffect, useState } from "react";
import RestrauntCard from "./RestaurantCard";
import ShimmerComponent from "./Shimmer/ShimmerBody";
import FilterBar from "./FilterBar";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setRestaurantList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const fetchRestaurantsList = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const result = await response.json();
    const restaurantsList =
      result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantList(restaurantsList);
    setFilteredRestaurants(restaurantsList);
  };

  useEffect(() => {
    fetchRestaurantsList();
  }, []);

  return listOfRestaurants.length === 0 ? (
    <ShimmerComponent />
  ) : (
    <div className="body">
      <FilterBar
        listOfRestaurants={listOfRestaurants}
        setFilteredRestaurants={setFilteredRestaurants}
      />
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link to={"/restaurant/" + restaurant.info.id}>
              <RestrauntCard {...restaurant.info} key={restaurant.info.id} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
