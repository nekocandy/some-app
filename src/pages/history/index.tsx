import { useState, useEffect } from "react";
import Disclaimer from "~/components/HealthStatus/Disclaimer";
import DataTable from "~/components/History/DataTable";
import HomepageSidebar from "~/components/HompageSidebar";
import { getTests } from "~/lib/mongo/database/tests";

interface TestData {
  testId: string;
  imageBase64: string;
  result: { positive: number; negative: number };
  includeInReport: boolean;
  createdAt: Date;
}

export default function History() {
  const [testData, setTestData] = useState<TestData[]>([]);

  const getDataFromDatabase = async () => {
    const data = await getTests();
    if (!data) return;

    console.log(data);
    setTestData(data);
  };

  useEffect(() => {
    void getDataFromDatabase();
  }, []);

  return (
    <div className="flex h-full w-full flex-1">
      <div className="grid grid-cols-12 gap-4">
        {/*  first columns for cards */}
        <div className="col-span-8 rounded-xl bg-[#1A5F7A]">
          <div className="flex h-full flex-col items-center justify-center gap-8 overflow-y-auto px-6 py-8 text-white">
            <div className="flex items-center gap-2 text-center text-2xl font-bold tracking-wide">
              History
            </div>

            <div className="flex h-full w-full flex-wrap justify-center gap-4">
              {testData.length ? (
                <DataTable data={testData} />
              ) : (
                <div className="w-1/2">
                  <Disclaimer
                    title="No tests found"
                    titleClassName="text-red-900"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="col-span-4 rounded-xl bg-[#088395]">
          <HomepageSidebar
            lastElement={
              <Disclaimer
                className="font-bold"
                title="Disclaimer"
                message=" Our model is trained on a certain limited amount of data, for further treatment, refer to a healthcare professional"
                messageClassName="font-semibold"
              />
            }
          />
        </div>
      </div>
    </div>
  );
}
