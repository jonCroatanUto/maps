import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TheoricalCHallence from "./pages/TheoricChallence/theoricalChallence";
import Map from "./pages/Maps";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/theoricalChallace" element={<TheoricalCHallence />} />
      <Route path="/practicalChallace" element={<Map />} />
    </Routes>
  );
}

export default App;
