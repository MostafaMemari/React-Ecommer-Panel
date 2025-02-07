import axios, { AxiosRequestConfig, Method } from "axios";
import config from "./config.json";
export const apiPath = config.onlinePath;

const httpService = async (
  url: string,
  method: Method = "GET",
  data: Record<string, any> | FormData | null = null,
  params: Record<string, any> | null = null,
  ContentType: string = "application/json"
) => {
  const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

  const token = accessToken;

  const headers: Record<string, string> = {
    Authorization: token ? `Bearer ${token}` : "",
    "Content-Type": data instanceof FormData ? "multipart/form-data" : ContentType,
  };

  const sanitizedData =
    data instanceof FormData ? data : Object.fromEntries(Object.entries(data || {}).filter(([_, value]) => value !== undefined));

  const config: AxiosRequestConfig = {
    url: `${apiPath}/api/v1${url}`,
    method,
    headers,
    data: sanitizedData,
    params,
  };

  return axios(config);
};

export default httpService;
