import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Form from './components/Form'
import Navbar from './components/NavBar';
import Home from './components/Home';
import SignIn from './components/SignIn';;

// import PlaceToVisit from './components/userActions';




export default function App() {
  return (
    <Router>
       < Navbar />
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/sign-in" exact element={< SignIn />}/>
        <Route path="/sign-up" exact element={< Form />}/>
      </Routes>
    </Router>
  );
}