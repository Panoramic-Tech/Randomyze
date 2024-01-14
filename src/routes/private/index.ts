import { User } from "./Screens";

const PrivateRoutes: {
  path: string;
  name: string;
  element: () => JSX.Element;
}[] = [
  {
    path: "/",
    name: "User",
    element: User,
  },
];
export default PrivateRoutes;
