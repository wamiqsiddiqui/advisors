import CustomButton from "./CustomButton";
import InputField from "./InputField";
import logoBlue from "../../../assets/images/logoBlue.png";
import logoWhiteIconOnly from "../../../assets/images/logoIconOnly.png";
import { useNavigate } from "react-router-dom";

const LeftPanel = () => {
  const navigate = useNavigate();
  return (
    <div className="relative pb-20 pt-28 pl-10 flex-1 h-full bg-[#fff] flex flex-col justify-start items-start">
      <div className="absolute opacity-[0.04] -left-10 -bottom-20 h-[1000px] w-[700px]">
        <img className="w-full h-full" src={logoWhiteIconOnly} />
      </div>
      <div className="z-50 shadow-div rounded-2xl w-[400px] ml-10 bg-white px-10 py-6 flex flex-col items-start">
        <div className="h-auto w-[50%]">
          <img src={logoBlue} />
        </div>
        <div className="flex flex-col items-start self-center w-[100%]">
          <h1 className="text-2xl font-light mt-4 mb-6">Sign In</h1>
          <InputField label="Email Address" placeholder={"xyz@gmail.com"} />
          <InputField
            label="Password"
            placeholder={"Enter your password"}
            type="password"
          />
          <div className="w-full flex justify-between mt-1 mb-7">
            <div className="flex justify-start">
              <input className="mr-1" type="checkbox" />
              <label className="text-base font-normal">Keep me signed in</label>
            </div>
            <p className="text-base font-normal text-[#25A4DC]">
              Forgot Password?
            </p>
          </div>
          <CustomButton
            text="Login"
            onClick={() => navigate("/advisors/projects")}
          />
          <div className="flex items-center my-6 w-full">
            <div className="w-[50%] h-[1px] bg-grayShades-gray"></div>
            <p className="mx-2 text-xl font-light">OR</p>
            <div className="w-[50%] h-[1px] bg-grayShades-gray"></div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-base font-normal mr-1">
              Don't have an account?{" "}
            </p>
            <p className="text-[#25A4DC] text-base font-medium"> Sign Up</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
