import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { receiveUserResponse } from '../redux/user/userActions';
import { getUserService } from '../services/Axios/Request/auth';
import Cookies from 'js-cookie';

export const useIsLogin = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const loginToken = Cookies.get('access_token');
    if (loginToken) {
      handleCheckLogin();
    } else {
      setIsLogin(false);
      setLoading(false);
    }
  }, []);

  const handleCheckLogin = async () => {
    try {
      const res = await getUserService();

      if (res.status === 200) {
        const user = res.data;
        user.full_name = `${user.first_name || ''} ${user.last_name || ''}`.trim();
        dispatch(receiveUserResponse(user));

        setIsLogin(true);
      } else {
        setIsLogin(false);
        Cookies.remove('access_token');
      }
    } catch (error) {
      Cookies.remove('access_token');
      setIsLogin(false);
    } finally {
      setLoading(false);
    }
  };

  return [loading, isLogin, setIsLogin];
};
