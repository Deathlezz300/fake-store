import { ProductsList } from "@/components/Products";
import ProductsService from "@/services/ProductsService";
import { Metadata } from "next";

export const revalidate = 10000;
export const dynamic = "auto"

export const metadata:Metadata={
    title:"Products Page",
    description:"Products home page"
}


export default async function ProductsPage(){

    const products=await ProductsService.getProducts(1);

    const categories=await ProductsService.getCategories();

    return (
        <section className="w-full">
            <ProductsList products={products} categories={categories}/>
        </section>
    )
}