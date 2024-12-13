import { RouteObject } from "react-router-dom";
import { FileWatch } from "../pages/FileWatch/FileWatch";

export const mainRoutes: RouteObject[] = [
  {
    path: "/file-watch",
    element: <FileWatch />,
  },
];
