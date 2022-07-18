import React from "react";
import { products } from "../data";
import { ProductCard } from "./ProductCard";

export const Products = () => {
  return (
    <div className="w-full mx-4">
      <p className="my-4 text-gray-500">Showing 6 of 6 products</p>
      <div className="w-full grid grid-cols-4 gap-3 mb-8">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};
