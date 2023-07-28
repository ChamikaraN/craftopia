import React, { useCallback, useEffect, useState } from "react";
import Button from "@/components/atoms/Client/Button";
import ItemGridFilter from "@molecules/Client/ItemGridFilter";
import ItemGrid from "@molecules/Client/ItemGrid";
import { Product, Category } from "@/types";

interface SpecialSelectionProps {
  products: Product[];
  categories: Category[];
}

const SpecialSelection: React.FC<SpecialSelectionProps> = ({
  products,
  categories,
}) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  const filterProducts = useCallback(
    (categoryId: string) => {
      if (!categoryId) {
        // If categoryId is empty or undefined, set all products
        setFilteredProducts(products);
      } else {
        // If categoryId is provided, filter the products based on the category
        const filtered = products.filter(
          (product) => product.category === categoryId
        );
        setFilteredProducts(filtered);
      }
    },
    [products]
  );

  useEffect(() => {
    filterProducts("");
  }, [products, filterProducts]);

  return (
    <section id="collection" className="py-5">
      <div className="container">
        <div className="title text-center">
          <h2 className="position-relative d-inline-block">
            Special Selection
          </h2>
        </div>
        <div className="row g-0">
          <div className="d-flex flex-wrap justify-content-center mt-5 filter-button-group">
            <Button
              variant="primary"
              title="All"
              onClickHandler={() => filterProducts("")}
              size="sm"
              styles="btn m-2 text-dark "
            />
            <ItemGridFilter
              categories={categories}
              filterProducts={filterProducts}
            />
          </div>
          <div className="collection-list mt-4 row gx-0 gy-3">
            {filteredProducts.length > 0 ? (
              <ItemGrid products={filteredProducts} />
            ) : (
              <div>No products found.</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialSelection;
