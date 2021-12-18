import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse } from '@material-ui/core';
// import SortIcon from '@material-ui/icons/Sort';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import { Link as Scroll } from 'react-scroll';
// import { Button } from '@mui/material';
// import { styled } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    background: 'black',
    alignItems: 'center',
    height: '90vh',
    fontFamily: 'Nunito',
  },
  appbar: {
    background: 'none',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  colorText: {
    color: '#a8a8a8',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '4.5rem',
  },
  goDown: {
    color: '#a8a8a8',
    fontSize: '4rem',
  },
}));

// const LoginButton = styled(Button)(({ theme }) => ({
//   color: 'white',
//   margin: '1%',
//   border: 'none',
//   backgroundColor: '#1DC582',
//   '&:hover': {
//     backgroundColor: '#6DD8AF',
//   },
// }));

// const RegisterButton = styled(Button)(({ theme }) => ({
//   color: 'black',
//   margin: '1%',
//   border: 'none',
//   backgroundColor: '#a8a8a8',
//   '&:hover': {
//     backgroundColor: '#28424A',
//   },
// }));

export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      {/* <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            Tad<span className={classes.colorText}>Feen.</span>
          </h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar> */}

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br />
            Tad<span className={classes.colorText}>Feen.</span>
          </h1>
          {/* <RegisterButton variant="outlined">Register</RegisterButton>
          <LoginButton variant="contained">Login</LoginButton> */}
        </div>
      </Collapse>
    </div>
  );
}