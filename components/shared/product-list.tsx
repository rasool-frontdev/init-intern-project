"use client";

import { ProductType } from "@/types";
import ProductCard from "../cards/product.card";
import { useAppContext } from "@/context/product.context";

const ProductList = () => {
  const { products } = useAppContext();

  return (
    <div className="grid grid-cols-1 my-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products?.map((product: ProductType) => (
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
