import axios from "axios";

export const postBlog = async (
  name: string,
  email: string,
  title: string,
  review: string,
  stars: number
) => {
  console.log(name, email, title, review, stars);
  try {
    const { data } = await axios.post(
      "https://www.web-cms.uz.mn/api/13238433-f5b8-4361-9134-8cab5e727005/blogpost",
      {
        fullname: name,
        email,
        name_mn: title,
        content_mn: review,
        stars: stars,
        contenttypeId: "34ed2376-5b06-45c2-a2d2-c908402436af",
        taxonomyPath: "000A",
      }
    );
    console.log("Blog Post WORKED", data);
  } catch (error) {
    console.log("ERROR IN BLOG POST", error);
  }
};
