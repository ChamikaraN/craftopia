import Button from "@/components/atoms/Client/Button";
import useFetchCategories from "@/hooks/category/useFetchCategories";
import { useAddProduct } from "@/hooks/product/useAddProduct";
import { useAppSelector } from "@/redux/hooks";
import { Product } from "@/types";
import { productSchema } from "@/types/zodSchema";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const AddEditProduct: React.FC = () => {
  const { isLoading } = useFetchCategories();
  const { mutate: addProductMutation } = useAddProduct();
  const { categories } = useAppSelector((state) => state.category);
  const navigate = useNavigate();

  const [newProduct, setNewProduct] = useState<Product>({
    name: "",
    description: "",
    price: 0,
    category: "",
    stock: 0,
    image: "",
    status: true,
  });
  const [validationErrors, setValidationErrors] = useState<{
    [key: string]: string;
  }>({});

  // Function to handle adding the product
  const handleAddProduct = () => {
    // Validate the form data using the Zod schema
    try {
      productSchema.parse({
        name: newProduct.name,
        description: newProduct.description,
        price: newProduct.price,
        category: newProduct.category,
        stock: newProduct.stock,
        image:
          newProduct.image instanceof File
            ? newProduct.image.name
            : newProduct.image,
        status: newProduct.status,
      });
      // If validation is successful, proceed with the API request
      if (newProduct.image instanceof File) {
        // Create a new FormData object and append the form fields
        const formData = new FormData();
        formData.append("name", newProduct.name);
        formData.append("description", newProduct.description);
        formData.append("price", newProduct.price.toString());
        formData.append("category", newProduct.category);
        formData.append("stock", newProduct.stock.toString());
        formData.append("image", newProduct.image);
        formData.append("status", newProduct.status.toString());
        // Perform the API request using the formData
        addProductMutation(formData);
      }
      // Clear any previous validation errors
      setValidationErrors({});
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
      setNewProduct({ ...newProduct, image: e.target.files[0] });
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        image: "",
      }));
    }
  };

  // Function to handle category selection
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    setNewProduct({ ...newProduct, category: selectedCategory });
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      category: "",
    }));
  };

  return isLoading ? (
    <>Loading</>
  ) : (
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
                Add Craftopia Product
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
                    value={newProduct.name}
                    onChange={(e) => {
                      setNewProduct({ ...newProduct, name: e.target.value });
                      setValidationErrors((prevErrors) => ({
                        ...prevErrors,
                        name: "",
                      }));
                    }}
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
                    rows={3}
                    value={newProduct.description}
                    onChange={(e) => {
                      setNewProduct({
                        ...newProduct,
                        description: e.target.value,
                      });
                      setValidationErrors((prevErrors) => ({
                        ...prevErrors,
                        description: "",
                      }));
                    }}
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
                    value={newProduct.price}
                    onChange={(e) => {
                      const price = parseFloat(e.target.value);
                      setNewProduct({
                        ...newProduct,
                        price: isNaN(price) ? 0 : price,
                      });

                      setValidationErrors((prevErrors) => ({
                        ...prevErrors,
                        price: "",
                      }));
                    }}
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
                    value={newProduct.category}
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
                    value={newProduct.stock}
                    onChange={(e) => {
                      const stock = parseFloat(e.target.value);
                      setNewProduct({
                        ...newProduct,
                        stock: isNaN(stock) ? 0 : stock,
                      });
                      setValidationErrors((prevErrors) => ({
                        ...prevErrors,
                        stock: "",
                      }));
                    }}
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
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                  {validationErrors.image && (
                    <span className="text-danger float-right">
                      {validationErrors.image}
                    </span>
                  )}
                </div>
              </form>
            </div>
            <div className="card-footer">
              <Button
                variant="primary"
                title="Save"
                onClickHandler={() => {
                  handleAddProduct();
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

export default AddEditProduct;
