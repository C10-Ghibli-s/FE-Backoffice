import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async function shows(req, res) {
  try {
    const { accessToken } = await getAccessToken(req, res, {
      scopes: ["email"],
    });
    console.log(accessToken);
    const response = await fetch("http://165.227.95.114/auth/verify", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const shows = await response.json();

    res.status(200).json(shows);
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
});


