import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const RedirectAuthenticatedUser = ({ children }: { children: ReactNode }) => {
  const isAuthenticated = false; // TODO: Check if user is authenticated
  const user = {
    verified: true,
  }; // TODO: Get user from context

  if (isAuthenticated && user.verified) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RedirectAuthenticatedUser;
