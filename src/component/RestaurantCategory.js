import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = (data) => {
  console.log(data.showItem);

  const handleClick = () => {
    data.setShowIndex();
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-grey-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.data?.title}({data.data.itemCards.length})
          </span>
          <span className="rotate-180">ʌ</span>
        </div>
        {data.showIndex && <ItemsList items={data?.data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
