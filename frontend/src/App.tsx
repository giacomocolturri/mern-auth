import { Route, Routes } from "react-router-dom";
import RedirectAuthenticatedUser from "./components/RedirectAuthenticatedUser";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardPage from "./pages/DashboardPage";

import Login from "./pages/LoginPage";
import VerifyOtp from "./pages/VerifyOtpPage";
import ResetPassword from "./pages/ResetPasswordPage";
import Signup from "./pages/Signuppage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <RedirectAuthenticatedUser>
              <Login />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/signup"
          element={
            <RedirectAuthenticatedUser>
              <Signup />
            </RedirectAuthenticatedUser>
          }
        />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/forgot-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
};

export default App;
