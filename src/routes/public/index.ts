import Home from "./Home/Home";

const PublicRoutes: {
  path: string;
  name: string;
  element: () => JSX.Element;
}[] = [
  {
    path: "/",
    name: "Home",
    element: Home,
  },
];
export default PublicRoutes;
