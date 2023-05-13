import { type NextPage } from "next";
import { useEffect, useState } from "react";
import { realm } from "~/lib/mongo/init";

const Home: NextPage = () => {
  const [mode, setMode] = useState<"Login" | "Register">("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log("current user", realm.currentUser);
  }, []);

  const toggleMode = () => {
    setEmail("");
    setPassword("");
    setMode(mode === "Login" ? "Register" : "Login");
  };

  return (
    <div className="flex h-full w-full items-center justify-center gap-4">
      <div className="flex flex-col gap-8 rounded-md bg-[#57C5B6] px-16 py-4">
        <span className="text-center text-2xl font-extrabold uppercase tracking-wide text-[#F5F3C1]">
          {mode}
        </span>

        <div className="flex flex-col gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            onKeyUp={(e) => setEmail(e.currentTarget.value)}
            onKeyDown={(e) => setEmail(e.currentTarget.value)}
            className="rounded-md bg-[#D5FBF6] px-6 py-2"
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            onKeyUp={(e) => setPassword(e.currentTarget.value)}
            onKeyDown={(e) => setPassword(e.currentTarget.value)}
            className="rounded-md bg-[#D5FBF6] px-6 py-2"
            placeholder="Password"
          />
        </div>

        <div className="flex rounded-md border">
          <button
            className="w-full rounded-l-md border-r bg-yellow-500 py-4"
            onClick={toggleMode}
          >
            {mode === "Login" ? "Register" : "Login"}
          </button>

          <button className="w-full rounded-r-md bg-[#159895] py-4">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
