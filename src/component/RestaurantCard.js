import { CARD_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  const restaurant = resData.info;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    areaName,
    avgRating,
    aggregatedDiscountInfoV3,
  } = restaurant;
  return (
    <div className="m-4 p-4 w-[220px] rounded-lg shadow-lg transform hover:scale-105 transition-transform flex flex-col">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CARD_URL + cloudinaryImageId}
      />
      <h4
        className="absolute bottom-0 left-0 right-0 bg-indigo-700 text-white py-2 px-4 text-center"
        style={{ maxWidth: "100%" }}
      >
        {aggregatedDiscountInfoV3?.header
          ? aggregatedDiscountInfoV3?.header
          : "NO OFFERS TODAY"}
      </h4>
      <h3 className="font-bold py-2 text-xl">{name}</h3>
      <h4 className="text-indigo-600 font-semibold text-lg">
        ⭐{avgRating}
        {"  "}-{"  "}
        {restaurant.sla.deliveryTime}mins
      </h4>
      <h4 className="text-gray-600">{cuisines.join(", ")}</h4>
      <h4 className="text-gray-600">{areaName}</h4>
    </div>
  );
};

//higher order component

export const withOfferLabel = (RestaurantCard) => {
  return (res) => {
    return (
      <div>
        <h4
          className="absolute bottom-0 left-0 right-0 bg-indigo-700 text-white py-2 px-4 text-center"
          style={{ maxWidth: "100%" }}
        >
          {aggregatedDiscountInfoV3.header} {aggregatedDiscountInfoV3.subHeader}
        </h4>
        <RestaurantCard />
      </div>
    );
  };
};

export default RestaurantCard;
