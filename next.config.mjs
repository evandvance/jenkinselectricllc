/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mediacdn.jenkinselectric.llc',
      },
    ],
  },
};

export default nextConfig;
