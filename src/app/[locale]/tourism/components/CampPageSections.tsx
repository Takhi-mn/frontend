import { INews } from "@/types/backend";
import CampSection1 from "./CampSection1";
import CampSection2 from "./CampSection2";
import { BiChalkboard } from "react-icons/bi";
import { FaHiking, FaRegStar, FaWalking, FaRegLemon } from "react-icons/fa";
import { FaTents } from "react-icons/fa6";
import {
  TbHorse,
  TbCookie,
  TbBallVolleyball,
  TbBrush,
  TbBook,
} from "react-icons/tb";
type Props = {
  tourismData: INews[];
  selectedLanguage: string | string[];
};

const CampPageSections = ({ tourismData, selectedLanguage }: Props) => {
  const offers = [
    {
      text: "Lecture on the Khomyn Tal National Park and our takhi reintroduction project",
      icon: <BiChalkboard size={30} className="text-foreground" />,
    },
    {
      text: "Learn to build traditional Ger",
      icon: <FaTents size={30} className="text-foreground" />,
    },
    {
      text: "Hiking to the nearest mountains and riverbank",
      icon: <FaHiking size={30} className="text-foreground" />,
    },
    {
      text: "Stargazing",
      icon: <FaRegStar size={30} className="text-foreground" />,
    },
    {
      text: "Sunrise walk",
      icon: <FaWalking size={30} className="text-foreground" />,
    },
    {
      text: "Horseback and camel riding",
      icon: <TbHorse size={30} className="text-foreground" />,
    },
    {
      text: "Cooking class",
      icon: <TbCookie size={30} className="text-foreground" />,
    },
    {
      text: "Playing sports",
      icon: <TbBallVolleyball size={30} className="text-foreground" />,
    },
    {
      text: "Fruit gathering in the natural sea buckthorn stands – depending on the season",
      icon: <FaRegLemon size={30} className="text-foreground" />,
    },
    {
      text: "Canvas painting",
      icon: <TbBrush size={30} className="text-foreground" />,
    },
    {
      text: "Library service",
      icon: <TbBook size={30} className="text-foreground" />,
    },
  ];
  return (
    <div>
      {tourismData
        ?.filter((data) => data.contenttype.name_en === "camp-section-1")
        .map((filteredData) => {
          return (
            <CampSection1
              key={filteredData.id}
              data={filteredData}
              selectedLanguage={selectedLanguage}
            />
          );
        })}
      {tourismData
        ?.filter((data) => data.contenttype.name_en === "camp-section-2")
        .map((filteredData) => {
          return (
            <CampSection2
              key={filteredData.id}
              data={filteredData}
              selectedLanguage={selectedLanguage}
            />
          );
        })}
      {tourismData
        ?.filter((data) => data.contenttype.name_en === "camp-section-3")
        .map((filteredData) => {
          return (
            <CampSection2
              key={filteredData.id}
              data={filteredData}
              selectedLanguage={selectedLanguage}
            />
          );
        })}
      {tourismData
        ?.filter((data) => data.contenttype.name_en === "camp-section-4")
        .map((filteredData) => {
          return (
            <CampSection2
              key={filteredData.id}
              data={filteredData}
              selectedLanguage={selectedLanguage}
            />
          );
        })}
      {tourismData
        ?.filter((data) => data.contenttype.name_en === "camp-section-5")
        .map((filteredData) => {
          return (
            <div key={filteredData.id}>
              <CampSection2
                data={filteredData}
                selectedLanguage={selectedLanguage}
              />
              <div className="mt-16 pb-10">
                <h1 className="text-2xl font-bold mb-14 text-center">
                  We offer
                </h1>
                {offers.map((offer, index) => (
                  <div
                    key={offer.text + index}
                    className="flex items-center gap-2 mt-10"
                  >
                    {offer.icon}
                    <p>{offer.text}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CampPageSections;
