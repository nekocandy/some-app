interface TestCardProps {
  name: string;
  image: string;
  id: string;
  url: string;
}

export default function TestCard({ name, image, id, url }: TestCardProps) {
  return (
    <div
      className="relative rounded-md bg-[#088395] bg-cover bg-center px-4 py-4"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="h-40 w-48"></div>
      <div className="absolute right-0 top-0 mx-2 my-2 rounded-full bg-white/20 px-6 py-1 text-xs backdrop-blur-xl">
        {id}
      </div>
      <div className="absolute bottom-0 left-0 right-0 rounded-b-md border-t-2 border-t-black text-black bg-white/20 px-4 py-4 backdrop-blur-lg">
        <div className="text-center text-xl font-bold">{name}</div>
      </div>
    </div>
  );
}
