/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: async () => {
    return [
      {
        source: '/api/items',
        destination: 'http://localhost:8000/items',
      },
      {
        source: '/api/login',
        destination: 'http://localhost:8000/login',
      },
      {
        source: '/api/items/:slug',
        destination: 'http://localhost:8000/items/:slug',
      },
    ];
  },
};

module.exports = nextConfig;








//設定前
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig;
