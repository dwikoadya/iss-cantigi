import API, { IConfig } from "helpers/api";
import * as URL from "constant/url-api";

const credential = {
  email: process.env.NEXT_PUBLIC_EMAIL,
  password: process.env.NEXT_PUBLIC_PASSWORD,
  withCredential: { withCredentials: true },
};

// eslint-disable-next-line import/prefer-default-export
export const login = async () => {
  try {
    const config: IConfig = {
      method: "POST",
      path: URL.LOGIN,
      data: credential,
    };
    const response = await API(config);
    return response;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return error.response;
  }
};
