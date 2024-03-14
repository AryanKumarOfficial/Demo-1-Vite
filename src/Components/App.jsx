import "../styles/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    component: () => import("./Home"),
  },
  {
    path: "/about",
    // component: () => import("./About"),
  },
  {
    path: "/contact",
    // component: () => import("./Contact"),
  },
  {
    path: "/users",
    // component: () => import("./Users"),
  },
  {
    path: "/user/:id",
    // component: () => import("./User"),
  },
  {
    path: "/user/:id/:name",
    // component: () => import("./User"),
  },
  {
    path: "/:catchAll",
    // component: () => import("./NotFound"),
  },
]);

const App = () => {
  return <RouterProvider router={BrowserRouter} />;
};

export default App;
