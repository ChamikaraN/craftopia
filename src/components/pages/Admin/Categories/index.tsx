import PopUp from "@/components/organisms/Admin/PopUp";
import useFetchCategories from "@/hooks/category/useFetchCategories";
import { useAppSelector } from "@/redux/hooks";
import { Category } from "@/types";
import { faAdd, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import useDeleteCategory from "@/hooks/category/useDeleteCategory";
import { useNavigate } from "react-router-dom";

const Categories: React.FC = () => {
  const { isLoading } = useFetchCategories();
  const { categories } = useAppSelector((state) => state.category);
  const { mutate: deleteCategoryMutation } = useDeleteCategory();

  const navigate = useNavigate();

  // State variables for managing the visibility of the popup and form fields
  const [showPopUp, setShowPopUp] = useState(false);
  const [popupContent, setPopupContent] = useState(<></>);
  const [popupAction, setPopupAction] = useState("");

  const [selectedCategory, setSelectedCategory] = useState<Category>({
    name: "",
    description: "",
    image: "",
    status: true,
  });

  // Function to show the add popup
  const showDeletePopUp = (category: Category) => {
    setPopupContent(
      <div>
        <p>Do you need to delete {category.name} category</p>
      </div>
    );
    setPopupAction("Delete");
    setShowPopUp(true);
    setSelectedCategory(category);
  };
  // Function to handle the delete action
  const handleDeleteCategory = () => {
    deleteCategoryMutation(selectedCategory._id || "");
    hidePopUpHandler();
  };

  // Function to hide the popup
  const hidePopUpHandler = () => {
    setSelectedCategory({
      name: "",
      description: "",
      image: "",
      status: true,
    });
    setShowPopUp(false);
  };

  return (
    <>
      {/* Page Heading */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Categories</h1>
        <div
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          onClick={() => {
            navigate("/admin/categories/add");
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
              {isLoading ? (
                <>Loading</>
              ) : (
                <table className="table table-borderless table-hover">
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((category) => {
                      const imageUrl =
                        typeof category.image === "string"
                          ? category.image
                          : "";
                      return (
                        <tr key={category._id}>
                          <td>
                            <img
                              src={imageUrl}
                              className="rounded w-25"
                              alt={`Product ${category._id}`}
                            />
                          </td>
                          <td className="align-middle">{category.name}</td>
                          <td className="align-middle">
                            {category.description}
                          </td>
                          <td className="align-middle">
                            <div onClick={() => {}}>
                              <FontAwesomeIcon icon={faEdit} />
                            </div>
                            <div
                              onClick={() => {
                                showDeletePopUp(category);
                              }}
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
      <PopUp
        show={showPopUp}
        hide={hidePopUpHandler}
        onConfirm={handleDeleteCategory}
        title="Delete Category"
        action={popupAction}
        content={popupContent}
      />
    </>
  );
};

export default Categories;
