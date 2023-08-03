import { Navigate } from "react-router-dom";

import AdminLayout from "@templates/AdminLayout";
import { Suspense } from "react";
import { isAccessTokenExpired } from "@/services/AuthService";

function PrivateRoutes() {
  const auth = isAccessTokenExpired();
  return !auth ? (
    <Suspense fallback={<div> Loading </div>}>
      <AdminLayout />
    </Suspense>
  ) : (
    <Navigate to="/login" />
  );
}

export default PrivateRoutes;
