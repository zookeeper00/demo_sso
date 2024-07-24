export const msalConfig = {
  auth: {
    clientId: "aed572c5-bd55-48b0-9a5b-375fcf1054e7",
    redirectUri: "http://localhost:3000",
    authority:
      "https://login.microsoftonline.com/1f4beacd-b7aa-49b2-aaa1-b8525cb257e0",
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: true,
  },
};

export const loginRequest = {
  scopes: ["User.Read"],
};
