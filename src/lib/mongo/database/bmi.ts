import { getDb } from ".";
import { realm } from "../init";

const userId = realm.currentUser?.id;

const getCollection = () => {
    const db = getDb()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  return db.collection("bmi");
};

export const getBmiFromDatabase = async (): Promise<{
  height: number;
  weight: number;
}> => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const bmiCollection = getCollection();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  const bmi = await bmiCollection.findOne({ userId });

  if (!bmi) {
    return {
      height: 0,
      weight: 0,
    };
  }

  return {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    height: bmi?.height ?? 0,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    weight: bmi?.weight ?? 0,
  };
};

export const setBmiToDatabase = async (height: number, weight: number) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const bmiCollection = getCollection();
  // create or update the user's height and weight
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  await bmiCollection.updateOne(
    { userId },
    { $set: { height, weight } },
    { upsert: true }
  );
};
