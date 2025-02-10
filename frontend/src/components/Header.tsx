import { assets } from "../assets/assets";
import { IUser } from "../context/AuthContextDefinition";

const Header = () => {
  const user: IUser = { name: "John Doe", email: "", id: "" };
  return (
    <div className="flex flex-col justify-center items-center mt-20 px-4 text-center text-gray-800">
      <img
        src={assets.header_img}
        alt="Header_Img"
        className="w-35 h-36 rounded-full mb-6"
      />
      <h1 className="flex items-center text-xl gap-2 sm:text-3xl font-medium mb-2">
        Hey {user ? user.name : "Developer"}!
        <img
          src={assets.hand_wave}
          className="w-8 aspect-square"
          alt="Hand wave"
        />
      </h1>
      <h2 className="text-3xl sm:text-5xl font-semibold mb-4">
        Welcome to our app
      </h2>
      <p className="mb-8 max-w-md">
        Let's start with a quick product tour and we will have you up and
        running in no time!
      </p>
      <button className="border border-gray-500 rounded-full px-8 py-2.5 hover:bg-gray-100 transition-all">
        Get started
      </button>
    </div>
  );
};

export default Header;
