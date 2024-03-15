import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./Components/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Components/Home";
import ErrorPage from "./Components/ErrorPage";
import About from "./Components/About";
import Contact from "./Components/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <React.StrictMode>
      <RouterProvider router={router} />;
    </React.StrictMode>
  </>
);
