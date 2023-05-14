import { getCollection } from ".";
import { realm } from "../init";

export const addTest = async (
  testId: string,
  imageBase64: string,
  result: { positive: number; negative: number },
  includeInReport: boolean
): Promise<string> => {
  if (!realm.currentUser) {
    throw new Error("No user logged in, and addTest function was accessed!");
  }

  const userId = realm.currentUser?.id;
  const collection = getCollection("tests");

  const insertedData = await collection.insertOne({
    userId,
    testId,
    imageBase64,
    result,
    includeInReport,
    createdAt: new Date(),
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return insertedData.insertedId;
};

interface TestData {
  testId: string;
  imageBase64: string;
  result: { positive: number; negative: number };
  includeInReport: boolean;
  createdAt: Date;
}

export const getTests = async (): Promise<TestData[]> => {
  if (!realm.currentUser) {
    throw new Error("No user logged in, and getTests function was accessed!");
  }

  const userId = realm.currentUser?.id;
  const collection = getCollection("tests");

  const tests = await collection.find({ userId });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return tests as TestData[];
};
