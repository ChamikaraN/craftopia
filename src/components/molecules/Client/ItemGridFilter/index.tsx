import React from "react";
import { Category } from "@/types";
import Button from "@/components/atoms/Client/Button";

interface ItemGridFilterProps {
  categories: Category[];
  filterProducts: (categoryId: string) => void;
}

const ItemGridFilter: React.FC<ItemGridFilterProps> = ({
  categories,
  filterProducts,
}) => {
  return categories.map((category) => {
    const handleClick = () => {
      category._id && filterProducts(category._id);
    };

    return (
      <Button
        key={category._id ?? ""}
        variant="primary"
        title={category.name}
        onClickHandler={handleClick} // Assign the handleClick function to onClickHandler
        size="sm"
        styles="btn m-2 text-dark"
      />
    );
  });
};

export default ItemGridFilter;
