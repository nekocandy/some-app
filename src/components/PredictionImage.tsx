import { IconFidgetSpinner } from "@tabler/icons-react";
import * as tmImage from "@teachablemachine/image";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { addTest } from "~/lib/mongo/database/tests";
import { cn, toBase64 } from "~/lib/utils";
import { api } from "~/utils/api";

interface PredictionImageProps {
  data: {
    id: string;
    name: string;
    image: string;
    url: string;
  };
}

export default function PredictionImage({ data }: PredictionImageProps) {
  const [image, setImage] = useState<File | null>(null);
  const [modelData] = useState({
    metadata: `${data.url}metadata.json`,
    model: `${data.url}model.json`,
  });

  const [result, setResult] = useState<{
    positive: number;
    negative: number;
  } | null>(null);

  const uploadImage = async () => {
    if (!image || !result) return;

    const base64: string = (await toBase64(image)) as string;

    const insertedId = await addTest(data.id, base64, result, false);

    toast.success(`Uploaded insertedId: ${insertedId}`);
  };

  const loadModel = async () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const model = await tmImage.load(modelData.model, modelData.metadata);

    console.log("model loaded", model);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return model;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const predictImage = async (image: File) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const model = await loadModel();
    const bitmap = await createImageBitmap(image);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const modelResult = await model.predict(bitmap);

    console.log(modelResult);

    const toUpdate = {
      positive: 0,
      negative: 0,
    };

    modelResult.map((r) => {
      if (r.className.toLowerCase().includes("positive")) {
        toUpdate.positive += r.probability * 100;
      } else {
        toUpdate.negative += r.probability * 100;
      }
    });

    setResult(toUpdate);
    console.log(modelResult);
    void uploadImage();
  };

  useEffect(() => {
    if (!image) return;

    console.log(image);
    void predictImage(image);
  }, [image]);

  return (
    <div className="flex w-full flex-col gap-8 px-24 ">
      <div className="flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-black  bg-[#088395] px-8 py-4">
        <span className="text-center text-2xl font-bold uppercase text-white">
          {data.name}
        </span>

        <div
          className="flex h-64 w-64 items-center justify-center rounded-md border-2 border-black bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${image ? URL.createObjectURL(image) : ""})`,
          }}
        >
          <input
            className={cn(image && "hidden")}
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.currentTarget.files?.[0] || null)}
          />
        </div>
      </div>

      {/* prediction */}
      <div className="relative flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-black  bg-[#088395] px-8 py-4">
        {/* <span className="text-center text-2xl font-bold uppercase text-white">
          Results
        </span> */}

        <div
          className={clsx(
            result === null ? "block" : "hidden",
            "absolute bottom-0 left-0 right-0 top-0",
            "z-10 h-full w-full rounded-xl",
            "bg-gray-400/50 backdrop-blur-sm backdrop-filter",
            "flex items-center justify-center"
          )}
        >
          <IconFidgetSpinner className="animate-spin" />
        </div>

        <div className="flex w-full flex-col items-start justify-center gap-4 px-20 text-white">
          <div className="flex w-full gap-2">
            <span className="inline-block pl-2.5 font-bold">Positive:</span>
            <div className="relative w-full rounded-sm border border-black bg-transparent">
              <div
                className="absolute bottom-0 left-0 right-0 top-0 rounded-sm bg-red-600"
                style={{
                  width: `${result?.positive || 0}%`,
                }}
              ></div>
            </div>
          </div>

          <div className="flex w-full gap-2">
            <span className="font-bold">Negative: </span>
            <div className="relative w-full rounded-sm border border-black bg-transparent">
              <div
                className="absolute bottom-0 left-0 right-0 top-0 rounded-sm bg-lime-600"
                style={{
                  width: `${result?.negative || 0}%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* include in report button */}
      <div className="flex w-full items-center justify-center">
        <button className="rounded-lg border border-black bg-[#F5F3C1] bg-opacity-100 px-8 py-3 hover:bg-opacity-70">
          Include in Report
        </button>
      </div>
    </div>
  );
}
