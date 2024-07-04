/** @type {import('next').NextConfig} */
const nextConfig = {};
//to disable es lint i added this
module.exports = {
    eslint: {
      ignoreDuringBuilds: true,
    },
  };

export default nextConfig;
