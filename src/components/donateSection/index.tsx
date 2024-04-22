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
    <section className="w-full px-10 py-6 lg:p-16 lg:px-28 lg:h-[800px] lg:flex gap-10 text-white bg-workPageBackground bg-center bg-cover">
      <div className="flex-1 lg:w-full lg:h-full lg:flex flex-col justify-center">
        <h2 className="text-center text-3xl lg:text-5xl font-medium">
          {today}
        </h2>
        <p className="mt-10 lg:text-2xl font-light">{donateText}</p>
      </div>
      <DonateCard donate={donate} once={once} monthly={monthly} />
    </section>
  );
};

export default DonateSection;
