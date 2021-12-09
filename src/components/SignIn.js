import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";


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

async function loginUser(credentials) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  };

  return fetch("http://127.0.0.1:8010/api/login/", requestOptions)
    .then((response) => response.json())
}

const SignInForm = ({ setToken }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const classes = useStyles();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username: username,
      password: password,
    });
    setToken(token);
    
  };
  return (
    <div className={classes.root} id="header">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-inputs">
          <label className="form-label">Username</label>
          <input
            className="form-input"
            type="text"
            name="name"
            placeholder="Enter your username"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input className="form-input-btn" type="submit" value="Login" />
        <span className="form-input-login">
          Don't have an account? Register <a href="#">here</a>
        </span>
      </form>
    </div>
  );
};

SignInForm.propTypes = {
  setToken: PropTypes.func.isRequired,
};
export default SignInForm;
