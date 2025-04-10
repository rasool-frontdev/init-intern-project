// app/page.tsx или pages/index.tsx (если используешь pages directory)

import HomeCard from "@/components/cards/home.card";
import { ProductType } from "@/types";
import axios from "axios";
import SectionTitle from "./section-title";

interface HomeCategoriesProps {
  products: ProductType[];
}

const HomeCategories = async () => {
  let products: ProductType[] = [];

  try {
    const res = await axios.get("https://665c3c1b3e4ac90a04d9021e.mockapi.io/products");
    products = res.data;
  } catch (error) {
    console.error("Failed to fetch products", error);
  }

  return (
    <div className="container">
      <SectionTitle
        title="Featured Categories"
        subtitle="Categories"
      />

      <div className="grid grid-cols-1 my-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <HomeCard
            key={product.id}
            product={product}
          />
        ))}
        {products.length === 0 && <div className="text-red-500">Failed to load products. Please try again later.</div>}
      </div>
    </div>
  );
};

export default HomeCategories;
