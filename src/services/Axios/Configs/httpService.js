import axios from 'axios';
import config from './config.json';
import Cookies from 'js-cookie';

export const apiPath = config.onlinePath;

const httpService = (url, method, data = null, ContentType = 'application/json') => {
  const token = Cookies.get('access_token');
  return axios({
    url: apiPath + '/api/v1' + url,
    method,
    data,
    headers: {
      Authorization: token ? `Bearer ${token}` : null,
      'Content-Type': ContentType,
    },
  });
};
export default httpService;
