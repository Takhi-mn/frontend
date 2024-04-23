"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
type Props = {};
import "swiper/css";
import "swiper/css/effect-coverflow";
import SwiperCore from "swiper";
import Image from "next/image";
import { contentConverter } from "@/lib/nameConverter";
import { useLanguage } from "@/context/LanguageProvider";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const AnimalSwiper = ({
  animals,
  handleSelectedAnimal,
  selectedAnimal,
}: any) => {
  const { selectedLanguage } = useLanguage();
  const [my_swiper, set_my_swiper] = useState<SwiperCore>();
  return (
    <div className="p-5">
      <Swiper
        onInit={(e) => set_my_swiper(e)}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        {animals?.map((animal: any) => {
          return (
            <SwiperSlide
              key={animal.id}
              className="border-primary border-4 rounded-xl overflow-hidden"
            >
              <Image
                width={500}
                height={350}
                src={animal?.images[0]?.url}
                alt={animal?.name_en}
              />
              <div className="p-5">
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="font-medium text-xl">
                      {animal.name_en}{" "}
                      <span className="text-base font-light">
                        ID:{animal.IDnumber}
                      </span>
                    </h1>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: contentConverter(animal, selectedLanguage),
                      }}
                    />
                  </div>
                  <div className="h-6 bg-primary p-3 flex justify-center items-center text-white rounded-full">
                    {animal.sex}
                  </div>
                </div>
                <div className="flex justify-between">
                  <Button
                    variant={
                      selectedAnimal === animal.id ? "default" : "outline"
                    }
                    onClick={() =>
                      handleSelectedAnimal(animal.id, animal.price)
                    }
                    className="mt-4"
                  >
                    {selectedAnimal === animal.id ? "Selected" : "Select"}
                  </Button>
                  <Button className="mt-4">{animal.price}$</Button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="w-full flex justify-center gap-6 mt-3">
        <button
          onClick={() => {
            my_swiper?.slidePrev();
          }}
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={() => {
            my_swiper?.slideNext();
          }}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default AnimalSwiper;
