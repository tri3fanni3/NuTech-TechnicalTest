import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  if (localStorage.getItem("authToken") === null) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
