import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images : {
    domains : ["www.everythingtalent.ai"],
    remotePatterns :[
      // {
      //   protocol : "https",
      //   hostname : "images.unsplash.com"
      // },
      {
        protocol : "https",
        hostname : "images.stockcake.com"
      }
      ,
      {
        protocol : "https",
        hostname : "www.shutterstock.com"
      }
    ]
  }
  /* config options here */
};

export default nextConfig;
