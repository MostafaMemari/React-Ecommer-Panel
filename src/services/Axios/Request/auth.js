import httpService from '../Configs/httpService';

export const loginService = (values) => {
  return httpService('/auth/login', 'post', {
    ...values,
  });
};

export const registerService = (values) => {
  return httpService('/auth/register', 'post', {
    ...values,
  });
};

export const getUserService = () => {
  return httpService('/auth/me', 'get');
};
