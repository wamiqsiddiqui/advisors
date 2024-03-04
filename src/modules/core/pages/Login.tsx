import Fingerprint from "../../../assets/images/fingerprint4.gif";
import dataExtraction from "../../../assets/images/Data extraction.gif";
import Finance from "../../../assets/images/finance.gif";
const Login = () => {
  return (
    <div className="h-screen w-screen bg-[#DBE9FF] flex items-center justify-center">
      <div className="flex-1 h-full bg-[#FFFFFF] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-extrabold">
          LOGIN TO THE ADVISORS FINANCE PORTAL
        </h1>
        <input className="mt-6" placeholder="Email" />
        <input className="mt-6" placeholder="Password" />
        <button className="mt-6">Login</button>
      </div>
      <div className="flex-[2] items-center justify-center flex h-full bg-[#FF725E] border-[0px] mr-0 border-[#DBE9FF]">
        <img height={"70%"} width={"60%"} src={dataExtraction} />
      </div>
    </div>
  );
};
//#FFEBD6 light orange
//#DBE9FF
//FF725E
export default Login;
