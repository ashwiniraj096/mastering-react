import { useParams } from "react-router-dom";
import ShimmerComponent from "./Shimmer/ShimmerBody";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useEffect } from "react";

const RestaurantDetails = () => {
  const { resId } = useParams();
  const restorantDetailMenu = useRestaurantMenu(resId);

  if (restorantDetailMenu.length === 0) return <ShimmerComponent />;

  const menuDetails =
    restorantDetailMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]
      ?.card?.card?.itemCards || [];
  const restoDetails = restorantDetailMenu?.cards[2]?.card?.card?.info || [];

  return (
    <div className="restaurant-detail">
      <h2>{restoDetails?.name}</h2>
      <div className="resto-info-box">
        <h4>
          {restoDetails?.avgRating} ({restoDetails?.totalRatingsString}) -{" "}
          {restoDetails?.costForTwoMessage}
        </h4>
        <h4>{restoDetails?.cuisines?.join(",")}</h4>
        <h5>Outlet - {restoDetails?.areaName}</h5>
        <h5>{restoDetails?.sla?.slaString}</h5>
        <h5>{restoDetails?.feeDetails?.message}</h5>
      </div>
      <h2>Menu</h2>
      <div className="menu-list">
        <ul>
          {menuDetails?.map((card) => (
            <li>
              {card?.card?.info?.name} - Rs.
              {card?.card?.info?.defaultPrice / 100 ||
                card?.card?.info?.price / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantDetails;
