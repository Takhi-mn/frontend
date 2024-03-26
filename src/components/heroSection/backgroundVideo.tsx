import Video from "next-video";
import React from "react";
import zebra from "https://8ugqtxyj43pdrjam.public.blob.vercel-storage.com/zebra-czb7YmDF9y53s4qtaP0fXDeZOvAOxh.mp4";

type Props = {};

const BackgroundVideo = (props: Props) => {
  return (
    <div className="w-[1920px] absolute z-0 left-96">
      {/* <div className="w-[1920px] absolute z-0 -left-[700px] sm:-left-[600px] md:-left-[500px] lg:-left-[400px] xl:-left-[300px] 2xl:left-0"> */}
      <Video autoPlay muted loop playsInline controls={false} src={zebra} />
    </div>
  );
};

export default BackgroundVideo;
