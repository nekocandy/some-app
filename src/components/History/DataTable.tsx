import { format } from "date-fns";
import Base64 from "./Base64Image";
import { useEffect, useState } from "react";
interface TestData {
  testId: string;
  imageBase64: string;
  result: { positive: number; negative: number };
  includeInReport: boolean;
  createdAt: Date;
}

export default function DataTable({ data }: { data: TestData[] }) {
  const [tableData, setTableData] = useState<string[]>([]);

  useEffect(() => {
    const tData = data.reduce((acc, obj) => {
      Object.entries(obj).forEach(([key, value]) => {
        console.log(key, value);
        if (["_id", "userId"].includes(key)) return;
        if (key === "result") {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/restrict-template-expressions
          acc.push(
            // @ts-expect-error something
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            `${value.positive.toFixed(2).toString()}%`,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/restrict-template-expressions
            `${value.negative.toFixed(2).toString()}%`
          );
          return;
        }
        if (key === "createdAt") {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          // @ts-expect-error something
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          acc.push(`${format(value, "dd/MM/yyyy")}`);
          return;
        }

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        acc.push(value.toString());
      });
      return acc;
    }, []);

    setTableData(tData);
  }, [data]);

  return (
    <div className="grid w-full grid-cols-6 rounded-md border">
      {[
        "Test ID",
        "Image",
        "Positive",
        "Negative",
        "Include in Report",
        "Created At",
      ].map((title) => (
        <div
          key={title}
          className="truncate rounded-t-md border-b border-black bg-[#088395] px-4 py-2 text-center text-xs text-white"
        >
          {title}
        </div>
      ))}

      {tableData.map((row, index) =>
        row.startsWith("data:image/") ? (
          <Base64 key={row} data={row} />
        ) : (
          <div
            key={row}
            className="truncate border-b border-black bg-[#088395] px-4 py-4 text-center text-xs text-white"
          >
            {row}
          </div>
        )
      )}
    </div>
  );
}
