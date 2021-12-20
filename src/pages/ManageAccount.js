import "./dashboard.css";
import React from "react";
import CountrySelect from "../components/CountrySelect";
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const ManageAccount = () => {
  return (
    <div className="dashboard-page">
      <div className="address-update">
        <Typography variant="h6">Update Address</Typography>

        <div className="address-input-field">
        <TextField id="outlined-basic" size="small" label="Address Line 1" variant="outlined" />
        </div>
        <div className="address-input-field">
        <TextField id="outlined-basic" size="small" label="Address Line 2" variant="outlined" />
        </div>
        <div className="address-input-field">
        <TextField id="outlined-basic" size="small" label="City" variant="outlined" />
        </div>
        <div className="address-input-field">
        <CountrySelect />
        </div>
        <div className="address-input-field">
        <TextField id="outlined-basic" size="small" label="ZIP Code" variant="outlined" />
        </div>
        <div>
        <Button variant="contained">Update</Button>
        </div>   
      </div>
      <div className="email-update">
        <Typography variant="h6">Update Email Address</Typography>
        <div className="email-input-field">
            <TextField id="outlined-basic" size="small" label="Email Address" variant="outlined" />
        </div>
        <div>
            <Button variant="contained">Update</Button>
        </div>
      </div>
      <div className="password-update">
        <Typography variant="h6">Update Password</Typography>
        <div className="email-input-field">
            <TextField id="outlined-basic" size="small" label="Password" variant="outlined" />
            <TextField id="outlined-basic" size="small" label="Confirm Password" variant="outlined" />
        </div>
        <div>
            <Button variant="contained">Update</Button>
        </div>
      </div>
    </div>
  );
};

export default ManageAccount;
