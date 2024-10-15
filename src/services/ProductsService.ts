import fakeStoreApi from "@/api/fakeStoreApi";
import { Category, Product } from "@/interface";

class ProductsService {
  static async getProducts(page: number): Promise<Product[] | boolean> {
    try {
      const numberOfItems = page * 15;

      const { data } = await fakeStoreApi.get<Product[]>(
        `?limit=${numberOfItems}`
      );

      return data;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  static async getProductsByCategory(
    page: number,
    category: Category
  ): Promise<Product[] | boolean> {
    try {
      const numberOfItems = page * 15;

      const { data } = await fakeStoreApi.get<Product[]>(
        `/category/${category}?limit=${numberOfItems}`
      );

      return data;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  static async getCategories():Promise<Category[] | boolean>{
    try {
      const { data } = await fakeStoreApi.get<Category[]>("/categories");

      return data;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

}

export default ProductsService;
