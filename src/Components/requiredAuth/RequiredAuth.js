import { useLocation, Navigate, Outlet } from "react-router-dom";
import UseAuth from "../../useAuth/UseAuth";

import React from "react";

const RequiredAuth = () => {
  const { auth } = UseAuth();
  const location = useLocation();
  return (
    <div>
      {auth?.access_token ? (
        <Outlet />
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
    </div>
  );
};

export default RequiredAuth;
