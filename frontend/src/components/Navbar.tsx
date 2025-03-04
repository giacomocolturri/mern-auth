import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

// TODO : to delete this interface
interface IUser {
  name: string;
  email: string;
  id: string;
}

const Navbar = () => {
  const navigate = useNavigate();
  const user: IUser | null = { name: "John Doe", email: "", id: "" };

  return (
    <div className="w-full flex justify-between items-center p-4 sm:p-6 sm:px-24 absolute top-0">
      <img src={assets.logo} alt="Logo" className="w-28 sm:w-32" />
      {user ? (
        <div className="w-8 h-8 flex justify-center items-center rounded-full text-white relative bg-black group">
          {user.name[0].toUpperCase()}
          <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black pt-10">
            <ul className="list-none m-0 p-2 bg-gray-100 text-sm">
              <li
                className="py-1 px-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => navigate("/verify-otp")}
              >
                Verify Email
              </li>
              <li className="py-1 px-2 hover:bg-gray-200 cursor-pointer pr-10">
                Logout
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-2 border border-gray-500 rounded-full px-6 py-2 text-gray-800 hover:bg-gray-100 transition-all"
        >
          Login <img src={assets.arrow_icon} alt="Arrow" className="w-6" />
        </button>
      )}
    </div>
  );
};

export default Navbar;
