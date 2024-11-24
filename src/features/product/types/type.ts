import { ProductType } from "./enum";

export type Product = {
  id: number;
  name: string;
  image?: string | undefined;
  price?: string | number;
  stock?: string | number;
  height?: string | number;
  width?: string | number;
  type?: ProductType;
  dkp?: string | number;
  dkpc?: string | number;
  status?: boolean;
  is_robot?: boolean;
  sellerId?: string;
  colorId?: string;
  categoryId?: string;
  relatedProducts?: RelatedProduct[];
  updated_at?: Date;

  totalQuantity?: number;
  lastMonthQuantity?: number;
};

export type RelatedProduct = {
  childProductId?: number;
  quantity?: number;
  image?: string;
  name?: string;
};

export type FiltersProduct = {
  categoryId?: string;
  colorId?: string;
  sellerId?: string;
  minStock?: number;
  maxStock?: number;
  sortOrder?: "ASC" | "DESC";
  updatedAt?: "ASC" | "DESC";
};
