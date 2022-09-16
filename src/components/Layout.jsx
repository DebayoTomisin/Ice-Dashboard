import React from "react";
import { useStateContext } from "../context/ContextProvider";
import { Navbar, Footer, Sidebar, ThemeSettings } from ".";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

const AppLayout = ({ children }) => {
  const { activeMenu, themeSettings, setThemeSettings, currentColor } =
    useStateContext();

  return (
    <div className="flex relative dark:bg-main-dark-bg">
      <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
        <TooltipComponent content="Settings" position="Top">
          <button
            type="button"
            onClick={() => setThemeSettings(true)}
            className="text-3xl p-3 hover: drop-shadow-xl hover:bg-light-gray text-white"
            style={{ background: currentColor, borderRadius: "50%" }}
          >
            <FiSettings />
          </button>
        </TooltipComponent>
      </div>

      {activeMenu && (
        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
          <Sidebar />
        </div>
      )}

      <div
        className={
          activeMenu
            ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
            : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
        }
      >
        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
          <Navbar />
        </div>

        {themeSettings && <ThemeSettings />}

        {children}
      </div>
    </div>
  );
};

export default AppLayout;
