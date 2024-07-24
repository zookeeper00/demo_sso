import React, { useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "./Config";
import { callMsGraph } from "./graph";

const Profile = (props) => {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);

  useEffect(() => {
    if (accounts.length > 0) {
      instance
        .acquireTokenSilent({
          ...loginRequest,
          account: accounts[0],
        })
        .then((response) => {
          callMsGraph(response.accessToken).then((response) => {
            console.log(response);
            const groups = response.value.map((group) => group.id);
            if (groups.includes("1d537440-1bad-41f0-8290-8477a5d90bd1")) {
              // props.handleAuthorization(true);
              console.log("Authorized");
            } else console.log("Not Authorized");
            setGraphData(response);
          });
        });
    }
  }, [accounts, instance]);

  return (
    <div>
      {graphData ? (
        <div>
          <p>
            <strong>Name:</strong> {graphData.displayName}
          </p>
          <p>
            <strong>Email:</strong> {graphData.mail}
          </p>
          <p>
            <strong>Contact:</strong> {graphData.mobilePhone}
          </p>
          <p>
            <strong>Location:</strong> {graphData.officeLocation}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
