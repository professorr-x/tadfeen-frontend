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
      <form>
        {/* <label className={classes.label}>Email:</label> */}
        <input type="text" name="name" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SignInForm;
