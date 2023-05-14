import { IconPhoneCall } from "@tabler/icons-react";
import Disclaimer from "~/components/HealthStatus/Disclaimer";
import HomepageSidebar from "~/components/HompageSidebar";

const helplines = [
  {
    name: "Emergency Helpline",
    number: "108",
  },
  {
    name: "National Helpline",
    number: "1075",
  },
  {
    name: "Vandrevala Foundation",
    number: "+91 9999 666 555",
  },
  {
    name: "MH Rehabilitation",
    number: "+91 18005990019",
  },
  {
    name: "Pristyn Care Ortho",
    number: "+91 9311-583-423",
  },
  {
    name: "Genesis Ortho Clinic",
    number: "+91 07947194814",
  },
];

export default function Helplines() {
  return (
    <div className="flex h-full w-full flex-1">
      <div className="grid grid-cols-12 gap-4">
        {/*  first columns for cards */}
        <div className="col-span-8 rounded-xl bg-[#1A5F7A]">
          <div className="flex h-full flex-col items-center gap-8 px-6 py-8 text-white">
            <div className="flex w-full items-center justify-between gap-2 text-center font-bold tracking-wide">
              <div className="text-2xl">Helplines</div>

              <div>
                <button className="text-md rounded-md bg-teal-400 px-8 py-1 font-normal text-black">
                  Submit
                </button>
              </div>
            </div>

            <div className="flex h-full w-full flex-col gap-6 px-24">
              {helplines.map((helpline) => (
                <div
                  key={helpline.number}
                  className="flex h-28 w-full flex-col justify-between rounded-xl bg-[#088395] px-8 py-4 text-[#C1F5A7]"
                >
                  <div className="flex text-lg">{helpline.name}</div>

                  <div className="flex w-full items-center justify-between text-lg">
                    <div className="flex items-center gap-1">
                      <IconPhoneCall />
                      {helpline.number}
                    </div>

                    <div>
                      <a
                        href={`tel:${helpline.number}`}
                        className="rounded-md bg-[#134A52] px-4 py-2 text-sm"
                      >
                        Contact
                      </a>
                    </div>
                  </div>
                </div>
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
