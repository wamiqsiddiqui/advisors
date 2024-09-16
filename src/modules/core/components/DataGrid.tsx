import { ColumnTypes } from "../../../types/generalTypes";
import { capitalizeFirstLetter } from "../../../utilities/helper";
import { IoIosSend, MdEdit } from "../../../utilities/icons";

type DataGridProps = {
  columns: ColumnTypes[];
  rows: { [key: string]: any }[];
};
const DataGrid = ({ columns, rows }: DataGridProps) => {
  const isActualOrForecast = (columnName: string) => {
    const currentYear = new Date().getFullYear();
    if (Number(columnName).toString() !== "NaN") {
      if (Number(columnName) < currentYear) {
        return "Actual";
      } else {
        return "Forecast";
      }
    }
    return "Normal";
  };
  const getColumns = () => {
    const currentYear = new Date().getFullYear();
    const actualYears: string[] = [];
    const forecastYears: string[] = [];
    columns.forEach((column) => {
      if (Number(column.name).toString() !== "NaN") {
        if (Number(column.name) < currentYear) {
          actualYears.push(column.name);
        } else {
          forecastYears.push(column.name);
        }
      }
    });
    return { actualYears: actualYears, forecastYears: forecastYears };
  };
  return (
    <div className="w-full px-6 bg-neoShades-sidebarBlack overflow-x-auto adv__custom-scrollbar">
      {/* <div className="flex w-full py-2">
        <p className="flex-[2] bg-green-500">Actual</p>
        <p className="flex-[2] bg-red-500">Forecast</p>
      </div>
       <tr>
            <th rowSpan={2} colSpan={1}>
              Client Name
            </th>
            <th rowSpan={2} colSpan={1}>
              Date
            </th>
            <th rowSpan={1} colSpan={5}>
              All Appointments
            </th>
            <th rowSpan={1} colSpan={3}>
              Fulfilled Appointments
            </th>
          </tr>
      */}
      <table className="w-full mb-10 mt-4">
        <thead className="">
          <tr className="pb-2">
            <th
              colSpan={
                columns.length -
                (getColumns().actualYears.length +
                  getColumns().forecastYears.length)
              }
              rowSpan={1}
              className={`py-2 bg-transparent text-grayShades-gray text-base font-medium `}
            ></th>
            <th
              colSpan={getColumns().actualYears.length}
              rowSpan={1}
              className={`py-2 bg-neoShades-sidebarBlack  border-t-neoShades-dashboardPanel3 border-t-[2px] text-neoShades-dashboardPanel3 text-base font-semibold `}
            >
              Actual
            </th>
            <th
              colSpan={getColumns().forecastYears.length}
              rowSpan={1}
              className={`py-2 bg-neoShades-sidebarBlack border-t-neoShades-dashboardPanel4 border-t-[2px]  text-neoShades-dashboardPanel4 text-base font-semibold `}
            >
              Forecast
            </th>
          </tr>
          <tr className="mt-2">
            {columns.map((column, index) => {
              return (
                <th
                  key={column.name + index}
                  className={`pb-2 text-grayShades-gray text-base font-medium max-sm:w-[50%] w-[${
                    column.minWidth
                  }] ${index !== 0 && "columns-3"}`}
                >
                  <span className="flex flex-col">
                    <span className={`w-full ${getColumns()}`}></span>
                    {column.name}
                  </span>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              className={`${
                index % 2 === 0
                  ? "bg-neoShades-dashboardHeaderBgBlack rounded-xl"
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
                ) : rowData &&
                  typeof rowData === "object" &&
                  Object.values(rowData).find((value) => value === "select") ? (
                  <td
                    className={`${cellIndex === 0 && "rounded-l-2xl"} ${
                      cellIndex == Object.values(row).length - 1 &&
                      " rounded-r-2xl"
                    }`}
                  >
                    <div className="flex justify-center">
                      <select
                        className="bg-transparent"
                        name="base"
                        id="base"
                        value={rowData.defaultValue}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                          rowData.onChange(e, index)
                        }
                      >
                        <option
                          className="bg-neoShades-dashboardHeaderBgBlack"
                          value="Sales%"
                        >
                          Sales%
                        </option>
                        <option
                          className="bg-neoShades-dashboardHeaderBgBlack"
                          value="YoY%"
                        >
                          YoY%
                        </option>
                        <option
                          className="bg-neoShades-dashboardHeaderBgBlack"
                          value="% of OB"
                        >
                          % of OB
                        </option>
                        <option
                          className="bg-neoShades-dashboardHeaderBgBlack"
                          value="% of OB + Addns"
                        >
                          % of OB + Addns
                        </option>
                      </select>
                    </div>
                  </td>
                ) : rowData &&
                  typeof rowData === "object" &&
                  Object.keys(rowData).find((key) => key === "onTextChange") ? (
                  <td
                    className={`${cellIndex === 0 && "rounded-l-2xl"} ${
                      cellIndex == Object.values(row).length - 1 &&
                      " rounded-r-2xl"
                    }`}
                  >
                    {rowData.selectedKeyIndex !== null &&
                    rowData.selectedKeyIndex.index === index &&
                    rowData.selectedKeyIndex.key ===
                      Object.keys(row)[cellIndex] ? (
                      <div className="flex justify-center bg-neoShades-innerComponentsGray rounded-xl py-0 px-2 w-32">
                        <input
                          className="bg-transparent py-0 px-2 w-16"
                          placeholder="year"
                          defaultValue={
                            rowData?.defaultValue
                              ? Number(rowData.defaultValue)
                              : rowData?.data
                              ? Number(rowData.data)
                              : undefined
                          }
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            rowData.onTextChange(
                              e,
                              index,
                              Object.keys(row)[cellIndex]
                            );
                          }}
                        />
                        <IoIosSend
                          onClick={() => rowData.onSaveClick()}
                          className="cursor-pointer adv__icon_textField"
                        />
                      </div>
                    ) : (
                      <div className="flex justify-center items-center">
                        <p>
                          {rowData.isPercentageData
                            ? `${(Number(rowData.data) * 100).toPrecision(2)}%`
                            : rowData.data}
                        </p>
                        {rowData.selectedKeyIndex === null && (
                          <MdEdit
                            onClick={() =>
                              rowData.onEditClick(
                                index,
                                Object.keys(row)[cellIndex]
                              )
                            }
                            className="cursor-pointer adv__icon_textField"
                          />
                        )}
                      </div>
                    )}
                  </td>
                ) : (
                  <td
                    className={`${cellIndex === 0 && "rounded-l-2xl"} ${
                      cellIndex == Object.values(row).length - 1 &&
                      " rounded-r-2xl"
                    } py-2`}
                  >
                    <p
                      className={`overflow-ellipsis ${
                        typeof rowData === "string" && "text-start pl-3"
                      }`}
                    >
                      {typeof rowData === "string"
                        ? (rowData as string).length > 90
                          ? (rowData as string).substring(0, 91) + "..."
                          : capitalizeFirstLetter(rowData)
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
