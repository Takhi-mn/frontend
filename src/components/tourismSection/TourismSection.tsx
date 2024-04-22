import TourismSwiper from "./TourismSwiper";
import { useTranslations } from "next-intl";

type Props = {};

const TourismSection = (props: Props) => {
  const T = useTranslations("Tourism");
  return (
    <div className="relative w-full px-10 py-6 lg:p-16 lg:px-28 text-white bg-tahi3 bg-center bg-cover">
      <h2 className="text-5xl relative z-10 text-center mb-10">
        {T("tourism")}
      </h2>
      <p className="w-1/2 text-xl relative z-10 text-center mx-auto mb-10 hidden md:block">
        {T("description")}
      </p>
      <TourismSwiper more={T("more")} />
      <div className="w-full h-full absolute top-0 left-0 bg-black opacity-70 z-0" />
    </div>
  );
};

export default TourismSection;
