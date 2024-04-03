import { useState } from "react";
import { IoEye, IoMdEyeOff } from "../../../utilities/icons";

type InputFieldsProps = {
  placeholder: string;
  type?: "text" | "password";
  suffixIcon?: JSX.Element;
  label?: string;
};
const InputField = ({
  placeholder,
  type = "text",
  label,
  suffixIcon,
}: InputFieldsProps) => {
  const [showPasswordType, setShowPasswordType] = useState<"password" | "text">(
    "password"
  );
  return (
    <div className="flex flex-col items-start w-full mb-4">
      {label && <label className="text-sm font-normal mb-2">{label}</label>}
      <div className="flex justify-start items-center border-[1px] px-2 py-1 rounded-md  w-full">
        <input
          className="w-full"
          type={type !== "password" ? type : showPasswordType}
          placeholder={placeholder}
        />
        {type === "password" ? (
          <div
            onClick={() =>
              setShowPasswordType(
                showPasswordType == "password" ? "text" : "password"
              )
            }
          >
            {showPasswordType === "password" ? <IoEye /> : <IoMdEyeOff />}
          </div>
        ) : (
          suffixIcon && suffixIcon
        )}
      </div>
    </div>
  );
};

export default InputField;
