import * as Yup from 'yup';

export const loginValidationSchema = Yup.object().shape({
  identifier: Yup.string()
    .required('این فیلد نباید خالی باشد')
    .test('is-valid-identifier', 'لطفاً یک نام کاربری یا ایمیل معتبر وارد کنید', function (value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const usernameRegex = /^[a-zA-Z0-9_]+$/;

      return emailRegex.test(value) || usernameRegex.test(value);
    }),

  password: Yup.string().required('این فیلد نباید خالی باشد'),
});
