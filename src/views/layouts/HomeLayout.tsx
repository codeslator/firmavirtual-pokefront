import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="h-screen w-full">
      <div className="flex">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;