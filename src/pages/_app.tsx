import { type AppType } from "next/app";

import { ToastContainer } from "react-toastify";

import { api } from "~/utils/api";
import Sidebar from "~/components/Navigation/Sidebar";

import "~/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import 'react-day-picker/dist/style.css';

const MyApp: AppType = ({ Component, pageProps }) => (
  <div className="h-screen bg-[#002B5B] font-poppins">
    <main className="flex h-screen gap-2">
      <div className="flex h-full justify-center overflow-y-auto rounded-r-xl bg-[#57C5B6] px-4">
        <Sidebar />
      </div>

      <div className="h-full w-full flex-1 overflow-y-auto py-4 pl-4 pr-8">
        <Component {...pageProps} />
      </div>
    </main>

    <ToastContainer />
  </div>
);

export default api.withTRPC(MyApp);
