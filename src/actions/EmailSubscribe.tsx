import axios from "axios";

export const emailSubscribe = async (email: string) => {
  try {
    const { data } = await axios.post(
      "https://www.web-cms.uz.mn/api/13238433-f5b8-4361-9134-8cab5e727005/subscribepost",
      { email }
    );
    console.log("SUCCESFULLY POST EMAIL");
  } catch (error) {
    console.log("ERROR IN SEND EMAIL", error);
  }
};
