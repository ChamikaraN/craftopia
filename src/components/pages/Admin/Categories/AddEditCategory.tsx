import Button from "@/components/atoms/Client/Button";
import { useAddCategory } from "@/hooks/category/useAddCategory";
import { Category } from "@/types";
import { categorySchema } from "@/types/zodSchema";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const AddEditCategory: React.FC = () => {
  const navigate = useNavigate();
  const { mutate: addCategoryMutation } = useAddCategory();

  const [newCategory, setNewCategory] = useState<Category>({
    name: "",
    description: "",
    image: "",
    status: true,
  });
  const [validationErrors, setValidationErrors] = useState<{
    [key: string]: string;
  }>({});

  // Function to handle adding the category
  const handleAddCategory = () => {
    // Validate the form data using the Zod schema
    try {
      categorySchema.parse({
        name: newCategory.name,
        description: newCategory.description,
        image:
          newCategory.image instanceof File
            ? newCategory.image.name
            : newCategory.image,
        status: newCategory.status,
      });
      // If validation is successful, proceed with the API request
      if (newCategory.image instanceof File) {
        // Create a new FormData object and append the form fields
        const formData = new FormData();
        formData.append("name", newCategory.name);
        formData.append("description", newCategory.description);
        formData.append("image", newCategory.image);
        formData.append("status", newCategory.status.toString());
        // Perform the API request using the formData
        addCategoryMutation(formData);
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
      setNewCategory({ ...newCategory, image: e.target.files[0] });
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        image: "",
      }));
    }
  };

  return (
    <>
      {/* Page Heading */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Categories</h1>
        <div
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          onClick={() => {
            navigate("/admin/categories");
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
                Add Craftopia Product Category
              </h6>
            </div>
            {/* Card Body */}
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Category Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={newCategory.name}
                    onChange={(e) => {
                      setNewCategory({ ...newCategory, name: e.target.value });
                      // Clear the validation error for this field when the user types in it
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
                  <label htmlFor="description">Category Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    rows={3}
                    value={newCategory.description}
                    onChange={(e) => {
                      setNewCategory({
                        ...newCategory,
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
                  <label htmlFor="image">Category Image</label>
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
                  handleAddCategory();
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

export default AddEditCategory;
