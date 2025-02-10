import { useState } from "react";
import { assets } from "../assets/assets";
import AuthWrapper from "../components/AuthWrapper";
import TextInput from "../components/TextInput";
import FormButton from "../components/FormButton";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
  };

  return (
    <AuthWrapper
      title="Sign up"
      subtitle="Create an account"
      footerTitle="Already have an account?"
      footerSubtitle="Login"
      footerNavigate="/login"
    >
      <form onSubmit={onSubmitHandler}>
        <TextInput
          icon={assets.person_icon}
          type="text"
          placeholder="Full Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <FormButton text="Sign up" />
      </form>
    </AuthWrapper>
  );
};

export default Signup;
