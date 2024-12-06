import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Fleet from "../components/fleets/Fleet";
import FleetCard from "../components/card/fleet-card";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "fleet",
        element: <Fleet />,
      },
    ],
  },
]);

export default router;
