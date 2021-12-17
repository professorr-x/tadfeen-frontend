import React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import LogoutIcon from '@mui/icons-material/Logout';

export const SideBarNav = [
    {
        title: "Overview",
        icon: <DashboardIcon />,
        link: "/"
    },
    {
        title: "Family Tree",
        icon: <FamilyRestroomIcon />,
        link: "/"
    },
    {
        title: "Manage Account",
        icon: <ManageAccountsIcon />,
        link: "/"
    },
    {
        title: "Log Out",
        icon: <LogoutIcon />,
        link: "/"
    }
]