import React from "react";
import "../../styles/dashoboard.scss";
import Header from "../../COMPONENTS/Header";
import BackToTop from "../../COMPONENTS/Backtotop";
import SidebarAdmin from "../../COMPONENTS/ADMIN/SidebarAdmin";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="dashboard_container">
        <SidebarAdmin />
        <div className="dashboard_right"></div>
        dashboard_right
      </div>
      <BackToTop />
    </>
  );
};

export default Dashboard;
