import axios from "axios";
import { fireAlert } from "./fireAlert";
import { sendEmail } from "./sendEmail";

export const submitAdopt = async (
  fullname: string,
  email: string,
  country: string,
  selectedAnimal: string,
  price: string
) => {
  console.log("SUBMIT WOKRING", price);
  try {
    const { data } = await axios.post(
      "https://www.web-cms.uz.mn/api/13238433-f5b8-4361-9134-8cab5e727005/adoptionpost",
      {
        fullname,
        email,
        country,
        taxonomyPath: "00060001",
        contenttypeId: "c4a5b321-eb42-4b6b-ac5a-6445b83ce4a2",
        adoptiontypeId: selectedAnimal,
        price,
      }
    );
    fireAlert(
      "Thank you",
      "<p>Thank you for your invaluable support. Together, we're making a difference in safeguarding this remarkable species for future generations to cherish.</p> <h2>BANK: TDB</h2><h2>ACCOUNT NUMBER: 470020830</h2>",
      "success"
    );
    sendEmail(email);
  } catch (error) {
    fireAlert(
      "Sorry",
      "There is an error please reload and try again",
      "error"
    );
  }
};
