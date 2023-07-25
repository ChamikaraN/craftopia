import { Navigate } from "react-router-dom";

import AdminLayout from "../components/templates/AdminLayout";
import { Suspense } from "react";

function PrivateRoutes() {
  const auth = { token: true };

  return auth.token ? (
    <Suspense fallback={<div> Loading </div>}>
      <AdminLayout />
    </Suspense>
  ) : (
    <Navigate to="/login" />
  );
}

export default PrivateRoutes;
