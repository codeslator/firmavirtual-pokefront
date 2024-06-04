import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="h-screen w-full mx-auto flex flex-col justify-center items-center">
      <div className="w-7/12">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;