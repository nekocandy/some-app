import { IconCertificate, IconFileDownload } from "@tabler/icons-react";

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

export default function Certificates() {
  return (
    <div className="flex w-full flex-col rounded-2xl bg-[#134A52] text-[#C1F5A7]">
      <div className="flex gap-2 px-4 py-4">
        <IconCertificate color="#C1F5A7" />
        <span className="leading-wider">Certificates</span>
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
