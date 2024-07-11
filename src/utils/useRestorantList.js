import { useEffect, useState } from "react";
import { SWIGGY_API_URL } from "./constants";

const useRestaurantList = () => {
  const [listOfRestaurants, setRestaurantList] = useState([]);

  const fetchRestaurantsList = async () => {
    const response = await fetch(SWIGGY_API_URL);
    const result = await response.json();
    const restaurantsList =
      result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantList(restaurantsList);
  };

  useEffect(() => {
    fetchRestaurantsList();
  }, []);

  return listOfRestaurants;
};

export default useRestaurantList;
