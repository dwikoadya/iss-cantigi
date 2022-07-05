/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-explicit-any */
import API, { IConfig } from "helpers/api";
import * as URL from "constant/url-api";

export const getDataBanners = async () => {
  try {
    const config: IConfig = {
      method: "GET",
      path: URL.BANNERS,
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
