"use client";
import React, { useEffect, useState } from "react";
import { getAdoptions } from "@/actions/getAdoptions";

type Props = {};

const SelectAnimal = (props: Props) => {
  const [animals, setAnimals] = useState();
  useEffect(() => {
    getAdoptions().then((data) => setAnimals(data));
  }, []);
  return <div className="w-full md:w-1/2 mb-10"></div>;
};

export default SelectAnimal;
