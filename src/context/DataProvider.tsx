"use client";
import { ITaxonomies } from "@/types/backend";
import axios from "axios";
import { useParams } from "next/navigation";
import { PropsWithChildren, createContext, useEffect, useState } from "react";

interface ICreateDataContext {
  taxonomies: ITaxonomies[] | undefined;
}
export const dataContext = createContext<ICreateDataContext>(
  {} as ICreateDataContext
);
const DataProvider = ({ children }: PropsWithChildren) => {
  const [taxonomies, setTaxonomies] = useState<ITaxonomies[] | undefined>();
  const getTaxonomies = async () => {
    try {
      const { data } = await axios.get(
        "https://web-cms-psi.vercel.app/api/c99ae393-d8d6-4ead-a42c-7cf4a5eb713d/menu"
      );
      console.log(
        "DATA!@",
        data.sort(function (a: ITaxonomies, b: ITaxonomies) {
          let keyA = a.id;
          let keyB = b.id;
          if (keyA < keyB) return -1;
          if (keyA > keyB) return 1;
          return 0;
        })
      );
      setTaxonomies(data);
    } catch (error) {}
  };
  useEffect(() => {
    getTaxonomies();
  }, []);
  return (
    <dataContext.Provider value={{ taxonomies }}>
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;
