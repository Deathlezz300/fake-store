import { Product } from "@/interface";
import React from "react";
import { ProductItem } from "./ProductItem";

interface props {
  products: Product[];
}

export const ProductsList = ({ products }: props) => {
  return (
    <div className="w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 py-4 gap-8">

        {products.map(product=>(
            <ProductItem key={product.id} {...product}/>
        ))}

    </div>
  );
};
