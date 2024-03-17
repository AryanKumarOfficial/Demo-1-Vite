// Path: src/Components/AuthenticatedRoutes.jsx

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthenticatedRoutes = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  return children;
};

export default AuthenticatedRoutes;
