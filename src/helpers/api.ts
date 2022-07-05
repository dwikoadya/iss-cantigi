import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export interface IConfig {
  path: string | undefined;
  method: string;
  params?: object;
  data?: object;
  withCredential?: object
}

const API = async (props: IConfig) => {
  const {
    path, method, params, data, withCredential,
  } = props;
  const timeout = 15e3;
  const token = localStorage.getItem("access_token");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const config: any = {
    timeout,
    baseURL,
    method,
    url: path,
    params,
    withCredential,
    data,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
    },
  };
  const response = await axios(config);
  return response.data;
};

export default API;
