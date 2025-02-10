import { useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import AuthWrapper from "../components/AuthWrapper";
import TextInput from "../components/TextInput";
import FormButton from "../components/FormButton";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
  };

  return (
    <AuthWrapper
      title="Login"
      subtitle="Login to your account"
      footerTitle="Don't have an account?"
      footerSubtitle="Sign up"
      footerNavigate="/signup"
    >
      <form onSubmit={onSubmitHandler}>
        <TextInput
          icon={assets.mail_icon}
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          icon={assets.lock_icon}
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <p
          onClick={() => navigate("/forgot-password")}
          className="mb-4 text-indigo-500 cursor-pointer"
        >
          Forgot password?
        </p>

        <FormButton text="Login" />
      </form>
    </AuthWrapper>
  );
};

export default Login;
