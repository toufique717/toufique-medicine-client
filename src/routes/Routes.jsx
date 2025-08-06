import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "../layoutes/Main";
import Home from "../pages/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,

    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
    ],
  },
]);