"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TypingText from "@/components/TypingText";
import { bio } from "../utils/bio";
import { AiFillProject } from "react-icons/ai";
import { MdOutlineContactMail } from "react-icons/md";

const Homepage = () => {
  const { name, tagline, description } = bio;
  return (
    <>
      <style jsx global>{`
        @keyframes profile_animate {
          0% {
            border-radius: 60% 40% 30% 70%/60% 30% 60% 50%;
          }
          50% {
            border-radius: 30% 60% 60% 40%/50% 60% 30% 60%;
          }
          100% {
            border-radius: 60% 40% 30% 70%/60% 30% 60% 50%;
          }
        }
      `}</style>
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="h-full flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 lg:flex-row lg:gap-8 xl:gap-12">
          {/* IMAGE CONTAINER */}
          <motion.div
            animate={{
              opacity: [0, 1],
              y: [-50, 0],
            }}
            transition={{ delay: 1, duration: 2 }}
            className="h-[200px] w-[200px] bg-cover bg-center bg-no-repeat md:h-[250px] md:w-[250px] lg:h-[300px] lg:w-[300px] xl:h-[350px] xl:w-[350px] mx-auto mt-5 lg:my-auto"
            style={{
              backgroundImage: 'url("/hero.png")',
              boxShadow: "inset 0 0 0 7px rgb(255 255 255 /70%)",
              animation: "profile_animate 8s ease-in-out infinite",
            }}
          ></motion.div>
          {/* TEXT CONTAINER */}
          <div className="h-1/2 flex flex-col gap-6 lg:gap-8 justify-center items-center lg:h-full lg:w-2/3 mt-16 md:mt-10">
            {/* TITLE */}
            {/* <h1 className="text-6xl md:text-8xl font-thin self-start text-white drop-shadow-md"> */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-thin self-start text-white drop-shadow-md">
              {name}
            </h1>

            <span className="self-start italic font-bold hidden lg:flex">
              <TypingText text={["Civil Engineer", "Aspiring Web Developer"]} />
            </span>

            <span className="self-start italic font-bold block lg:hidden">
              <TypingText text={["Civil Engineer", "Aspiring Web Developer"]} />
            </span>

            {/* DESCRIPTION */}
            <p className="text-md md:text-xl leading-loose text-balance text-white font-light tracking-tighter xl:leading-10">
              {description}
            </p>
            {/* BUTTONS */}
            <div className="w-full flex gap-4">
              <button className="p-4 rounded-lg ring-2 font-bold ring-orange-300 bg-slate-800 text-white hover:text-black hover:bg-orange-400 transition-all w-[180px]">
                <a
                  href="/portfolio"
                  className="flex items-center gap-2 justify-center"
                >
                  <AiFillProject size={20} />
                  <span>View Projects</span>
                </a>
              </button>
              <button className="p-4 rounded-lg ring-2 font-bold ring-sky-300 bg-slate-800 text-white hover:text-black hover:bg-sky-400  transition-all w-[180px]">
                <a
                  href="/contact"
                  className="flex items-center gap-2 justify-center"
                >
                  <MdOutlineContactMail size={20} />
                  <span>Get in Touch</span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Homepage;
