import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const isAuthenticated = true; // TODO: Check if user is authenticated
  const user = {
    verified: false,
  }; // TODO: Get user from context

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!user.verified) {
    return <Navigate to="/verify-otp" replace />;
  }

  return children;
};

export default ProtectedRoute;
