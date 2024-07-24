import React from "react";
import { useMsal } from "@azure/msal-react";
import "./LogoutButton.css";

export const LogoutButton = (props) => {
  const { instance } = useMsal();

  const handleLogout = () => {
    instance.loginPopup().catch((err) => {
      console.error(err);
    });
    props.onLogout();
  };
  return (
    <button className="logoutButton" onClick={handleLogout}>
      Log out
    </button>
  );
};
