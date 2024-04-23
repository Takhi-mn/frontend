import axios from "axios";
import { fireAlert } from "./fireAlert";
import { sendEmail } from "./sendEmail";

export const postDonate = async (
  name: string,
  email: string,
  country: string,
  price: string,
  donationtypeId: string,
  checked: boolean
) => {
  console.log(name, email, country, price, donationtypeId);
  try {
    const { data } = await axios.post(
      "https://www.web-cms.uz.mn/api/13238433-f5b8-4361-9134-8cab5e727005/donationpost",
      {
        fullname: name,
        email,
        country,
        price,
        contenttypeId: "ae504396-99dc-4594-9ff5-d1c0ed69bca4",
        taxonomyPath: "0006",
        donationtypeId,
        isNewsletter: checked,
      }
    );
    fireAlert(
      "Thank you for Donate",
      "<p>Thank you for your invaluable support. Together, we're making a difference in safeguarding this remarkable species for future generations to cherish.</p> <h2>BANK: TDB</h2><h2>ACCOUNT NUMBER: 470020830</h2>",
      "success"
    );
    sendEmail(email, true);
    console.log("Blog Post WORKED", data);
  } catch (error) {
    console.log("ERROR IN BLOG POST", error);
  }
};
