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

export const getCollection = (collectionName: string) => {
  const db = getDb()
// eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
return db.collection(collectionName);
};