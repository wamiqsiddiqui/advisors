import ExcelToJsonConverter from "../../../core/components/ExcelToJSONConverter";

const SalesReportLayout = () => {
  return (
    <div className="flex flex-col p-6">
      <p className="text-5xl font-thin text-start mb-4">Categories</p>
      <div className="rounded-xl p-1 bg-primary-bgBlack">
        <ExcelToJsonConverter />
      </div>
    </div>
  );
};

export default SalesReportLayout;
