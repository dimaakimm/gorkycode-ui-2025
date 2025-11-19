export const routes = {
  HOME_PAGE: "/",
};

export const publicRoutes = [routes.HOME_PAGE];

export type RouteValue = (typeof routes)[keyof typeof routes];
