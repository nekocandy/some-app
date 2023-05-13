import { type AppType } from "next/app";

import { ToastContainer, toast } from "react-toastify";

import { api } from "~/utils/api";
import Sidebar from "~/components/Navigation/Sidebar";

import "~/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "react-day-picker/dist/style.css";
import { useEffect } from "react";
import { realm } from "~/lib/mongo/init";

const MyApp: AppType = ({ Component, pageProps }) => {
  const handleKey = async () => {
    const userLoggedIn = !!realm.currentUser;
    const authToken = localStorage.getItem("authToken");
    if (authToken || !userLoggedIn) return;

    try {
      const keys = await realm.currentUser?.apiKeys.fetchAll();
      if (keys?.length && keys[0]?.key) {
        localStorage.setItem("authToken", keys[0]?.key);
        return;
      }
      const apiKey = await realm.currentUser?.apiKeys.create(
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `${realm.currentUser.profile.email
          ?.replace("@", "-")
          .replace(".", "-")}-${Date.now()}`
      );

      if (!apiKey)
        throw new Error("Error while creating API key, no key from MongoDB");

      console.log(apiKey);

      localStorage.setItem("authToken", apiKey.key);
    } catch (error) {
      console.error(error);
      toast.error("Error while creating API key");
    }
  };

  useEffect(() => {
    void handleKey();
  }, []);

  return (
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
};

export default api.withTRPC(MyApp);
