import { useState } from "react";
import DarkModeSwitcher from "../../components/DarkModeSwitcher";
import MainColorSwitcher from "../../components/MainColorSwitcher";
import logoUrl from "../../assets/images/logo.svg";
import illustrationUrl from "../../assets/images/illustration.svg";
import { FormInput, FormCheck } from "../../base-components/Form";
import Button from "../../base-components/Button";
import clsx from "clsx";
import { login } from "../../services/Axios/Request/auth";
import { Toast } from "../../base-components/Toast";
import { useNavigate, useLocation } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(formData);
      Toast("ورود با موفقیت انجام شد", "success");
      const from = (location.state as any)?.from || "/";
      navigate(from);
    } catch (error: any) {
      Toast(error.response?.data?.message || "خطا در ورود به سیستم", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div
        className={clsx([
          "-m-3 sm:-mx-8 p-3 sm:px-8 relative h-screen lg:overflow-hidden bg-primary xl:bg-white dark:bg-darkmode-800 xl:dark:bg-darkmode-600",
          "before:hidden before:xl:block before:content-[''] before:w-[57%] before:-mt-[28%] before:-mb-[16%] before:-ml-[13%] before:absolute before:inset-y-0 before:left-0 before:transform before:rotate-[-4.5deg] before:bg-primary/20 before:rounded-[100%] before:dark:bg-darkmode-400",
          "after:hidden after:xl:block after:content-[''] after:w-[57%] after:-mt-[20%] after:-mb-[13%] after:-ml-[13%] after:absolute after:inset-y-0 after:left-0 after:transform after:rotate-[-4.5deg] after:bg-primary after:rounded-[100%] after:dark:bg-darkmode-700",
        ])}
      >
        <DarkModeSwitcher />
        <MainColorSwitcher />
        <div className="container relative z-10 sm:px-10">
          <div className="block grid-cols-2 gap-4 xl:grid">
            {/* BEGIN: Login Form */}
            <div className="flex h-screen py-5 my-10 xl:h-auto xl:py-0 xl:my-0">
              <div className="w-full px-5 py-8 mx-auto my-auto bg-white rounded-md shadow-md xl:ml-20 dark:bg-darkmode-600 xl:bg-transparent sm:px-8 xl:p-0 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto">
                <h2 className="text-2xl font-bold text-center intro-x xl:text-3xl xl:text-right">ورود به سیستم</h2>
                <div className="mt-2 text-center intro-x text-slate-400 xl:hidden">
                  چند کلیک تا ورود به حساب کاربری شما باقی مانده است. مدیریت تمام حساب‌های تجارت الکترونیک شما در یک مکان
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mt-8 intro-x">
                    <FormInput
                      type="text"
                      name="identifier"
                      className="block px-4 py-3 text-right intro-x min-w-full xl:min-w-[350px]"
                      placeholder="ایمیل یا نام کاربری"
                      value={formData.identifier}
                      onChange={handleChange}
                    />
                    <FormInput
                      type="password"
                      name="password"
                      className="block px-4 py-3 mt-4 text-right intro-x min-w-full xl:min-w-[350px]"
                      placeholder="رمز عبور"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex mt-4 text-xs intro-x text-slate-600 dark:text-slate-500 sm:text-sm">
                    <div className="flex items-center ml-auto">
                      <FormCheck.Input id="remember-me" type="checkbox" className="ml-2 border" />
                      <label className="cursor-pointer select-none" htmlFor="remember-me">
                        مرا به خاطر بسپار
                      </label>
                    </div>
                    <a href="" className="ml-auto">
                      فراموشی رمز عبور؟
                    </a>
                  </div>
                  <div className="mt-5 text-center intro-x xl:mt-8 xl:text-right">
                    <Button variant="primary" className="w-full px-4 py-3 align-top xl:w-32 xl:ml-3" disabled={loading} type="submit">
                      {loading ? "در حال ورود..." : "ورود"}
                    </Button>
                    <Button
                      variant="outline-secondary"
                      className="w-full px-4 py-3 mt-3 align-top xl:w-32 xl:mt-0"
                      onClick={() => navigate("/register")}
                    >
                      ثبت نام
                    </Button>
                  </div>
                </form>
                <div className="mt-10 text-center intro-x xl:mt-24 text-slate-600 dark:text-slate-500 xl:text-right">
                  با ورود به سیستم، شما{" "}
                  <a className="text-primary dark:text-slate-200" href="">
                    قوانین و مقررات
                  </a>{" "}
                  و{" "}
                  <a className="text-primary dark:text-slate-200" href="">
                    حریم خصوصی
                  </a>{" "}
                  ما را می‌پذیرید
                </div>
              </div>
            </div>
            {/* END: Login Form */}
            {/* BEGIN: Login Info */}
            <div className="flex-col hidden min-h-screen xl:flex"></div>
            {/* END: Login Info */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
