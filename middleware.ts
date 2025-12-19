import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const accessToken = localStorage.getItem('accessToken');
  const protectedRoutes = ['/users*', '/admin'];
  const isProtected = protectedRoutes.some(route =>
    req.nextUrl.pathname.startsWith(route),
  );

  if (isProtected && !accessToken) {
    return NextResponse.redirect(new URL('/login'));
  }
  return NextResponse.next();
}

export const config = { matcher: ['/users/:path*', '/admin/:path*'] };
