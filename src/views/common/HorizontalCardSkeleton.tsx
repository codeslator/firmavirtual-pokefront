import { Skeleton } from "react-daisyui";

const HorizontalCardSkeleton = () => {
  return (
    <div className="flex flex-row gap-4 mb-3">
      <Skeleton className="h-48 w-full md:w-4/12"></Skeleton>
      <div className="flex flex-col w-full md:w-8/12 gap-4">
        <Skeleton className="h-4 w-28"></Skeleton>
        <Skeleton className="h-4 w-full"></Skeleton>
        <Skeleton className="h-4 w-full"></Skeleton>
      </div>
    </div>
  );
};

export default HorizontalCardSkeleton;