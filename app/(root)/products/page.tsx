import ProductList from "@/components/shared/product-list";
import SectionTitle from "@/components/shared/section-title";
import React from "react";

const Products = () => {
  return (
    <section className="container py-6">
      <SectionTitle
        title=""
        subtitle="Products"
      />
      <ProductList />
    </section>
  );
};

export default Products;
