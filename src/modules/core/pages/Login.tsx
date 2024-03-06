import Fingerprint from "../../../assets/images/fingerprint4.gif";
import dataExtraction from "../../../assets/images/Dataextractionblue.gif";
import logoBlue from "../../../assets/images/logoBlue.png";
import Finance from "../../../assets/images/finance.gif";
import background from "../../../assets/images/background.jpg";
import background2 from "../../../assets/images/background2.jpg";
import background3 from "../../../assets/images/background3.jpg";
import CustomButton from "../components/CustomButton";
import InputField from "../components/InputField";
const Login = () => {
  return (
    <div className="h-screen w-screen bg-[#DBE9FF] flex items-center justify-center">
      <div className="flex-1 h-full bg-[#FFFFFF] flex flex-col justify-start items-center">
        <img className="" src={logoBlue} />
        <h1 className="text-4xl font-extrabold">
          LOGIN TO THE ADVISORS FINANCE PORTAL
        </h1>
        <InputField placeholder={"Email"} />
        <InputField placeholder={"Password"} type="password" />
        <CustomButton text="Login" />
      </div>
      <div className="flex-[2] flex-col items-center justify-center flex h-full bg-gradient-to-t from-[#154073] to-[#25A4DC] border-[0px] mr-0 border-[#DBE9FF] relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue text-4xl font-bold z-50 bg-[#154073] opacity-75">
          <div className="absolute inset-0 bg-[#154073] opacity-50"></div>
          <div className="relative z-[10000000] p-6">
            <p className="text-white">
              M&A AND FINANCIAL ADVISORY FOR CORPORATES , ENTREPRENEURS AND
              INVESTORS
            </p>
          </div>
        </div>
        <img className="relative h-full w-full" src={background2} />
      </div>
    </div>
  );
};
//main dark blue -> #154073
//main logo light blue -> #25A4DC
//#FFEBD6 light orange
//#DBE9FF
//FF725E
export default Login;
