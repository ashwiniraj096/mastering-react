import { useState } from "react";

const FilterBar = ({ listOfRestaurants, setFilteredRestaurants }) => {
  const [searchString, setSearchString] = useState("");
  return (
    <div style={{ display: "flex" }}>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants?.filter(
              (res) => res?.info?.avgRating > 4
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="filter">
        <input
          type="search"
          style={{ padding: 10 }}
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
      </div>
      <div className="filter">
        <button onClick={() => setFilteredRestaurants(listOfRestaurants)}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
