import "./dashboard.css";
import React from "react";
import DataTable from "../components/DataTable";
import PaymentTable from "../components/PaymentTable";
import SummaryCard from "../components/SummaryCard";
import FamilySummaryCard from "../components/FamilySummaryCard";
import Typography from "@mui/material/Typography";

const OverviewPage = ({name}) => {
  return (
    <div className="dashboard-page">
      {/* <h1 className="greetings-message">Welcome,  */}
      <div className="greetings-message">
        <div className="greeting">
          <Typography variant="h4">Welcome, &nbsp;</Typography>
        </div>
        <div className="greeting">
          <Typography variant="h3" color={"#3492eb"}>
            {name}
          </Typography>
        </div>
      </div>
      <div className="overview-head">
        <div className="membership-summary-card">
          <SummaryCard />
        </div>
        <div className="family-summary-card">
          <FamilySummaryCard />
        </div>
      </div>

      <div className="family-card">
        <DataTable />
      </div>
      <div className="payment-card">
        <PaymentTable />
      </div>
    </div>
  );
};

export default OverviewPage;
