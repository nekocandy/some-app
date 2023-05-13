import {
  IconArrowBadgeRight,
  IconHeartbeat,
  IconPencilPlus,
  IconPlus,
  IconRefresh,
} from "@tabler/icons-react";
import router from "next/router";
import { useEffect } from "react";

import { DayPicker } from "react-day-picker";
import { realm } from "~/lib/mongo/init";

const appointments = [
  {
    date: new Date(),
    doctor: "Dr. John Doe",
    hospital: "Apollo Hospital",
  },
  {
    date: new Date(),
    doctor: "Dr. John Doe",
    hospital: "Apollo Hospital",
  },
];

export default function DashboardPage() {
  // verify auth status
  useEffect(() => {
    if (!realm.currentUser) {
      void router.push("/");
    }
  }, []);

  return (
    <div className="flex h-full w-full items-center justify-center gap-4">
      <div className="grid h-full w-full grid-cols-12 gap-6">
        <div className="col-span-8 rounded-xl bg-[#1A5F7A]">
          <div className="flex flex-col gap-6 px-8 py-4">
            {/* title */}
            <div className="text-2xl font-medium text-white">Dashboard</div>

            <div className="flex w-full items-center justify-center gap-4 rounded-xl border-4 border-[#57C5B6] bg-[#0A4D68] py-6">
              <IconHeartbeat color="#00FFCA" className="h-16 w-16" />
              <span className="text-2xl font-light text-[#00FFCA]">
                Get your health status
              </span>
            </div>

            <div className="flex w-full items-center justify-center">
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

            <div className="space-y-4">
              <span className="text-xl text-white">Upcoming appointments</span>
              <div className="flex flex-col gap-4 rounded-xl bg-[#088395] px-4 py-4">
                {appointments.map((appointment, index) => (
                  <div
                    key={index}
                    className="flex w-full items-center justify-between text-lg text-[#C1F5A7]"
                  >
                    {appointment.doctor}
                    <IconArrowBadgeRight color="#C1F5A7" />
                    {appointment.date.toDateString()}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* right bar */}
        <div className="col-span-4 rounded-xl bg-[#088395]">
          <div className="flex h-full w-full flex-col items-center gap-6 px-6 pt-32">
            <div className="w-full flex flex-col bg-[#134a52] rounded-xl">
              <div className="flex w-full items-center justify-center gap-4 rounded-lg bg-[#57c5b6] py-8 text-black">
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/pfp.png"
                    className="h-20 w-20 rounded-full border-4 border-[#002B5B]"
                    alt="pfp"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-2xl font-medium">
                    Ei, Raiden Shogun
                  </span>
                  <span className="text-xs">
                    <span className="font-medium">Age:</span> 20
                    <span>F</span>
                  </span>
                </div>
              </div>

              <div className="text-center px-4 py-2 text-[#C1F5A7]">
              Not under any Diagnosis 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
