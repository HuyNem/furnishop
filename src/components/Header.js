import React, { useState, useEffect } from "react";

//import logo
import logo from "../assets/img/logo.svg";

//import icon
import { CgMenuRight, CgClose } from "react-icons/cg";

//import data
import { navigation } from "../data";

//import component
import NavMobile from "./NavMobile";

const Header = () => {
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  const handleMenu = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <header
      className={`${bg ? "bg-primary py-4 lg:py-6" : "bg-none"} fixed left-0
                            w-full py-5 lg:py-6 z-10 transition-all duration-200`}
    >
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center">
          {/* logo */}
          <a href="#">
            <img className="h-6 lg:h-8" src={logo} />
          </a>
          {/* menu icon */}
          <div className="text-2xl text-white md:hidden lg:text-3xl cursor-pointer">
            {mobileNav ? (
              <CgClose onClick={handleMenu} />
            ) : (
              <CgMenuRight onClick={handleMenu} />
            )}
          </div>
          {/* nav */}
          <nav className="hidden md:flex">
            <ul className="md:flex md:gap-x-12">
              {navigation.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      className="capitalize text-white hover:border-b transition-all"
                      href={`#${item.href}`}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          {/* nav mobile */}
          <div
            className={`${
              mobileNav ? "left-0" : "-left-full"
            } md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all duration-[.7s]`}
          >
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
