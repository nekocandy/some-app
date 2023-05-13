import { type AppType } from "next/app";

import { api } from "~/utils/api";
import Sidebar from "~/components/Navigation/Sidebar";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => (
  <div className="h-screen bg-[#002B5B] font-poppins">
    <main className="flex h-screen gap-2">
      <div className="flex h-full justify-center overflow-y-auto px-4 bg-[#57C5B6] rounded-r-xl">
        <Sidebar />
      </div>

      <div className="h-full w-full flex-1 overflow-y-auto py-8 pr-8">
        <Component {...pageProps} />
      </div>
    </main>
  </div>
);

export default api.withTRPC(MyApp);
