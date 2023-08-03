import {
  faBox,
  faBoxesStacked,
  faCartShopping,
  faMasksTheater,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Sidebar() {
  const [isSidebarClosed, setSidebarClosed] = useState(false);

  return (
    <ul
      className={
        isSidebarClosed
          ? "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
          : "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      }
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="/admin/dashboard"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <FontAwesomeIcon icon={faMasksTheater} size={"2x"} />
        </div>
        <div className="sidebar-brand-text mx-3">Craftopia</div>
      </a>
      <hr className="sidebar-divider my-0" />
      <li className="nav-item active">
        <a className="nav-link" href="/admin/dashboard">
          <FontAwesomeIcon className="fa-fw mr-1" icon={faTachometerAlt} />
          <span>Dashboard</span>
        </a>
      </li>
      <hr className="sidebar-divider" />

      <li className="nav-item ">
        <a className="nav-link" href="/admin/categories">
          <FontAwesomeIcon className="fa-fw mr-1" icon={faBoxesStacked} />
          <span>Categories</span>
        </a>
      </li>
      <hr className="sidebar-divider" />

      <li className="nav-item ">
        <a className="nav-link" href="/admin/products">
          <FontAwesomeIcon className="fa-fw mr-1" icon={faBox} />
          <span>Products</span>
        </a>
      </li>
      <hr className="sidebar-divider" />

      <li className="nav-item ">
        <a className="nav-link" href="/admin/orders">
          <FontAwesomeIcon className="fa-fw mr-1" icon={faCartShopping} />
          <span>Orders</span>
        </a>
      </li>
      <hr className="sidebar-divider" />

      <div className="text-center d-none d-md-inline">
        <button
          className="rounded-circle border-0"
          id="sidebarToggle"
          onClick={() => {
            setSidebarClosed(!isSidebarClosed);
          }}
        />
      </div>
    </ul>
  );
}

export default Sidebar;
