import { useState, useEffect } from "react";
import RestaurantCard, { withOfferLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfReastaurants, setListOfRestaurants] = useState([]);
  const [filteredReastaurant, setFilteredReastaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9207075&lng=77.6106687&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      // optional chaining
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredReastaurant(
      // optional chaining
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>Looks like you're offline! Please check your internet connection</h1>
    );

  return listOfReastaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex flex-col md:flex-row">
        <div className="m-4 p-4">
          <input
            className="border border-solid border-black focus:ring-2 rounded-lg p-1"
            type="text"
            value={searchText}
            placeholder="Search"
            onChange={(e) => {
              const filteredList = listOfReastaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredReastaurant(filteredList);
              setSearchText(e.target.value);
            }}
          />
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-200 rounded-lg"
            onClick={() => {
              const filteredList = listOfReastaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredReastaurant(filteredList);
            }}
          >
            Rating: 4.0+
          </button>
        </div>
      </div>
      <div className="flex flex-wrap items-center">
        {filteredReastaurant.map((restaurant) => (
          <Link
            to={"restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
