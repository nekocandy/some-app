import {
    IconBrandMongodb,
  IconDeviceLandlinePhone,
  IconHealthRecognition,
  IconHistory,
  IconId,
  IconLogout,
  IconLogout2,
  IconMedicalCross,
  IconUserCircle,
} from "@tabler/icons-react";
import Link from "next/link";

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
  return (
    <div className="flex h-full w-full flex-col items-center justify-between py-8 pr-8">
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 rounded-full bg-[#0A4D68]" />
        <span className="text-xl font-bold tracking-wide text-[#0A4D68]">
          MediMedi
        </span>
      </div>

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

      <div className="flex items-center justify-between w-full">
        <button>
          <div className="flex gap-2 rounded-md px-6 py-3 hover:bg-red-600/90">
            <IconLogout2 />
            <span className="text-lg font-medium tracking-wide ">Logout</span>
          </div>
        </button>

        <div>
            <IconBrandMongodb />
        </div>
      </div>
    </div>
  );
}
