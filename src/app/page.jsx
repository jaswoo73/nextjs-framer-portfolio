"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TypingText from "@/components/TypingText";
import { bio } from "../utils/constant";
import { AiFillProject } from "react-icons/ai";
import { RiMailSendFill } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";
import Button from "@/components/Button";

const Homepage = () => {
  const { name, description } = bio;
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
        className="h-full overflow-y-scroll"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="h-auto flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 lg:flex-row lg:gap-8 xl:gap-12 mb-4">
          {/* IMAGE CONTAINER */}
          <motion.div
            animate={{
              opacity: [0, 1],
              y: [-50, 0],
            }}
            transition={{ delay: 1, duration: 2 }}
            className="h-[200px] w-[200px] bg-cover bg-center bg-no-repeat md:h-[250px] md:w-[250px] lg:h-[300px] lg:w-[300px] xl:h-[350px] xl:w-[350px] mx-auto mt-5 lg:my-auto"
            style={{
              backgroundImage: 'url("/hero.jpeg")',
              boxShadow: "inset 0 0 0 7px rgb(255 255 255 /70%)",
              filter: "contrast(1.1)",
              animation: "profile_animate 8s ease-in-out infinite",
            }}
          ></motion.div>
          {/* TEXT CONTAINER */}
          <div className="h-1/2 flex flex-col gap-6 lg:gap-8 justify-center items-center lg:h-full lg:w-2/3 mt-[2rem] md:mt-10">
            {/* TITLE */}
            <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-thin self-start text-white drop-shadow-md">
              {name}
            </h1>

            <span className="self-start italic font-bold hidden md:block">
              <TypingText
                text={["Civil Engineer", "Aspiring Software Developer"]}
                fontSize="1.9em"
              />
            </span>
            <span className="self-start italic font-bold block md:hidden">
              <TypingText
                text={["Civil Engineer", "Aspiring Software Developer"]}
                fontSize="1.2em"
              />
            </span>

            {/* DESCRIPTION */}
            <p className="text-sm sm:text-md md:text-xl leading-loose text-balance text-white font-light tracking-tighter xl:leading-10">
              {description}
            </p>
            {/* BUTTONS */}
            <div className="w-full flex flex-wrap gap-4 md:justify-normal pb-2 justify-center sm:justify-normal">
              <Button
                className="shadow-purple-300 hover:bg-purple-400 w-[140px] md:w-[160px] hover:shadow-slate-200"
                url="/about"
                icon={<GiSkills size={21} />}
                text="Background"
              />
              <Button
                className="shadow-orange-300 hover:bg-orange-400 w-[140px] md:w-[160px] hover:shadow-slate-200"
                url="/portfolio"
                icon={<AiFillProject size={22} />}
                text="Projects"
              />
              <Button
                className="shadow-sky-300 hover:bg-sky-400 w-[140px] md:w-[160px] hover:shadow-slate-200"
                url="/blog"
                icon={<RiMailSendFill size={22} />}
                text="Contact"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Homepage;
