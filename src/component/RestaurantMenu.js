import useRestaurantMenu from "../utils/useRestaurantsMenu";
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

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-3/4 mx-auto">
      <div className="mb-4">
        <p className="text-2xl font-semibold">{name}</p>
        <p className="text-gray-600 text-sm">{cuisines.join(", ")}</p>
        <div className="flex items-center justify-between mt-2">
          <p className="text-gray-600">Area: {areaName}</p>
          <div className="text-right">
            <span className="text-green-600 text-lg">⭐{avgRating}</span>
            <p className="text-gray-600">{totalRatingsString}</p>
          </div>
        </div>
        <p className="text-gray-600">Delivery Time: {sla.deliveryTime}</p>
        <p className="text-gray-600">Cost for Two: {costForTwoMessage}</p>
      </div>

      <div>
        <ul>
          {itemCards.map((item) => (
            <li
              key={item?.card?.info?.id}
              className="flex justify-between items-center py-2"
            >
              <span>{item?.card?.info?.name}</span>
              <span className="text-green-600">
                Rs{" "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
