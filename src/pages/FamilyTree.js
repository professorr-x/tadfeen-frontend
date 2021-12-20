import "./dashboard.css";
import React from "react";
import FamilyTreeTable from "../components/FamilyTreeTable";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const FamilyTree = () => {
  return (
    <div className="dashboard-page">
        
      <div className="family-tree-table">
        <div className="add-family-btn">
          <Stack direction="row" spacing={2}>
            <Button variant="contained">Add</Button>
            <Button variant="contained">Update</Button>
          </Stack>         
        </div>
        <FamilyTreeTable />
      </div>
    </div>
  );
};

export default FamilyTree;
