"use client";

import Image from "next/image";
import NavLink from "./nav-link";
import { useState } from "react";
import Login from "../modals/login";
import useMyContext from "@/hooks/use-context";
import { useSpring } from "@react-spring/web";

const menus = [
  { name: "Home", link: "/" },
  { name: "Directory", link: "/directory" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const { isSignedIn, user } = useMyContext();

  const animatedMenuStyle = useSpring({
    scale: openMenu ? 1.5 : 0,
    config: { duration: 500 },
  });

  return (
    <nav className="grid grid-cols-[auto,1fr,auto] items-center gap-4 py-3 px-4">
      <div className="flex items-center gap-4">
        <Image
          src="/images/logo.png"
          alt="NuCamp Logo"
          width={50}
          height={50}
        />
        <h1 className="font-bold text-lg">NuCamp</h1>
      </div>

      {/* laptop */}
      <div className="hidden lg:block mx-auto">
        <ul className="flex items-center gap-2">
          {menus.map((menu) => (
            <NavLink key={menu.name} menu={menu} />
          ))}
        </ul>
      </div>

      <div
        onClick={() => setOpenMenu(false)}
        className="lg:hidden relative flex">
        <button
          onClick={(event) => {
            event.stopPropagation();
            setOpenMenu(!openMenu);
          }}
          className="ml-auto">
          Menu
        </button>
        {openMenu && (
          <ul
            style={animatedMenuStyle}
            className="absolute left-0 w-full top-10 flex flex-col gap-2 bg-white shadow-md rounded z-10 p-2">
            {menus.map((menu) => (
              <NavLink key={menu.name} menu={menu} />
            ))}
          </ul>
        )}
      </div>

      {isSignedIn ? (
        <div className="flex items-center gap-4">
          <h2 className="font-semibold">Welcome {user}!</h2>
          <Image
            src="/images/icons/unicorn.png"
            alt="Unicorn Image"
            width={50}
            height={50}
            className="border border-pink rounded-full"
          />
        </div>
      ) : (
        <button
          onClick={() => setOpenLoginModal(true)}
          className="border rounded px-4 py-2 border-pink text-pink font-medium hover:bg-pink duration-500 hover:text-white">
          {isSignedIn ? "Signed In" : "Login"}
        </button>
      )}

      <Login isOpen={openLoginModal} setOpenLoginModal={setOpenLoginModal} />
    </nav>
  );
};

export default Navbar;
