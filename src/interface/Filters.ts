export interface Filters {
  category: FiltersCategory;
  priceLevel: "low-high" | "high-low" | "default";
  title: string;
}

// En lugar de usar `enum`, defines una unión de literales de tipo string.
export type FiltersCategory = 
  | "electronics"
  | "jewelery"
  | "men's clothing"
  | "women's clothing"
  | "All";

