import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App";
import Home from "../Components/Home";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
  {
    path: "/contact",
    element: <div>Contact</div>,
  },
  {
    path: "/services",
    element: <div>Services</div>,
  },
  {
    path: "/portfolio",
    element: <div>Portfolio</div>,
  },
  {
    path: "/blog",
    element: <div>Blog</div>,
  },
  {
    path: "/careers",
    element: <div>Careers</div>,
  },
  {
    path: "/team",
    element: <div>Team</div>,
  },
  {
    path: "/faq",
    element: <div>FAQ</div>,
  },
  {
    path: "/privacy",
    element: <div>Privacy</div>,
  },
  {
    path: "/terms",
    element: <div>Terms</div>,
  },
  {
    path: "/404",
    element: <div>404</div>,
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={BrowserRouter} />
  </React.StrictMode>
);
