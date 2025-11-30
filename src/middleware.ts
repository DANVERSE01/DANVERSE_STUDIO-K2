import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware for Next.js
 * Handles security, redirects, and request processing
 */
export function middleware(request: NextRequest) {
  // Security Headers
  const requestHeaders = new Headers(request.headers);
  
  // Add security headers
  requestHeaders.set('X-Content-Type-Options', 'nosniff');
  requestHeaders.set('X-Frame-Options', 'DENY');
  requestHeaders.set('X-XSS-Protection', '1; mode=block');
  requestHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // CORS Headers
  requestHeaders.set('Access-Control-Allow-Origin', process.env.NEXT_PUBLIC_SITE_URL || '*');
  requestHeaders.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  requestHeaders.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Performance optimizations
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  
  // Cache control for static assets
  if (request.nextUrl.pathname.startsWith('/_next/static')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }
  
  // Cache control for public assets
  if (request.nextUrl.pathname.startsWith('/images') ||
      request.nextUrl.pathname.startsWith('/fonts')) {
    response.headers.set('Cache-Control', 'public, max-age=3600, must-revalidate');
  }
  
  return response;
}

// Configure middleware matcher
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
