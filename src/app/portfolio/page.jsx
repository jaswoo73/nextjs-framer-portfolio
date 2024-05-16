"use client";
import PortfolioLinks from "@/components/PortfolioLinks";
import ScrollSvg from "@/components/ScrollSvg";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { VscVmRunning } from "react-icons/vsc";
import { IoLogoGithub } from "react-icons/io";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiCloudinary,
  SiMongoose,
  SiJsonwebtokens,
  SiTailwindcss,
  SiSocketdotio,
  SiAirtable,
  SiRedux,
  SiStripe,
  SiStyledcomponents,
  SiReactquery,
  SiReactrouter,
  SiChakraui,
  SiCss3,
  SiDaisyui,
  SiAxios,
} from "react-icons/si";

const works = [
  {
    id: 1,
    color: "from-orange-200 to-orange-300",
    title: "MERN Full-Stack Threads App with Real-Time Chat",
    desc: "A simple clone of Threads app built from scratch using MongoDB, Express.js, React.js, and Node.js (MERN stack), and leveraging the power of Socket.io to facilitate real-time conversations seamlessly.",
    img: "/projectImage/project1.jpeg",
    link: "https://mern-simple-thread-clone.onrender.com/",
    source: "https://github.com/jaswoo73/mern-simple-thread-clone",
    stacks: [
      { icon: <SiMongodb title="MongoDB" />, name: "MongoDB" },
      { icon: <SiExpress title="Express.js" />, name: "Express.js" },
      { icon: <SiReact title="React.js" />, name: "React.js" },
      { icon: <SiNodedotjs title="Node.js" />, name: "Node.js" },
      { icon: <SiCloudinary title="Cloudinary" />, name: "Cloudinary" },
      { icon: <SiMongoose title="Mongoose" />, name: "Mongoose" },
      {
        icon: <SiJsonwebtokens title="JSON Web Token" />,
        name: "JSON Web Token",
      },
      { icon: <SiTailwindcss title="Tailwind CSS" />, name: "Tailwind CSS" },
      { icon: <SiSocketdotio title="Socket.io" />, name: "Socket.io" },
      { icon: <SiChakraui title="Chakra UI" />, name: "Chakra UI" },
      { icon: <SiReactrouter title="React Router" />, name: "React Router" },
    ],
  },
  {
    id: 2,
    color: "from-orange-300 to-rose-200",
    title: "React Responsive Landing Page with Modern UI/UX",
    desc: "This is a responsive landing page with Modern UI tailored for saas product. Various techniques such as Bento Box Design and library such as React Just Parallax was incorporated to create a modern aesthetic.",
    img: "/projectImage/project2.jpeg",
    link: "https://react-brainwave-murex.vercel.app/",
    source:
      "https://github.com/jaswoo73/react-responsive-landing-page-with-modern-ui",
    stacks: [
      { icon: <SiReact title="React.js" />, name: "React.js" },
      { icon: <SiTailwindcss title="Tailwind CSS" />, name: "Tailwind CSS" },
      { icon: <SiReactrouter title="React Router" />, name: "React Router" },
    ],
  },
  {
    id: 3,
    color: "from-rose-200 to-rose-300",
    title: "React E-Commerce Website with Airtable Database",
    desc: "Dive into my simple React e-commerce website that leverages Airtable for data integration and management. Explore a curated collection of products displayed on the frontend, enhanced with multiple filtering options and view models, including grid and list views.",
    img: "/projectImage/project3.jpeg",
    link: "https://toyboy-warhammer.netlify.app/",
    source: "https://github.com/jaswoo73/react-ecommerce-store-Airtable",
    stacks: [
      { icon: <SiReact title="React.js" />, name: "React.js" },
      { icon: <SiAirtable title="Airtable" />, name: "Airtable" },
      { icon: <SiRedux title="Redux" />, name: "Redux" },
      {
        icon: <SiStyledcomponents title="styled-components" />,
        name: "styled-components",
      },
      { icon: <SiReactrouter title="React Router" />, name: "React Router" },
      { icon: <SiStripe title="Stripe" />, name: "Stripe" },
    ],
  },
  {
    id: 4,
    color: "from-rose-300 to-violet-200",
    title: "MERN Full-Stack Job Tracker",
    desc: "This is a simple job tracker application built from scratch using MongoDB, Express.js, React.js, and Node.js (MERN stack). Users can securely log in to their own account to record and manage their job search journey.",
    img: "/projectImage/project4.png  ",
    link: "https://mern-jobify-app-zxv5.onrender.com/",
    source: "https://github.com/jaswoo73/mern-jobify-app",
    stacks: [
      { icon: <SiMongodb title="MongoDB" />, name: "MongoDB" },
      { icon: <SiExpress title="Express.js" />, name: "Express.js" },
      { icon: <SiReact title="React.js" />, name: "React.js" },
      { icon: <SiNodedotjs title="Node.js" />, name: "Node.js" },
      { icon: <SiMongoose title="Mongoose" />, name: "Mongoose" },
      { icon: <SiCloudinary title="Cloudinary" />, name: "Cloudinary" },
      {
        icon: <SiJsonwebtokens title="JSON Web Token" />,
        name: "JSON Web Token",
      },
      {
        icon: <SiStyledcomponents title="styled-components" />,
        name: "styled-components",
      },
      { icon: <SiReactquery title="React Query" />, name: "React Query" },
      { icon: <SiReactrouter title="React Router" />, name: "React Router" },
    ],
  },
  {
    id: 5,
    color: "from-violet-200 to-violet-300",
    title: "React Furniture Shop With daisyUI",
    desc: "A online furniture shop that is built using React.js and styled with Tailwind CSS and daisyUI. Users can browse, filter, and add items to their cart. This app also utilizes React Query for fetching and caching data.",
    img: "/projectImage/project5.jpeg",
    link: "https://react-comfy-store-app-rrd-rtk-query.netlify.app/",
    source: "https://github.com/jaswoo73/react-comfy-store-app",
    stacks: [
      { icon: <SiReact title="React.js" />, name: "React.js" },
      { icon: <SiReactrouter title="React Router" />, name: "React Router" },
      { icon: <SiAxios title="Axios" />, name: "Axios" },
      { icon: <SiTailwindcss title="Tailwind CSS" />, name: "Tailwind CSS" },
      { icon: <SiDaisyui title="daisyUI" />, name: "daisyUI" },
      { icon: <SiRedux title="Redux" />, name: "Redux" },
      { icon: <SiReactquery title="React Query" />, name: "React Query" },
    ],
  },
  {
    id: 6,
    color: "from-violet-300 to-blue-200",
    title: "React Budget App With React Router",
    desc: "This is a budget app built using React.js and React Router where users can manage expenses and budgets. It uses route actions and loaders to handle data fetching and form submission and local storage for data storage.",
    img: "/projectImage/project6.png",
    link: "https://budgeteer-rrd.netlify.app/",
    source: "https://github.com/jaswoo73/react-rrd-budget-app",
    stacks: [
      { icon: <SiReact title="React.js" />, name: "React.js" },
      { icon: <SiReactrouter title="React Router" />, name: "React Router" },
      { icon: <SiCss3 title="CSS" />, name: "CSS" },
    ],
  },
  {
    id: 7,
    color: "from-blue-200 to-blue-300",
    title: "React Todo App With Theme Switcher",
    desc: "This is a simple todo application built with React.js. This app also allows users to not only record and manage tasks, but control the color scheme for the entire application interface as well. ",
    img: "/projectImage/project7.png",
    link: "https://jaswoo73.github.io/React-Todo-With-ThemeSwitcher/",
    source: "https://github.com/jaswoo73/React-Todo-With-ThemeSwitcher",
    stacks: [
      { icon: <SiReact title="React.js" />, name: "React.js" },
      { icon: <SiReactrouter title="React Router" />, name: "React Router" },
      { icon: <SiCss3 title="CSS" />, name: "CSS" },
    ],
  },
  {
    id: 8,
    color: "from-blue-300 to-green-200",
    title: "React Movie Search App",
    desc: "This is a simple movie search app built using React.js and the OMDb API for the data. Users can search for movies and then access the details of the selected movies on IMDb site with a click of the info button. ",
    img: "/projectImage/project8.jpeg",
    link: "https://jaswoo73.github.io/react-movie-search-app/",
    source: "https://github.com/jaswoo73/react-movie-search-app",
    stacks: [
      { icon: <SiReact title="React.js" />, name: "React.js" },
      { icon: <SiCss3 title="CSS" />, name: "CSS" },
    ],
  },
];

const PortfolioPage = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-88.89%"]);
  const variants = {
    scrollButton: {
      y: 10,
      transition: {
        duration: 3,
        repeat: Infinity,
      },
    },
  };
  return (
    <motion.div
      className="h-"
      initial={{ x: "-100vw" }}
      animate={{ x: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[800vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-8xl text-center font-Titi font-semibold text-white gap-10">
          My Works
          <motion.div variants={variants} animate="scrollButton">
            <ScrollSvg />
          </motion.div>
        </div>
        <div className="sticky top-0 left-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-indigo-200 to-orange-200" />
            {works.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-4 text-white border-[1px] p-4 rounded-md max-w-[85vw] lg:w-[60%] h-[80%] lg:h-[90%] justify-between shadow-md shadow-stone-300">
                  <h1 className="max-[400px]:text-base text-2xl font-bold md:text-3xl lg:text-4xl w-[95%] md:w-[90%] lg:w-[75%] mx-auto min-h-[10%] text-center flex flex-col justify-end">
                    {item.title}
                  </h1>
                  <span className="h-1 w-[35%] mx-auto   bg-white"></span>
                  <div className="relative mx-auto max-[400px]:h-[30%] w-[95%] h-[40%] sm:h-[50%] md:w-[90%] md:h-[80%] lg:w-[75%] lg:h-[60%]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="max-[400px]:text-sm max-[400px]:leading-[1.2] text-base lg:text-lg w-[95%] md:w-[90%] lg:w-[75%] mx-auto text-balance">
                    {item.desc}
                  </p>
                  <div className="flex gap-3 w-[95%] md:w-[90%] lg:w-[75%] mx-auto justify-between">
                    <div className="flex flex-wrap gap-3 items-center max-w-[70%] max-[400px]:max-w-[80%]">
                      {item.stacks?.map((stack, index) => (
                        <span
                          className=" bg-neutral-600 p-1 rounded-full text-xl max-[400px]:text-base lg:text-2xl cursor-pointer relative"
                          key={index}
                        >
                          {stack.icon}
                          <span className="absolute inset-0 opacity-0 hover:opacity-100 flex justify-center items-start">
                            <p className="absolute -bottom-[1.2rem] md:-bottom-[1.5rem] left-1/2 -translate-x-1/2 text-nowrap text-center text-xs w-[500px]">
                              {stack.name}
                            </p>
                          </span>
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col gap-2 max-w-content flex-nowrap min-w-[130px] max-[400px]:hidden">
                      <PortfolioLinks
                        link={item.link}
                        icon={<VscVmRunning />}
                        text="See Demo"
                        id={item.id}
                      />
                      <PortfolioLinks
                        link={item.source}
                        icon={<IoLogoGithub />}
                        text="Source Code"
                      />
                    </div>
                    <div className="hidden flex-col gap-2 max-[400px]:flex ">
                      <PortfolioLinks
                        link={item.link}
                        icon={<VscVmRunning />}
                        id={item.id}
                      />
                      <PortfolioLinks
                        link={item.source}
                        icon={<IoLogoGithub />}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center bg-gradient-to-bl from-green-200 to-orange-300">
        <h1 className="text-6xl 2xl:text-8xl font-Titi text-white font-bold text-center">
          Ready to develop and contribute
        </h1>
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
                d="M 150, 150 m -85, 0 a 85,85 0 0,1 170,0 a 85,85 0 0,1 -170,0 "
              />
            </defs>
            <text fill="#4b4b4b">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Software Developer &#8901; Available For Work Immediately
                &#8901;
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute z-10 top-0 left-0 right-0 bottom-0 m-auto bg-indigo-600 text-white rounded-full flex justify-center items-center font-Titi font-semibold hover:scale-105 transition-all"
          >
            GET IN TOUCH
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
