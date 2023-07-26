import PopUp from "@/components/organisms/Admin/PopUp";
import useFetchCategories from "@/hooks/category/useFetchCategories";
import { useAppSelector } from "@/redux/hooks";
import { Category } from "@/types";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Categories: React.FC = () => {
  const { isLoading } = useFetchCategories();
  const { categories } = useAppSelector((state) => state.category);

  // State variables for managing the visibility of the popup
  const [showPopUp, setShowPopUp] = useState(false);
  // State for new category form fields
  const [newCategory, setNewCategory] = useState<Category>({
    name: "",
    description: "",
    image: "",
    status: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  const handleAddCategory = () => {
    // Add logic to handle adding the new category
    console.log("Adding new category:", newCategory);
    setShowPopUp(true); // Show the popup message after adding the category
  };

  // Function to show the popup
  const showPopUpHandler = () => {
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
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        // Set the base64 string to the image field in the newCategory state
        setNewCategory({ ...newCategory, image: reader.result as string });
      };

      reader.readAsDataURL(file);
    }
  };

  // JSX element for the message
  const popupMessage = (
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
      {/* Add more form fields for other properties of Category if needed */}
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleAddCategory}
      >
        Add Category
      </button>
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
        onConfirm={handleDelete}
        title="Add Category"
        message={popupMessage}
      />
    </>
  );
};

export default Categories;
