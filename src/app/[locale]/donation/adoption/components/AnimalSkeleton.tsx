import { Skeleton } from "@/components/ui/skeleton";

const AnimalSkeleton = () => {
  return (
    <div className="w-full p-5">
      <Skeleton className="w-full h-[500px]" />
    </div>
  );
};

export default AnimalSkeleton;
