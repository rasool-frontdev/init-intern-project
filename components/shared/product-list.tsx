import { FC } from "react";
import { ProductType } from "@/types";
import axios from "axios";
import ProductCard from "../cards/product.card";

interface ProductListProps {
  initialProducts?: ProductType[];
}

const ProductList: FC<ProductListProps> = async ({ initialProducts }) => {
  //   const { products, setProducts } = useAppContext();

  //   useEffect(() => {
  //     if (initialProducts && !products) {
  //       setProducts(initialProducts);
  //     }
  //   }, [initialProducts, products, setProducts]);

  let products: ProductType[] = [];

  try {
    const res = await axios.get("https://665c3c1b3e4ac90a04d9021e.mockapi.io/products");
    products = res.data;
  } catch (error) {
    console.error("Failed to fetch products", error);
  }

  return (
    <div className="grid grid-cols-1 my-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {!!products &&
        products.map((product: ProductType) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      {products?.length === 0 && <div className="text-red-500">Failed to load products. Please try again later.</div>}
    </div>
  );
};

export default ProductList;
