import { coll1, coll2, coll3, coll4, one, two } from "@/assets";
import PhotoSliderSmall from "@/components/photoSlider/photoSliderSmall";
import Image from "next/image";
import React from "react";
import LearnMoreSection from "../components/learnMoreSection";

const LocalSustainableDevelopmentPage = () => {
  return (
    <div className="container flex flex-col justify-center items-center w-screen gap-5 sm:gap-20">
      <div className=" w-full flex flex-col justify-center items-center gap-6">
        <h1 className="text-[32px] w-full sm:text-[64px]">
          Local sustainable development
        </h1>
        <Image
          src={one.src}
          width={0}
          height={0}
          sizes="100vw"
          alt="takhi-reintroduction2"
          style={{
            width: "100%",
            maxWidth: "1115px",
            maxHeight: "526px",
            borderRadius: "8px",
            objectFit: "cover",
            right: "10%",
            bottom: "0",
          }}
        />
      </div>
      <div className=" w-full flex flex-col justify-center items-center  sm:flex-row-reverse sm:my-28">
        <p className="text-[14px] sm: flex-1 sm:text-base sm:min-w-[450px]">
          Дөрвөлжин сум нь ХТТ ТББ-ын санхүүжилтээр 2017-2025 онд хэрэгжүүлэх
          &quot;Тогтвортой хөгжлийн төлөвлөгөө&quot;-өө боловсруулсан. Ийнхүү уг
          сум нь  Завхан аймгийн хэмжээнд тогтвортой хөгжлийн бодлогоо
          тодорхойлсон анхны сум болсон бөгөөд төлөвлөгөөг  хэрэгжүүлэхэд
          шаардлагатай бүхий л дэмжлэг туслалцааг тус ТББ-аас үзүүлж байна. ТХТ
          нь эдийн засаг, нийгмийн хөгжил болон байгаль орчны тогтвортой хөгжил
          гэсэн үндсэн 3 тэргүүлэх чиглэлтэй.
        </p>
        {/* <div className="sm:max-w-[705px] overflow-hidden"> */}
        <PhotoSliderSmall
          photos={[
            coll1.src,
            coll2.src,
            coll3.src,
            coll4.src,
            one.src,
            two.src,
          ]}
        />
        {/* </div> */}
      </div>
      <div className="w-full flex flex-col justify-center items-center sm:flex-row-reverse">
        <div className="flex flex-col w-full sm:max-w-[705px]">
          <h1 className="font-bold sm:text-lg sm:text-right">
            Өрхийн амьжиргааг сайжруулах санаачлага биологийн олон янз байдлыг
            хамгаалахад чиглэж байна
          </h1>
          {/* <div className="sm:max-w-[705px] overflow-hidden"> */}
          <PhotoSliderSmall
            photos={[
              coll1.src,
              coll2.src,
              coll3.src,
              coll4.src,
              one.src,
              two.src,
            ]}
          />
          {/* </div> */}
        </div>
        <p className=" text-[14px] sm:text-base sm:min-w-[450px]">
          Байгаль орчныг хамгаалах, байгалийн баялгийг зохистой ашиглах
          зорилгоор байгалийн нөөцийн хамтын менежмент болон нутгийн иргэдэд
          түшиглэсэн байгаль хамгааллын менежментийг хэрэгжүүлж байна. Тус ажлын
          хүрээнд Дөрвөлжин сумын Онц, Тавантолгой багийн малчин өрхүүдийн дунд
          зэрлэг чацарганы ойг хамгаалах 4 нөхөрлөл байгууллаа. Нөхөрлөлийн
          засаглалыг бэхжүүлэх зорилгоор ХТТ ТББ-аас ойн менежмент, нөхөрлөлийн
          засаглал, өрхийн аж ахуй эрхлэх чиглэлээр сургалт зохион байгуулж,
          нөхөрлөлийн гишүүдийг хамруулж чадавхижуулж байна. Эдгээр нөхөрлөлүүд
          нь Завхан голын дагуу ургах зэрлэг чацарганы ойг хамгаалах, арчлах,
          нөхөн сэргээх, байгалийн нөөцийн ашиглалтанд хяналт тавьдаг. ХТТ ТББ
          суманд чацарганы бүтээгдхүүн боловсруулах үйлдвэр байгуулж өгснөөр
          нөхөрлөлүүд хариуцсан талбайгаас хураасан чацарганаа тус үйлдвэрт шууд
          нийлүүлэх боломж бүрдэж, талуудын оролцоо, хамтын ажиллагаа сайжирсан
          байна.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-full sm:flex-row">
        <div className=" flex flex-col justify-center items-center w-full sm:max-w-[705px] h-full">
          <h1 className="font-bold sm:text-left sm:text-lg">
            Өрхийн амьжиргааг сайжруулах санаачлага биологийн олон янз байдлыг
            хамгаалахад чиглэж байна hahahhaha
          </h1>
          {/* <div className="sm:max-w-[705px] overflow-hidden"> */}
          <PhotoSliderSmall
            photos={[
              coll1.src,
              coll2.src,
              coll3.src,
              coll4.src,
              one.src,
              two.src,
            ]}
          />
          {/* </div> */}
        </div>
        <div className="flex flex-col justify-center items-center w-full gap-3 sm:min-w-[450px]">
          <h1 className="font-semibold text-[14px] sm:text-lg">
            Зэрлэг чацарганаас нутгийн иргэдийн хүртэх өгөөж
          </h1>
          <p className="font-[14px] sm:text-base">
            ХТТ ТББ нь уламжлалт мал аж ахуйгаас гадна өрхийн амьжиргааг дэмжих
            эх үүсвэр бий болгох зорилгоор чацаргана боловсруулах үйлдвэрийг 
            2018 онд Дөрвөлжин суманд байгуулсан. Тус &quot;Хомын Талын
            Чацаргана&quot; ХХК нь үйл ажиллагаагаа эхэлж, орон нутгийн зах
            зээлд чацарганы жүүс, цэвэр тос зэрэг бүтээгдхүүнээ борлуулж
            эхэлсэн. Нөхөрлөлүүд болон нутгийн иргэд Завхан голын дагуух зэрлэг
            чацарганы шугуйг хамгаалж, хураасан жимсээ үйлдвэрт нийлүүлж, орон
            нутгийн бизнесийн хөгжилд хувь нэмэр оруулан өөрсдийн ашиг орлогоо
            нэмэгдүүлж байна.
          </p>
          <h1 className="font-semibold text-[14px] sm:text-lg">
            Өрхийн үйлдвэрлэлийг дэмжиж байна
          </h1>
          <p className="font-[14px] sm:text-base">
            ХТТ ТББ нь уламжлалт мал аж ахуйгаас гадна өрхийн амьжиргааг дэмжих
            эх үүсвэр бий болгох зорилгоор чацаргана боловсруулах үйлдвэрийг 
            2018 онд Дөрвөлжин суманд байгуулсан. Тус &quot;Хомын Талын
            Чацаргана&quot; ХХК нь үйл ажиллагаагаа эхэлж, орон нутгийн зах
            зээлд чацарганы жүүс, цэвэр тос зэрэг бүтээгдхүүнээ борлуулж
            эхэлсэн. Нөхөрлөлүүд болон нутгийн иргэд Завхан голын дагуух зэрлэг
            чацарганы шугуйг хамгаалж, хураасан жимсээ үйлдвэрт нийлүүлж, орон
            нутгийн бизнесийн хөгжилд хувь нэмэр оруулан өөрсдийн ашиг орлогоо
            нэмэгдүүлж байна.
          </p>
          <h1 className="font-semibold text-[14px] sm:text-lg">
            &quot;Хомын тал&quot; брэнд Европт
          </h1>
          <p className="font-[14px] sm:text-base">
            ФТХХ, ХТТ ТББ болон &quot;Бран де Вьян Тиран&quot; Францын нэрт
            ноосон бүтээгдэхүүн үйлдвэрлэгчийн хооронд гурван талт гэрээ
            байгуулагдснаар 2017 оноос эхлэн Хомын талын торомны ноосыг Франц
            руу экспортлож эхэлжээ. Бран де Вьян Тиран компани нь &quot;Хомын
            тал&quot; хэмээх брэнд гаргасан бөгөөд уг брэндийн торомны ноосон
            бүтээлэг, алчуур зэрэг бүтээгдэхүүнийг танилцуулж, Франц болон
            Европын бусад орны зах зээлд өндөр үнэлгээ авчээ.  
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full sm:flex-row-reverse">
        <div className="flex flex-col justify-center items-center w-full sm:max-w-[705px] h-full sm:gap-20">
          <h1 className="font-bold text-[16px] sm:text-lg sm:text-right">
            Нутгийн иргэдийн байгаль орчны мэдлэг, мэдээлэл, боловсролыг
            дээшлүүлэх нь
          </h1>
          {/* <div className="sm:max-w-[705px] overflow-hidden"> */}
          <PhotoSliderSmall
            photos={[
              coll1.src,
              coll2.src,
              coll3.src,
              coll4.src,
              one.src,
              two.src,
            ]}
          />
          {/* </div> */}
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-3 sm:min-w-[450px]">
          <h1 className="font-semibold text-[14px] sm:text-lg">
            Хүүхдийн зуны сургалт
          </h1>
          <p className="font-[14px] sm:text-base">
            Хомын талын хүүхдүүдийн хүсэн хүлээдэг нэг арга хэмжээ бол ХТТ-аас
            зохион байгуулдаг хүүхдийн зуны сургалт юм. Энэ арга хэмжээнд Хомын
            талын сурагчид, Эко клубын гишүүд оролцдог. Зуны сургалтын үеэр
            хүүхдүүд зэрлэг байгалийн тухай хөгжилтэй, сонирхолтой хичээлд
            танхимын болон тоглоомын аргаар хамрагддаг. Уг сургалтыг явуулснаар
            байгальд ээлтэй ирээдүйн нутгийн иргэдийг бэлтгэхэд хувь нэмэр
            оруулж байна. 
          </p>
          <h1 className="font-semibold text-[14px] sm:text-lg">
            Малчдын форум
          </h1>
          <p className="font-[14px] sm:text-base">
            Хомын талын хүүхдүүдийн хүсэн хүлээдэг нэг арга хэмжээ бол ХТТ-аас
            зохион байгуулдаг хүүхдийн зуны сургалт юм. Энэ арга хэмжээнд Хомын
            талын сурагчид, Эко клубын гишүүд оролцдог. Зуны сургалтын үеэр
            хүүхдүүд зэрлэг байгалийн тухай хөгжилтэй, сонирхолтой хичээлд
            танхимын болон тоглоомын аргаар хамрагддаг. Уг сургалтыг явуулснаар
            байгальд ээлтэй ирээдүйн нутгийн иргэдийг бэлтгэхэд хувь нэмэр
            оруулж байна. 
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
            байгальд ээлтэй ирээдүйн нутгийн иргэдийг бэлтгэхэд хувь нэмэр
            оруулж байна. 
          </p>
        </div>
      </div>
      <LearnMoreSection />
    </div>
  );
};

export default LocalSustainableDevelopmentPage;
