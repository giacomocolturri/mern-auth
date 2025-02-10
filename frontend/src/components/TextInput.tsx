interface TextInputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: string;
  required?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  icon,
  required = false,
}) => {
  return (
    <div className="flex items-center mb-4 gap-3 w-full px-5 py-2.5 rounded-full bg-[#223A5C]">
      {icon && <img src={icon} alt="Icon" className="w-4 h-4" />}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="bg-transparent outline-none text-white"
      />
    </div>
  );
};

export default TextInput;
