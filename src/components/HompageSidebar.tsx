import BMICalculator from "./BMICalculator";
import Certificates from "./Certificates";

interface HomepageSidebarProps {
  secondElement?: JSX.Element;
  lastElement?: JSX.Element;
}

export default function HomepageSidebar(props: HomepageSidebarProps) {
  return (
    <div className="flex h-full w-full flex-col items-center gap-6 px-6 pt-20">
      <div className="flex w-full flex-col rounded-xl bg-[#134a52]">
        <div className="flex w-full items-center justify-center gap-4 rounded-lg bg-[#57c5b6] py-8 text-black">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/pfp.png"
              className="h-20 w-20 rounded-full border-4 border-[#002B5B]"
              alt="pfp"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-2xl font-medium">Ei, Raiden Shogun</span>
            <span className="text-xs">
              <span className="font-medium">Age:</span> 20
              <span>F</span>
            </span>
          </div>
        </div>

        <div className="px-4 py-2 text-center text-[#C1F5A7]">
          Not under any Diagnosis
        </div>
      </div>

      {/* bmi */}
      {props.secondElement || <BMICalculator />}

      {/* certificates */}
      {props.lastElement || <Certificates />}
    </div>
  );
}
