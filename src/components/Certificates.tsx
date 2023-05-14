import {
  IconArrowBigUpLinesFilled,
  IconCertificate,
  IconFileDownload,
} from "@tabler/icons-react";

const certificates = [
  {
    name: "Covid19 Certificate (Dose-1)",
  },
  {
    name: "Covid19 Certificate (Dose-2)",
  },
  {
    name: "Covid19 Certificate (Booster Dose)",
  },
];

export default function Certificates(props: { uploadButton?: boolean }) {
  return (
    <div className="flex w-full flex-col rounded-2xl bg-[#134A52] text-[#C1F5A7]">
      <div className="flex items-center justify-between gap-2 px-4 py-4">
        <div className="flex gap-2 ">
          <IconCertificate color="#C1F5A7" />
          <span className="leading-wider">Certificates</span>
        </div>

        {props.uploadButton && (
          <div className="min-w-1/5 flex items-center gap-2 rounded-full">
            <input
              type="text"
              className="rounded-2xl bg-[#002B5B] px-4 py-1"
              placeholder="Name"
            />
            <IconArrowBigUpLinesFilled
              className=" cursor-pointer"
              color="#C1F5A7"
            />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4 rounded-2xl bg-[#1A5F7A] px-4 py-4">
        {certificates.map((certificate) => (
          <div
            key={certificate.name}
            className="flex items-center justify-between truncate"
          >
            {certificate.name}

            <IconFileDownload />
          </div>
        ))}
      </div>
    </div>
  );
}
