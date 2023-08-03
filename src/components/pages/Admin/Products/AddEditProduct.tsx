import { Product } from "@/types";
import { useParams } from "react-router-dom";
import AddEditForm from "@/components/organisms/Admin/Product/AddEditForm";
import React, { useEffect, useState } from "react";
import useFetchProduct from "@/hooks/product/useFetchProduct";
import useFetchCategories from "@/hooks/category/useFetchCategories";

const AddEditProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { isLoading } = useFetchCategories();
  // Use the fixed hook to fetch product details
  const { data: productData } = useFetchProduct(id ?? "");

  const [product, setProduct] = useState<Product>({
    name: "",
    description: "",
    price: 0,
    category: "",
    stock: 0,
    image: "",
    status: true,
  });

  // Set the 'product' state with the fetched product data in 'edit' mode
  useEffect(() => {
    if (id && productData) {
      setProduct(productData);
    }
  }, [id, productData]);

  return isLoading ? (
    <>Loading</>
  ) : (
    <AddEditForm
      product={product}
      mode={id ? "edit" : "add"}
      setProduct={setProduct}
      id={id}
    />
  );
};

export default AddEditProduct;
