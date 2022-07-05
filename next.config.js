// This is the configuration of next.js
// Environment variables: makes safer call to the API
// redirects() Works to redirect to other page e.g: the 404 not found

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: "http://134.122.30.90/graphql",
    API_AUTH: "http://134.122.30.90/auth/verify",
  },
  images: {
    domains: ["ih1.redbubble.net", "www.business2community.com"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
