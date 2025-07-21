// components/ui/simple-table.tsx
import React from "react";

export type TableColumn = {
  key: string;
  label: string;
};

export type TableRow = Record<string, React.ReactNode>;

interface SimpleTableProps {
  columns: TableColumn[];
  data: TableRow[];
  className?: string;
}

const SimpleTable: React.FC<SimpleTableProps> = ({
  columns,
  data,
  className,
}) => {
  return (
    <div className="w-full overflow-x-auto">
      <table
        className={`w-full text-left border border-collapse rounded sm:border-separate border-black ${
          className || ""
        }`}
        cellSpacing={0}
      >
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                scope="col"
                className="h-12 px-6 text-sm font-medium stroke-black text-black bg-sunflower"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {columns.map((col) => (
                <td
                  key={col.key}
                  className="px-6 py-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-black stroke-black text-black"
                >
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SimpleTable;
