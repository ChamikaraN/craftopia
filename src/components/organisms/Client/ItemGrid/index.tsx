import React from "react";
import ItemCard from "../../../molecules/Client/ItemCard";

function ItemGrid({ items }) {
  return items.map((item) => {
    return <ItemCard i={item} />;
  });
}

export default ItemGrid;
