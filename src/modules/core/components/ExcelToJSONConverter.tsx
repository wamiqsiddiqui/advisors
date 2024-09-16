import React, { useState } from "react";
import * as XLSX from "xlsx";

const ExcelToJsonConverter: React.FC = () => {
  const [jsonData, setJsonData] = useState<any[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const binaryString = event.target?.result as string;
        const workbook = XLSX.read(binaryString, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        setJsonData(data);
      };
      reader.readAsBinaryString(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <div>
        <h2>JSON Data</h2>
        <pre>{JSON.stringify(jsonData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default ExcelToJsonConverter;
