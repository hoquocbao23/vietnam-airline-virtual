import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Fleet from "../components/fleets/Fleet";
import Staff from "../components/staffs/Staff";
import Sgn from "../components/hubs/sgn/Sgn";
import HomePage from "../components/homepage/Homepage";
import Rank from "../components/ranks/Rank";
import About from "../components/about/About";
import Routes from "../components/routes/Routes";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "fleet",
        element: <Fleet />,
      },
      {
        path: "staffs",
        element: <Staff/>,
      },
      {
        path: "hubs/vvts",
        element: <Sgn/>,
      },
      {
        path: "ranks",
        element: <Rank/>,
      },
      {
        path: "about",
        element: <About/>,
      },
      {
        path: "routes",
        element: <Routes/>,
      }
    ],
  },
]);

export default router;
