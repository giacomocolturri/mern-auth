import { assets } from "../assets/assets";
import { useState } from "react";
import AuthWrapper from "../components/AuthWrapper";
import TextInput from "../components/TextInput";
import FormButton from "../components/FormButton";

const ResetPassword = () => {
  const [email, setEmail] = useState<string>("");

  const onSubmitHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
  };

  return (
    <AuthWrapper
      title="Reset Password"
      subtitle="Enter your email to reset password"
    >
      <form onSubmit={onSubmitHandler}>
        <TextInput
          icon={assets.mail_icon}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <FormButton text="Reset Password" />
      </form>
    </AuthWrapper>
  );
};

export default ResetPassword;
