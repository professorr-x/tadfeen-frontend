import React, { useState } from "react";
import SideBar from "../components/Sidenav/SideBar";
import "./dashboard.css";
import OverviewPage from "./Overview";

const DashboardContent = (Page) => {
  if (Page === "overview") {
    return (
      <OverviewPage />
    );
  } else if (Page === "family-tree") {
    return (
      <div className="dashboard-page">
        <h1>Family Tree</h1>
      </div>
    );
  } else if (Page === "manage-account") {
    return (
      <div className="dashboard-page">
        <h1>Manage Account</h1>
      </div>
    );
  } else if (Page === "log-out") {
    return (
      <div className="dashboard-page">
        <h1>Log Out</h1>
      </div>
    );
  } else {
    return (
      <div className="dashboard-page">
        <OverviewPage />
      </div>
    );
  }
};

const Dashborad = () => {
  const [activePage, setActivePage] = useState();
  return (
    <div>
      <SideBar setActivePage={setActivePage} />
      {DashboardContent(activePage)}
    </div>
  );
};

export default Dashborad;
