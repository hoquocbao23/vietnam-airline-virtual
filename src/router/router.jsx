import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Fleet from "../components/fleets/Fleet";
import Staff from "../components/staffs/Staff";

import HomePage from "../components/homepage/Homepage";
import Rank from "../components/ranks/Rank";
import Routes from "../components/routes/Routes";

import HubPage from "../components/hubs/Hubpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,
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
        path: "hubs/", // Đảm bảo chỉ định rõ ràng và không lặp lại "hubs"
        element: <HubPage />,
      },
      
      {
        path: "ranks",
        element: <Rank/>,
      },
      {
        path: "routes",
        element: <Routes/>,
      }
    ],
  },
]);

export default router;
