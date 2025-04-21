import { useState } from "react";
import DarkModeSwitcher from "../../../components/DarkModeSwitcher";
import MainColorSwitcher from "../../../components/MainColorSwitcher";
import logoUrl from "../../../assets/images/logo.svg";
import illustrationUrl from "../../../assets/images/illustration.svg";
import { FormInput, FormCheck } from "../../../base-components/Form";
import Button from "../../../base-components/Button";
import clsx from "clsx";
import { register } from "../../../services/Axios/Request/auth";
import { Toast } from "../../../base-components/Toast";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    confirm_password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirm_password) {
      Toast("رمز عبور و تکرار آن یکسان نیستند", "error");
      return;
    }
    setLoading(true);
    try {
      await register(formData);
      Toast("ثبت نام با موفقیت انجام شد", "success");
      navigate("/");
    } catch (error: any) {
      Toast(error.response?.data?.message || "خطا در ثبت نام", "error");
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
            {/* BEGIN: Register Form */}
            <div className="flex h-screen py-5 my-10 xl:h-auto xl:py-0 xl:my-0">
              <div className="w-full px-5 py-8 mx-auto my-auto bg-white rounded-md shadow-md xl:ml-20 dark:bg-darkmode-600 xl:bg-transparent sm:px-8 xl:p-0 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto">
                <h2 className="text-2xl font-bold text-center intro-x xl:text-3xl xl:text-right">ثبت نام</h2>
                <div className="mt-2 text-center intro-x text-slate-400 dark:text-slate-400 xl:hidden">
                  چند کلیک تا ساخت حساب کاربری شما باقی مانده است. مدیریت تمام حساب‌های تجارت الکترونیک شما در یک مکان
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mt-8 intro-x">
                    <FormInput
                      type="text"
                      name="first_name"
                      className="block px-4 py-3 text-right intro-x min-w-full xl:min-w-[350px]"
                      placeholder="نام"
                      value={formData.first_name}
                      onChange={handleChange}
                    />
                    <FormInput
                      type="text"
                      name="last_name"
                      className="block px-4 py-3 mt-4 text-right intro-x min-w-full xl:min-w-[350px]"
                      placeholder="نام خانوادگی"
                      value={formData.last_name}
                      onChange={handleChange}
                    />
                    <FormInput
                      type="text"
                      name="username"
                      className="block px-4 py-3 mt-4 text-right intro-x min-w-full xl:min-w-[350px]"
                      placeholder="نام کاربری"
                      value={formData.username}
                      onChange={handleChange}
                    />
                    <FormInput
                      type="email"
                      name="email"
                      className="block px-4 py-3 mt-4 text-right intro-x min-w-full xl:min-w-[350px]"
                      placeholder="ایمیل"
                      value={formData.email}
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
                    <div className="grid w-full h-1 grid-cols-12 gap-4 mt-3 intro-x">
                      <div className="h-full col-span-3 rounded bg-success"></div>
                      <div className="h-full col-span-3 rounded bg-success"></div>
                      <div className="h-full col-span-3 rounded bg-success"></div>
                      <div className="h-full col-span-3 rounded bg-slate-100 dark:bg-darkmode-800"></div>
                    </div>
                    <a href="" className="block mt-2 text-xs intro-x text-slate-500 sm:text-sm">
                      رمز عبور ایمن چیست؟
                    </a>
                    <FormInput
                      type="password"
                      name="confirm_password"
                      className="block px-4 py-3 mt-4 text-right intro-x min-w-full xl:min-w-[350px]"
                      placeholder="تکرار رمز عبور"
                      value={formData.confirm_password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex items-center mt-4 text-xs intro-x text-slate-600 dark:text-slate-500 sm:text-sm">
                    <FormCheck.Input id="remember-me" type="checkbox" className="ml-2 border" />
                    <label className="cursor-pointer select-none" htmlFor="remember-me">
                      من با
                    </label>
                    <a className="mr-1 text-primary dark:text-slate-200" href="">
                      قوانین و مقررات
                    </a>
                    موافقم.
                  </div>
                  <div className="mt-5 text-center intro-x xl:mt-8 xl:text-right">
                    <Button variant="primary" className="w-full px-4 py-3 align-top xl:w-32 xl:ml-3" disabled={loading} type="submit">
                      {loading ? "در حال ثبت نام..." : "ثبت نام"}
                    </Button>
                    <Button
                      variant="outline-secondary"
                      className="w-full px-4 py-3 mt-3 align-top xl:w-32 xl:mt-0"
                      onClick={() => navigate("/login")}
                    >
                      ورود
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            {/* END: Register Form */}
            {/* BEGIN: Register Info */}
            <div className="flex-col hidden min-h-screen xl:flex"></div>
            {/* END: Register Info */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
