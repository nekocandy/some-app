import {
  IconBrandMongodb,
  IconDeviceLandlinePhone,
  IconHealthRecognition,
  IconHistory,
  IconId,
  IconLogout2,
  IconMedicalCross,
  IconUserCircle,
} from "@tabler/icons-react";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { realm } from "~/lib/mongo/init";

const navigation = [
  {
    name: "Your Profile",
    href: "/profile",
    icon: <IconUserCircle />,
  },
  {
    name: "Prognostic",
    href: "/prognostic",
    icon: <IconHealthRecognition />,
  },
  {
    name: "MedPal",
    href: "/medpal",
    icon: <IconMedicalCross />,
  },
  {
    name: "History",
    href: "/history",
    icon: <IconHistory />,
  },
  {
    name: "Factopedia",
    href: "/factopedia",
    icon: <IconId />,
  },
  {
    name: "Helplines",
    href: "/helplines",
    icon: <IconDeviceLandlinePhone />,
  },
];

export default function Sidebar() {
  const router = useRouter();

  useEffect(() => {
    if (!realm.currentUser && router.pathname !== "/") {
      void router.push("/");
    }
  }, [router]);

  const logout = async () => {
    await realm.currentUser?.logOut();
    localStorage.removeItem("authToken");
    await router.push("/");
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-between py-8 pr-8">
      <Link href={realm.currentUser ? "/dashboard" : "/"}>
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-[#0A4D68]" />
          <span className="text-xl font-bold tracking-wide text-[#0A4D68]">
            MediMate
          </span>
        </div>
      </Link>

      {router.pathname !== "/" && (
        <div className="flex flex-col gap-2 text-black">
          {navigation.map((nav, index) => (
            <Link key={index} href={nav.href}>
              <div className="flex gap-2 rounded-md px-6 py-3 hover:bg-black/10">
                {nav.icon}
                <span className="text-lg font-medium tracking-wide ">
                  {nav.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* logout button */}
      <div
        className={clsx(
          "flex w-full items-center justify-between",
          router.pathname === "/" && "hidden"
        )}
      >
        <button className={clsx(router.pathname === "/" && "hidden")}>
          <div
            className="flex gap-2 rounded-md px-4 py-3 hover:bg-red-600/90"
            onClick={() => void logout()}
          >
            <IconLogout2 />
            <span className="text-lg font-medium tracking-wide ">Logout</span>
          </div>
        </button>

        <div className="rounded-full bg-[#002b5b] p-2">
          <IconBrandMongodb color="#57C5B6" />
        </div>
      </div>

      {/* auth powered by on login screen */}
      <div
        className={clsx(
          "flex w-full items-center justify-center gap-4",
          router.pathname !== "/" && "hidden"
        )}
      >
        <div className="rounded-full bg-[#002b5b] p-2">
          <IconBrandMongodb color="#57C5B6" />
        </div>
        <div className="flex flex-col items-center gap-1 text-xs">
          <span>Auth Powered By</span>
          <span className="text-sm font-bold">MongoDB Atlas</span>
        </div>
      </div>
    </div>
  );
}
