"use client";

import PhotoSliderSmall from "@/components/photoSlider/photoSliderSmall";
import { contentConverter } from "@/lib/nameConverter";
import { IAboutUs } from "@/types/backend";
import React from "react";

interface IProps {
  selectedLanguage: string | string[];
  filteredData: IAboutUs;
}

const Section4 = ({ selectedLanguage, filteredData }: IProps) => {
  return (
    <div className="flex flex-col justify-center items-center w-full sm:flex-row-reverse">
      <div className="flex flex-col justify-center items-center w-full sm:max-w-[705px] h-full sm:gap-20">
        <h1 className="font-bold text-[16px] sm:text-lg sm:text-right">
          Нутгийн иргэдийн байгаль орчны мэдлэг, мэдээлэл, боловсролыг
          дээшлүүлэх нь
        </h1>
        {/* <div className="sm:max-w-[705px] overflow-hidden"> */}
        <PhotoSliderSmall photos={filteredData.images} />
        {/* </div> */}
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-3 sm:min-w-[450px]">
        <p
          className="PromiseMirror"
          dangerouslySetInnerHTML={{
            __html: filteredData
              ? contentConverter(filteredData, selectedLanguage)
              : "",
          }}
        ></p>
        {/* <h1 className="font-semibold text-[14px] sm:text-lg">
          Хүүхдийн зуны сургалт
        </h1>
        <p className="font-[14px] sm:text-base">
          Хомын талын хүүхдүүдийн хүсэн хүлээдэг нэг арга хэмжээ бол ХТТ-аас
          зохион байгуулдаг хүүхдийн зуны сургалт юм. Энэ арга хэмжээнд Хомын
          талын сурагчид, Эко клубын гишүүд оролцдог. Зуны сургалтын үеэр
          хүүхдүүд зэрлэг байгалийн тухай хөгжилтэй, сонирхолтой хичээлд
          танхимын болон тоглоомын аргаар хамрагддаг. Уг сургалтыг явуулснаар
          байгальд ээлтэй ирээдүйн нутгийн иргэдийг бэлтгэхэд хувь нэмэр оруулж
          байна. 
        </p>
        <h1 className="font-semibold text-[14px] sm:text-lg">Малчдын форум</h1>
        <p className="font-[14px] sm:text-base">
          Хомын талын хүүхдүүдийн хүсэн хүлээдэг нэг арга хэмжээ бол ХТТ-аас
          зохион байгуулдаг хүүхдийн зуны сургалт юм. Энэ арга хэмжээнд Хомын
          талын сурагчид, Эко клубын гишүүд оролцдог. Зуны сургалтын үеэр
          хүүхдүүд зэрлэг байгалийн тухай хөгжилтэй, сонирхолтой хичээлд
          танхимын болон тоглоомын аргаар хамрагддаг. Уг сургалтыг явуулснаар
          байгальд ээлтэй ирээдүйн нутгийн иргэдийг бэлтгэхэд хувь нэмэр оруулж
          байна. 
        </p>
        <h1 className="font-semibold text-[14px] sm:text-lg">
          Явуулын номын сан
        </h1>
        <p className="font-[14px] sm:text-base">
          Хомын талын хүүхдүүдийн хүсэн хүлээдэг нэг арга хэмжээ бол ХТТ-аас
          зохион байгуулдаг хүүхдийн зуны сургалт юм. Энэ арга хэмжээнд Хомын
          талын сурагчид, Эко клубын гишүүд оролцдог. Зуны сургалтын үеэр
          хүүхдүүд зэрлэг байгалийн тухай хөгжилтэй, сонирхолтой хичээлд
          танхимын болон тоглоомын аргаар хамрагддаг. Уг сургалтыг явуулснаар
          байгальд ээлтэй ирээдүйн нутгийн иргэдийг бэлтгэхэд хувь нэмэр оруулж
          байна. 
        </p> */}
      </div>
    </div>
  );
};

export default Section4;
