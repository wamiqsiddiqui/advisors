type CustomButtonProps = {
  type?: "button" | "submit";
  icon?: JSX.Element;
  text: string;
};
const CustomButton = ({ type = "button", text, icon }: CustomButtonProps) => {
  return (
    <button className="" type={type}>
      <div className="flex items-center">
        {icon} <p>{text}</p>
      </div>
    </button>
  );
};

export default CustomButton;
