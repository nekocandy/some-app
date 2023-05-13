import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Disclaimer from "~/components/HealthStatus/Disclaimer";
import TestCard from "~/components/HealthStatus/TestCard";
import HomepageSidebar from "~/components/HompageSidebar";
import { availableTests } from "~/lib/tests";

export default function TestModel() {
  const router = useRouter();

  const [modelData, setModelData] = useState<{
    id: string;
    name: string;
    image: string;
    url: string;
  } | null>(null);

  const { model } = router.query;

  useEffect(() => {
    if (!model) {
      void router.push("/health-status");
      return;
    }

    const testData = availableTests.find((test) => test.id === model);
    if (!testData) {
      toast.error(`Test for model with ID: ${model as string} not found`);
      void router.push("/health-status");
      return;
    }

    setModelData(testData);
  }, [model, router]);

  return (
    <div className="flex h-full w-full flex-1">
      <div className="grid h-full grid-cols-12 gap-4">
        {/*  first columns for cards */}
        <div className="col-span-8 h-full rounded-xl bg-[#1A5F7A] p-12">
          <div className="h-full w-full">
            <div className="h-full w-full rounded-xl border-2 border-dashed border-black">
              .
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
