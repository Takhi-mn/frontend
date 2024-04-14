import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

type Props = {};

const OneTourSkeleton = (props: Props) => {
  return (
    <div className="container mt-28">
      <Skeleton className="mx-auto mb-8 w-1/3 h-8" />
      <div className="flex flex-col gap-2">
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
      </div>
      <Skeleton className="w-1/3 h-60 mx-auto mt-8" />
      <Skeleton className="w-1/3 h-60 mx-auto mt-8" />
      <div className="flex flex-col gap-2 mt-7">
        <Skeleton className="w-1/3 h-4 mx-auto" />
        <Skeleton className="w-1/3 h-4 mx-auto" />
        <Skeleton className="w-1/3 h-4 mx-auto" />
        <Skeleton className="w-1/3 h-4 mx-auto" />
        <Skeleton className="w-1/3 h-4 mx-auto" />
      </div>
    </div>
  );
};

export default OneTourSkeleton;
