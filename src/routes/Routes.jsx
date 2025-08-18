import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "../layoutes/Main";
import Home from "../pages/Home";
import Item from "../menupage/Item";


export const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,

    children: [
      {
        path: "/",
        element:<Home></Home>,
      },

      {
        path: "/item",
        element:<Item></Item>,
      },
    ],
  },
]);