"use client";
import React, { useEffect, useState } from "react";
import { getAdoptions } from "@/actions/getAdoptions";
import AnimalSwiper from "./AnimalSwiper";

const SelectAnimal = ({
  animals,
  handleSelectedAnimal,
  selectedAnimal,
}: any) => {
  return (
    <div className="w-full md:w-1/2 mb-10">
      <AnimalSwiper
        animals={animals}
        handleSelectedAnimal={handleSelectedAnimal}
        selectedAnimal={selectedAnimal}
      />
    </div>
  );
};

export default SelectAnimal;
