import { CARD_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  const restaurant = resData.info;
  const { cloudinaryImageId, name, cuisines, areaName, avgRating } = restaurant;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CARD_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{areaName}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;
