import { useRouteError } from "react-router-dom";
import "../styles/Error.css";
import { useEffect } from "react";

export default function ErrorPage() {
  const error = useRouteError();
  useEffect(() => {
    document.title = "Error";
  }, [error]);

  return (
    <section id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message || " "}</i>
      </p>
    </section>
  );
}
