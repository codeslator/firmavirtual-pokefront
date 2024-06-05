import { Skeleton } from "react-daisyui";

const HorizontalCardSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 mb-3">
      <Skeleton className="h-48 w-full"></Skeleton>
        <Skeleton className="h-4 w-28"></Skeleton>
        <Skeleton className="h-4 w-full"></Skeleton>
        <Skeleton className="h-4 w-full"></Skeleton>
        <Skeleton className="h-4 w-full"></Skeleton>
    </div>
  );
};

export default HorizontalCardSkeleton;