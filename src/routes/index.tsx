import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { lazy } from "react";

import { RootErrorBoundary } from "@pages/RootErrorBoundary";
import { ProjectErrorBoundary } from "@pages/ProjectErrorBoundary";

const Home = lazy(() => import("@pages/Client/Home"));
const Shop = lazy(() => import("@pages/Client/Shop/Shop"));
const Cart = lazy(() => import("@pages/Client/Cart/Cart"));
const Login = lazy(() => import("@pages/Admin/Login"));
const Admin = lazy(() => import("@pages/Admin/Dashboard"));
const Categories = lazy(() => import("@pages/Admin/Categories"));
const Products = lazy(() => import("@/components/pages/Admin/Products"));
const Orders = lazy(() => import("@pages/Admin/Orders"));
const Settings = lazy(() => import("@pages/Admin/Settings"));
const AddEditCategory = lazy(
  () => import("@/components/pages/Admin/Categories/AddEditCategory")
);
const AddEditProduct = lazy(
  () => import("@/components/pages/Admin/Products/AddEditProduct")
);

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
