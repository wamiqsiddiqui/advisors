type CustomButtonProps = {
  type?: "button" | "submit";
  icon?: JSX.Element;
  text: string;
};
const CustomButton = ({ type = "button", text, icon }: CustomButtonProps) => {
  return (
    <button className="w-full bg-[#154073] px-3 py-2 rounded-md" type={type}>
      <div className="flex justify-center items-center">
        {icon} <p className="text-white">{text}</p>
      </div>
    </button>
  );
};

export default CustomButton;
