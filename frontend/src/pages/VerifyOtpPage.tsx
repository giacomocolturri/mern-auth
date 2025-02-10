import { useRef } from "react";
import AuthWrapper from "../components/AuthWrapper";
import FormButton from "../components/FormButton";

const VerifyOtp = () => {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleInput = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.value) {
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      } else {
        inputRefs.current[index].blur();
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text/plain");
    for (let i = 0; i < text.length; i++) {
      inputRefs.current[i].value = text[i];
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace") {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const otp = inputRefs.current.reduce((acc, input) => acc + input.value, "");
    console.log(otp);
  };

  return (
    <AuthWrapper title="Verify OTP" subtitle="Enter the OTP sent to your email">
      <form onSubmit={handleSubmit}>
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
                ref={(e) => (inputRefs.current[index] = e as HTMLInputElement)}
                onInput={(e) =>
                  handleInput(index, e as React.ChangeEvent<HTMLInputElement>)
                }
                onPaste={handlePaste}
                onKeyDown={(e) =>
                  handleKeyDown(
                    index,
                    e as React.KeyboardEvent<HTMLInputElement>
                  )
                }
              />
            ))}
        </div>
        <FormButton text="Verify Email" />
      </form>
    </AuthWrapper>
  );
};

export default VerifyOtp;
