import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    background: "black",
    alignItems: "center",
    height: "90vh",
    fontFamily: "Nunito",
  },
}));

const SignInForm = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} id="header">
      <form className="form">
        <div className="form-inputs">
          <label className="form-label">Username</label>
          <input
            className="form-input"
            type="text"
            name="name"
            placeholder="Enter your username"
          />
        </div>

        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <input className='form-input-btn' type="submit" value="Login" />
        <span className='form-input-login'>
          Don't have an account? Register <a href='#'>here</a>
        </span>
      </form>
    </div>
  );
};

export default SignInForm;
