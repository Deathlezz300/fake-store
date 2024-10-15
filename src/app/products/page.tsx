import { ProductsView } from "@/components/Products";
import { Category } from "@/interface";
import ProductsService from "@/services/ProductsService";
import { Metadata } from "next";

export const revalidate = 10000;
export const dynamic = "auto";

export const metadata: Metadata = {
  title: "Products Page",
  description: "Products home page",
};

interface props {
  searchParams: { [key: string]: string };
}

const searchProductsHandler = async (category?: string | null) => {
  const baseArray = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  if (
    category &&
    typeof category === "string" &&
    baseArray.includes(category)
  ) {
    console.log("category", category);
    const products=await ProductsService.getProductsByCategory(1, category as Category);
    return products;
  }

  const products=await ProductsService.getProducts(1);
  return products;
};

export default async function ProductsPage({ searchParams }: props) {
  const { category } = searchParams;

  const products = await searchProductsHandler(category);

  const categories = await ProductsService.getCategories();

  return (
    <section className="w-full">
      <ProductsView products={products} categories={categories} selectedCategory={category as Category} />
    </section>
  );
}
