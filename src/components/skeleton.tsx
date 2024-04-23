import { Skeleton } from "@/components/ui/skeleton";

type Props = {};

const SkeletonLoader = (props: Props) => {
  return (
    <>
      <div className="flex flex-col w-full h-screen items-center my-16 gap-5">
        <Skeleton className="w-2/3 h-10" />
        <Skeleton className="w-full h-3" />
        <Skeleton className="w-full h-3" />
        <Skeleton className="w-full h-3" />
        <Skeleton className="w-full h-3" />
        <Skeleton className="w-full h-3" />
      </div>
    </>
  );
};

export default SkeletonLoader;
