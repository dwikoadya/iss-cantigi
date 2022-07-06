/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/prefer-default-export */
import API, { IConfig } from "helpers/api";
import * as URL from "constant/url-api";

export const getDataConfigs = async () => {
  try {
    const config: IConfig = {
      method: "GET",
      path: URL.CONFIGS,
      withCredential: { withCredentials: true },
      data: {
        shouldSuccess: true,
      },
    };
    const response = await API(config);
    return response;
  } catch (error: any) {
    return error.response;
  }
};
