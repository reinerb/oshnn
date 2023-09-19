/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
module.exports = {
  async redirects() {
    return [
      {
        source: "/article",
        destination: "/topics",
        permanent: true,
      },
      {
        source: "/topics/page/1",
        destination: "/topics",
        permanent: true,
      },
      {
        source: "/topics/:slug/page/1",
        destination: "/topics/:slug",
        permanent: true,
      },
    ];
  },
};
