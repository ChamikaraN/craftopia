import React, { useCallback, useEffect, useState } from "react";
import useFetchProducts from "@hooks/product/useFetchProducts";
import useFetchCategories from "@hooks/category/useFetchCategories";
import { useAppSelector } from "@redux/hooks";
import Button from "@/components/atoms/Client/Button";
import ItemGridFilter from "@molecules/Client/ItemGridFilter";
import ItemGrid from "@molecules/Client/ItemGrid";

const SpecialSelection: React.FC = () => {
  const {
    isLoading: productsLoading,
    isError: productsError,
    isSuccess: productsSuccess,
  } = useFetchProducts();
  const {
    isLoading: categoriesLoading,
    isError: categoriesError,
    isSuccess: categoriesSuccess,
    error: categoriesErrorData,
  } = useFetchCategories();
  const { products } = useAppSelector((state) => state.product);
  const { categories } = useAppSelector((state) => state.category);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const filterProducts = useCallback(
    (id: string) => {
      if (!id) {
        // If categoryId is empty or undefined, set all products
        setFilteredProducts(products);
      } else {
        // If categoryId is provided, filter the products based on the category
        const filtered = products.filter((product) => product.category === id);
        setFilteredProducts(filtered);
      }
    },
    [products]
  );

  useEffect(() => {
    filterProducts("");
  }, [products, filterProducts]);

  if (productsLoading || categoriesLoading) {
    return <div>Loading...</div>;
  }

  if (productsError) {
    return <div>Error: </div>;
  }

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
            {/* Only render the ItemGrid when data is available */}
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
