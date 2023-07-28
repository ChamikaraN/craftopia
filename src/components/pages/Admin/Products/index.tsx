import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/redux/hooks";
import { Product } from "@/types";
import { faAdd, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PopUp from "@/components/organisms/Admin/PopUp";
import useFetchProducts from "@/hooks/product/useFetchProducts";
import useDeleteProduct from "@/hooks/product/useDeleteProduct";

const Products: React.FC = () => {
  const { isLoading } = useFetchProducts();
  const { products } = useAppSelector((state) => state.product);
  const { mutate: deleteProductMutation } = useDeleteProduct();

  const navigate = useNavigate();

  // State variables for managing the visibility of the popup and form fields
  const [showPopUp, setShowPopUp] = useState(false);
  const [popupContent, setPopupContent] = useState(<></>);
  const [popupAction, setPopupAction] = useState("");

  const [selectedProduct, setSelectedProduct] = useState<Product>({
    name: "",
    description: "",
    price: 0,
    category: "",
    stock: 0,
    image: "",
    status: true,
  });

  // Function to show the add popup
  const showDeletePopUp = (product: Product) => {
    setPopupContent(
      <div>
        <p>Do you need to delete {product.name} product</p>
      </div>
    );
    setPopupAction("Delete");
    setShowPopUp(true);
    setSelectedProduct(product);
  };
  // Function to handle the delete action
  const handleDeleteProduct = () => {
    deleteProductMutation(selectedProduct._id ?? "");
    hidePopUpHandler();
  };

  // Function to hide the popup
  const hidePopUpHandler = () => {
    setSelectedProduct({
      name: "",
      description: "",
      price: 0,
      category: "",
      stock: 0,
      image: "",
      status: true,
    });
    setShowPopUp(false);
  };

  return (
    <>
      {/* Page Heading */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Products</h1>
        <div
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          onClick={() => {
            navigate("/admin/products/add");
          }}
        >
          <FontAwesomeIcon icon={faAdd} /> Create Product
        </div>
      </div>
      <div className="row">
        {/* Area Chart */}
        <div className="col">
          <div className="card shadow mb-4">
            {/* Card Header - Dropdown */}
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">
                Craftopia Product List
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
                      <th>Product</th>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Price</th>
                      <th>Stock</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => {
                      const imageUrl =
                        typeof product.image === "string" ? product.image : "";
                      return (
                        <tr key={product._id}>
                          <td>
                            <img
                              src={imageUrl}
                              className="rounded w-25"
                              alt={`Product ${product._id}`}
                            />
                          </td>
                          <td className="align-middle">{product.name}</td>
                          <td className="align-middle">
                            {product.description}
                          </td>
                          <td className="align-middle">$ {product.price}</td>
                          <td className="align-middle">{product.stock}</td>
                          <td className="align-middle">
                            <div onClick={() => {}}>
                              <FontAwesomeIcon icon={faEdit} />
                            </div>
                            <div
                              onClick={() => {
                                showDeletePopUp(product);
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
        onConfirm={handleDeleteProduct}
        title="Delete Product"
        action={popupAction}
        content={popupContent}
      />
    </>
  );
};

export default Products;
