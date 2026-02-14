import React from "react";
import LandingPage from "./pages/LandingPage";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <div>
       <Routes>
    
        <Route path="/" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
