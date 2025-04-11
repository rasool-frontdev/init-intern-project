"use client";

import { TbTruckDelivery } from "react-icons/tb";
import { productImages, productSizes } from "@/constant";
import { Heart, Minus, Plus, RefreshCw } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("white");
  const [selectedSize, setSelectedSize] = useState("m");

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <section className="py-10 container">
      <div className="grid lg:grid-cols-12 gap-6">
        <div className="flex max-md:flex-col gap-4 w-full lg:col-span-8 xl:h-[513px]">
          <div className="flex flex-wrap md:flex-col justify-between sm:gap-4">
            {productImages.map((image, index) => (
              <div
                key={index}
                className={cn("w-28 h-28 border rounded cursor-pointer overflow-hidden", selectedImage === index ? "border-primary border-2" : "border-gray-200")}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Product view ${index + 1}`}
                  width={120}
                  height={120}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>

          <div className="border rounded-lg overflow-hidden w-full">
            <Image
              src={productImages[selectedImage] || "/placeholder.svg"}
              alt="Product main view"
              width={600}
              height={600}
              className="w-full object-cover h-full xl:h-[512px]"
            />
          </div>
        </div>
        <div className="w-full lg:col-span-4">
          <h6 className="font-bold text-2xl">Havic HV G-92 Gamepad</h6>
          <p className="flex items-center gap-2">
            <span className="flex items-center h-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={cn("w-4 h-4", i < Math.floor(5) ? "text-yellow-400" : "text-gray-300")}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </span>
            (150 reviews) | <span className="text-green-500">In Stock</span>
          </p>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-2xl">192$</span>
            <button
              type="button"
              className="rounded-md flex items-center justify-center lg:hidden p-1 border h-10 w-10"
            >
              <Heart />
            </button>
          </div>
          <p className="leading-5 mt-4">Beatae, facere velit quibusdam quaerat eligendi obcaecati aliquid optio iusto molestias minima unde quam repudiandae commodi deleniti.</p>
          <div className="h-[2px] rounded-md my-4 bg-gray-300"></div>
          <div className="flex max-sm:items-start max-sm:flex-col lg:flex-col max-lg:items-center gap-4">
            <div className="flex gap-4 items-center">
              <span className="text-xl font-semibold">Colors:</span>
              <div className="flex items-center gap-2">
                <RadioGroup
                  value={selectedColor}
                  onValueChange={setSelectedColor}
                  className="flex gap-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="white"
                      id="white"
                      className="sr-only"
                    />
                    <Label
                      htmlFor="white"
                      className={cn("w-6 h-6 rounded-full cursor-pointer bg-white border", selectedColor === "white" ? "ring-2 ring-primary ring-offset-2" : "border-gray-300")}
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="red"
                      id="red"
                      className="sr-only"
                    />
                    <Label
                      htmlFor="red"
                      className={cn("w-6 h-6 rounded-full bg-red-500", selectedColor === "red" && "ring-2 ring-primary ring-offset-2")}
                    />
                  </div>
                </RadioGroup>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <span className="text-xl font-semibold">Sizes:</span>
              <div className="flex items-center gap-2">
                {productSizes.map((size) => (
                  <RadioGroup
                    value={selectedSize}
                    onValueChange={setSelectedSize}
                  >
                    <RadioGroupItem
                      value={size}
                      id={size}
                      className="sr-only"
                    />
                    <Label
                      htmlFor={size}
                      className={cn("border rounded-md cursor-pointer uppercase h-10 w-10 flex justify-center items-center", selectedSize === size ? "bg-primary text-primary-foreground" : "bg-background hover:bg-muted")}
                    >
                      {size}
                    </Label>
                  </RadioGroup>
                ))}
              </div>
            </div>
          </div>
          <div className="my-2">
            <div className="flex max-lg:flex-col gap-2">
              <div className="flex items-center my-2">
                <button
                  type="button"
                  className="border w-10 h-10 flex items-center justify-center rounded-l-md border-r-0"
                  onClick={decreaseQuantity}
                >
                  <Minus />
                </button>
                <span className="flex items-center justify-center lg:w-20 font-semibold text-xl border h-10 w-full">{quantity}</span>
                <button
                  type="button"
                  className="border w-10 h-10 flex items-center justify-center rounded-r-md p-1 border-l-0"
                  onClick={increaseQuantity}
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
                className="rounded-md hidden lg:inline-block p-1 border h-10 w-10"
              >
                <Heart />
              </button>
            </div>
          </div>
          <div className="border rounded-t-md p-3 mt-6 flex items-center gap-3 font-semibold">
            <span>
              <TbTruckDelivery size={40} />
            </span>
            <div className="flex flex-col gap-1">
              <span>Free delivery</span>
              <span className="underline">Enter your postal code for Delivery Ability</span>
            </div>
          </div>
          <div className="border rounded-b-md p-3 flex items-center gap-3 font-semibold">
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
