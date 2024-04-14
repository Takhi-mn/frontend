import axios from "axios";

export const emailSubscribe = async (
  email: string,
  userId: string,
  webId: string
) => {
  try {
    const { data } = await axios.post(
      "https://web-cms-psi.vercel.app/api/13238433-f5b8-4361-9134-8cab5e727005/subscribepost"
    );
    console.log("DATA EMAIL", data);
  } catch (error) {
    console.log("ERROR IN SEND EMAIL", error);
  }
};
