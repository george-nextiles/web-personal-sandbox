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
import Loading from "./pages/LoadingPage";
import Dashboard from "./pages/DashboardPage";
import Athletes from "./pages/AthletePage";
import Sessions from "./pages/SessionPage";
import Profile from "./pages/ProfilePage";
  
function Home() {
  return (
    <>
    <Loading/>
      <Router>
        <Routes>
          <Route exact path="/" element={< Loading />}/>
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