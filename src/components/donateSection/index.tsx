import React from "react";
import DonateCard from "./DonateCard";

type Props = {
  donate: string;
  today: string;
  donateText: string;
  once: string;
  monthly: string;
};

const DonateSection = ({ donate, today, donateText, once, monthly }: Props) => {
  return (
    <section className="w-full px-10 py-6 md:p-16 md:px-28 md:h-[800px] md:flex gap-10 text-white bg-workPageBackground bg-center bg-cover">
      <div className="flex-1 md:w-full md:h-full md:flex flex-col justify-center">
        <h2 className="text-center text-3xl md:text-5xl font-medium">
          {today}
        </h2>
        <p className="mt-10 md:text-2xl font-light">{donateText}</p>
      </div>
      <DonateCard donate={donate} once={once} monthly={monthly} />
    </section>
  );
};

export default DonateSection;
