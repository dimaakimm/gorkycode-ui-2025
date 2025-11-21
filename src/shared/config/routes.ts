export const routes = {
  HOME_PAGE: "/",
  DOCS_PAGE: "/docs",
};

export const publicRoutes = [routes.HOME_PAGE];

export type RouteValue = (typeof routes)[keyof typeof routes];
