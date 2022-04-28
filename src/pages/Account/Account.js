import * as React from "react";
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
          <div className="option">Monitor Temperature</div>
          <div className="option">Monitor Manufacturing Process</div>
        </div>
      </div>
    </>
  );
}
