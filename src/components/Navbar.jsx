"use client";

import Link from "next/link";
import { SiHomebridge } from "react-icons/si";
import { links, socialLinks } from "@/utils/constant";
import { useState } from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const pathName = usePathname();
  const NavAnimate = pathName === "/";

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
      transition: {
        delay: 0.3,
        type: "spring",
        stiffness: 200,
        staggerChildren: 0.05,
      },
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
      y: 10,
      color: "#000000",
      opacity: 0,
    },
    opened: {
      y: 0,
      color: "#fff",
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl text-white shadow shadow-orange-200">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link, index) => (
          <motion.div
            initial={NavAnimate && { opacity: 0, x: -100, rotate: 0 }}
            animate={NavAnimate && { opacity: 1, x: 0 }}
            transition={{ delay: 1 + index * 0.2 }}
          >
            <NavLink link={link} key={index} />
          </motion.div>
        ))}
      </div>
      {/* LOGO */}
      <div
        className="md:hidden lg:flex xl:w-1/3 xl:justify-center"
        title="Back to Homepage"
      >
        <Link href="/" className="text-3xl">
          <motion.div
            className="p-1 bg-base-100 rounded-full shadow-md shadow-indigo-200 hover:shadow-red-200"
            animate={{
              opacity: [0, 1],
              scale: [1, 1.2, 1],
              y: [-50, 10, 0, 5, 0],
            }}
            transition={{ delay: 1, duration: 2 }}
          >
            <SiHomebridge className="hover:scale-110 transition-transform" />
          </motion.div>
        </Link>
      </div>
      {/* SOCIAL */}
      <div className="hidden md:flex gap-10 w-1/3 justify-center">
        {socialLinks.map((link, index) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + index * 0.3, duration: 0.5 }}
          >
            <Link
              href={link.url}
              key={index}
              target="_blank"
              className="saturate-50 transition-all hover:saturate-150 "
            >
              <Image
                src={link.img}
                alt={link.title}
                width={24}
                height={24}
                className="hover:scale-[1.2] hover:shadow-indigo-200 transition-transform hover:rotate-[360deg]"
              />
            </Link>
          </motion.div>
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
        <motion.div
          variants={listVariants}
          initial="closed"
          animate={open ? "opened" : "closed"}
          className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl z-40"
        >
          {links.map((link, index) => (
            <motion.div
              variants={listItemVariants}
              className="z-40 hover:border-l px-2 hover:border-orange-500 hover:pl-5 transition-all"
              key={index}
            >
              <Link href={link.url}>{link.title}</Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
