import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'de'],

  // Used when no locale matches
  defaultLocale: 'en',

  // 禁用自动区域设置检测
  localeDetection: false,

  // 只想包含非默认语言的语言前缀
  localePrefix: 'as-needed',
});

export const config = {
  matcher: [
    // Match only internationalized pathnames
    '/(de|en)/:path*',
    '/((?!api|_next/static|_next/image|favicon.ico|assets|apple-touch-icon.png|favicon.svg|images/books|icons|manifest).*)',
  ],
};
