import React, { useState, useEffect } from "react";
import ErrorPage from "./ErrorPage";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const handleOnError = (error, errorInfo) => {
    // Log the error to the console for development purposes
    console.error("Error caught by ErrorBoundary:", error, errorInfo);

    // **Production Error Reporting:**
    // Send the error details and original props to an error reporting service
    // (e.g., Sentry, Bugsnag). Implement the appropriate integration here.

    setHasError(true);
  };

  // Use useEffect to attach the error handler on component mount
  useEffect(() => {
    window.addEventListener("error", handleOnError);
    return () => window.removeEventListener("error", handleOnError); // Cleanup
  }, []);

  if (hasError) {
    // Render a user-friendly fallback UI
    return <ErrorPage />;
  }

  return children;
};

export default ErrorBoundary;
