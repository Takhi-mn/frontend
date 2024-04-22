import axios from "axios";
import { fireAlert } from "./fireAlert";

export const bookTrip = async (
  fullname: any,
  email: any,
  tourists: any,
  country: any,
  startdate: any
) => {
  try {
    const { data } = await axios.post(
      "https://www.web-cms.uz.mn/api/13238433-f5b8-4361-9134-8cab5e727005/booktrippost",
      {
        fullname,
        email,
        tourists,
        country,
        startdate,
        enddate: "2024-09-20",
        contenttypeId: "cd83249f-970e-40e3-b0a9-a63bb38583e6",
        taxonomyPath: "00050002",
      }
    );
    fireAlert(
      "Success",
      "Thank you for booking our trip. We will contact you soon",
      "success"
    );
  } catch (error: any) {
    fireAlert("Error", `<p>${error.response.data}</p>`, "error");
  }
};
