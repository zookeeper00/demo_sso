import logo from "./logo.svg";
import "./App.css";

import { useIsAuthenticated } from "@azure/msal-react";
import LoginButton from "./LoginButton";
import Profile from "./Profile";
import { LogoutButton } from "./LogoutButton";
import { useState } from "react";

function App() {
  const isAuthenticated = useIsAuthenticated();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(true);

  return (
    <div className="App">
      {isAuthenticated && !isLoggedOut ? (
        <>
          <Profile handleAuthorization={(e) => console.log(e)} />
          <LogoutButton onLogout={() => setIsLoggedOut(true)} />
        </>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1>Demo SSO App</h1>
          <LoginButton onLogin={() => setIsLoggedOut(false)} />
        </div>
      )}
    </div>
  );
}

export default App;
