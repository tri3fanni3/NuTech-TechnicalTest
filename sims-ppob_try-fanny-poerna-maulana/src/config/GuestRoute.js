import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const GuestRoute = () => {
  if (localStorage.getItem("authToken") !== null) {
    return <Navigate to="/home" replace />;
  }
  return <Outlet />;
};

export default GuestRoute;
