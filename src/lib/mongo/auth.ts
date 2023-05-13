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

export const resendConfirmationEmail = async (email: string) => {
  try {
    await realm.emailPasswordAuth.resendConfirmationEmail({ email });
    console.log("Successfully resent the confirmation email!");
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    console.log("Failed to resend the confirmation email!", error.message);
  }
};

export const verifyUser = async (token: string, tokenId: string) => {
  try {
    await realm.emailPasswordAuth.confirmUser({ token, tokenId });

    console.log("Successfully verified user!");
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    console.log("Failed to verify user in", error.message);
  }
};
