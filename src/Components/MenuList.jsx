import { useContext } from "react";
import { ThemeContext } from "../utils/contexts";
import MenuItemList from "./MenuItemsList";

const MenuList = ({
  card,
  showDetailCard,
  setShowMenuItems,
  index,
  showMenuItems,
}) => {
  const theme = useContext(ThemeContext);
  //console.log(theme, "theme outside");
  return (
    <div className=" p-2 m-2 border-white border-2 bg-white rounded-lg">
      <div
        className="flex justify-between"
        onClick={() => {
          if (index === showMenuItems) {
            setShowMenuItems(null);
          } else {
            setShowMenuItems(index);
          }
        }}
      >
        <h1 className="font-bold">{card?.card?.card?.title}</h1>
        <span>{!showDetailCard ? "🔽" : "🔼"}</span>
      </div>
      {showDetailCard && (
        <ThemeContext.Provider value="dark">
          <MenuItemList cards={card?.card?.card?.itemCards} />
        </ThemeContext.Provider>
      )}
    </div>
  );
};

export default MenuList;
