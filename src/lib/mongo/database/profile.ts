import { getCollection } from ".";
import { realm } from "../init";

export interface ProfileData {
  name?: string;
  dob?: string;
  height?: number;
  weight?: number;
  gender?: string;
}

export const setProfileData = async (data: ProfileData) => {
  const profileCollection = getCollection("profile");

  const userId = realm.currentUser?.id;

  await profileCollection.updateOne(
    { userId },
    { $set: { data } },
    { upsert: true }
  );
};

export const getProfileData = async (): Promise<ProfileData> => {
  const profileCollection = getCollection("profile");

  const userId = realm.currentUser?.id;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const profile = await profileCollection.findOne({ userId });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
  return profile?.data ?? {};
};
