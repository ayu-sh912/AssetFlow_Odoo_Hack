import type { ReactNode } from "react";

interface Column<T> {
  header: string;
  accessor: keyof T;
  render?: (row: T) => ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
}

export default function DataTable<T extends Record<string, unknown>>({
  columns,
  data,
}: DataTableProps<T>) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">

      <table className="w-full">

        <thead className="bg-slate-50">

          <tr>

            {columns.map((column) => (
              <th
                key={String(column.accessor)}
                className="px-6 py-4 text-left text-sm font-semibold text-slate-700"
              >
                {column.header}
              </th>
            ))}

          </tr>

        </thead>

        <tbody>

          {data.map((row, index) => (

            <tr
              key={index}
              className="border-t border-slate-200 hover:bg-slate-50"
            >

              {columns.map((column) => (

                <td
                  key={String(column.accessor)}
                  className="px-6 py-4 text-sm text-slate-700"
                >
                  {column.render
                    ? column.render(row)
                    : String(row[column.accessor])}
                </td>

              ))}

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}