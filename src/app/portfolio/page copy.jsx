"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const works = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "React Commerce",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
    tech: ["/github.png", "/linkedin.png", "/facebook.png"],
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Next.js Medium Blog",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Vanilla Book App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Spotify Music App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://lama.dev",
  },
];

const PortfolioPage = () => {
  const [currentCard, setCurrentCard] = useState(null);
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const variants = {
    scrollButton: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 3,
        repeat: Infinity,
      },
    },
  };
  return (
    <motion.div
      className="h-full"
      initial={{ x: "-200vw" }}
      animate={{ x: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-8xl text-center font-Titi font-semibold text-white gap-10">
          My Works
          <motion.img
            variants={variants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {works.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex-col gap-8 text-white bg-orange-200 h-full w-auto pt-10 sm:flex-row">
                  <div
                    className="relative w-screen h-1/2 cursor-pointer overflow-hidden m-auto sm:h-[600px] sm:w-[400px] lg:h-[600px] lg:w-[600px]"
                    onMouseEnter={(e) => {
                      console.log("target:", e.target);
                      console.log(e.currentTarget);
                      setCurrentCard((prevCard) => item.id);
                    }}
                    onMouseLeave={() => setCurrentCard(null)}
                  >
                    <Image src={item.img} alt={item.title} fill />

                    <div
                      className={`relative bg-white/30 h-[100%] w-[100%]  right-0 transition-all duration-3000 ${
                        currentCard === item.id ? "top-0" : "-top-[100%]"
                      }`}
                    >
                      <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                        {item.title}
                      </h1>
                      <div className="flex flex-col-reverse absolute bottom-0 right-0 gap-2 h-10 w-10 p-2">
                        {item.tech?.map((techItem, index) => (
                          <img key={index} src={techItem} alt="" />
                        ))}
                      </div>
                    </div>

                    <div className="gap-1 absolute top-0 right-0 m-1 hidden sm:'flex">
                      <Link href={item.link}>
                        <button className="p2- text-sm md:p-4 md:text-md lg:p-6 lg:text-lg bg-white backdrop-blur-md bg-opacity-20 text-white font-semibold rounded hover:text-white hover:bg-orange-300 transition-all">
                          Demo
                        </button>
                      </Link>
                      <Link href={item.link}>
                        <button className="p2- text-sm md:p-4 md:text-md lg:p-6 lg:text-lg bg-white backdrop-blur-md bg-opacity-20 text-white font-semibold rounded hover:text-white hover:bg-orange-300 transition-all">
                          Repo
                        </button>
                      </Link>
                    </div>
                  </div>
                  <p className="w-80 text-red-500 relative z-10 md:hidden">
                    {item.desc}
                  </p>
                </div>
                <p className="w-80 relative z-10">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-6xl 2xl:text-8xl">Ready to contribute and learn</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -75, 0 a 75,75 0 0,1 150,0 a 75,75 0 0,1 -150,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Web Developer &#8901; Available For Work Immediately &#8901;
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex justify-center items-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
