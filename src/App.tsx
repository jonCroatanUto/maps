import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TheoricalCHallence from "./pages/TheoricChallence/theoricalChallence";
import PracticalChallece from "./pages/PracticalChallece";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/theoricalChallace" element={<TheoricalCHallence />} />
      <Route path="/practicalChallace" element={<PracticalChallece />} />
    </Routes>
  );
}

export default App;
