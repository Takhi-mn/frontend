"use client";
import { logo } from "@/assets";
import { dataContext } from "@/context/DataProvider";
import { languageContext } from "@/context/LanguageProvider";
import Image from "next/image";
import React, { useContext } from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

type Props = {
  company1: string;
  company2: string;
  company3: string;
  news: string;
  donate: string;
  privacy: string;
  terms: string;
  language: string;
};

const Footer = ({
  company1,
  company2,
  company3,
  news,
  donate,
  privacy,
  terms,
  language,
}: Props) => {
  const { taxonomies } = useContext(dataContext);
  const { handleLanguage, selectedLanguage } = useContext(languageContext);
  return (
    <footer className="flex flex-wrap w-full sm:p-16 sm:px-28 p-6 bg-secondary">
      <div className=" lg:w-1/2 flex sm:block flex-col items-start">
        <div className="flex gap-5 sm:ml-4 ml-0">
          <FaFacebookF size={25} />
          <FaTwitter size={25} />
          <FaYoutube size={25} />
        </div>
        <Image src={logo.src} width={200} height={170} alt="logo" />
        <h2 className="text-3xl font-semibold">Born To Be Wild</h2>
        <p className="mt-7 pt-3 w-4/5 border-t-2">&#169; {company1}</p>
        <p>{company2}</p>
        <p>{company3}</p>
      </div>

      <section className="lg:w-1/2 flex flex-wrap lg:flex-nowrap">
        <div className="flex flex-wrap ">
          {taxonomies?.map((taxonomie) => (
            <div className="w-1/2  mt-10 lg:mt-0">
              <h2 className="text-xl font-semibold">{taxonomie.name}</h2>
              {taxonomie?.children.map((child) => (
                <p>{child.name}</p>
              ))}
            </div>
          ))}
        </div>
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex lg:flex-col justify-between">
          <div className="w-1/2">
            <h3 className="text-xl font-semibold">{news}</h3>
            <h3 className="text-xl font-semibold">{donate}</h3>
            <h3 className="text-xl font-semibold">{privacy}</h3>
            <h3 className="text-xl font-semibold">{terms}</h3>
          </div>
          <div className="w-1/2">
            <h3 className="text-xl">{language}</h3>
            <div className="flex gap-4">
              <p
                onClick={() => handleLanguage("en")}
                className={`text-xl ${
                  selectedLanguage === "en"
                    ? "font-semibold border-b-2 border-b-primary"
                    : "font-light"
                } cursor-pointer`}
              >
                EN
              </p>
              <p
                onClick={() => handleLanguage("mn")}
                className={`text-xl ${
                  selectedLanguage === "mn"
                    ? "font-semibold border-b-2 border-b-primary"
                    : "font-light"
                } cursor-pointer`}
              >
                MN
              </p>
              <p
                onClick={() => handleLanguage("gr")}
                className={`text-xl ${
                  selectedLanguage === "gr"
                    ? "font-semibold border-b-2 border-b-primary"
                    : "font-light"
                } cursor-pointer`}
              >
                GR
              </p>
              <p
                onClick={() => handleLanguage("fr")}
                className={`text-xl ${
                  selectedLanguage === "fr"
                    ? "font-semibold border-b-2 border-b-primary"
                    : "font-light"
                } cursor-pointer`}
              >
                FR
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
