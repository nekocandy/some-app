import * as Realm from "realm-web";
import { realm } from "./init";

export const loginUser = async (email: string, password: string) => {
  await realm.logIn(Realm.Credentials.emailPassword(email, password));
  return 1;
};

export const createUser = async (email: string, password: string) => {
  await realm.emailPasswordAuth.registerUser({ email, password });
  return 1;
};

export const resendConfirmationEmail = async (email: string) => {
  await realm.emailPasswordAuth.resendConfirmationEmail({ email });
  console.log("Successfully resent the confirmation email!");
};

export const verifyUser = async (token: string, tokenId: string) => {
  await realm.emailPasswordAuth.confirmUser({ token, tokenId });

  console.log("Successfully verified user!");
};
