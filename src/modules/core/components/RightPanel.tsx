import dataReportSV from "../../../assets/images/dataReportSV.svg";
import background2 from "../../../assets/images/printing_invoices.svg";
import analytics from "../../../assets/images/analytics.svg";
import personalgoals from "../../../assets/images/personalgoals.svg";
import pieGraph from "../../../assets/images/pie_graph.svg";
import setupAnalytics from "../../../assets/images/setup_analytics.svg";
import safe from "../../../assets/images/safe.svg";
import login from "../../../assets/images/login.svg";

const RightPanel = () => {
  return (
    <div className="h-full flex-[2] relative">
      <div className=" absolute w-[2000px] h-[2000px] rounded-[50%] top-[-10%] left-[0%] bg-gradient-to-t from-primary-darkBlue to-primary-lightBlue translate-y-[-50%]"></div>
      {/* <div className="absolute -left-5 bottom-0 h-[350px] w-[350px] z-40">
        <img src={analytics} />
      </div> */}
      {/* <div className="absolute left-10 top-10 w-[60%]  z-40">
        <p className="text-4xl font-thin  text-start text-white px-4 py-2">
          Access personalized guidance and insights from experienced financial
          advisors
        </p>
      </div> */}
      <div className="absolute right-10 bottom-20 w-[60%]  z-40">
        <p className="text-4xl font-thin  text-start text-white px-4 py-2">
          Access personalized guidance and insights from experienced financial
          advisors
        </p>
      </div>
      <div className="absolute right-20 bottom-10 h-[600px] w-[600px] z-40">
        <img src={background2} />
      </div>
    </div>
  );
};

export default RightPanel;
