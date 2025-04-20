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

export const login = async (data: LoginData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, data);
    if (response.data.accessToken) {
      Cookies.set("token", response.data.accessToken, { expires: 7 }); // توکن برای 7 روز ذخیره می‌شود
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
      Cookies.set("token", response.data.token, { expires: 7 });
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logout = () => {
  Cookies.remove("token");
};
