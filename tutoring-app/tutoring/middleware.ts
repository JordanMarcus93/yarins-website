import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthprefix,
  privateRoutes,
  publicRoutes,
} from "@/routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  // Your code here
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  console.log("Route", req.nextUrl.pathname);
  console.log("isLoggedIn:", isLoggedIn);

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthprefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isPrivateRoute = privateRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return;
  }

  // TODO: Change to isAuthRoute
  if (isPrivateRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return;
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/login", nextUrl));
  }
  return;
});

// Optionally don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
