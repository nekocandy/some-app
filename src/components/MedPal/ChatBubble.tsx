interface ChatBubbleProps {
  message: string;
}

export default function ChatBubble({ message }: ChatBubbleProps) {
  return (
    <div className="flex w-full justify-end">
      <div className="flex w-1/4 items-end rounded-b-2xl rounded-l-2xl bg-[#1C4676] px-8 py-4">
        {message}
      </div>
    </div>
  );
}
