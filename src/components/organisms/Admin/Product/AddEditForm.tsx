import useAddProduct from "@/hooks/product/useAddProduct";
import { useEditProduct } from "@/hooks/product/useEditProduct";
import { useAppSelector } from "@/redux/hooks";
import { productSchema } from "@/types/zodSchema";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/atoms/Client/Button";
import { INFO } from "@/constants/sanityConst";
import logEvent from "@/utils/logger";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { z } from "zod";
import { Product } from "@/types";

interface AddEditFormProps {
  product: Product;
  mode: "add" | "edit";
  setProduct: (product: Product) => void;
  id: string | undefined;
}
const AddEditForm: React.FC<AddEditFormProps> = ({
  product,
  mode,
  setProduct,
  id,
}) => {
  const addProductMutation = useAddProduct().mutate;
  const editProductMutation = useEditProduct().mutate;
  const { categories } = useAppSelector((state) => state.category);
  const navigate = useNavigate();

  const [validationErrors, setValidationErrors] = useState<{
    [key: string]: string;
  }>({});

  const handleAddEditProduct = async () => {
    try {
      // Validate the form data using the Zod schema
      productSchema.parse({
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
        stock: product.stock,
        image:
          product.image instanceof File ? product.image.name : product.image,
        status: product.status,
      });

      // Create a new FormData object and append the form fields
      const formData = new FormData();
      formData.append("name", product.name);
      formData.append("description", product.description);
      formData.append("price", product.price.toString());
      formData.append("category", product.category);
      formData.append("stock", product.stock.toString());
      formData.append("image", product.image);
      formData.append("status", product.status.toString());

      // If validation is successful, proceed with the API request
      if (mode === "add") {
        if (product.image instanceof File) {
          // Perform the API request using the formData for adding a new product
          addProductMutation(formData);
        }
      } else if (id) {
        formData.append("id", id);
        // Perform the API request using the formData for editing an existing product
        editProductMutation(formData);
      } else {
        // Handle the case where id is undefined
        await logEvent(INFO, "Product ID is missing. Cannot update product.", {
          additionalData: JSON.stringify({}),
        });
      }

      // Clear any previous validation errors
      clearValidationErrors();
    } catch (error) {
      // If validation fails, handle the validation errors
      if (error instanceof z.ZodError) {
        const fieldErrors: { [key: string]: string } = {};
        for (const [field, message] of Object.entries(
          error.formErrors.fieldErrors
        )) {
          fieldErrors[field] = message?.[0] ?? "";
        }
        // Update the validationErrors state variable with the new errors
        setValidationErrors(fieldErrors);
      }
    }
  };

  // Function to handle image upload
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setProduct({ ...product, image: e.target.files[0] });
    }
    clearValidationErrors("image");
  };

  // Function to handle category selection
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    setProduct({ ...product, category: selectedCategory });
    clearValidationErrors("category");
  };

  // Function to handle number inputs change
  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setProduct({
      ...product,
      [e.target.name]: isNaN(value) ? 0 : value,
    });
    clearValidationErrors(e.target.name);
  };

  // Function to handle inputs change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
    clearValidationErrors(e.target.name);
  };

  // Function to clear validation errors
  const clearValidationErrors = (field?: string) => {
    if (field) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        [field]: "",
      }));
    } else {
      setValidationErrors({});
    }
  };

  return (
    <>
      {/* Page Heading */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Products</h1>
        <div
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          onClick={() => {
            navigate("/admin/products");
          }}
        >
          <FontAwesomeIcon icon={faBackward} /> Go Back
        </div>
      </div>
      <div className="row">
        {/* Area Chart */}
        <div className="col">
          <div className="card shadow mb-4 border-left-primary">
            {/* Card Header - Dropdown */}
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">
                {mode === "add" ? "Add" : "Edit"} Craftopia Product
              </h6>
            </div>
            {/* Card Body */}
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Product Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={product.name}
                    onChange={handleInputChange}
                  />
                  {validationErrors.name && (
                    <span className="text-danger float-right">
                      {validationErrors.name}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="description">Product Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    rows={3}
                    value={product.description}
                    onChange={handleInputChange}
                  />
                  {validationErrors.description && (
                    <span className="text-danger float-right">
                      {validationErrors.description}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="name">Product Price</label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    name="price"
                    value={product.price}
                    onChange={handleNumberChange}
                  />
                  {validationErrors.price && (
                    <span className="text-danger float-right">
                      {validationErrors.price}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="category">Product Category</label>
                  <select
                    className="form-control"
                    id="category"
                    name="category"
                    value={product.category}
                    onChange={handleCategoryChange}
                  >
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                  {validationErrors.category && (
                    <span className="text-danger float-right">
                      {validationErrors.category}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="name">Product Stock</label>
                  <input
                    type="number"
                    className="form-control"
                    id="stock"
                    name="stock"
                    value={product.stock}
                    onChange={handleNumberChange}
                  />
                  {validationErrors.stock && (
                    <span className="text-danger float-right">
                      {validationErrors.stock}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="image">Product Image</label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                  {validationErrors.image && (
                    <span className="text-danger float-right">
                      {validationErrors.image}
                    </span>
                  )}
                </div>
                {typeof product?.image === "string" && (
                  <img src={product.image}></img>
                )}
              </form>
            </div>
            <div className="card-footer">
              <Button
                variant="primary"
                title={mode === "add" ? "Save" : "Update"}
                onClickHandler={() => {
                  handleAddEditProduct();
                }}
                size="sm"
                styles="float-right"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddEditForm;
