import React from "react";
import ItemCard from "@molecules/Client/ItemCard";
import { Product } from "@/types";

interface ItemGridProps {
  products: Product[];
}

const ItemGrid: React.FC<ItemGridProps> = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <ItemCard product={product} key={product._id ?? "default-key"} />
      ))}
    </>
  );
};

export default ItemGrid;
