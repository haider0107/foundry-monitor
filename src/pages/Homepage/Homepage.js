import React from "react";
// import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
// import Paper from "@mui/material/Paper";
import "./Homepage.css";

export default function Homepage() {
  return (
    <>
      <div className="container">
        <div className="image">
          <div>
            <img src="/image.jpg" className="banner-image" alt="Banner" />
          </div>
        </div>
        <div className="content">
          <div className="content-text-title">Foundry Production</div>
          <div className="content-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque suscipit dolor a neque commodo, et iaculis mi faucibus.
            Integer viverra urna nulla, eu molestie ligula pretium posuere.{" "}
          </div>
          <div className="learn-more-button">
            <Button variant="contained">Learn More </Button>
          </div>
        </div>
      </div>
      <div className="partners">
        <span
          style={{ fontWeight: "bold", fontSize: "2rem", color: "#1976d2" }}
        >
          Our Partners
        </span>
        <div className="partner-images">
          <img src="/acma.jpg" className="partner-image" alt="acma" />
          <img src="/bee.jpg" className="partner-image" alt="acma" />
          <img src="/cii.jpg" className="partner-image" alt="acma" />
          <img src="/dlc.jpg" className="partner-image" alt="acma" />
          <img src="/gef.jpg" className="partner-image" alt="acma" />
        </div>
      </div>
      <div className="footer">
        All Rights Reserved <br />
      </div>
    </>
  );
}
