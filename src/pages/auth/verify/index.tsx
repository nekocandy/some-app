import { useRouter } from "next/router";
import { useEffect } from "react";
import { verifyUser } from "~/lib/mongo/auth";

export default function Verify() {
  const router = useRouter();

  const { token, tokenId } = router.query;

  useEffect(() => {
    if (!token || !tokenId) return;

    void verifyUser(token as string, tokenId as string);
  }, [token, tokenId]);

  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 flex h-screen items-center justify-center">
      Verifiying
    </div>
  );
}
