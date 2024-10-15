import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui";
import { Product } from "@/interface";
import { FaStar } from "react-icons/fa";

export const DialogProduct = ({
  id,
  title,
  image,
  rating,
  description,
  price,
  category,
}: Product) => {
  return (
    <Dialog>
      <DialogTrigger className="p-2 text-white text-sm px-4 font-semibold bg-black rounded-lg" >View more</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          <DialogDescription className="flex text-black flex-col gap-2 py-2">
          <img src={image} alt={title} className="h-60 w-full object-contain rounded-lg bg-no-repeat" />
          <div className="flex gap-1 items-center">
            <FaStar className="text-yellow-500 text-base mb-[2px]" />
            <span className="text-base font-semibold">{rating.rate}</span>
            <div className="flex-1"></div>
            <span className="text-sm font-semibold text-white rounded-lg bg-black p-2">{category}</span>
          </div>
          <span className="text-lg font-semibold text-justify">{description}</span>
            <span className="text-lg w-full text-end font-semibold">${price}</span>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
