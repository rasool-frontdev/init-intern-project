import { ReactNode } from "react";

export interface ProductType {
  id: string;
  name: string;
  slug: string;
  rating: number;
  actualPrice: number;
  discountPrice: number;
  image: string;
  reviewsCount: number;
}

export interface ChildProps {
  children: ReactNode;
}
