"use client";

import { ProductType } from "@/types";
import { createContext, useContext, useState } from "react";

interface AppContextType {
  products: ProductType[] | null;
  setProducts: React.Dispatch<React.SetStateAction<ProductType[] | null>>;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<ProductType[] | null>(null);

  return <AppContext.Provider value={{ products, setProducts }}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppWrapper");
  }
  return context;
}
