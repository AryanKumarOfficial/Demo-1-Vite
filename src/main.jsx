import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./Components/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Components/Home";
import ErrorPage from "./Components/ErrorPage";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import AuthenticatedRoutes from "./Components/Authenticatedroutes";
import ProtectedRoutes from "./Components/ProtectedRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: (
          <>
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          </>
        ),
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
      {
        path: "404",
        element: <ErrorPage />,
      },
      {
        path: "/login",
        element: (
          <>
            <AuthenticatedRoutes>
              <Login />
            </AuthenticatedRoutes>
          </>
        ),
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
