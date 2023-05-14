import { useEffect, useRef } from "react";

interface Base64Props {
  data: string;
}

export default function Base64({ data }: Base64Props) {
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!ref) return;

    ref.current!.src = data;
  }, [data, ref]);

  return (
    <div className="flex items-center justify-center bg-[#088395]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="mx-auto h-20 w-20 py-2" ref={ref} src="" alt="image" />
    </div>
  );
}
