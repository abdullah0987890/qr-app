/** @type {import('next').NextConfig} */
import withPWA from "next-pwa";

const nextConfig = {
  // 🔥 Disable Turbopack (required for next-pwa)
  experimental: {
    turbo: false,
  },

  // 🔥 Required for your export build
  output: "export",

  images: {
    unoptimized: true,
  },
};

export default withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: false, // PWA is enabled
})(nextConfig);
