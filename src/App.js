import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Form from "./components/Form";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import SignIn from "./components/SignIn";



export default function App() {
  const [token, setToken] = useState()
  if(!token) {
    return <SignIn setToken={setToken} />
  }

  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/sign-in" exact element={<SignIn />} /> 
          <Route path="/sign-up" exact element={<Form />} />
        </Routes>
      </Router>
  );
}
