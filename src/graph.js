export const callMsGraph = async (accessToken) => {
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append("Authorization", bearer);

  const options = {
    method: "GET",
    headers: headers,
  };

  try {
    //API to fetch user profile details
    const responseAuth = await fetch(
      "https://graph.microsoft.com/v1.0/me",
      options
    );
    const responseAuthentication = await responseAuth.json();

    //API to fetch groups for Authorization
    const responseAuthorize = await fetch(
      "https://graph.microsoft.com/v1.0/me/memberOf",
      options
    );
    const responseAuthorization = await responseAuthorize.json();
    //combining both the responses
    const response = {
      ...responseAuthentication,
      value: responseAuthorization.value,
    };

    return await response;
  } catch (err) {
    console.error(err);
  }
};
