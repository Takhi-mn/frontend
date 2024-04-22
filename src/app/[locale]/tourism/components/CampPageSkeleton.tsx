import { Skeleton } from "@/components/ui/skeleton";

type Props = {};

const CampPageSkeleton = (props: Props) => {
  return (
    <>
      <div className="flex flex-col items-center my-16 gap-5">
        <Skeleton className="w-2/3 h-10" />
        <Skeleton className="w-full h-3" />
        <Skeleton className="w-full h-3" />
        <Skeleton className="w-full h-3" />
        <Skeleton className="w-full h-3" />
        <Skeleton className="w-full h-3" />
      </div>
      <div className="flex flex-col items-center my-16 gap-5">
        <Skeleton className="w-2/3 h-10" />
        <Skeleton className="w-full h-3" />
        <Skeleton className="w-full h-3" />
        <Skeleton className="w-full h-3" />
        <Skeleton className="w-1/4 h-64" />
      </div>
    </>
  );
};

export default CampPageSkeleton;
