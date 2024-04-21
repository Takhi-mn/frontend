"use client";
import React, { useEffect, useState } from "react";
import UpperSection from "../../components/upperSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SelectAnimal from "./SelectAnimal";
import AdoptionForm from "./AdoptionForm";
import { getAdoptions } from "@/actions/getAdoptions";

type Props = {
  donateText: string;
};

const AdoptionPage = ({ donateText }: Props) => {
  const [animals, setAnimals] = useState();
  const [selectedAnimal, setSelectedAnimal] = useState("");
  const [price, setPrice] = useState("");
  useEffect(() => {
    getAdoptions().then((data) => {
      setAnimals(data);
      setSelectedAnimal(data[0].id);
      setPrice(data[0].price);
    });
  }, []);
  const handleSelectedAnimal = (id: string, price: string) => {
    setSelectedAnimal(id);
    setPrice(price);
  };
  return (
    <div className="flex flex-col container justify-center items-center max-w-[1074px] mb-10">
      <UpperSection donateText={donateText} />
      <div className="flex justify-center gap-32 mt-14">
        <Link href={"../donation"}>
          <Button className="shadow-lg px-16 py-8 bg-white text-black">
            Donation
          </Button>
        </Link>
        <Button className="shadow-lg px-16 py-8">Adoption</Button>
      </div>
      <div className="flex flex-wrap my-10 w-full">
        <SelectAnimal
          animals={animals}
          handleSelectedAnimal={handleSelectedAnimal}
          selectedAnimal={selectedAnimal}
        />
        <AdoptionForm selectedAnimal={selectedAnimal} price={price} />
      </div>
    </div>
  );
};

export default AdoptionPage;
