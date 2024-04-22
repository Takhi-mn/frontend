import Swal, { SweetAlertIcon } from "sweetalert2";

export const fireAlert = (
  title: string,
  text: string,
  icon: SweetAlertIcon
) => {
  Swal.fire({
    title,
    html: text,
    icon,
  });
};
