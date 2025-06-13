import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // This middleware ensures that non-existent routes show the custom 404 page
  // It's not strictly necessary as Next.js handles 404s automatically,
  // but it's included here for completeness

  const url = request.nextUrl.clone()

  // You can add custom logic here if needed
  // For example, redirecting certain patterns of URLs

  return NextResponse.next()
}

export const config = {
  // Matcher for routes that should trigger this middleware
  matcher: [
    // Skip all internal paths (_next, api, static, etc)
    "/((?!_next/|_static/|_vercel|api/|static/|public/|favicon.ico).*)",
  ],
}
