"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  menu: {
    name: string;
    link: string;
  };
};

const NavLink = ({ menu }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === menu.link;

  return (
    <Link href={menu.link}>
      <li
        className={`px-4 py-2 uppercase text-sm rounded duration-500 ${
          isActive ? "font-semibold bg-slate-200" : "hover:bg-slate-200"
        }`}>
        {menu.name}
      </li>
    </Link>
  );
};

export default NavLink;
