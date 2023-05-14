import {
  IconCheck,
  IconClock,
  IconClock2,
  IconLocation,
} from "@tabler/icons-react";
import { format } from "date-fns";

interface ChatBubbleProps {
  message: string;
  date: string;
  location: string;
}

export default function AppointmentCard({
  message,
  date,
  location,
}: ChatBubbleProps) {
  return (
    <div className="flex w-full justify-start">
      <div className="flex w-3/4 flex-col items-center justify-center gap-4 rounded-r-2xl rounded-t-2xl bg-[#1C4676] px-8 py-4">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-green-400/40 p-1">
            <IconCheck />
          </div>{" "}
          Appointment Scheduled
        </div>

        <div className="flex flex-col items-center justify-center gap-1">
          <div className="flex items-center gap-2 text-xs">
            <IconClock className="h-5 w-5" />
            {format(new Date(date), "dd-MMM-yyyy hh:mm a")}
          </div>

          <div className="flex items-center gap-2 text-xs">
            <IconLocation className="h-5 w-5" />
            {location}
          </div>
        </div>

        <div className="rounded-full bg-white/40 px-4 py-1 text-xs text-black">
          {message}
        </div>
      </div>
    </div>
  );
}
