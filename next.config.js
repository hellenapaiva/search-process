/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      fallback: [
        {
         source: "/:path*",
         destination: "https://op.digesto.com.br/api/tribproc/:path*",
        },
      ],
    };
  },
}

module.exports = nextConfig
