/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  env: {
    NEXT_PUBLIC_DISCORD_WEBHOOK_URL: process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
    unoptimized: true,
  },
  output: 'export',
};

export default nextConfig;
