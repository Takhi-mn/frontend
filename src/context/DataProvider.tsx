"use client";
import { INews, ITaxonomies } from "@/types/backend";
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
  allNews: INews[] | undefined;
  homePageNews: INews[] | undefined;
  getNewsById: (id: string) => void;
  oneNews: INews | undefined;
}
export const dataContext = createContext<ICreateDataContext>(
  {} as ICreateDataContext
);
const DataProvider = ({ children }: PropsWithChildren) => {
  const [taxonomies, setTaxonomies] = useState<ITaxonomies[] | undefined>();
  const [allNews, setAllNews] = useState<INews[] | undefined>();
  const [homePageNews, setHomePageNews] = useState<INews[] | undefined>();
  const [oneNews, setOneNews] = useState<INews | undefined>();
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
  }, []);

  const getNews = async () => {
    try {
      const { data } = await axios.get(
        " https://web-cms-psi.vercel.app/api/13238433-f5b8-4361-9134-8cab5e727005/contents?isFeatured=true&taxonomyPath=0007"
      );
      setAllNews(data);
      setHomePageNews(data.slice(0, 3));
    } catch (error) {
      console.log("ERROR IN GETNEWS", error);
    }
  };
  const getNewsById = async (id: string) => {
    try {
      const { data } = await axios.get(
        `https://web-cms-psi.vercel.app/api/13238433-f5b8-4361-9134-8cab5e727005/contents/${id}`
      );
      setOneNews(data);
    } catch (error) {
      console.log("ERROR IN GET NEWS BY ID");
    }
  };
  return (
    <dataContext.Provider
      value={{ taxonomies, allNews, homePageNews, getNewsById, oneNews }}
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
