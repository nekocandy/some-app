import { IconSend } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Disclaimer from "~/components/HealthStatus/Disclaimer";
import HomepageSidebar from "~/components/HompageSidebar";
import AppointmentCard from "~/components/MedPal/AppointmentCard";
import ChatBubble from "~/components/MedPal/ChatBubble";
import { getTests } from "~/lib/mongo/database/tests";
import { api } from "~/utils/api";

interface TestData {
  testId: string;
  imageBase64: string;
  result: { positive: number; negative: number };
  includeInReport: boolean;
  createdAt: Date;
}

export default function History() {
  const [message, setMessage] = useState<string>("");
  const [testData, setTestData] = useState<TestData[]>([]);
  const [messages, setMessages] = useState<JSX.Element[]>([]);

  const getResponseMutation = api.conversation.message.useMutation();

  const getDataFromDatabase = async () => {
    const data = await getTests();
    if (!data) return;
  };

  useEffect(() => {
    void getDataFromDatabase();
  }, []);

  const getResponse = async () => {
    if (!message) return;

    setMessages((prev) => [
      ...prev,
      <ChatBubble key={prev.length} message={message} />,
    ]);

    const response = await getResponseMutation.mutateAsync({ message });
    if (!response) {
      toast.error("Error while getting response");
      return;
    }

    setMessages((prev) => [
      ...prev,
      <AppointmentCard
        key={prev.length}
        message={message}
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        date={response.values.time}
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        location={response.values.location}
      />,
    ]);

    setMessage("");
  };

  return (
    <div className="flex h-full w-full flex-1">
      <div className="grid grid-cols-12 gap-4">
        {/*  first columns for cards */}
        <div className="col-span-8 rounded-xl bg-[#1A5F7A]">
          <div className="flex h-full flex-col items-center justify-center gap-8 overflow-y-auto px-6 py-8 text-white">
            <div className="flex items-center gap-2 text-center text-2xl font-bold tracking-wide">
              MedPal
            </div>

            <div className="flex h-full w-full flex-col justify-between gap-4 rounded-2xl bg-[#088395]">
              <div className="flex flex-col gap-4 px-8 py-2">{messages}</div>

              <div className="flex gap-2 px-4 py-4">
                <input
                  className="w-full rounded-full bg-[#1C4676] px-4 py-2"
                  placeholder="Send message"
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.currentTarget.value)}
                  onKeyUp={(e) => setMessage(e.currentTarget.value)}
                  onKeyDown={(e) => setMessage(e.currentTarget.value)}
                />
                <button
                  onClick={() => void getResponse()}
                  className="rounded-full bg-[#1C4676] p-4"
                >
                  <IconSend />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-4 rounded-xl bg-[#088395]">
          <HomepageSidebar
            lastElement={
              <Disclaimer
                className="font-bold"
                title="Disclaimer"
                message=" Our model is trained on a certain limited amount of data, for further treatment, refer to a healthcare professional"
                messageClassName="font-semibold"
              />
            }
          />
        </div>
      </div>
    </div>
  );
}
