import ProductList from "@/components/shared/product-list";
import SectionTitle from "@/components/shared/section-title";

const HomeCategories = () => {
  return (
    <div className="container">
      <SectionTitle
        title="Featured Categories"
        subtitle="Categories"
      />
      <ProductList />
    </div>
  );
};

export default HomeCategories;
