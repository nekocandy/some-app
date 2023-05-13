import * as Realm from "realm-web";
import { env } from "~/env.mjs";

const globalForRealm = globalThis as unknown as {
  realm: Realm.App | undefined;
};

export const realm =
  globalForRealm.realm ?? new Realm.App({ id: env.NEXT_PUBLIC_REALM_APP_ID });
if (env.NODE_ENV !== "production") globalForRealm.realm = realm;
