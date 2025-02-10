import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const AuthWrapper = ({
  children,
  title,
  subtitle,
  footerTitle,
  footerSubtitle,
  footerNavigate,
}: {
  children: ReactNode;
  title: string;
  subtitle: string;
  footerTitle?: string;
  footerSubtitle?: string;
  footerNavigate?: string;
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-blue-200 to-purple-400">
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt="Logo"
        className="absolute left-5 top-5 sm_:left-20 w-28 sm:w-32 cursor-pointer"
      />

      <div className="bg-slate-900 p-10 rounded-lg shadow-lg w-full sm:w-96 text-indigo-300 text-sm">
        <h2 className="text-3xl font-semibold text-white text-center mb-3">
          {title}
        </h2>
        <p className="text-center text-sm mb-6">{subtitle}</p>

        {children}

        {footerTitle && footerSubtitle && footerNavigate && (
          <p className="text-gray-400 text-center text-xs mt-4">
            {footerTitle}{" "}
            <span
              className="text-blue-400 cursor-pointer underline"
              onClick={() => navigate(footerNavigate)}
            >
              {footerSubtitle}
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthWrapper;
