import React from "react";
import "../../styles/productsadmin.scss";
import Header from "../../COMPONENTS/Header";
import SidebarAdmin from "../../COMPONENTS/ADMIN/SidebarAdmin";
import BackToTop from "../../COMPONENTS/Backtotop";
import Box from "../../COMPONENTS/ADMIN/Box";

const ProductsAdmin = () => {
  return (
    <>
      <Header />
      <div className="productsadmin_container">
        <SidebarAdmin />
        <div className="productsadmin_right">
          <div className="productsadmin_boxes">
            <Box Info="CREATE PRODUCT" link="new" />
            <Box />
            <Box />
            <Box />
          </div>
        </div>
      </div>
      <BackToTop />
    </>
  );
};

export default ProductsAdmin;
