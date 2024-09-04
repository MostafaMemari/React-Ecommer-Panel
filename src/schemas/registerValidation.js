import * as Yup from 'yup';
import zxcvbn from 'zxcvbn';

export const registerValidationSchema = (setPasswordStrength) =>
  Yup.object().shape({
    first_name: Yup.string()
      .min(2, 'نام نباید کمتر از 2 کاراکتر باشد')
      .max(50, 'نام نباید کمتر از 50 کاراکتر باشد')
      .required('این فیلد نباید خالی باشد'),

    last_name: Yup.string()
      .min(2, 'نام خانوادگی نباید کمتر از 2 کاراکتر باشد')
      .max(50, 'نام نباید کمتر از 50 کاراکتر باشد')
      .required('این فیلد نباید خالی باشد'),

    username: Yup.string()
      .matches(/^[a-zA-Z0-9_]+$/)
      .required('این فیلد نباید خالی باشد'),

    email: Yup.string().email('ایمیل وارد شده معتبر نمی باشد').required('این فیلد نباید خالی باشد'),

    password: Yup.string()
      .required('این فیلد نباید خالی باشد')
      .test('strength', 'پسورد ضعیف است', (value) => {
        const strength = zxcvbn(value || '').score;
        setPasswordStrength(strength);
        return strength >= 2;
      }),

    confirm_password: Yup.string()
      .oneOf([Yup.ref('password'), null], 'تایید رمز عبور معتبر نمی باشد')
      .required('این فیلد نباید خالی باشد'),
  });
