"use client";
import Link from "next/link";
import { SiHomebridge } from "react-icons/si";
import { BsFillMenuButtonFill } from "react-icons/bs";
import { links, socialLinks } from "@/utils/constant";
import { useState } from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: "0",
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -20,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link, index) => (
          <NavLink link={link} key={index} />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link href="/" className="text-3xl">
          <div className="p-1 bg-base-100 rounded-full shadow-md shadow-indigo-200 hover:shadow-md hover:shadow-red-200">
            <SiHomebridge />
          </div>
        </Link>
      </div>
      {/* SOCIAL */}
      <div className="hidden md:flex gap-6 w-1/3 justify-center">
        {socialLinks.map((link, index) => (
          <Link
            href={link.url}
            key={index}
            target="_blank"
            className="saturate-50 hover:scale-110 transition-all hover:saturate-100"
          >
            <Image src={link.img} alt={link.title} width={24} height={24} />
          </Link>
        ))}
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            className="w-10 h-1 bg-black rounded"
            animate={open ? "opened" : "closed"}
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            className="w-10 h-1 bg-black rounded origin-left"
            animate={open ? "opened" : "closed"}
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl z-40"
          >
            {links.map((link, index) => (
              <motion.div variants={listItemVariants} className="" key={index}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
