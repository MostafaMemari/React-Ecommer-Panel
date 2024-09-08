import axios from 'axios';
import config from './config.json';
import Cookies from 'js-cookie';

export const apiPath = config.offlinePath;

const httpService = (url, method, data = null) => {
  const token = Cookies.get('access_token');
  return axios({
    url: apiPath + '/api/v1' + url,
    method,
    data,
    headers: {
      Authorization: token ? `Bearer ${token}` : null,
      'Content-Type': 'application/json',
    },
  });
};
export default httpService;
