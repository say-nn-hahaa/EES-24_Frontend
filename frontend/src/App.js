import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingPage";
import About from "./components/About";
import navhome from "./components/navhome";
import Schedule from "./components/Schedule";
import Footer from "./components/Footer";
import HamburgerMenu from "./components/hamburger";
import Login from "./components/login";
import Signup from "./components/signup";

import Dashboard from "./components/dashboard.js";

function App() {
  return (
    <Router>
     <div className="flex flex-col w-[100vw]  max-h-fit  ">
    


     <Routes>
        <Route exact path="/" element={<LandingPage />} />
      </Routes>
      <div>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
       </div>

    </div>

      <Routes>
        
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>

      </Router>
  
  );
}

export default App;
