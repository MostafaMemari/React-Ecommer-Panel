import httpService from "../Configs/httpService";

export const loginService = (values: any) => {
  return httpService("/auth/login", "post", {
    ...values,
  });
};

export const registerService = (values: any) => {
  return httpService("/auth/register", "post", {
    ...values,
  });
};

export const getUserService = () => {
  return httpService("/auth/me", "get");
};
