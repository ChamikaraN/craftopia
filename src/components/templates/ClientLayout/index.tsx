import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import Header from "../../organisms/Client/Header";
import Footer from "../../organisms/Client/Footer";

function ClientLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default ClientLayout;
