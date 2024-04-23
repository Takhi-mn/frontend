"use client";
import { fireAlert } from "@/actions/fireAlert";
import {
  INews,
  ITaxonomies,
  IAboutUs,
  IPartner,
  IMember,
  IBlog,
} from "@/types/backend";
import axios from "axios";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface ICreateDataContext {
  taxonomies: ITaxonomies[] | undefined;
  allNews: INews[] | undefined;
  homePageNews: INews[] | undefined;
  getNewsById: (id: string) => void;
  oneNews: INews | undefined;
  aboutUs: IAboutUs[] | undefined;
  partners: IPartner[] | undefined;
  contacts: IPartner[] | undefined;
  members: IMember[] | undefined;
  getMembers: () => void;
  getOurworks: () => void;
  ourworks: IAboutUs[] | undefined;
  getDepartments: () => void;
  getBlogs: () => void;
  getDonationType: () => void;
  departments: IAboutUs[] | undefined;
  blogs: IBlog[] | undefined;
  donationType: IAboutUs[] | undefined;
  postBlog: (
    name: string,
    email: string,
    title: string,
    review: string,
    stars: number
  ) => void;
}
export const dataContext = createContext<ICreateDataContext>(
  {} as ICreateDataContext
);
const DataProvider = ({ children }: PropsWithChildren) => {
  const [taxonomies, setTaxonomies] = useState<ITaxonomies[] | undefined>();
  const [allNews, setAllNews] = useState<INews[] | undefined>();
  const [homePageNews, setHomePageNews] = useState<INews[] | undefined>();
  const [oneNews, setOneNews] = useState<INews | undefined>();
  const [aboutUs, setAboutUs] = useState<IAboutUs[] | undefined>();
  const [partners, setPartners] = useState<IPartner[] | undefined>();
  const [contacts, setContacts] = useState<IPartner[] | undefined>();
  const [members, setMembers] = useState<IMember[] | undefined>();
  const [ourworks, setOurworks] = useState<IAboutUs[] | undefined>();
  const [departments, setDepartments] = useState<IAboutUs[] | undefined>();
  const [blogs, setBlogs] = useState<IBlog[] | undefined>();
  const [donationType, setDonationType] = useState<IAboutUs[] | undefined>();
  const getTaxonomies = async () => {
    try {
      const { data } = await axios.get(
        "https://web-cms-psi.vercel.app/api/13238433-f5b8-4361-9134-8cab5e727005/menu?isFeatured=true"
      );

      const sortedData = data.sort(function (a: ITaxonomies, b: ITaxonomies) {
        let keyA = a.id;
        let keyB = b.id;
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      });
      setTaxonomies(sortedData);
    } catch (error) {}
  };

  const getNews = async () => {
    try {
      const { data } = await axios.get(
        " https://web-cms-psi.vercel.app/api/13238433-f5b8-4361-9134-8cab5e727005/news?isFeatured=true"
      );
      setAllNews(data);
      setHomePageNews(data.slice(0, 3));
    } catch (error) {
      console.log("ERROR IN GETNEWS", error);
    }
  };
  const getNewsById = async (id: string) => {
    setOneNews(undefined);
    try {
      const { data } = await axios.get(
        `https://web-cms-psi.vercel.app/api/13238433-f5b8-4361-9134-8cab5e727005/news/${id}`
      );
      setOneNews(data);
    } catch (error) {
      console.log("ERROR IN GET NEWS BY ID");
    }
  };
  const getAboutUs = async () => {
    try {
      const { data } = await axios.get(
        "https://web-cms-psi.vercel.app/api/13238433-f5b8-4361-9134-8cab5e727005/about?isFeatured=true"
      );
      setAboutUs(data);
    } catch (error) {
      console.log("ERROR IN getAboutUs", error);
    }
  };

  const getPartners = async () => {
    try {
      const { data } = await axios.get(
        "https://web-cms-psi.vercel.app/api/13238433-f5b8-4361-9134-8cab5e727005/partners?isFeatured=true"
      );
      setPartners(data);
    } catch (error) {
      console.log("ERROR IN getPartners", error);
    }
  };

  const getContacts = async () => {
    try {
      const { data } = await axios.get(
        "https://web-cms-psi.vercel.app/api/13238433-f5b8-4361-9134-8cab5e727005/contacts?isFeatured=true"
      );
      setContacts(data);
    } catch (error) {
      console.log("ERROR IN getContacts", error);
    }
  };

  const getMembers = async () => {
    try {
      const { data } = await axios.get(
        "https://web-cms-psi.vercel.app/api/13238433-f5b8-4361-9134-8cab5e727005/employee?isFeatured=true"
      );
      setMembers(data.reverse());
    } catch (error) {
      console.log("ERROR IN getMembers", error);
    }
  };

  const getOurworks = async () => {
    try {
      const { data } = await axios.get(
        "https://web-cms-psi.vercel.app/api/13238433-f5b8-4361-9134-8cab5e727005/ourworks?isFeatured=true"
      );
      console.log("Ourworks Context", data);
      setOurworks(data.reverse());
    } catch (error) {
      console.log("ERROR IN GetOurWorks", error);
    }
  };
  const getDepartments = async () => {
    try {
      const { data } = await axios.get(
        "https://web-cms-psi.vercel.app/api/13238433-f5b8-4361-9134-8cab5e727005/department?isFeatured=true"
      );
      console.log("Departments Context", data);
      setDepartments(data);
    } catch (error) {
      console.log("ERROR IN getDepartments", error);
    }
  };
  const getBlogs = async () => {
    try {
      const { data } = await axios.get(
        "https://web-cms-psi.vercel.app/api/13238433-f5b8-4361-9134-8cab5e727005/blogs?isFeatured=true"
      );
      console.log("Blogs Context", data);
      setBlogs(data);
    } catch (error) {
      console.log("ERROR IN getBlogs", error);
    }
  };
  const getDonationType = async () => {
    try {
      const { data } = await axios.get(
        "https://web-cms-psi.vercel.app/api/13238433-f5b8-4361-9134-8cab5e727005/donationtype?isFeatured=true"
      );
      console.log("DonationType Context", data);
      setDonationType(data.reverse());
    } catch (error) {
      console.log("ERROR IN getDonationType", error);
    }
  };

  const postBlog = async (
    name: string,
    email: string,
    title: string,
    review: string,
    stars: number
  ) => {
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
      getBlogs();

      fireAlert("Success", "Your blog successfully posted", "success");
    } catch (error: any) {
      fireAlert("Error", `<p>${error.response.data}</p>`, "error");
    }
  };

  useEffect(() => {
    getTaxonomies();
    getNews();
    getAboutUs();
    getPartners();
    getContacts();
  }, []);

  return (
    <dataContext.Provider
      value={{
        taxonomies,
        allNews,
        homePageNews,
        getNewsById,
        aboutUs,
        partners,
        oneNews,
        contacts,
        getMembers,
        getOurworks,
        members,
        ourworks,
        getDepartments,
        departments,
        getBlogs,
        blogs,
        getDonationType,
        donationType,
        postBlog,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};
export const useDataContext = () => {
  const context = useContext(dataContext);
  return context;
};
export default DataProvider;
