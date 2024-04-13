"use client";
import { useParams, usePathname } from "next/navigation";
import { PropsWithChildren, createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";

interface ICreateLanguageContext {
  selectedLanguage: string | string[];
  handleLanguage: (language: string) => void;
}
export const languageContext = createContext<ICreateLanguageContext>(
  {} as ICreateLanguageContext
);
const LanguageProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const params = useParams();
  const path = usePathname();
  const [selectedLanguage, setSelectedLanguage] = useState(params.locale);
  const handleLanguage = (language: string) => {
    const path1 = path.split("/").splice(0, 2).join("/");
    console.log("PARAMS", path1);
    router.replace(`/${language}/${path1}`);
  };
  return (
    <languageContext.Provider value={{ selectedLanguage, handleLanguage }}>
      {children}
    </languageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(languageContext);

  return context;
};

export default LanguageProvider;
