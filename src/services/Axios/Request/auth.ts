import axios from "axios";
import Cookies from "js-cookie";
import { apiPath } from "../Configs/httpService";

const API_URL = `${apiPath}/api/v1/auth`;

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

// تنظیم توکن در هدر درخواست‌ها
export const setAuthToken = (token: string | undefined) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const getMe = async (): Promise<UserData> => {
  const token = Cookies.get("token");
  if (token) {
    setAuthToken(token);
  }
  const response = await axios.get(`${API_URL}/me`);
  return response.data;
};

export const login = async (data: LoginData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, data);
    if (response.data.accessToken) {
      const token = response.data.accessToken;
      Cookies.set("token", token, { expires: 7 });
      setAuthToken(token);
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const register = async (data: RegisterData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, data);
    if (response.data.token) {
      const token = response.data.token;
      Cookies.set("token", token, { expires: 7 });
      setAuthToken(token);
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logout = () => {
  Cookies.remove("token");
  setAuthToken(undefined);
};
