import { useRouter } from "next/router";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { verifyUser } from "~/lib/mongo/auth";

export default function Verify() {
  const router = useRouter();

  const { token, tokenId } = router.query;

  const verifyAsync = async () => {
    try {
      await verifyUser(token as string, tokenId as string);
    } catch (error) {
      console.error("Error while verifying user: ", error);

      // @ts-expect-error error is a http body message
      toast.error(error.message as string);
      return;
    }

    toast.success("Verified!");
    void router.push("/");
  };

  useEffect(() => {
    if (!token || !tokenId) return;

    void verifyAsync();
  }, [token, tokenId]);

  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 flex h-screen items-center justify-center">
      Verifiying
    </div>
  );
}
