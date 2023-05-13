import { IconHeartbeat } from "@tabler/icons-react";
import router from "next/router";
import { useEffect } from "react";
import { realm } from "~/lib/mongo/init";

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
        <div className="col-span-8 bg-[#1A5F7A] rounded-xl">
            <div className="px-4 py-4 flex flex-col gap-6">
                {/* title */}
                <div className="font-medium text-white text-2xl">
                    Dashboard
                </div>

                <div className="border-4 border-[#57C5B6] flex gap-4 items-center justify-center w-full py-6 bg-[#0A4D68] rounded-xl">
                    <IconHeartbeat color="#00FFCA" className="h-16 w-16" />
                    <span className="text-[#00FFCA] text-2xl font-light">Get your health status</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
