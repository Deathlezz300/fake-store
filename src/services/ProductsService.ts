import fakeStoreApi from "@/api/fakeStoreApi";
import { Category, Product } from "@/interface";

class ProductsService {
  static async getProducts(page: number): Promise<Product[]> {
    try {
      const numberOfItems = page * 10;

      const { data } = await fakeStoreApi.get<Product[]>(
        `?limit=${numberOfItems}`
      );

      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  static async getProductsByCategory(
    page: number,
    category: Category
  ): Promise<Product[]> {
    try {
      const numberOfItems = page * 10;

      const { data } = await fakeStoreApi.get<Product[]>(
        `/category/${category}?limit=${numberOfItems}`
      );

      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  static async getCategories():Promise<Category[]>{
    try {
      const { data } = await fakeStoreApi.get<Category[]>("/categories");

      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  static async getProduct(id:number):Promise<Product>{
    try{

      const { data }=await fakeStoreApi.get<Product>(`/${id}`);

      return data;

    }catch(error){
      console.error(error);
      return {} as Product;
    }
  }

}

export default ProductsService;
