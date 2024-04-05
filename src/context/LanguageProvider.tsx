"use client";
import { useParams } from "next/navigation";
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
  const [selectedLanguage, setSelectedLanguage] = useState(params.locale);
  const handleLanguage = (language: string) => {
    router.replace(`/${language}`);
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
