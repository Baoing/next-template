/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  reactStrictMode: true,
  skipMiddlewareUrlNormalize: true,

  rewrites: async () => [
    {
      source: '/:lang(en|fr)*/:path*',
      destination: '/[lang]/:path*',
    },
  ],
});
