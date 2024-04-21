import axios from "axios";

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
    console.log("SUCCESFULLY ADOPT ANIMAL", data);
  } catch (error) {
    console.log("ERROR IN SUBMUT ADOPT", error);
  }
};
