import axios, { AxiosError } from "axios";
import { fireAlert } from "./fireAlert";

export const emailSubscribe = async (email: string) => {
  try {
    const { data } = await axios.post(
      "https://www.web-cms.uz.mn/api/13238433-f5b8-4361-9134-8cab5e727005/subscribepost",
      { email }
    );
    fireAlert(
      "Success",
      "<p>You have successfully subscrie our newslatter,</p>",
      "success"
    );
  } catch (error: any) {
    fireAlert("Error", `<p>${error.response.data}</p>`, "error");
  }
};
