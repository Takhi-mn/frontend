import axios from "axios";

export const getAdoptions = async () => {
  try {
    const { data } = await axios.get(
      "https://www.web-cms.uz.mn/api/13238433-f5b8-4361-9134-8cab5e727005/adoptiontype"
    );
    console.log("ADOPTIONS DATA", data);
    return data;
  } catch (error) {
    console.log("ERROR IN GET ADOPTIONS");
  }
};