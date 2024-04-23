import { ColumnTypes } from "../../../types/generalTypes";
import { capitalizeFirstLetter } from "../../../utilities/helper";
import { IoIosSend, MdEdit } from "../../../utilities/icons";

type DataGridProps = {
  columns: ColumnTypes[];
  rows: { [key: string]: any }[];
};
const DataGrid = ({ columns, rows }: DataGridProps) => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full px-6 bg-neoShades-sidebarBlack overflow-x-auto adv__custom-scrollbar">
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
                ) : Object.keys(row)[cellIndex] === "1" ? (
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
                      </select>
                    </div>
                  </td>
                ) : /^\d+$/.test(Object.keys(row)[cellIndex]) &&
                  Number(Object.keys(row)[cellIndex]) >= currentYear ? (
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
                          defaultValue={Number(rowData.data).toPrecision(1)}
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            rowData.onChange(
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
                        <p>{Number(rowData.data).toPrecision(1)}</p>
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
