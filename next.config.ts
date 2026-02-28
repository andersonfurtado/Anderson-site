import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // Redireciona www → sem www (canonical)
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.andersonfurtado.com" }],
        destination: "https://andersonfurtado.com/:path*",
        permanent: true, // 308 — SEO-safe
      },
    ];
  },
};

export default nextConfig;
