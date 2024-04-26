"use client";
import React, { useState } from "react";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const showNavBar = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <nav className="w-10/12 m-auto h-16 flex justify-between">
        <div className="">
          <a>
            <Image
              className=""
              src="/logo.svg"
              width={200}
              height={250}
              alt="Picture of the author"
            />
          </a>
        </div>
        <div className="flex gap-3">
          <div>
            <SearchIcon className="text-slate-100" />
          </div>

          <div>
            <button  onClick={showNavBar}>
              {openMenu ? (
                <MenuIcon className="bg-primary w-32 h-8 rounded-lg text-white" />
              ) : (
                <p className="text-white"><MenuIcon className="bg-primary w-32 h-8 rounded-lg text-white" />Menu</p>
              )}
            </button>

            {openMenu && (
              <div className="w-48 bg-sm-green text-white absulate top-6 grid justify-items-center">
                <a className="py-2 border-b-2 w-full">Abut Us</a>
                <a className="py-2 border-b-2 w-full">Academics</a>
                <a className="py-2 border-b-2 w-full">Admission</a>
                <a className="py-2 border-b-2 w-full">Gallery</a>
                <a className="py-2 border-b-2 w-full">News/Calendar</a>
                <a className="py-2 border-b-2 w-full">Contact Us</a>
                <a className="py-2 border-b-2 w-full">Login</a>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
