import { Suspense } from "react";
import ClientLayout from "@templates/ClientLayout";

function PublicRoutes() {
  return (
    <Suspense fallback={<div> Loading </div>}>
      <ClientLayout />
    </Suspense>
  );
}

export default PublicRoutes;
