import Swal from "sweetalert2";

export const toastConfig = {
  toast: true,
  position: "top",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
};

export const alertConfig = {
  icon: "warning",
  showConfirmButton: true,
  confirmButtonText: "OK",
  buttonsStyling: true,
  customClass: {
    popup: "swal2-popup",
    confirmButton: "swal2-confirm-button",
  },
};
