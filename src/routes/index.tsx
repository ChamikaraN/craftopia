import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { RootErrorBoundary } from "@pages/RootErrorBoundary";
import { ProjectErrorBoundary } from "@pages/ProjectErrorBoundary";

import Home from "@pages/Client/Home";
import Shop from "@pages/Client/Shop/Shop";
import Cart from "@pages/Client/Cart/Cart";
import Login from "@pages/Admin/Login";
import Admin from "@pages/Admin/Dashboard";
import Categories from "@pages/Admin/Categories";
import Products from "@/components/pages/Admin/Products";
import Orders from "@pages/Admin/Orders";
import Settings from "@pages/Admin/Settings";
import { lazy } from "react";
import AddEditCategory from "@/components/pages/Admin/Categories/AddEditCategory";
import AddEditProduct from "@/components/pages/Admin/Products/AddEditProduct";

const PrivateRoutes = lazy(() => import("./PrivateRoutes"));
const PublicRoutes = lazy(() => import("./PublicRoutes"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<PublicRoutes />} errorElement={<RootErrorBoundary />}>
        <Route
          index
          element={<Home />}
          errorElement={<ProjectErrorBoundary />}
        />
        <Route
          path="shop"
          element={<Shop />}
          errorElement={<ProjectErrorBoundary />}
        />
        <Route
          path="cart"
          element={<Cart />}
          errorElement={<ProjectErrorBoundary />}
        />
      </Route>

      <Route element={<PrivateRoutes />}>
        <Route
          path="admin/dashboard"
          element={<Admin />}
          errorElement={<ProjectErrorBoundary />}
        />
        <Route
          path="admin/categories"
          element={<Categories />}
          errorElement={<ProjectErrorBoundary />}
        />
        <Route
          path="admin/categories/add"
          element={<AddEditCategory />}
          errorElement={<ProjectErrorBoundary />}
        />
        <Route
          path="admin/categories/edit/:id"
          element={<AddEditCategory />}
          errorElement={<ProjectErrorBoundary />}
        />
        <Route
          path="admin/products"
          element={<Products />}
          errorElement={<ProjectErrorBoundary />}
        />
        <Route
          path="admin/products/add"
          element={<AddEditProduct />}
          errorElement={<ProjectErrorBoundary />}
        />
        <Route
          path="admin/products/edit/:id"
          element={<AddEditProduct />}
          errorElement={<ProjectErrorBoundary />}
        />
        <Route
          path="admin/orders"
          element={<Orders />}
          errorElement={<ProjectErrorBoundary />}
        />
        <Route
          path="admin/settings"
          element={<Settings />}
          errorElement={<ProjectErrorBoundary />}
        />
      </Route>

      <Route path="/login" element={<Login />} />

      <Route path="*" element={<ProjectErrorBoundary />} />
    </>
  )
);

export default router;
