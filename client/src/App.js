// import "./App.css";
// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";
  
// import Home component
import Dashboard from "./pages/dashboard";
import Athletes from "./pages/athletes";
import Sessions from "./pages/sessions";
import Profile from "./pages/profile";
  
function App() {
  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Athletes/>} />
          <Route exact path="/dashboard" element={< Dashboard />}/>
          <Route path="/athletes" element={<Athletes/>} />
          <Route path="/sessions" element={<Sessions/>} />
          <Route path="/profile" element={<Profile/>} />          
        </Routes>
      </Router>
    </>
  );
}
  
export default App;