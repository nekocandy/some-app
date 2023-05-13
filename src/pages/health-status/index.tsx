import Disclaimer from "~/components/HealthStatus/Disclaimer";
import TestCard from "~/components/HealthStatus/TestCard";
import HomepageSidebar from "~/components/HompageSidebar";
import { availableTests } from "~/lib/tests";

export default function HealthStatusCards() {
  return (
    <div className="flex h-full w-full flex-1">
      <div className="grid grid-cols-12 gap-4">
        {/*  first columns for cards */}
        <div className="col-span-8 rounded-xl bg-[#1A5F7A]">
          <div className="flex h-full flex-col items-center justify-center gap-8 overflow-y-auto px-6 py-8 text-white">
            <div className="text-center text-2xl font-bold tracking-wide">
              Available Tests
            </div>

            <div className="flex h-full w-full flex-wrap justify-center gap-4">
              {availableTests.map((test) => (
                <TestCard key={test.id} {...test} />
              ))}
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
