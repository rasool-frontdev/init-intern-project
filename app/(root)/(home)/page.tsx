import HomeSwiper from "./_components/home-swiper";
import HomeCategories from "./_components/home-categories";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <section className="py-8">
      <HomeSwiper />
      <HomeCategories />
      <div className="flex justify-center items-center">
        <Link
          href={"/products"}
          className="rounded-none bg-red-500 text-white py-3 px-6"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
};

export default Home;
