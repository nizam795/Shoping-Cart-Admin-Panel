import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import { useState } from "react";

const DashboardLayout = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const toggleBarOpen = () => {
    setSideBarOpen(!sideBarOpen);
  };
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header handleClick={toggleBarOpen} />
      <div className="flex">
        <div className="hidden sm:block">
          <SideBar />
        </div>
        {sideBarOpen && (
          <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-md z-50 sm:hidden" onClick={() => setSideBarOpen(false)}>
            <SideBar />
            <button
              className="absolute top-2 right-2 text-black text-xl"
              onClick={() => setSideBarOpen(false)}
            >
              ✕
            </button>
          </div>
        )}
      </div>
      <div  className="flex-1 p-4 sm:ml-[240px]">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
