const locales = ['en-US', 'nl-NL', 'nl'];

export function middleware(request) {
  // const { pathname } = request.nextUrl;
  // const pathnameHasLocale = locales.some(
  //   (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  // );
  //
  // if (pathnameHasLocale) return;
  //
  // request.nextUrl.pathname = `/${locales[0]}${pathname}`;
  //
  // // e.g.  /products => /en-US/products
  // return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
};
