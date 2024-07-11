import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [menuDetails, setMenuDetails] = useState([]);

  const fetchMenu = async () => {
    const response = await fetch(MENU_URL + resId);
    const result = await response.json();
    setMenuDetails(result?.data);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return menuDetails;
};

export default useRestaurantMenu;
