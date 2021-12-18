import React, { useState, Component } from "react";
import "./sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "@mui/material/Link";

const Overview = () => {
  return (
    <li className="row">
      <div id="icon">
        <DashboardIcon />
      </div>
      <div id="title">Overview</div>
    </li>
  );
};

const FamilyTree = () => {
  return (
    <li className="row">
      <div id="icon">
        <FamilyRestroomIcon />
      </div>
      <div id="title">Family Tree</div>
    </li>
  );
};

const ManageAccount = () => {
  return (
    <li className="row">
      <div id="icon">
        <ManageAccountsIcon />
      </div>
      <div id="title">Manage Account</div>
    </li>
  );
};

const LogOut = () => {
  return (
    <li className="row">
      <div id="icon">
        <LogoutIcon />
      </div>
      <div id="title">Log Out</div>
    </li>
  );
};

const SideBar = ({ setActivePage }) => {
  return (
    <div className="sidebar">
      <div>
        <h1 className="side-nav-logo">Tad<span className="color-text">Feen.</span></h1>
      </div>
      <ul className="sidebar-list">
        <Link
          color="#fff"
          underline = "none"
          onClick={() => {
            setActivePage("overview");
          }}
        >
          <Overview />
        </Link>

        <Link
          color="#fff"
          underline = "none"
          onClick={() => {
            setActivePage("family-tree");
          }}
        >
          <FamilyTree />
        </Link>

        <Link
          color="#fff"
          underline = "none"
          onClick={() => {
            setActivePage("manage-account");
          }}
        >
          <ManageAccount />
        </Link>

        <Link
          color="#fff"
          underline = "none"
          onClick={() => {
            setActivePage("log-out");
          }}
        >
          <LogOut />
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
