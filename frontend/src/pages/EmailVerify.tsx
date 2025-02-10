import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const EmailVerify = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center px-6 sm:px-0 min-h-screen bg-gradient-to-br from-blue-200 to-purple-400">
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt="Logo"
        className="absolute left-5 top-5 sm_:left-20 w-28 sm:w-32 cursor-pointer"
      />
      <form className="bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm ">
        <h1 className="text-2xl font-semibold text-white text-center mb-4">
          Email verify OTP
        </h1>
        <p className="text-center text-indigo-300 mb-6">
          Enter the 6-digit code sent to your email
        </p>
        <div className="flex justify-between mb-8">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <input
                type="text"
                maxLength={1}
                key={index}
                required
                className="w-12 h-12 bg-[#333A5C] text-white text-center text-xl rounded-md"
              />
            ))}
        </div>
        <button className="w-full py-3 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-900 text-white font-medium">
          Verify Email
        </button>
      </form>
    </div>
  );
};

export default EmailVerify;
