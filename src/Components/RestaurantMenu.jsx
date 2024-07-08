import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import ShimmerComponent from "./Shimmer/ShimmerBody";

const RestaurantDetails = () => {
  const { resId } = useParams();
  const [menuDetails, setMenuDetails] = useState([]);
  const [restoDetails, setRestoDetails] = useState({});

  const fetchRestoDetails = async () => {
    const result = await fetch(MENU_URL + resId);
    const res = await result.json();
    setMenuDetails(
      res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
        ?.card?.itemCards
    );
    setRestoDetails(res?.data?.cards[2]?.card?.card?.info);
  };

  useEffect(() => {
    fetchRestoDetails();
  }, []);

  //   if (menuDetails.length === 0) return <ShimmerComponent />;

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
