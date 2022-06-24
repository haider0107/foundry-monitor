import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";
import Account from "./pages/Account/Account";
import LiveTracking from "./pages/LiveTracking/LiveTracking";
import TempMonitoring from "./pages/TempMonitoring/TempMonitoring";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="login" element={<Login />} />
        <Route path="my-account" element={<Account />} />
        <Route path="live-tracking" element={<LiveTracking />} />
        <Route path="temp-monitoring" element={<TempMonitoring />} />
      </Routes>
    </div>
  );
}

export default App;
