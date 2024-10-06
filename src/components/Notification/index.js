import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { toastConfig, alertConfig } from "./config";
import "./Notification.css";

const MySwal = withReactContent(Swal);

export const Toast = (message, type = "success", customConfig = {}) => {
  return MySwal.fire({
    ...toastConfig,
    icon: type,
    title: message,
    ...customConfig,
  });
};

export const Alert = (message, type = "warning", customConfig = {}) => {
  return MySwal.fire({
    ...alertConfig,
    icon: type,
    title: message,
    text: "This is a simple alert!",
    ...customConfig,
  });
};
