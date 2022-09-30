const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  basePath: '/whisperer',
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
});
