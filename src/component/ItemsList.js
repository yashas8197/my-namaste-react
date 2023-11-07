import { CARD_URL } from "../utils/constant";

const ItemsList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-b-2 border-grey-200 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <div className="text-2xl">
                {item?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? (
                  <span className="text-green-600">🟢</span>
                ) : (
                  <span className="text-red-600">🔴</span>
                )}
              </div>
              <span>{item?.card?.info?.name}</span>
              <span>
                - ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
              <div className="text-xs">
                <span className="bg-customBackground text-customText rounded px-1 mr-1">
                  {item?.card?.info?.offerTags?.[0]?.title}
                </span>
                <span className="bg-customBackground text-customText rounded px-1">
                  {item?.card?.info?.offerTags?.[0]?.subTitle}
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-400">
              {item?.card?.info?.description}
            </p>
          </div>
          <div className="w-3/12 p-4 relative">
            <img
              src={CARD_URL + item?.card?.info?.imageId}
              className="w-full rounded-lg"
            />
            <div className="absolute mx-3  bottom-0 w-24 h-9">
              <button className="p-2  bg-white text-green-500 items-center w-full rounded-lg shadow-lg">
                Add
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
