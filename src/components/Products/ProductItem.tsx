import { Product } from "@/interface";
import React from "react";
import { FaStar } from "react-icons/fa";
import { DialogProduct } from "./DialogProduct";

export const ProductItem = ({
  id,
  title,
  price,
  category,
  image,
  rating,
  description,
}: Product) => {
  return (
    <div className="w-full relative flex flex-col gap-2 p-4 transition-all hover:scale-105 rounded-lg shadow-md">
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-contain rounded-lg bg-no-repeat"
      />
      <span className="text-lg font-semibold overflow-hidden text-ellipsis line-clamp-2">
        {title}
      </span>
      <div className="w-full flex flex-1 items-end justify-between">
        <span className="text-lg font-semibold">${price}</span>
        <DialogProduct
          id={id}
          price={price}
          description={description}
          image={image}
          rating={rating}
          title={title}
          category={category}
        />
      </div>
      <span className="text-xs absolute right-2 z-10 text-white capitalize bg-black rounded-lg p-2 font-semibold">
        {category}
      </span>
      <div className="flex gap-1 absolute left-4  justify-center rounded-lg bg-gray-300 p-1 px-2">
        <FaStar className="text-yellow-500" />
        <span className="text-sm font-semibold">{rating.rate}</span>
      </div>
    </div>
  );
};
