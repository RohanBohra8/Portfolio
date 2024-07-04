"use client";

import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [NavbarOpen, setNavbarOpen] = useState(false); //use state to open and close the hamburger

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          R/B
        </Link>
        <div className="mobile-menu block md:hidden">
          
          {!NavbarOpen ? (
            <button onClick={()=> setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200">
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button onClick={()=> setNavbarOpen(false)} className="flex  items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200">
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}

        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-10">
            {navLinks.map((link, id) => (
              <li key={id}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>

      </div>
      {/* if navbar open ?  then display the links */}
      {NavbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
