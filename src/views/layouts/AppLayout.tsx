import { Outlet } from "react-router-dom";
import { Header } from "./components";

const AppLayout = () => {
  return (
    <div className="h-screen w-full">
      <Header />
      <div className="p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;