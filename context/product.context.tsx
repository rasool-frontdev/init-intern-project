"use client";

import { ProductType } from "@/types";
import { createContext, useContext, useState } from "react";

interface AppContextType {
  products: ProductType[] | null;
  setProducts: React.Dispatch<React.SetStateAction<ProductType[] | null>>;
  cartProducts: ProductType[] | null;
  setCartProducts: React.Dispatch<React.SetStateAction<ProductType[] | null>>;
  likedProducts: ProductType[] | null;
  setLikedProducts: React.Dispatch<React.SetStateAction<ProductType[] | null>>;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppWrapperContext({ children, initialProducts }: { children: React.ReactNode; initialProducts: ProductType[] }) {
  const [products, setProducts] = useState<ProductType[] | null>(initialProducts);
  const [cartProducts, setCartProducts] = useState<ProductType[] | null>(null);
  const [likedProducts, setLikedProducts] = useState<ProductType[] | null>(null);

  return <AppContext.Provider value={{ products, setProducts, cartProducts, setCartProducts, likedProducts, setLikedProducts }}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppWrapperContext");
  }
  return context;
}
