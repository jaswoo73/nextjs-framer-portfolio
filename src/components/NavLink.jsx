"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <motion.div
      className="overflow-hidden"
      whileHover={{
        boxShadow: "inset 0 -5px 0px 0px #e9829c",
        transition: { duration: 0.5 },
      }}
      whileTap={{}}
    >
      <Link
        className={`rotate-z-6 rounded p-1 font-semibold transition-all ${
          pathName === link.url &&
          "bg-gradient-to-r from-rose-300 to-orange-300 border-b-2 border-r-2 border-cyan-200"
        }`}
        href={link.url}
      >
        {link.title}
      </Link>
    </motion.div>
  );
};

export default NavLink;
