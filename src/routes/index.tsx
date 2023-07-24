import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { RootErrorBoundary } from "../components/pages/RootErrorBoundary";
import { ProjectErrorBoundary } from "../components/pages/ProjectErrorBoundary";
import Login from "../components/pages/Admin/Login/Login";
import Admin from "../components/pages/Admin/Dashboard/Admin";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import Home from "../components/pages/Client/Home";
import Shop from "../components/pages/Client/Shop/Shop";
import Cart from "../components/pages/Client/Cart/Cart";

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
          path="/dashboard"
          element={<Admin />}
          errorElement={<ProjectErrorBoundary />}
        >
          <Route
            path="orders"
            element={<Home />}
            errorElement={<ProjectErrorBoundary />}
          />
          <Route
            path="products"
            element={<Home />}
            errorElement={<ProjectErrorBoundary />}
          >
            <Route
              path="add"
              element={<Home />}
              errorElement={<ProjectErrorBoundary />}
            ></Route>
            <Route
              path="edit"
              element={<Home />}
              errorElement={<ProjectErrorBoundary />}
            ></Route>
          </Route>
          <Route
            path="settings"
            element={<Home />}
            errorElement={<ProjectErrorBoundary />}
          />
        </Route>
      </Route>

      <Route path="/login" element={<Login />} />

      <Route path="*" element={<ProjectErrorBoundary />} />
    </>
  )
);

export default router;
