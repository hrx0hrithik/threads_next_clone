/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: {
        allowedOrigins: ['*']
      },
      serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "img.clerk.com",
        },
        {
          protocol: "https",
          hostname: "images.clerk.dev",
        },
        {
          protocol: "https",
          hostname: "uploadthing.com",
        },
        {
          protocol: "https",
          hostname: "utfs.io",
        },
        {
          protocol: "https",
          hostname: "placehold.co",
        },
      ],
    //   typescript: {
    //     ignoreBuildErrors: true,
    //   },
    },
  };

export default nextConfig;
