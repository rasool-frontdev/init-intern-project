import { ProductType } from "@/types";
import axios from "axios";

export const getAllProductListApi = async (): Promise<ProductType[]> => {
  try {
    const { data } = await axios.get("https://665c3c1b3e4ac90a04d9021e.mockapi.io/products");
    return data;
  } catch (error) {
    console.error("Failed to fetch products", error);
    throw error;
  }
};
