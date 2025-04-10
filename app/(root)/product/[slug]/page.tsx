import { Heart, Minus, Plus, RefreshCw } from "lucide-react";
import React from "react";
import { TbTruckDelivery } from "react-icons/tb";

const ProductDetail = () => {
  return (
    <section className="py-8 container">
      <div className="flex justify-between gap-6">
        <div className="w-[66%]"></div>
        <div className="w-[33%]">
          <h6 className="font-bold text-2xl">Havic HV G-92 Gamepad</h6>
          <p className="flex items-center gap-2">
            <span className="flex items-center h-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(5) ? "text-yellow-400" : "text-gray-300"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </span>
            (150 reviews) | <span className="text-green-500">In Stock</span>
          </p>
          <span className="font-semibold text-2xl">192$</span>
          <p className="leading-5 mt-4">Beatae, facere velit quibusdam quaerat eligendi obcaecati aliquid optio iusto molestias minima unde quam repudiandae commodi deleniti.</p>
          <div className="h-[2px] rounded-md my-4 bg-gray-300"></div>
          <div className="flex gap-4 items-center">
            <span className="text-2xl font-semibold">Colors:</span>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 bg-blue-500 inline-block rounded-full"></span>
              <span className="w-6 h-6 bg-red-500 inline-block rounded-full"></span>
            </div>
          </div>
          <div className="flex gap-4 items-center mt-4">
            <span className="text-2xl font-semibold">Sizes:</span>
            <div className="flex items-center gap-2">
              <span className="w-10 h-10 border  rounded flex items-center justify-center font-semibold">XS</span>
              <span className="w-10 h-10 border  rounded flex items-center justify-center font-semibold">S</span>
              <span className="w-10 h-10 border  rounded flex items-center justify-center font-semibold">MD</span>
              <span className="w-10 h-10 border  rounded flex items-center justify-center font-semibold">L</span>
              <span className="w-10 h-10 border  rounded flex items-center justify-center font-semibold">XL</span>
            </div>
          </div>
          <div className="my-2">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <button
                  type="button"
                  className="border w-10 h-10 flex items-center justify-center rounded-l-md border-r-0"
                >
                  <Minus />
                </button>
                <span className="inline-block  w-16 h-10 text-center border p-1 font-bold ">1</span>
                <button
                  type="button"
                  className="border w-10 h-10 flex items-center justify-center rounded-r-md p-1 border-l-0"
                >
                  <Plus />
                </button>
              </div>
              <button
                type="button"
                className="button w-full rounded h-10 border bg-red-500 text-white"
              >
                Buy Now
              </button>
              <button
                type="button"
                className="rounded-md p-1 border"
              >
                <Heart />
              </button>
            </div>
          </div>
          <div className="border p-3 mt-6 flex items-center gap-3 font-semibold">
            <span>
              <TbTruckDelivery size={40} />
            </span>
            <div className="flex flex-col gap-1">
              <span>Free delivery</span>
              <span className="underline">Enter your postal code for Delivery Ability</span>
            </div>
          </div>
          <div className="border p-3 flex items-center gap-3 font-semibold">
            <span>
              <RefreshCw size={40} />
            </span>
            <div className="flex flex-col gap-1">
              <span>Return Delivery</span>
              <span>
                Free 30 Days Delivery Returns. <span className="underline">Details</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
