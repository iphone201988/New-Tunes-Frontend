import React, { useState } from "react";
import Logo from "../../assets/logo-header.png";
import SearchIcon from "../../assets/icons/search-icon.svg";
import menu from "../../assets/icons/menu.svg";
import { Link, useLocation } from "react-router";
import { routes } from "../../constants";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <div>
      <div className="px-[20px] max-w-[1600px] mx-auto">
        <div className="flex items-center justify-between">
          <Link className="max-w-[180px] block max-lg:max-w-[120px]" href="/">
            <img src={Logo} alt="logo" />
          </Link>
          <div
            className={`${
              showMobileNav ? "menu" : ""
            } flex gap-[30px] max-lg:gap-[12px] max-md:hidden`}
          >
            {routes.map((route, index) => (
              <Link
                key={index}
                to={route.path}
                className={`${
                  currentPath == route.path ? "active" : ""
                } text-[18px] font-bold text-[#000]`}
              >
                {route.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center justify-between gap-[20px] max-md:gap-[12px]">
            <button className="btn-pri">Join</button>
            <button className="w-[50px] cursor-pointer max-lg:w-auto">
              <img src={SearchIcon} alt="" />
            </button>
            <button
              className="hidden max-md:block"
              onClick={() => setShowMobileNav(!showMobileNav)}
            >
              <img src={menu} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
