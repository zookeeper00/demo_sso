import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "./Config";
import "./LoginButton.css";
import { IoIosLock } from "react-icons/io";

const LoginButton = (props) => {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance
      .loginPopup(loginRequest)
      .then(() => props.onLogin())
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div className="login_div">
      <h2>Welcome Back!</h2>
      <input
        className="input"
        type="text"
        placeholder="someone@persistent.com"
      />
      <div className="div2">
        <IoIosLock />
        <p style={{ marginLeft: "5px" }}>Single sign-on enabled</p>
      </div>
      <button className="loginButton" onClick={handleLogin}>
        Continue with single sign-on
      </button>
      <p style={{ fontWeight: "bold", color: "rgb(35, 130, 238)" }}>
        Create account
      </p>
    </div>
  );
};

export default LoginButton;
