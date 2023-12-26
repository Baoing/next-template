/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl(
  withBundleAnalyzer({
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
        source: '/:lang(de|en)*/:path*',
        destination: '/[lang]/:path*',
      },
    ],
  }),
);
