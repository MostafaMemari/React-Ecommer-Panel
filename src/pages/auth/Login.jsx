import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from './AuthLayout';
import { Formik, Form } from 'formik';
import { loginValidationSchema } from '../../schemas/loginValidation';
import FormikControl from '../../components/Form/FormikControl';
import axios from 'axios';
import Cookies from 'js-cookie';

function Login() {
  const navigate = useNavigate();

  const handleRegister = async (values) => {
    try {
      const response = await axios.post('http://localhost:3005/api/v1/auth/login', { ...values });

      const { accessToken } = response.data;
      Cookies.set('accessToken', accessToken, { expires: 7 });

      navigate('/');
    } catch (error) {
      console.error('Error during registration:', error.message);
    }
  };
  return (
    <AuthLayout title="مانده تا ساخت اکانتتان">
      <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-right">ورود</h2>
      <div className="intro-x mt-2 text-gray-500 xl:hidden text-center">
        چند کلیک دیگر برای ورود به اکانت خود دارید. همه حساب‌های تجارت الکترونیکی خود را در یک مکان مدیریت کنید.
      </div>
      <Formik
        initialValues={{
          identifier: '',
          password: '',
        }}
        validationSchema={loginValidationSchema}
        onSubmit={handleRegister}
      >
        <Form>
          <FormikControl control="input" name="identifier" type="text" placeholder="ایمیل یا نام کاربری" />
          <FormikControl control="input" name="password" type="password" placeholder="رمز عبور" />

          <div className="intro-x flex text-gray-700 dark:text-gray-600 text-xs sm:text-sm mt-4">
            <div className="flex items-center ml-auto">
              <input id="remember-me" type="checkbox" className="form-check-input border ml-2" />
              <label className="cursor-pointer select-none" htmlFor="remember-me">
                مرا به خاطر داشته باش
              </label>
            </div>
            <a href=" ">فراموشی رمز عبور؟</a>
          </div>
          <div className="intro-x mt-5 xl:mt-8 text-right xl:text-right">
            <button className="btn btn-primary py-3 px-4 w-full xl:w-32 xl:ml-3 align-top">ورود</button>

            <Link to="/register">
              <button className="btn btn-outline-secondary py-3 px-4 w-full xl:w-32 mt-3 xl:mt-0 align-top">
                ثبت نام
              </button>
            </Link>
          </div>
        </Form>
      </Formik>

      <div className="intro-x mt-10 xl:mt-24 text-gray-700 dark:text-gray-600 text-right xl:text-right">
        با ورود شما تمامی شرایط زیر را می‌پذیرید
        <br />
        <a className="text-theme-25 dark:text-theme-22" href=" ">
          قوانین و مقررات
        </a>
        و
        <a className="text-theme-25 dark:text-theme-22" href=" ">
          حریم شخصی
        </a>
      </div>
    </AuthLayout>
  );
}

export default Login;