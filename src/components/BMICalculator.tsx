import { useEffect, useState } from "react";

export default function BMICalculator() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBMI] = useState(0);

  useEffect(() => {
    if (!height || !weight) {
      setBMI(0);
      return;
    }

    const heightsInMeter = height / 100;
    const calculatedBMI = weight / (heightsInMeter * heightsInMeter);
    setBMI(parseFloat(calculatedBMI.toFixed(2)));
  }, [height, weight]);

  return (
    <div className="flex w-full flex-col items-center gap-4 rounded-lg border-4 border-[#002B5B] bg-[#05BFDB] px-4 py-4">
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
