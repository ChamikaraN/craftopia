import PopUp from "@/components/organisms/Admin/PopUp";
import useFetchCategories from "@/hooks/category/useFetchCategories";
import useAddCategory from "@/hooks/category/useAddCategory";
import { useAppSelector } from "@/redux/hooks";
import { Category } from "@/types";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Categories: React.FC = () => {
  const { isLoading } = useFetchCategories();
  const { mutate: addCategoryMutation, isLoading: addCategoryIsLoading } =
    useAddCategory();
  const { categories } = useAppSelector((state) => state.category);

  // State variables for managing the visibility of the popup and form fields
  const [showPopUp, setShowPopUp] = useState(false);
  const [newCategory, setNewCategory] = useState<Category>({
    name: "",
    description: "",
    image: "",
    status: false, // Set the initial status value to false
  });

  const handleAddCategory = () => {
    // If the image is a File, create a new FormData object to include the form fields and the image
    if (newCategory.image instanceof File) {
      const formData = new FormData();
      formData.append("name", newCategory.name);
      formData.append("description", newCategory.description);
      formData.append("image", newCategory.image);
      formData.append("status", newCategory.status.toString()); // Convert the status value to string

      // Perform the API request using the formData
      addCategoryMutation(formData);
    } else {
      // If the image is a string, it means the category already has an image URL, so you can proceed with your regular API request
      addCategoryMutation(newCategory);
    }

    // Clear the form fields and hide the popup after submission
    setNewCategory({
      name: "",
      description: "",
      image: "",
      status: false, // Set the status value back to false after submission
    });
    setShowPopUp(false);
  };

  // Function to show the popup
  const showPopUpHandler = () => {
    setNewCategory({
      name: "",
      description: "",
      image: "",
      status: true,
    });
    setShowPopUp(true);
  };

  // Function to hide the popup
  const hidePopUpHandler = () => {
    setShowPopUp(false);
  };

  // Function to handle the delete action
  const handleDelete = () => {
    // Perform the delete action here
    // For example, dispatch a delete category action
    // dispatch(deleteCategory(selectedCategory._id));
    // Once the delete is successful, hide the popup
    hidePopUpHandler();
  };

  // Function to handle image upload
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setNewCategory({ ...newCategory, image: e.target.files[0] });
    }
  };

  // JSX element for the message
  const popupContent = (
    <form>
      <div className="form-group">
        <label htmlFor="name">Category Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={newCategory.name}
          onChange={(e) =>
            setNewCategory({ ...newCategory, name: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Category Description</label>
        <textarea
          className="form-control"
          id="description"
          rows={3}
          value={newCategory.description}
          onChange={(e) =>
            setNewCategory({ ...newCategory, description: e.target.value })
          }
        />
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
      </div>
    </form>
  );

  return (
    <>
      {/* Page Heading */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Categories</h1>
        <div
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          onClick={() => {
            showPopUpHandler();
          }}
        >
          <FontAwesomeIcon icon={faAdd} /> Create Category
        </div>
      </div>
      <div className="row">
        {/* Area Chart */}
        <div className="col">
          <div className="card shadow mb-4">
            {/* Card Header - Dropdown */}
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">
                Craftopia Product Category List
              </h6>
            </div>
            {/* Card Body */}
            <div className="card-body">
              <table className="table table-borderless table-hover">
                <thead>
                  <tr>
                    <th> </th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category) => {
                    return (
                      <tr key={category._id}>
                        <td>
                          <img
                            src={category.image ? category.image : ""}
                            className="w-50"
                            alt={`Product ${category._id}`}
                          />
                        </td>
                        <td className="align-middle">{category.name}</td>
                        <td className="align-middle">{category.description}</td>
                        <td></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <PopUp
        show={showPopUp}
        hide={hidePopUpHandler}
        onConfirm={handleAddCategory}
        title="Add Category"
        content={popupContent}
      />
    </>
  );
};

export default Categories;
