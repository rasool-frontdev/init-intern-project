"use client";

import { ProductType } from "@/types";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { FC } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: ProductType;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();
  const { name, slug, rating, actualPrice, discountPrice, image, reviewsCount } = product || {};
  const isOnSale = discountPrice && discountPrice < actualPrice;
  const { setCartProducts, setLikedProducts, likedProducts, cartProducts } = useAppContext();

  const isLiked = likedProducts?.some((item) => item.id === product.id);
  const isInCart = cartProducts?.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    setCartProducts((prev) => {
      if (prev?.some((item) => item.id === product.id)) {
        return prev.filter((item) => item.id !== product.id);
      }
      return prev ? [...prev, product] : [product];
    });
  };

  const handleHeart = () => {
    setLikedProducts((prev) => {
      if (prev?.some((item) => item.id === product.id)) {
        return prev.filter((item) => item.id !== product.id);
      }
      return prev ? [...prev, product] : [product];
    });
  };

  const handleCard = () => {
    router.push(`/product/${slug}`);
  };

  return (
    <div
      onClick={handleCard}
      className="group relative cursor-pointer shadow w-full max-w-xs bg-white rounded-md overflow-hidden hover:shadow-md border border-gray-100"
    >
      {isOnSale && <Badge className="absolute top-2 left-2 bg-green-500 text-white z-20">Sale</Badge>}
      <div className="relative aspect-square bg-gray-50">
        <div className="absolute top-2 right-2 flex flex-col gap-2 z-10">
          <button
            type="button"
            className="bg-white p-1.5 rounded-full shadow-sm hover:bg-gray-100 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              handleHeart();
            }}
          >
            {isLiked ? (
              <FaHeart
                size={20}
                className="text-red-600"
              />
            ) : (
              <FaRegHeart size={20} />
            )}
          </button>
        </div>
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-3 space-y-2">
        <Button
          type="button"
          className="w-full py-2.5 bg-black text-white font-medium rounded transition-opacity hover:bg-gray-800 opacity-0 group-hover:opacity-100"
          onClick={(e) => {
            e.stopPropagation();
            handleAddToCart();
          }}
        >
          {isInCart ? "Remove From Cart" : "Add To Cart"}
        </Button>

        <h3 className="font-medium text-gray-900 uppercase text-sm">{name}</h3>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {isOnSale ? (
              <>
                <p className="font-semibold text-gray-900">${discountPrice}</p>
                <p className="text-sm text-gray-500 line-through">${actualPrice}</p>
              </>
            ) : (
              <p className="font-semibold text-gray-900">${actualPrice}</p>
            )}
          </div>
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={cn("w-4 h-4", i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300")}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-gray-500">({reviewsCount})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
