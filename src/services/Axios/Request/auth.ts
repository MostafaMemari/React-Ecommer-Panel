import Cookies from "js-cookie";
import httpService, { apiPath } from "../Configs/httpService";
import { AxiosResponse } from "axios";

const API_URL = `/auth`;

interface LoginData {
  identifier: string;
  password: string;
}

interface RegisterData {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  confirm_password: string;
}

interface UserData {
  id: number;
  username: string;
  role: string;
}

export interface LoginResponse {
  id: number;
  accessToken: string;
  refreshToken: string;
}

export const getMe = async (): Promise<UserData> => {
  const response = await httpService.get(`${API_URL}/me`);
  return response.data;
};

export const login = async (data: LoginData) => {
  try {
    const response = await httpService.post(`${API_URL}/login`, data);

    if (response.data.accessToken) {
      Cookies.set("token", response.data.accessToken);
      Cookies.set("refreshToken", response.data.refreshToken);
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const register = async (data: RegisterData) => {
  try {
    const response = await httpService.post(`${API_URL}/register`, data);
    if (response.data.accessToken) {
      Cookies.set("token", response.data.accessToken);
      Cookies.set("refreshToken", response.data.refreshToken);
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  const response = await httpService.post(`${API_URL}/logout`);
  if (response.status === 200) {
    Cookies.remove("token");
    Cookies.remove("refreshToken");
    window.location.href = "/login";
  }
};
