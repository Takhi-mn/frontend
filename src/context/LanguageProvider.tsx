"use client";
import { useParams } from "next/navigation";
import { PropsWithChildren, createContext, useState } from "react";

interface ICreateLanguageContext {
  selectedLanguage: string | string[];
}
export const languageContext = createContext<ICreateLanguageContext>(
  {} as ICreateLanguageContext
);
const LanguageProvider = ({ children }: PropsWithChildren) => {
  const params = useParams();
  const [selectedLanguage, setSelectedLanguage] = useState(params.locale);
  return (
    <languageContext.Provider value={{ selectedLanguage }}>
      {children}
    </languageContext.Provider>
  );
};

export default LanguageProvider;
