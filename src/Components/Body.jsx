import { useEffect, useState } from "react";
import RestrauntCard from "./RestaurantCard";
import ShimmerComponent from "./Shimmer/ShimmerBody";
import FilterBar from "./FilterBar";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestorantList";
import useOnlineStatus from "../utils/useOnlineStatus";
import WithLabelComponent from "./WithLable";

const Body = () => {
  const listOfRestaurants = useRestaurantList();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const onlineStatus = useOnlineStatus();

  const LabelAddedComponent = WithLabelComponent(RestrauntCard);

  useEffect(() => {
    setFilteredRestaurants(listOfRestaurants);
  }, [listOfRestaurants]);

  if (!onlineStatus) return <h1>You're Offline 😶</h1>;

  return listOfRestaurants.length === 0 ? (
    <ShimmerComponent />
  ) : (
    <div className="body">
      <FilterBar
        listOfRestaurants={listOfRestaurants}
        setFilteredRestaurants={setFilteredRestaurants}
      />
      <div className="restaurant-list flex flex-wrap justify-center">
        {filteredRestaurants?.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {restaurant?.info?.aggregatedDiscountInfoV3 ? (
                <LabelAddedComponent {...restaurant?.info} />
              ) : (
                <RestrauntCard {...restaurant?.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
