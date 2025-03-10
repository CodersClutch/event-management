import NextAuth from "next-auth";
import { routes } from "@/routes";
import authConfig from "@/auth.config";

const { auth: withAuthMiddleware } = NextAuth(authConfig);

export default withAuthMiddleware((req) => {
  const isLoggedIn = !!req.auth;
  const { nextUrl } = req;

  const isApiAuthRoute = nextUrl.pathname.startsWith(routes.apiAuthPrefix);
  const isAuthRoute = routes.auth.includes(nextUrl.pathname);
  const isPublicRoute = routes.public.includes(nextUrl.pathname);
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

  if (!isPublicRoute && !isLoggedIn && !isHomePage) {
    // Redirect non-logged-in users to the homepage if they try to access a non-public route
    return Response.redirect(new URL(routes.defaultLoginRedirect, nextUrl));
  }

  // Allow the request to proceed if the user is on the homepage or accessing a public route
  return undefined;
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
