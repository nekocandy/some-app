import { realm } from "./init";

export const createUser = async (email: string, password: string) => {
  try {
    await realm.emailPasswordAuth.registerUser({ email, password });
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    console.log("Failed to log in", error.message);
  }
};
