import axios, { AxiosRequestConfig, Method } from "axios";
import config from "./config.json";

export const apiPath = config.offlinePath;

const httpService = async (
  url: string,
  method: Method = "GET",
  data: Record<string, any> | FormData | null = null,
  params: Record<string, any> | null = null,
  ContentType: string = "application/json"
) => {
  // const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6InVzZXIiLCJpYXQiOjE3MzIxNzQzODcsImV4cCI6MTg2MzU3NDM4N30.gsYz5Af_RN7IhSa9wBk14Mh91xFFBvKIQPkosfMLL1E`;
  const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6InVzZXIiLCJpYXQiOjE3MzIxNzQzODcsImV4cCI6MTg2MzU3NDM4N30.gsYz5Af_RN7IhSa9wBk14Mh91xFFBvKIQPkosfMLL1E`;

  const headers: Record<string, string> = {
    Authorization: token ? `Bearer ${token}` : "",
    "Content-Type": data instanceof FormData ? "multipart/form-data" : ContentType,
  };

  const sanitizedData =
    data instanceof FormData
      ? data
      : Object.fromEntries(Object.entries(data || {}).filter(([_, value]) => value !== undefined));

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
