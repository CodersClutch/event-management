import NextAuth from "next-auth";
import { routes } from "@/routes";
import authConfig from "@/auth.config";

const { auth: withAuthMiddleware } = NextAuth(authConfig);

export default withAuthMiddleware((req) => {
  const isLoggedIn = !!req.auth;
  const { nextUrl } = req;

  const isApiAuthRoute = nextUrl.pathname.startsWith(routes.apiAuthPrefix);
  const isAuthRoute = routes.auth.includes(nextUrl.pathname);
  const isPublicRoute = routes.public.some((route) =>
    nextUrl.pathname.startsWith(route)
  );
  const isHomePage = nextUrl.pathname === "/";

  if (isApiAuthRoute) {
    return undefined; // Allow API auth routes to proceed
  }
  if (isAuthRoute) {
    // Redirect logged-in users away from auth routes to the homepage
    if (isLoggedIn) {
      return Response.redirect(new URL(routes.defaultLoginRedirect, nextUrl));
    }
    return undefined; // Allow non-logged-in users to access auth routes
  }

  // Allow public routes without authentication
  if (isPublicRoute) {
    return undefined;
  }
  // Protect /profile and its sub-routes
  if (isProfileRoute && !isLoggedIn) {
    return Response.redirect(new URL(routes.defaultLoginRedirect, nextUrl));
  }

  // Redirect non-logged-in users to the homepage if they try to access a protected route
  if (!isLoggedIn && !isHomePage) {
    return Response.redirect(new URL(routes.defaultLoginRedirect, nextUrl));
  }

  return undefined; // Allow the request to proceed
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
