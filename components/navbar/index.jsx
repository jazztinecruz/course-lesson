"use client";

import Image from "next/image";
import NavLink from "./nav-link";
import { useReducer } from "react";
import Login from "../modals/login";
import useMyContext from "@/hooks/use-context";
import { useSpring } from "@react-spring/web";

const menus = [
  { name: "Home", link: "/" },
  { name: "Directory", link: "/directory" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { ...state, openLoginModal: action.payload };
    case "menu":
      return { ...state, openMenu: action.payload };
    default:
      return state;
  }
};

const Navbar = () => {
  const [state, dispatch] = useReducer(reducer, {
    openLoginModal: false,
    openMenu: false,
  });
  const { isSignedIn, user } = useMyContext();

  const handleLoginModal = () => {
    dispatch({ type: "login", payload: !state.openLoginModal });
  };

  const animatedMenuStyle = useSpring({
    scale: state.openMenu ? 1.5 : 0,
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
        <h1 className="hidden md:block font-bold text-lg">NuCamp</h1>
      </div>

      {/* laptop navigation links */}
      <div className="hidden lg:block mx-auto">
        <ul className="flex items-center gap-2">
          {menus.map((menu) => (
            <NavLink key={menu.name} menu={menu} />
          ))}
        </ul>
      </div>

      {/* mobile navigation links */}
      <div
        onClick={() => dispatch({ type: "menu", payload: false })}
        className="lg:hidden relative flex">
        <button
          onClick={(event) => {
            event.stopPropagation();
            dispatch({ type: "menu", payload: !state.openMenu });
          }}
          className="ml-auto hover:bg-slate-200 px-4 py-2 rounded">
          Menu
        </button>

        {state.openMenu && (
          <ul
            style={animatedMenuStyle}
            className="absolute right-0 border w-auto md:w-64 top-10 flex flex-col gap-2 bg-white shadow-md rounded z-10 p-2">
            {menus.map((menu) => (
              <NavLink key={menu.name} menu={menu} />
            ))}
          </ul>
        )}
      </div>

      {/* sign in button and component */}
      {isSignedIn ? (
        <div className="flex items-center gap-4">
          <h2 className="hidden md:block font-semibold text-right">
            Welcome {user}!
          </h2>
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
          onClick={() => dispatch({ type: "login", payload: true })}
          className="border rounded px-4 py-2 border-pink text-pink font-medium hover:bg-pink duration-500 hover:text-white">
          {isSignedIn ? "Signed In" : "Login"}
        </button>
      )}

      <Login
        isOpen={state.openLoginModal}
        setOpenLoginModal={handleLoginModal}
      />
    </nav>
  );
};

export default Navbar;
