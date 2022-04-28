import React from "react";
import LoginBox from "../../components/LoginBox/LoginBox";
import Container from "@mui/material/Container";
import "./Login.css";

export default function Login() {
  return (
    <div>
      <Container maxWidth="sm">
        <div className="login-box-container">
          <LoginBox />
        </div>
      </Container>
    </div>
  );
}
