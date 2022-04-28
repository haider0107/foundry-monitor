import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./LoginBox.css";
import { useNavigate } from "react-router-dom";

export default function LoginBox() {
  let navigate = useNavigate();

  const usernameRef = React.useRef("");
  const passwordRef = React.useRef("");

  const [loginError, setLoginError] = React.useState(false);

  const loginFunction = () => {
    if (
      usernameRef.current.value === "admin" &&
      passwordRef.current.value === "admin"
    ) {
      document.cookie = "industrial=true";
      setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 2000);
    } else {
      setLoginError(true);
    }
  };

  return (
    <div className="login-box-contents">
      {loginError ? <div className="login-error">Incorrect Login!</div> : null}
      <div className="login-fields">
        <TextField
          required
          id="outlined-input"
          label="Username"
          inputRef={usernameRef}
        />
      </div>
      <div className="login-fields">
        <TextField
          required
          id="outlined-input"
          label="Password"
          inputRef={passwordRef}
          type="password"
        />
      </div>
      <div className="login-fields">
        <Button variant="contained" onClick={loginFunction}>
          Login
        </Button>
      </div>
    </div>
  );
}
