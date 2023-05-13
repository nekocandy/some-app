import * as tmImage from "@teachablemachine/image";
import { useEffect, useState } from "react";

interface PredictionImageProps {
  modelURL: string;
}

export default function PredictionImage({ modelURL }: PredictionImageProps) {
  const [image, setImage] = useState<File | null>(null);
  const [modelData] = useState({
    metadata: `${modelURL}metadata.json`,
    model: `${modelURL}model.json`,
  });
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
    const result = await model.predict(bitmap);

    console.log(result);
  };

  useEffect(() => {
    if (!image) return;

    console.log(image);
    void predictImage(image);
  }, [image, predictImage]);

  useEffect(() => {
    void loadModel();
  }, []);

  return (
    <div>
      <h1>Image Prediction</h1>
      <input
        type="file"
        onChange={(e) =>
          setImage(e.currentTarget.files ? e.currentTarget.files[0]! : null)
        }
      />
      <button>Predict</button>
    </div>
  );
}
