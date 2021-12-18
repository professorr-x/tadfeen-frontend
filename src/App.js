import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Navbar from "./components/NavBar";
import TokenNavbar from "./components/TokenNavBar";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import Dashborad from "./pages/Dashboard";

// TOKEN NAV
//  Home about contact myaccount
// NON-TOKEN NAV
//  Home about contact signup signin

export default function App() {
  const [token, setToken] = useState();
  // if (!token) {
  //   return (
  //     <Router>
  //       <Navbar />
  //       <Routes>
  //         <Route path="/" exact element={<Home />} />
  //         <Route path="/sign-in" exact element={<SignIn setToken={setToken} />} />
  //         <Route path="/sign-up" exact element={<Form setToken={setToken} />} />
  //         <Route path="/my-account" exact element={<Dashborad />} />
  //         {/* <Route path="/my-account" exact element={<SignIn setToken={setToken} />} /> */}
  //       </Routes>
  //     </Router>
  //   );
  // }

  return (
    <Router>
      {/* <TokenNavbar /> */}
      <Routes>
        <Route path="/" exact element={<Dashborad />} />
        <Route path="/sign-in" exact element={<Dashborad />} />
        <Route path="/sign-up" exact element={<Dashborad />} />
        <Route path="/my-account" exact element={<Dashborad />} />
      </Routes>
    </Router>
  );
}
