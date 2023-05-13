import { cn } from "~/lib/utils";

interface DisclaimerProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  message?: string;
  titleClassName?: string;
  messageClassName?: string;
}

export default function Disclaimer({
  title,
  message,
  className,
  titleClassName,
  messageClassName,
}: DisclaimerProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center justify-center gap-1 rounded-lg rounded-t-md border-t-8 border-red-600 bg-red-200 px-4 py-4",
        className
      )}
    >
      <span
        className={cn(
          "text-xl uppercase underline decoration-red-400 decoration-wavy",
          titleClassName
        )}
      >
        {" "}
        {title}
      </span>

      <span className={cn("text-center text-xs", messageClassName)}>
        {message}
      </span>
    </div>
  );
}
