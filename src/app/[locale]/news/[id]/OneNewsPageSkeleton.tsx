import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {};

const OneNewsPageSkeleton = (props: Props) => {
  return (
    <div className="w-full p-6 sm:p-16 sm:px-28 flex flex-col gap-10">
      <Skeleton className="w-full h-12" />
      <Skeleton className="w-full h-72" />
      <div className="flex flex-col gap-3">
        <Skeleton className="w-full h-8" />
        <Skeleton className="w-full h-8" />
        <Skeleton className="w-full h-8" />
        <Skeleton className="w-full h-8" />
        <Skeleton className="w-full h-8" />
      </div>
    </div>
  );
};

export default OneNewsPageSkeleton;
