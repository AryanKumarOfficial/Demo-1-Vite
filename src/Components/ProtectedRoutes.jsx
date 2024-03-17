// this route is used to protect the routes that are only accessible to authenticated users
//
// Path: src/Components/ProtectedRoutes.jsx
//
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (!token) {
      navigate("/login", {
        replace: true,
      });
    }
  }, [navigate]);
  return children;
};

export default ProtectedRoutes;
