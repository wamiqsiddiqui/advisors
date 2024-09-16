import { ColumnTypes } from "../../../../types/generalTypes";

type DataGridProps = {
  columns: ColumnTypes[];
  //   rows: { [key: string]: any }[];
};
const LoadingDataGrid = ({ columns }: DataGridProps) => {
  const loading = <div className="h-10 w-20 bg-white animate-pulse mx-1"></div>;
  const rows = Array.from({ length: 10 }, (_, index) => {
    let obj: { [key: string]: JSX.Element } = {};
    for (let i = 0; i < columns.length; i++) {
      obj[`loading + ${i}`] = loading;
    }
    return obj;
  });
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
          {rows.map((row) => (
            <tr className={` rounded-xl`}>
              {Object.values(row).map((rowData, cellIndex) => (
                <td
                  className={`${cellIndex === 0 && "rounded-l-2xl"} ${
                    cellIndex == Object.values(row).length - 1 &&
                    " rounded-r-2xl"
                  } py-2`}
                >
                  {rowData}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoadingDataGrid;
