// This is the configuration of next.js
// Environment variables: makes safer call to the API
// redirects() Works to redirect to other page e.g: the 404 not found

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL_KEY: "url",
  },
  images: {
    domains: ["urls"]
  }
  // async redirects() {
  //   return [
  //     {
  //       source: "/about",
  //       destination: "/",
  //       permanent: true,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
