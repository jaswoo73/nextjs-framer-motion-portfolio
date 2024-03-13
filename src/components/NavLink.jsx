"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link
      className={`rounded p-1 transition-all ${
        pathName === link.url &&
        "bg-gradient-to-r from-indigo-300 to-orange-300 text-white"
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
