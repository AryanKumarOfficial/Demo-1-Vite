import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
import ErrorPage from "../Components/ErrorPage";
import ErrorBoundary from "./ErrorBoundary";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: (
        <ErrorBoundary>
          <ErrorPage />
        </ErrorBoundary>
      ),
    },
  ]);
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />;
    </>
  );
}
