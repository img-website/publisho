import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children,auth }) => {
  const token = localStorage.getItem('accessToken');
  if (auth) {
    if (token) {
      return <Navigate to="/" replace />;
    }
  } else {
    if (!token) {
      return <Navigate to="/login" replace />;
    }
  }
  return children;
};

export default ProtectedRoute;
