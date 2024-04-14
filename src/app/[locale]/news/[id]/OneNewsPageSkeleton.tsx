import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {};

const OneNewsPageSkeleton = (props: Props) => {
  return (
    <>
      <div className="w-full p-6 sm:p-16 sm:px-28 flex flex-col gap-10">
        <Skeleton className="w-1/2 h-24" />
      </div>
      <Skeleton className="w-full h-[700px]" />
      <div className="w-full p-6 sm:p-16 sm:px-28 flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <Skeleton className="w-1/2 mx-auto h-8" />
          <Skeleton className="w-1/2 mx-auto  h-8" />
          <Skeleton className="w-1/2 mx-auto  h-8" />
          <Skeleton className="w-1/2 mx-auto  h-8" />
          <Skeleton className="w-1/2 mx-auto  h-8" />
          <div className="flex gap-5 mx-auto mt-14">
            <Skeleton className="w-[350px] h-[400px] " />
            <Skeleton className="w-[350px] h-[400px] " />
            <Skeleton className="w-[350px] h-[400px] " />
          </div>
        </div>
      </div>
    </>
  );
};

export default OneNewsPageSkeleton;
