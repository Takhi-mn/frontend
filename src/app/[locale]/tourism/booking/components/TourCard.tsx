import React from "react";

const TourCard = ({ tourism }: any) => {
  return (
    <div className="relative w-[350px] h-[220px] md:w-[450px] md:h-[300px] text-white group md:overflow-hidden cursor-pointer md:hover:scale-110 transition-all ease-in-out duration-300">
      <div
        className="absolute w-full h-full bg-gradient-to-b
       from-orange-700 opacity-50 md:opacity-0 
       group-hover:opacity-50 
       transition-all ease-in-out duration-300"
      />
      <img
        className="w-[350px] h-[220px] md:w-[450px] md:h-[300px] object-cover"
        src={tourism.image.src}
        alt=""
      />
      <div className="absolute top-1/3 md:top-[80%] md:group-hover:-translate-y-32 transition-all ease-in-out duration-300 transform p-5">
        <h3 className="">{tourism.title}</h3>
        <p className="line-clamp-2 mt-5">{tourism.text}</p>
        <p className="text-right font-medium">Дэлгэрэнгүй</p>
      </div>
    </div>
  );
};

export default TourCard;
