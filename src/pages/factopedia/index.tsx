import HomepageSidebar from "~/components/HompageSidebar";

export default function Factopedia() {
  return (
    <div className="flex h-full w-full flex-1">
      <div className="grid grid-cols-12 gap-4">
        {/*  first columns for cards */}
        <div className="col-span-8 rounded-xl bg-[#1A5F7A]">
          <div className="flex h-full flex-col items-center gap-8 px-6 py-8 text-white">
            <div className="flex w-full items-center justify-between gap-2 text-center font-bold tracking-wide">
              <div className="text-2xl">Factopedia</div>

              <div>
                <button className="text-md rounded-md bg-teal-400 px-8 py-1 font-normal text-black">
                  Submit
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {[
                {
                  description: "Brush your teeth twice everyday",
                  image: "/factopedia/2.png",
                },
                {
                  description: "Wash your hands regularly",
                  image: "/factopedia/1.png",
                },
                {
                  description: "Clean in between your nails",
                  image: "/factopedia/3.png",
                },
              ].map((facts) => (
                <div
                  key={facts.image}
                  className="relative h-48 w-full rounded-xl bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${facts.image}')`,
                  }}
                >
                  <div className="absolute bottom-0 left-0 right-0 rounded-b-xl bg-white/50 px-4 py-2 backdrop-blur-sm">
                    <div className="text-center text-sm text-black">
                      {facts.description}
                    </div>
                  </div>
                </div>
              ))}

              <div className="col-span-3 flex py-8 w-full items-center justify-center rounded-xl border-2 border-black bg-[#0B7768] px-24 text-center">
                A lot of diseases and infections can be prevented if we simply
                follow basic hygiene routines and tips. This is just a gentle
                reminder that immunity of your body is capable enough to fight
                back anything as long as best practices are followed.
              </div>

              {[
                {
                  description: "Don’t consume expire medicine",
                  image: "/factopedia/4.png",
                },
                {
                  description: "Eat a balanced diet.",
                  image: "/factopedia/5.png",
                },
                {
                  description:
                    "Avoid touching your face, eyes and nose frequently",
                  image: "/factopedia/6.png",
                },
              ].map((facts) => (
                <div
                  key={facts.image}
                  className="relative h-48 w-full rounded-xl bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${facts.image}')`,
                  }}
                >
                  <div className="absolute bottom-0 left-0 right-0 rounded-b-xl bg-white/50 px-4 py-2 backdrop-blur-sm">
                    <div className="text-center text-sm text-black">
                      {facts.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-4 rounded-xl bg-[#088395]">
          <HomepageSidebar />
        </div>
      </div>
    </div>
  );
}
