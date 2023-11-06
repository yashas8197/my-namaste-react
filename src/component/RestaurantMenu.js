import useRestaurantMenu from "../utils/useRestaurantsMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    sla,
    areaName,
  } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(resInfo);

  return (
    <div className="bg-white p-4 shadow-md text-center">
      <span className="text-2xl font-semibold my-2 block">{name}</span>
      <span className="text-gray-600 text-sm block">{cuisines.join(", ")}</span>
      {categories.map((category) => (
        <RestaurantCategory
          key={category?.card?.card?.id}
          data={category?.card?.card}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
