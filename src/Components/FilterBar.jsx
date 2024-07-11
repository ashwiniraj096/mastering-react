import { useState } from "react";

const FilterBar = ({ listOfRestaurants, setFilteredRestaurants }) => {
  const [searchString, setSearchString] = useState("");
  return (
    <div className="filter-bar flex m-6 p-4 border-solid border-2 items-center border-gray-100  rounded-2xl">
      <button
        className="filter-btn  cursor-pointer hover:bg-sky-100 mr-4 border-gray-100 border-2 p-2 rounded-2xl font-semibold"
        onClick={() => {
          const filteredList = listOfRestaurants?.filter(
            (res) => res?.info?.avgRating > 4
          );
          setFilteredRestaurants(filteredList);
        }}
      >
        Top Rated Restaurants
      </button>

      <input
        type="search"
        className="mr-4 border-gray-100 border-2 rounded-2xl p-2 placeholder-slate-400
        focus-visible:outline-none focus:border-sky-100 focus:ring-1 focus:ring-sky-100"
        placeholder="Search Restaurant"
        id=""
        value={searchString}
        onChange={(e) => {
          value = e.target.value;
          setSearchString(value);
          const searchedRestaurants = listOfRestaurants.filter((res) =>
            res?.info?.name.toLowerCase().includes(searchString.toLowerCase())
          );
          setFilteredRestaurants(searchedRestaurants);
        }}
      />

      <button
        onClick={() => setFilteredRestaurants(listOfRestaurants)}
        className="cursor-pointer hover:bg-gray-50 mr-4 border-gray-100 border-2 p-2 rounded-2xl font-semibold"
      >
        Clear
      </button>
    </div>
  );
};

export default FilterBar;
