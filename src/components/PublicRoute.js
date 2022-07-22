import React, { useContext, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const PublicRoute = () => {
  const { state } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (state.user) {
      navigate("/profile");
    }
  }, [navigate, state.user]);

  return (
    <div className="container-fluid p-5">
      <Outlet />
    </div>
  )
};

export default PublicRoute;
