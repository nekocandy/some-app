import { IconUserCircle } from "@tabler/icons-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import BMICalculator from "~/components/BMICalculator";
import Disclaimer from "~/components/HealthStatus/Disclaimer";
import HomepageSidebar from "~/components/HompageSidebar";
import {
  ProfileData,
  getProfileData,
  setProfileData,
} from "~/lib/mongo/database/profile";
import { realm } from "~/lib/mongo/init";

export default function ProfilePage() {
  const router = useRouter();
  const [profileData, setProfileDataFromDb] = useState<ProfileData | null>();

  const fetchProfileData = async () => {
    const localProfileData = await getProfileData();

    console.log({ localProfileData });

    const data: ProfileData = {
      name: "",
      dob: "",
      height: 0,
      weight: 0,
      gender: "",

      ...localProfileData,
    };

    setProfileDataFromDb(data);
  };

  useEffect(() => {
    if (!realm.currentUser) {
      void router.push("/");
    }

    void fetchProfileData();
  }, []);

  const updateData = async (data: ProfileData) => {
    try {
      await setProfileData(data);
      toast.success(`Successfully updated ${Object.keys(data).join(", ")}`);
    } catch (error) {
      console.error(error);
      toast.error(`Error while updating ${Object.keys(data).join(", ")}`);
    }
  };

  return (
    <div className="flex h-full w-full flex-1">
      <div className="grid grid-cols-12 gap-4">
        {/*  first columns for cards */}
        <div className="col-span-8 rounded-xl bg-[#1A5F7A]">
          <div className="flex h-full flex-col items-center justify-center gap-8 overflow-y-auto px-6 py-8 text-white">
            <div className="flex items-center gap-2 text-center text-2xl font-bold tracking-wide">
              Profile
            </div>

            <div className="flex h-full w-full flex-col flex-wrap items-center gap-8 overflow-y-auto px-12 text-white">
              {/* icon */}
              <IconUserCircle
                stroke={1}
                className=" h-32 w-32 font-normal text-[#27E1C1]"
              />

              {/* name */}
              <div className="flex w-full items-center gap-2 rounded-xl bg-[#1C4676] px-4 py-4">
                <div className="flex w-full items-center gap-2 ">
                  <span className="inline-block text-xl text-white">Name:</span>
                  <input
                    type="text"
                    placeholder={profileData?.name || "Name"}
                    onChange={(e) => {
                      void updateData({ name: e.currentTarget.value });
                    }}
                    className="w-full rounded-md bg-[#088395] px-4 py-2"
                  />
                </div>

                <div className="flex w-full items-center gap-2 ">
                  <span className="inline-block text-xl text-white">DoB: </span>
                  <input
                    placeholder={profileData?.dob || "DoB"}
                    type="date"
                    className="w-full rounded-md bg-[#088395] px-4 py-2 "
                    onChange={(e) => {
                      void updateData({ dob: e.currentTarget.value });
                    }}
                  />
                </div>
              </div>

              {/* bmi */}

              <BMICalculator />
            </div>
          </div>
        </div>

        <div className="col-span-4 rounded-xl bg-[#088395]">
          <HomepageSidebar secondElement={<div />} lastElement={<div></div>} />
        </div>
      </div>
    </div>
  );
}
