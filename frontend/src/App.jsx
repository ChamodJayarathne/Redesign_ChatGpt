/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";

const App = () => {
  return (
<BrowserRouter>
      <div>
    
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
};

export default App;
