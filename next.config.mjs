/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true,
    },
    images: {
    domains: ['fakestoreapi.com'], // Add the external domain here
  },};

export default nextConfig;
