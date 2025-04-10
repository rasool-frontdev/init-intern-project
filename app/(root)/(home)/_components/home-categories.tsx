import ProductList from "@/components/shared/product-list";
import SectionTitle from "@/components/shared/section-title";
import { getAllProductListApi } from "@/services";

const HomeCategories = async () => {
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
