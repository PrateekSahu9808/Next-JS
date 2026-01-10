/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "www.baba.com",
      },
    ],
  },
};

export default nextConfig;
