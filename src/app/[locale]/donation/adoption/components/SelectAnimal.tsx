"use client";
import React, { useEffect, useState } from "react";
import { getAdoptions } from "@/actions/getAdoptions";
import AnimalSwiper from "./AnimalSwiper";
import AnimalSkeleton from "./AnimalSkeleton";

const SelectAnimal = ({
  animals,
  handleSelectedAnimal,
  selectedAnimal,
}: any) => {
  return (
    <div className="w-full md:w-1/2 mb-10">
      {animals ? (
        <AnimalSwiper
          animals={animals}
          handleSelectedAnimal={handleSelectedAnimal}
          selectedAnimal={selectedAnimal}
        />
      ) : (
        <AnimalSkeleton />
      )}
    </div>
  );
};

export default SelectAnimal;
