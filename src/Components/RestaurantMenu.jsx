import { useParams } from "react-router-dom";
import ShimmerComponent from "./Shimmer/ShimmerBody";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";
import MenuList from "./MenuList";

const RestaurantDetails = () => {
  const { resId } = useParams();
  const restorantDetailMenu = useRestaurantMenu(resId);
  const [showMenuItems, setShowMenuItems] = useState(null);

  if (restorantDetailMenu.length === 0) return <ShimmerComponent />;

  const restoDetails = restorantDetailMenu?.cards[2]?.card?.card?.info || [];
  const menuDetails =
    restorantDetailMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (card) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="restaurant-detail w-6/12 m-auto mt-4">
      <h2 className="text-left font-bold text-2xl mb-2">
        {restoDetails?.name}
      </h2>
      <div className="resto-info-box border-2 border-gray-100 rounded-lg p-4 shadow-2xl shadow-gray-200">
        <h4>
          ⭐{restoDetails?.avgRating} ({restoDetails?.totalRatingsString}) -{" "}
          {restoDetails?.costForTwoMessage}
        </h4>
        <h4 className="text-red-600 underline font-semibold">
          {restoDetails?.cuisines?.join(",  ")}
        </h4>
        <h5 className="font-semibold">
          Outlet -{" "}
          <span className="text-gray-400">{restoDetails?.areaName}</span>
        </h5>
        <h5 className="font-semibold">{restoDetails?.sla?.slaString}</h5>
        <h5 className="text-gray-400">
          {restoDetails?.feeDetails?.message?.replace(/<\/?[^>]+(>|$)/g, "")}
        </h5>
      </div>
      <h2 className="font-bold m-3 text-lg">Menu</h2>
      <div className="menu-list bg-gray-100 py-2">
        <ul>
          {menuDetails?.map((card, index) => (
            <li key={index}>
              <MenuList
                card={card}
                showDetailCard={index === showMenuItems}
                setShowMenuItems={setShowMenuItems}
                index={index}
                showMenuItems={showMenuItems}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantDetails;
