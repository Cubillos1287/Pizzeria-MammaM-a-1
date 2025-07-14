import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(UserContext); 

  console.log('valor del token en ProtectedRoute', token)
 
  if (!token) {
    return <Navigate to="/login" />;
  }

  
  return children;
};

export default ProtectedRoute;