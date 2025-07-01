/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    // serverActions: true, // removed as it is enabled by default in Next 14
    serverComponentsExternalPackages: [
      "cloudinary",
      "nodemailer",
      "razorpay",
      "stripe",
    ],
  },
};

export default nextConfig;
