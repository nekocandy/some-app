/* eslint-disable react-hooks/exhaustive-deps */
import { IconFidgetSpinner } from "@tabler/icons-react";
import clsx from "clsx";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getBmiFromDatabase, setBmiToDatabase } from "~/lib/mongo/database/bmi";
import { realm } from "~/lib/mongo/init";

export default function BMICalculator() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBMI] = useState(0);

  async function getBmi() {
    const bmiData = await getBmiFromDatabase();
    if (!bmiData) {
      setLoading(false);
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setHeight(bmiData.height);
    setWeight(bmiData.weight);

    setLoading(false);
  }

  useEffect(() => {
    if (!realm.currentUser) {
      void router.push("/");
    }

    void getBmi();
  }, []);

  useEffect(() => {
    if (!height || !weight) {
      setBMI(0);
      return;
    }

    const heightsInMeter = height / 100;
    const calculatedBMI = weight / (heightsInMeter * heightsInMeter);
    setBMI(parseFloat(calculatedBMI.toFixed(2)));

    void setBmiToDatabase(height, weight);
  }, [height, weight]);

  return (
    <div className="relative flex w-full flex-col items-center gap-4 rounded-lg border-4 border-[#002B5B] bg-[#05BFDB] px-4 py-4">
      <div
        className={clsx(
          "absolute bottom-0 left-0 right-0 top-0 h-full w-full rounded-lg",
          !loading && "hidden",
          "bg-gray-500/30 backdrop-blur-sm",
          "flex items-center justify-center"
        )}
      >
        <IconFidgetSpinner className="h-12 w-12 animate-spin text-gray-700 duration-1000" />
      </div>
      <span className="text-lg font-semibold">Body Mass Index</span>
      <div className="flex gap-8 px-6">
        <input
          type="number"
          value={height === 0 ? "" : height}
          onChange={(e) => setHeight(parseInt(e.currentTarget.value))}
          onKeyUp={(e) => setHeight(parseInt(e.currentTarget.value))}
          onKeyDown={(e) => setHeight(parseInt(e.currentTarget.value))}
          className="w-1/2 rounded-full px-4 py-2 text-center"
          placeholder="Enter H"
        />
        <input
          type="number"
          value={weight === 0 ? "" : weight}
          onChange={(e) => setWeight(parseInt(e.currentTarget.value))}
          onKeyUp={(e) => setWeight(parseInt(e.currentTarget.value))}
          onKeyDown={(e) => setWeight(parseInt(e.currentTarget.value))}
          className="w-1/2 rounded-full px-4 py-2 text-center"
          placeholder="Enter W"
        />
      </div>

      <div>
        <span className="text-lg font-semibold">BMI: {bmi}</span>
      </div>
    </div>
  );
}
