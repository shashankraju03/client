import { RouteObject } from "react-router-dom";
import { FileReader } from "../pages/FileReader/FileReader";
import { FileWatch } from "../pages/FileWatch/FileWatch";

export const mainRoutes: RouteObject[] = [
  {
    path: "/file-watch",
    element: <FileWatch />,
  },
  {
    path: "/file-reader",
    element: <FileReader />,
  },
];
