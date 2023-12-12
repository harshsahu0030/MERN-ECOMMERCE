import React from "react";
import "../../styles/sidebaradmin.scss";
import { Link } from "react-router-dom";

const SidebarAdmin = () => {
  return (
    <div className="sidebaradmin_container">
      <Link to="/admin/dashboard">DASHBOARD</Link>
      <Link to="/admin/dashboard/orders">ORDERS</Link>
      <Link to="/admin/dashboard/products">PRODUCTS</Link>
      <Link to="/admin/dashboard/categories">CATEGORIES</Link>
    </div>
  );
};

export default SidebarAdmin;
