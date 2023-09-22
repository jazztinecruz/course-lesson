"use client";

import Image from "next/image";
import NavLink from "./nav-link";
import { useContext, useState } from "react";
import Login from "../modals/login";
import { Context } from "@/contexts/context-provider";

const menus = [
  { name: "Home", link: "/" },
  { name: "Directory", link: "/directory" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const { isSignedIn, user } = useContext(Context);

  return (
    <nav className="grid grid-cols-[auto,1fr,auto] items-center gap-4 py-3">
      <div className="flex items-center gap-4">
        <Image
          src="/images/logo.png"
          alt="NuCamp Logo"
          width={50}
          height={50}
        />
        <h1 className="font-bold text-lg">NuCamp</h1>
      </div>

      <div className="hidden lg:block mx-auto">
        <ul className="flex items-center gap-2">
          {menus.map((menu) => (
            <NavLink key={menu.name} menu={menu} />
          ))}
        </ul>
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
