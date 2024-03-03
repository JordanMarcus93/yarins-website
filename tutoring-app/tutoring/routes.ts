/**
 * An array of routes that are accessible to the public.
 * These routes do not require a user to be authenticated
 * @type {string[]}
 */
export const publicRoutes = ["/",];

/**
 * An array of routes that are not accessible to the public.
 * These routes will redirect logged in users to /notes.
 * @type {string[]}
 */
// TODO: Change routes to auth/login and auth/register. Change variable name to authRoutes
export const privateRoutes = ["/login", "/register"];

/**
 * Prefix for API authentication routes.
 * Routes that start with this prefix are used for authentication purposes.
 * @type {string}
 */
export const apiAuthprefix = "/api/auth";

/**
 * The default redirect path after logging in.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/notes";
