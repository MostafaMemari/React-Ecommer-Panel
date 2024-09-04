import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import Cookies from 'js-cookie';
import AuthLayout from './AuthLayout';
import FormikControl from '../../components/Form/FormikControl';
import PasswordStrengthBar from '../../components/Form/PasswordStrengthBar';
import { registerValidationSchema } from '../../schemas/registerValidation';
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function Register() {
  const [passwordStrength, setPasswordStrength] = useState(0);
  const navigate = useNavigate();

  const handleRegister = async (values) => {
    try {
      const response = await axios.post('http://localhost:3005/api/v1/auth/register', { ...values });

      const { accessToken } = response.data;
      Cookies.set('accessToken', accessToken, { expires: 7 });

      navigate('/');
    } catch (error) {
      console.error('Error during registration:', error.message);
    }
  };

  return (
    <AuthLayout title="ساخت اکانت تان">
      <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-right">ثبت نام</h2>
      <div className="intro-x mt-2 text-gray-500 xl:hidden text-center">
        چند کلیک دیگر برای ورود به اکانت خود دارید. همه حساب‌های تجارت الکترونیکی خود را در یک مکان مدیریت کنید.
      </div>

      <Formik
        initialValues={{
          first_name: '',
          last_name: '',
          username: '',
          email: '',
          password: '',
          confirm_password: '',
        }}
        validationSchema={registerValidationSchema(setPasswordStrength)}
        onSubmit={handleRegister}
      >
        <Form>
          <div className="intro-x mt-8">
            <FormikControl control="input" name="first_name" type="text" placeholder="نام" />
            <FormikControl control="input" name="last_name" type="text" placeholder="نام خانوادگی" />
            <FormikControl control="input" name="username" type="text" placeholder="نام کاربری" />
            <FormikControl control="input" name="email" type="email" placeholder="ایمیل" />
            <FormikControl control="input" name="password" type="password" placeholder="رمز عبور" />
            <PasswordStrengthBar passwordStrength={passwordStrength} />
            <FormikControl control="input" name="confirm_password" type="password" placeholder="تایید رمز عبور" />
          </div>
          <div className="intro-x flex items-center text-gray-700 dark:text-gray-600 mt-4 text-xs sm:text-sm">
            <input id="remember-me" type="checkbox" className="form-check-input border ml-2" />
            <label className="cursor-pointer select-none" htmlFor="remember-me">
              موافقت با
            </label>
            <a className="text-theme-25 dark:text-theme-22 mr-1" href=" ">
              حریم شخصی
            </a>
            .
          </div>
          <div className="intro-x mt-5 xl:mt-8 text-center xl:text-right">
            <button className="btn btn-primary py-3 px-4 w-full xl:w-32 xl:ml-3 align-top">ثبت نام</button>
            <Link to="/login">
              <button className="btn btn-outline-secondary py-3 px-4 w-full xl:w-32 mt-3 xl:mt-0 align-top">
                ورود
              </button>
            </Link>
          </div>
        </Form>
      </Formik>
    </AuthLayout>
  );
}

export default Register;
