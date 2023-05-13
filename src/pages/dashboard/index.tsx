import { IconBrandMongodb, IconHeartbeat, IconPencilPlus, IconPlus, IconRefresh } from "@tabler/icons-react";
import router from "next/router";
import { useEffect } from "react";

import { realm } from "~/lib/mongo/init";
import { DayPicker } from "react-day-picker";

export default function DashboardPage() {
  // verify auth status
  useEffect(() => {
    if (realm.currentUser) {
      void router.push("/dashboard");
    }
  }, []);

  return (
    <div className="flex h-full w-full items-center justify-center gap-4">
      <div className="grid h-full w-full grid-cols-12">
        <div className="col-span-8 rounded-xl bg-[#1A5F7A]">
          <div className="flex flex-col gap-6 px-4 py-4">
            {/* title */}
            <div className="text-2xl font-medium text-white">Dashboard</div>

            <div className="flex w-full items-center justify-center gap-4 rounded-xl border-4 border-[#57C5B6] bg-[#0A4D68] py-6">
              <IconHeartbeat color="#00FFCA" className="h-16 w-16" />
              <span className="text-2xl font-light text-[#00FFCA]">
                Get your health status
              </span>
            </div>

            <div className="flex w-full justify-center items-center">
              <DayPicker
                className="rounded-md border bg-[#c1f5a7] px-4 py-2"
                mode="single"
                numberOfMonths={2}
              />

              <div className="flex flex-col gap-6 px-6">
                <div className="rounded-full bg-[#002b5b] p-4">
                  <IconPlus className="h-8 w-8" color="#57C5B6" />
                </div>
                <div className="rounded-full bg-[#002b5b] p-4">
                  <IconRefresh className="h-8 w-8" color="#57C5B6" />
                </div>
                <div className="rounded-full bg-[#002b5b] p-4">
                  <IconPencilPlus className="h-8 w-8" color="#57C5B6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
