"use client";
import { ProductRef, useGetAllProducts } from "@/hooks/product/useGetAllProducts";
import { TProduct } from "@/lib/schema";
import { createContext, useContext, PropsWithChildren, FC, useMemo } from "react";

type CatalogContextT = {
  products: ProductRef[];
  isEmpty: boolean;
  productsByType: (type: TypeProduct) => ProductRef[];
  newProducts: ProductRef[];
  topSellers: ProductRef[];
  productTypes: string[];
  topSellersTypes: string[];
};
const CatalogContext = createContext({} as CatalogContextT);
export function useCatalog() {
  return useContext(CatalogContext);
}
type TypeProduct = "vozol-star" | "vozol-gear" | "elfbar-ebdesign" | "crazy-ace" | "mystery";

export const CatalogContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const { isEmpty, products } = useGetAllProducts();
  const productsByType = (type: TypeProduct) => products.filter((el) => el.product.type === type);
  const topSellers = useMemo(() => {
    return products.filter((el) => el.product.topSeller);
  }, [products]);
  const newProducts = useMemo(() => {
    return products.filter((el) => el.product.newProduct);
  }, [products]);
  const productTypes = useMemo(() => {
    const types: string[] = [];
    products.forEach((item) => {
      if (!types.includes(item.product.type)) types.push(item.product.type);
    });
    return types;
  }, [products]);
  const topSellersTypes = useMemo(() => {
    const types: string[] = [];
    topSellers.forEach((item) => {
      if (!types.includes(item.product.type)) types.push(item.product.type);
    });
    return types;
  }, [topSellers]);
  return (
    <CatalogContext.Provider
      value={{
        topSellersTypes,
        productTypes,
        products,
        isEmpty,
        topSellers,
        newProducts,
        productsByType,
      }}
    >
      {children}
    </CatalogContext.Provider>
  );
};
