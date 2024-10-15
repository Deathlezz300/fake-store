"use client";

import { Category,  Product } from "@/interface";
import { ProductsList } from "./ProductsList";
import { FiltersComponent } from "../Filters";
import { useProductList } from "@/hooks/useProductList";

interface props {
  products: Product[];
  categories: Category[];
  selectedCategory: Category | null;
}

export const ProductsView = ({ products, categories , selectedCategory }: props) => {
  const {
    filters,
    handleChangeFilter,
    productsList,
    hideButton,
    loading,
    loadMore,
  } = useProductList(products,selectedCategory as Category);

  return (
    <div className="w-full flex items-center flex-col gap-3 py-6">
      <FiltersComponent
        filterValues={filters}
        handleSetFilter={handleChangeFilter}
        categories={categories}
      />
      <ProductsList products={productsList} />
      {productsList.length > 0 && !hideButton && (
        <button
          disabled={loading}
          onClick={loadMore}
          type="button"
          className="p-2 px-4 text-white disabled:opacity-50 font-semibold bg-black rounded-lg"
        >
          Load more
        </button>
      )}
    </div>
  );
};
