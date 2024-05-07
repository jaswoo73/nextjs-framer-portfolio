"use client";

import Timeline from "@/components/Timeline";
import Crane from "@/components/crane";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";
import { aboutInfo } from "@/utils/constant";
import ScrollSvg from "@/components/ScrollSvg";

const AboutPage = () => {
  const { biography, quote, skills } = aboutInfo;
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-50px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-50px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1, delay: 1, ease: "easeOut" }}
    >
      {/* CONTAINER */}
      <div
        className="h-full overflow-scroll lg:flex relative lg:gap-10"
        ref={containerRef}
      >
        {/* TEXT CONTAINER */}
        <motion.div
          className="fixed inset-0 h-1 bg-gradient-to-r from-fuchsia-500 via-pink-500 to-fuchsia-500 z-50"
          style={{ scaleX: scrollYProgress }}
        />
        <div className="p-6 sm:p-10 md:p-12 lg:p-20 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 2xl:w-1/2">
          {/* BIOGRAPHY */}
          <div className="flex flex-col gap-10 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl mt-4 sm:mt-6 font-Mont text-white">
              BIOGRAPHY
            </h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-md sm:text-lg text-pretty">{biography}</p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">{quote}</span>

            <ScrollSvg />
          </div>
          {/* SKILLS CONTAINER*/}
          <div
            className="flex flex-col gap-12 justify-center min-h-screen"
            ref={skillRef}
          >
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-20vw" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl text-white"
            >
              SKILLS & EXPOSURES
            </motion.h1>
            {/* SKILL LISTS */}
            <motion.div
              initial={{ x: "-100vw" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex gap-4 flex-wrap"
            >
              {skills.map((skill, index) => {
                return (
                  <div
                    key={index}
                    className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black flex-wrap"
                  >
                    {skill}
                  </div>
                );
              })}
            </motion.div>

            <ScrollSvg />
          </div>

          {/* EXPERIENCE */}
          <div
            className="flex flex-col gap-12 justify-center pb-48 relative"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              className="font-bold text-2xl text-white"
              initial={{ x: "-20vw", opacity: 0.2 }}
              animate={isExperienceRefInView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              EDUCATION & EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}

            <Timeline />
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block lg:w-1/3 2xl:w-1/2 sticky top-[200px] xl:top-[100px] right-[20px] z-0">
          <Crane scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
