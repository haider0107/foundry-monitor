import * as React from "react";
import { Link } from "react-router-dom";
import "./Account.css";

export default function Account() {
  return (
    <>
      <div className="welcome-text">Welcome,</div>
      <div className="account-container">
        <h1>J.P.F Metacast</h1>
        <div className="option-container">
          <div className="option">Add Employee Detail</div>
          <div className="option">Add Customer Detail</div>
          <div className="option">
            <Link to="/temp-monitoring" style={{ textDecoration: "none" }}>
              Monitor Temperature
            </Link>
          </div>
          <div className="option">
            <Link to="/live-tracking" style={{ textDecoration: "none" }}>
              Monitor Manufacturing Process
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
