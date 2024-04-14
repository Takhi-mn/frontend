"use client";
import PhotoSliderSmall from "@/components/photoSlider/photoSliderSmall";
import { contentConverter, nameConverter } from "@/lib/nameConverter";
import { IAboutUs } from "@/types/backend";
import React from "react";

interface IProps {
  filteredData: IAboutUs;
  selectedLanguage: string | string[];
}

const Section3 = ({ filteredData, selectedLanguage }: IProps) => {
  return (
    <div className="flex flex-col justify-center items-center w-full sm:flex-row">
      <div className=" flex flex-col justify-center items-center w-full sm:max-w-[705px] h-full">
        <h1 className="font-bold sm:text-left sm:text-lg">
          {nameConverter(filteredData, selectedLanguage)}
        </h1>
        {/* <div className="sm:max-w-[705px] overflow-hidden"> */}
        <PhotoSliderSmall photos={filteredData.images} />
        {/* </div> */}
      </div>
      <div className="flex flex-col justify-center items-center w-full gap-3 sm:min-w-[450px]">
        <p
          className="PromiseMirror"
          dangerouslySetInnerHTML={{
            __html: filteredData
              ? contentConverter(filteredData, selectedLanguage)
              : "",
          }}
        ></p>
        {/* <h1 className="font-semibold text-[14px] sm:text-lg">
          {nameConverter(filteredData, selectedLanguage)}
        </h1> */}
        {/* <p className="font-[14px] sm:text-base">
          ХТТ ТББ нь уламжлалт мал аж ахуйгаас гадна өрхийн амьжиргааг дэмжих эх
          үүсвэр бий болгох зорилгоор чацаргана боловсруулах үйлдвэрийг  2018
          онд Дөрвөлжин суманд байгуулсан. Тус &quot;Хомын Талын Чацаргана&quot;
          ХХК нь үйл ажиллагаагаа эхэлж, орон нутгийн зах зээлд чацарганы жүүс,
          цэвэр тос зэрэг бүтээгдхүүнээ борлуулж эхэлсэн. Нөхөрлөлүүд болон
          нутгийн иргэд Завхан голын дагуух зэрлэг чацарганы шугуйг хамгаалж,
          хураасан жимсээ үйлдвэрт нийлүүлж, орон нутгийн бизнесийн хөгжилд хувь
          нэмэр оруулан өөрсдийн ашиг орлогоо нэмэгдүүлж байна.
        </p>
        <h1 className="font-semibold text-[14px] sm:text-lg">
          Өрхийн үйлдвэрлэлийг дэмжиж байна
        </h1>
        <p className="font-[14px] sm:text-base">
          ХТТ ТББ нь уламжлалт мал аж ахуйгаас гадна өрхийн амьжиргааг дэмжих эх
          үүсвэр бий болгох зорилгоор чацаргана боловсруулах үйлдвэрийг  2018
          онд Дөрвөлжин суманд байгуулсан. Тус &quot;Хомын Талын Чацаргана&quot;
          ХХК нь үйл ажиллагаагаа эхэлж, орон нутгийн зах зээлд чацарганы жүүс,
          цэвэр тос зэрэг бүтээгдхүүнээ борлуулж эхэлсэн. Нөхөрлөлүүд болон
          нутгийн иргэд Завхан голын дагуух зэрлэг чацарганы шугуйг хамгаалж,
          хураасан жимсээ үйлдвэрт нийлүүлж, орон нутгийн бизнесийн хөгжилд хувь
          нэмэр оруулан өөрсдийн ашиг орлогоо нэмэгдүүлж байна.
        </p>
        <h1 className="font-semibold text-[14px] sm:text-lg">
          &quot;Хомын тал&quot; брэнд Европт
        </h1>
        <p className="font-[14px] sm:text-base">
          ФТХХ, ХТТ ТББ болон &quot;Бран де Вьян Тиран&quot; Францын нэрт ноосон
          бүтээгдэхүүн үйлдвэрлэгчийн хооронд гурван талт гэрээ байгуулагдснаар
          2017 оноос эхлэн Хомын талын торомны ноосыг Франц руу экспортлож
          эхэлжээ. Бран де Вьян Тиран компани нь &quot;Хомын тал&quot; хэмээх
          брэнд гаргасан бөгөөд уг брэндийн торомны ноосон бүтээлэг, алчуур
          зэрэг бүтээгдэхүүнийг танилцуулж, Франц болон Европын бусад орны зах
          зээлд өндөр үнэлгээ авчээ.  
        </p> */}
      </div>
    </div>
  );
};

export default Section3;
