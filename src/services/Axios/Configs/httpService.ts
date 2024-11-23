import axios from "axios";
import config from "./config.json";
import Cookies from "js-cookie";

export const apiPath = config.offlinePath;

import { AxiosRequestConfig } from "axios";

const httpService = (
  url: string,
  method: string,
  data: Record<string, any> | FormData | null = null,
  ContentType: string = "application/json"
) => {
  const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6InVzZXIiLCJpYXQiOjE3MzIxNzQzODcsImV4cCI6MTg2MzU3NDM4N30.gsYz5Af_RN7IhSa9wBk14Mh91xFFBvKIQPkosfMLL1E`;

  const headers: Record<string, string | null> = {
    Authorization: token ? `Bearer ${token}` : null,
    "Content-Type": data instanceof FormData ? "multipart/form-data" : ContentType,
  };

  const sanitizedData =
    data instanceof FormData
      ? data
      : Object.fromEntries(Object.entries(data || {}).filter(([_, value]) => value !== undefined));

  const config: AxiosRequestConfig = {
    url: apiPath + "/api/v1" + url,
    method,
    headers,
    data: sanitizedData,
  };

  return axios(config);
};

export default httpService;
