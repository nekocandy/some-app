import { getCollection, getDb } from ".";
import { realm } from "../init";

const userId = realm.currentUser?.id;

export const getBmiFromDatabase = async (): Promise<{
  height: number;
  weight: number;
}> => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const bmiCollection = getCollection("bmi");
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
  const bmiCollection = getCollection("bmi");
  // create or update the user's height and weight
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  await bmiCollection.updateOne(
    { userId },
    { $set: { height, weight } },
    { upsert: true }
  );
};
