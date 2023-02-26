// import "./App.css";
// importing components from react-router-dom package
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
  // Navigate,
} from "react-router-dom";

// import pages
import Dashboard from "./pages/dashboard";
import Athletes from "./pages/athletes";
import Sessions from "./pages/sessions";
import Profile from "./pages/profile";
  
function Home() {
  return (
    <>
    {/* <Loading/> */}
      <Router>
        <Routes>
          <Route exact path="/" element={< Dashboard />}/>
          <Route exact path="/dashboard" element={< Dashboard />}/>
          <Route path="/athletes" element={<Athletes/>} />
          <Route path="/sessions" element={<Sessions/>} />
          <Route path="/profile" element={<Profile/>} />          
        </Routes>
      </Router>
    </>
  );
}
  
export default Home;