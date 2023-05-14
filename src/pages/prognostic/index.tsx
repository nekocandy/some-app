import { IconInfoCircle, IconPlayerPlayFilled } from "@tabler/icons-react";
import { toast } from "react-toastify";
import Disclaimer from "~/components/HealthStatus/Disclaimer";
import HomepageSidebar from "~/components/HompageSidebar";

export default function Prognosis() {
  const sendData = () => {
    toast.success("Successfully sent the data! ");
  };

  return (
    <div className="flex h-full w-full flex-1">
      <div className="grid grid-cols-12 gap-4">
        {/*  first columns for cards */}
        <div className="col-span-8 rounded-xl bg-[#1A5F7A]">
          <div className="flex h-full flex-col items-center justify-center gap-8 overflow-y-auto px-6 py-8 text-white">
            <div className="flex items-center gap-2 text-center text-2xl font-bold tracking-wide">
              Prognostic
            </div>

            <div className="flex h-full w-full flex-col justify-center gap-4">
              <div>
                <div className="flex w-full items-center gap-2 rounded-xl bg-[#1C4676] px-4 py-4">
                  <div className="flex w-full items-center gap-2 ">
                    <span className="inline-block text-xl text-white">
                      DoB:{" "}
                    </span>
                    <input
                      type="date"
                      className="w-full rounded-md bg-[#088395] px-4 py-2 "
                    />
                  </div>

                  <div className="flex w-full items-center gap-2 ">
                    <span className="inline-block text-xl text-white">
                      Sex:
                    </span>
                    <input
                      type="text"
                      className="w-full rounded-md bg-[#088395] px-4 py-2"
                    />
                  </div>

                  <div className="flex w-full items-center gap-2 ">
                    <span className="inline-block text-xl text-white">
                      BMI:
                    </span>
                    <input
                      type="number"
                      className="w-full rounded-md bg-[#088395] px-4 py-2"
                    />
                  </div>
                </div>
              </div>

              <div className="flex w-full items-center gap-2 rounded-xl bg-[#1C4676] px-4 py-4">
                <div className="flex w-full items-center justify-center gap-2 ">
                  <span className=" inline-block w-full text-xl text-white">
                    Alcohol Consumption:
                  </span>
                  <input
                    type="text"
                    className="rounded-md bg-[#088395] px-4 py-2"
                  />
                </div>
              </div>

              <div>
                <div className="flex w-full items-center gap-2 rounded-xl bg-[#1C4676] px-4 py-4">
                  <div className="flex w-full items-center gap-2 ">
                    <span className="inline-block text-xl text-white">
                      Outlook:{" "}
                    </span>
                    <input
                      type="text"
                      className="w-full rounded-md bg-[#088395] px-4 py-2 "
                    />
                  </div>

                  <div className="flex w-full items-center gap-2 ">
                    <span className="inline-block text-xl text-white">
                      Country:
                    </span>
                    <input
                      type="text"
                      className="w-full rounded-md bg-[#088395] px-4 py-2"
                    />
                  </div>
                </div>
              </div>

              <div className="mx-auto flex w-1/2 flex-col items-center justify-center px-12">
                <button className="flex w-full items-center justify-between rounded-full bg-[#00FFCA] px-2 py-2 text-[#002B5B]">
                  <div className="rounded-full bg-[#1A5F7A] p-2">
                    <IconPlayerPlayFilled className="h-5 w-5 text-[#F5F3C1]" />
                  </div>

                  <div className="text-lg">Get Results!</div>

                  <div></div>
                </button>

                <div className="flex items-center gap-1 px-2 pt-2 text-xs text-gray-300">
                  <IconInfoCircle className="h-4 w-4" />
                  Results would be sent to you through email
                </div>
              </div>
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
