import { realm } from "../init";

export const getDb = () => {
  if (!realm.currentUser) {
    throw new Error("No user logged in, and BMI functions were accessed!");
  }

  const client = realm.currentUser?.mongoClient("mongodb-atlas");

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
  const db = client?.db("medimate")!;

  return db;
};
