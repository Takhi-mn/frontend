import axios from "axios";

export const getFaqs = async () => {
  try {
    const { data } = await axios.get(
      "https://web-cms-psi.vercel.app/api/13238433-f5b8-4361-9134-8cab5e727005/FAQs"
    );
    return data;
  } catch (error) {}
};
