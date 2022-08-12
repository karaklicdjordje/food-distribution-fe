import { matchRoutes, useLocation } from "react-router-dom";

const routes = [
  { path: "/" },
  { path: "/registration" },
  { path: "/login" },
  { path: "/home" },
  { path: "restaurant" },
  { path: "profile" },
  { path: "about" },
  { path: "contact" },
  { path: "checkout"}
];

const useCurrentPath = () => {
  const location = useLocation();
  const [{ route }] = matchRoutes(routes, location);

  return route.path;
};

export default useCurrentPath;
