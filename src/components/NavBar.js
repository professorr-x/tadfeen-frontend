import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const useStyles = makeStyles((theme) => ({
  appbarTitle: {
    flexGrow: "1",
    color: "#fff"
  },
  colorText: {
    color: '#a8a8a8',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1 className={classes.appbarTitle}>
            Tad<span className={classes.colorText}>Feen.</span>
          </h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/services" activeStyle>
            Services
          </NavLink>
          <NavLink to="/contact-us" activeStyle>
            Contact Us
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
