import { auth } from "@/auth";

export default auth((req) => {
  // req.auth
  const isLoggedIn = !!req.auth?.user;
  console.log("Route", req.nextUrl.pathname);
  console.log("isLoggedIn", isLoggedIn);
});

// Optionally don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
