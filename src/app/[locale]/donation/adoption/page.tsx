import React from "react";
import UpperSection from "../components/upperSection";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SelectAnimal from "./components/SelectAnimal";
import AdoptionForm from "./components/AdoptionForm";
import AdoptionInfo from "./components/AdoptionInfo";

type Props = {};

const AdoptionPage = (props: Props) => {
  const t = useTranslations("Index");
  return (
    <div className="flex flex-col container justify-center items-center max-w-[1074px] mb-10">
      <UpperSection donateText={t("donateText")} />
      <div className="flex justify-center gap-32 mt-14">
        <Link href={"../donation"}>
          <Button className="shadow-lg px-16 py-8 bg-white text-black">
            Donation
          </Button>
        </Link>
        <Button className="shadow-lg px-16 py-8">Adoption</Button>
      </div>
      <div className="flex flex-wrap my-10 w-full">
        <SelectAnimal />
        <AdoptionForm />
      </div>
      <AdoptionInfo />
    </div>
  );
};

export default AdoptionPage;
