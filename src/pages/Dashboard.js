import React, { useState } from "react";
import SideBar from "../components/Sidenav/SideBar";
import "./dashboard.css";
import OverviewPage from "./Overview";
import FamilyTree from "./FamilyTree";
import ManageAccount from "./ManageAccount";

const DashboardContent = (Page) => {
  if (Page === "overview") {
    return (
      <OverviewPage name= "Yasser" />
    );
  } else if (Page === "family-tree") {
    return (
      <div className="dashboard-page">
        <FamilyTree />
      </div>
    );
  } else if (Page === "manage-account") {
    return (
      <div className="dashboard-page">
        <ManageAccount />
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
        <OverviewPage name= "Yasser" />
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
