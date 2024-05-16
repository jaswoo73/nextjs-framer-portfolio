"use client";

import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-auto bg-gradient-to-br from-indigo-300 to-orange-200"
      >
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-10"
          animate={{ height: "0" }}
          exit={{ height: "130vh" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-4xl sm:text-8xl cursor-default w-fit h-fit z-20 capitalize"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {pathName === "/"
            ? "Home"
            : pathName === "/about" ||
              pathName === "/portfolio" ||
              pathName === "/contact"
            ? pathName.substring(1)
            : "Error 404"}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] z-10 bottom-0"
          initial={{ height: "130vh" }}
          animate={{
            height: "0vh",
          }}
          transition={{
            delay: 1,
            duration: 0.3,
          }}
        />
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
