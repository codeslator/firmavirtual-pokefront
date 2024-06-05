import { Outlet } from "react-router-dom";
import { FooterNav, Header } from "./components";

const AppLayout = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-between">
      <Header />
      <div className="p-5">
        <Outlet />
      </div>
      <FooterNav />
    </div>
  );
};

export default AppLayout;