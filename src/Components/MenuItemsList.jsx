import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import { ThemeContext } from "../utils/contexts";

const MenuItemList = (list) => {
  const theme = useContext(ThemeContext);
  // console.log(theme, "theme inside");
  return (
    <div>
      {list?.cards?.map((eachItem, index) => {
        return (
          <div
            className="border-b-2 border-gray-300 py-3 flex justify-between"
            key={index}
          >
            <div className="w-9/12">
              <div>
                {eachItem?.card?.info?.itemAttribute?.vegClassifier === "NONVEG"
                  ? "🟥"
                  : "🟩"}{" "}
              </div>
              <h1 className="text-gray-600 font-bold text-lg">
                {eachItem?.card?.info?.name}
              </h1>
              <h1 className="font-semibold">
                ₹
                {eachItem?.card?.info?.defaultPrice / 100 ||
                  eachItem?.card?.info?.price / 100}
              </h1>
              <h1 className="text-gray-600">
                {eachItem?.card?.info?.description}
              </h1>
            </div>
            <div className="w-2/12 ">
              <img src={CDN_URL + eachItem?.card?.info?.imageId} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuItemList;
