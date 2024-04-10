"use client";
import { INews, ITaxonomies, IAboutUs, IPartners } from "@/types/backend";
import axios from "axios";
import { useParams } from "next/navigation";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface ICreateDataContext {
  taxonomies: ITaxonomies[] | undefined;
  news: INews[] | undefined;
  homePageNews: INews[] | undefined;
  aboutUs: IAboutUs[] | undefined;
  partners: IPartners[] | undefined;
}
export const dataContext = createContext<ICreateDataContext>(
  {} as ICreateDataContext
);
const DataProvider = ({ children }: PropsWithChildren) => {
  const [taxonomies, setTaxonomies] = useState<ITaxonomies[] | undefined>();
  const [news, setNews] = useState<INews[] | undefined>();
  const [homePageNews, setHomePageNews] = useState<INews[] | undefined>();
  const [aboutUs, setAboutUs] = useState<IAboutUs[] | undefined>();
  const [partners, setPartners] = useState<IPartners[] | undefined>();
  const getTaxonomies = async () => {
    try {
      const { data } = await axios.get(
        "https://web-cms-psi.vercel.app/api/13238433-f5b8-4361-9134-8cab5e727005/menu"
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
  useEffect(() => {
    getTaxonomies();
    getNews();
    getAboutUs();
    getPartners();
  }, []);

  const getNews = async () => {
    try {
      const { data } = await axios.get(
        "https://web-cms-psi.vercel.app/api/13238433-f5b8-4361-9134-8cab5e727005/contents"
      );
      console.log("news data", data);
      setNews(data);
      setHomePageNews(data.splice(0, 3));
    } catch (error) {
      console.log("ERROR IN GETNEWS", error);
    }
  };

  const getAboutUs = async () => {
    try {
      const { data } = await axios.get(
        "https://web-cms-psi.vercel.app/api/13238433-f5b8-4361-9134-8cab5e727005/about"
      );
      console.log("about-us data", data);
      setAboutUs(data);
    } catch (error) {
      console.log("ERROR IN GETABOUTUS", error);
    }
  };

  const getPartners = async () => {
    try {
      const { data } = await axios.get(
        "https://web-cms-psi.vercel.app/api/13238433-f5b8-4361-9134-8cab5e727005/partners"
      );
      console.log("partners", data);
      setPartners(data);
    } catch (error) {
      console.log("ERROR IN GETABOUTUS", error);
    }
  };

  return (
    <dataContext.Provider
      value={{ taxonomies, news, homePageNews, aboutUs, partners }}
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
