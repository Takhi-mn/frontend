import React from "react";

type Props = {};

const BackgroundVideo = (props: Props) => {
  return (
    <div className="w-[1920px] absolute z-0 -left-[700px] sm:-left-[600px] md:-left-[500px] lg:-left-[400px] xl:-left-[300px] 2xl:left-0">
      <video autoPlay muted loop>
        <source
          src="https://takhi-front-gules.vercel.app/videos/khomyn.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default BackgroundVideo;
