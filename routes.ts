export const routes = {
  public: ["/", "/new-verification", " /events/*"],
  auth: [
    "/auth",
    "/auth/signup",
    "/auth/reset",
    "/auth/new-password",
    "/auth/setup-account",
    "/error",
  ],
  apiAuthPrefix: "/api/auth",
  defaultLoginRedirect: "/",
  defaultLogoutRedirect: "/",
};
