import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "../context/ContextProvider";
import { links } from "../data/dummy";

const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-400 text-md m-2";

  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2 text-md";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={() => setActiveMenu(false)}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <SiShopware /> <span>Ice Market</span>
            </Link>
            <TooltipComponent content="menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu((prevState) => !prevState)}
                className="text-xl p-3 hover:bg-light-gray rounded-full mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>

          <div className="mt-10 ">
            {links.map((link, index) => (
              <div key={index}>
                <p className="text-gray-400 m-3 mt-4 uppercase">{link.title}</p>

                {link.links.map((linkItem, index) => (
                  <NavLink
                    to={`/${linkItem.name}`}
                    key={index}
                    onClick={() => {}}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {linkItem.icon}
                    <span className="capitalize">{linkItem.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
