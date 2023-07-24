import { Navigate } from "react-router-dom";

import AdminLayout from "../components/templates/AdminLayout";

function PrivateRoutes() {
  const auth = { token: true };

  return auth.token ? <AdminLayout /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
