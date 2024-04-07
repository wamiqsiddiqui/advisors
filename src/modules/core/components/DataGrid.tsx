import { ColumnTypes } from "../../../types/generalTypes";

type DataGridProps = {
  columns: ColumnTypes[];
  rows: { [key: string]: any }[];
};
const DataGrid = ({ columns, rows }: DataGridProps) => {
  return (
    <div className="w-full px-6 bg-[#272934] overflow-x-auto adv__custom-scrollbar">
      <table className="w-full mb-10 mt-4">
        <thead>
          <tr className="">
            {columns.map((column, index) => (
              <th
                key={column.name + index}
                className={`pb-2 text-grayShades-gray text-base font-medium max-sm:w-[50%] w-[${column.minWidth}]`}
              >
                {column.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              className={`${
                index % 2 === 0
                  ? "bg-grayShades-alternateGray rounded-xl"
                  : "bg-transparent"
              }`}
            >
              {Object.values(row).map((rowData, cellIndex) => {
                return Object.keys(row)[cellIndex] === "actions" ? (
                  <td
                    className={`${cellIndex === 0 && "rounded-l-2xl"} ${
                      cellIndex == Object.values(row).length - 1 &&
                      " rounded-r-2xl"
                    }`}
                  >
                    <div className="flex justify-center">{rowData.icon}</div>
                  </td>
                ) : Object.keys(row)[cellIndex] === "select" ? (
                  <td
                    className={`${cellIndex === 0 && "rounded-l-2xl"} ${
                      cellIndex == Object.values(row).length - 1 &&
                      " rounded-r-2xl"
                    }`}
                  >
                    <div className="flex justify-center">
                      {rowData.isLoading ? (
                        <>Loading...</>
                      ) : (
                        <input
                          type="checkbox"
                          onChange={rowData.onChange}
                          defaultChecked={rowData.isChecked}
                        />
                      )}
                    </div>
                  </td>
                ) : (
                  <td
                    className={`${cellIndex === 0 && "rounded-l-2xl"} ${
                      cellIndex == Object.values(row).length - 1 &&
                      " rounded-r-2xl"
                    } py-2`}
                  >
                    <p className="overflow-ellipsis">
                      {typeof rowData === "string" &&
                      (rowData as string).length > 90
                        ? (rowData as string).substring(0, 91) + "..."
                        : rowData}
                    </p>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataGrid;
