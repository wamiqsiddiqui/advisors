import { useState } from "react";
import { IoEye, IoMdEyeOff } from "../../../utilities/icons";

type InputFieldsProps = {
  placeholder: string;
  type?: "text" | "password";
  suffixIcon?: JSX.Element;
};
const InputField = ({
  placeholder,
  type = "text",
  suffixIcon,
}: InputFieldsProps) => {
  const [showPasswordType, setShowPasswordType] = useState<"password" | "text">(
    "password"
  );
  return (
    <div className="border-[1px] flex">
      <input
        className=""
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
  );
};

export default InputField;
