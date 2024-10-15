import { Category, Product } from "@/interface";
import ProductsService from "@/services/ProductsService";
import { useEffect, useRef, useState } from "react";
import { Filters } from "../interface/Filters";
import { categories } from "@/constants";

export const useProductList = (products: Product[], selectedCategory:Category) => {
  const [productsList, setProducts] = useState<Product[]>([]);
  const [originalProductList, setOriginalProductList] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [firstLoad, setFirstLoad] = useState(false);
  const [hideButton, setHideButton] = useState(false);
  const [filters, SetFilters] = useState<Filters>({
    category: categories.includes(selectedCategory) ? selectedCategory : "All",
    title: "",
    priceLevel: "default",
    alphabetic: "default",
  });

  const [page, setPage] = useState(1);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setProducts(products);
    setOriginalProductList(products);
  }, [products]);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      handleApplyFilters();
    }, 200);
  }, [
    filters.alphabetic,
    filters.priceLevel,
    filters.priceLevel,
    filters.title,
  ]);

  useEffect(() => {
    if (firstLoad) return setFirstLoad(false);
    handleLoadCategoryChange();
  }, [filters.category]);

  const loadMore = async () => {
    setLoading(true);
    let newProducts;
    if (filters.category === "All") {
      newProducts = await ProductsService.getProducts(page + 1);
    } else {
      newProducts = await ProductsService.getProductsByCategory(
        page + 1,
        filters.category as Category
      );
    }
    if (productsList.length === newProducts.length) {
      setHideButton(true);
    }
    setProducts([...newProducts]);
    setOriginalProductList([...newProducts]);
    setPage(page + 1);
    setLoading(false);
    handleApplyFilters(newProducts);
  };

  const handleLoadCategoryChange = async () => {
    let products;
    if (filters.category === "All") {
      products = await ProductsService.getProducts(1);
    } else {
      products = await ProductsService.getProductsByCategory(
        1,
        filters.category as Category
      );
    }
    setLoading(true);
    setPage(1);
    setHideButton(false);
    setProducts(products);
    setLoading(false);
    setOriginalProductList(products);
  };

  const handleApplyFilters = (products?: Product[]) => {
    const originalProducts =
      products && products?.length > 0 ? products : originalProductList;

    if (originalProducts.length === 0) return;

    let newProducts = [...originalProducts];

    newProducts = filterByTitle(newProducts);

    newProducts = sortByPrice(newProducts);

    newProducts = sortByAlphabetic(newProducts);

    setProducts(newProducts);
  };

  const filterByTitle = (offers: Product[]) => {
    const searchTerm = filters.title.trim().toLowerCase();
    if (searchTerm.length === 0) return offers;

    return offers.filter((product) => {
      const productTitle = product.title.trim().toLowerCase();
      return productTitle.includes(searchTerm);
    });
  };

  const sortByPrice = (offers: Product[]) => {
    if (filters.priceLevel === "default") return offers;

    return offers.sort((a, b) => {
      return filters.priceLevel === "low-high"
        ? a.price - b.price
        : b.price - a.price;
    });
  };

  const sortByAlphabetic = (offers: Product[]) => {
    if (filters.alphabetic === "default") return offers;

    return offers.sort((a, b) => {
      if (filters.alphabetic === "A-Z") {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });
  };

  const handleChangeFilter = (type: string, newValue: string) => {
    SetFilters({ ...filters, [type]: newValue });
  };

  return {
    productsList,
    handleChangeFilter,
    loadMore,
    filters,
    loading,
    hideButton,
  };
};
