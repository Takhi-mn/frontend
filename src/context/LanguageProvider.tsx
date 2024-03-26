"use client";
import { useParams } from "next/navigation";
import { PropsWithChildren, createContext, useState } from "react";
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

export default LanguageProvider;
