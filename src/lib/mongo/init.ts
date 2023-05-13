import * as Realm from "realm-web";
import { env } from "~/env.mjs";

const globalForPrisma = globalThis as unknown as {
  realm: Realm.App | undefined;
};

export const realm =
  globalForPrisma.realm ?? new Realm.App({ id: env.NEXT_PUBLIC_REALM_APP_ID });
if (env.NODE_ENV !== "production") globalForPrisma.realm = realm;
