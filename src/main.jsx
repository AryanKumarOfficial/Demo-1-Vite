import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./Components/App";
import Navbar from "./Components/Navbar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <App />
  </React.StrictMode>
);
