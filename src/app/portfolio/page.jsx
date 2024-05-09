"use client";
import PortfolioLinks from "@/components/PortfolioLinks";
import ScrollSvg from "@/components/ScrollSvg";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
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
} from "react-icons/si";

const works = [
  {
    id: 1,
    color: "from-orange-200 to-orange-300",
    title: "MERN Full-Stack Threads App with Real-Time Chat",
    desc: "A simple clone of Threads app built from scratch using MongoDB, Express.js, React.js, and Node.js (MERN stack), and leveraging the power of Socket.io to facilitate real-time conversations seamlessly. ",
    img: "https://snipboard.io/VP8NTL.jpg",
    link: "https://mern-simple-thread-clone.onrender.com/",
    source: "https://github.com/jaswoo73/mern-simple-thread-clone",
    stacks: [
      <SiMongodb title="MongoDB" />,
      <SiExpress title="Express.js" />,
      <SiReact title="React.js" />,
      <SiNodedotjs title="Node.js" />,
      <SiCloudinary title="Cloudinary" />,
      <SiMongoose title="Mongoose" />,
      <SiJsonwebtokens title="JWT" />,
      <SiTailwindcss title="Tailwind CSS" />,
      <SiSocketdotio title="Socket.io" />,
      <SiChakraui title="Chakra UI" />,
      <SiReactrouter title="React Router" />,
    ],
  },
  {
    id: 2,
    color: "from-orange-300 to-rose-200",
    title: "React Responsive Website with Modern UI/UX",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://snipboard.io/dah4BZ.jpg",
    link: "https://mern-simple-thread-clone.onrender.com/",
    source: "https://github.com/jaswoo73/mern-simple-thread-clone",
    stacks: [
      <SiReact title="React.js" />,
      <SiTailwindcss title="Tailwind CSS" />,
    ],
  },
  {
    id: 3,
    color: "from-rose-200 to-rose-300",
    title: "React E-Commerce Website with Airtable Database",
    desc: "Dive into my simple React e-commerce website that leverages Airtable for data integration and management. Explore a curated collection of products displayed on the frontend, enhanced with multiple filtering options and view models, including grid and list views.",
    img: "https://snipboard.io/AVzqPb.jpg",
    link: "https://toyboy-warhammer.netlify.app/",
    source: "https://github.com/jaswoo73/react-ecommerce-store-Airtable",
    stacks: [
      <SiReact title="React.js" />,
      <SiTailwindcss title="Tailwind CSS" />,
      <SiAirtable title="Airtable" />,
      <SiRedux title="Redux" />,
      <SiStyledcomponents title="Styled Components" />,
      <SiReactrouter title="React Router" />,
      <SiStripe title="Stripe" />,
    ],
  },
  {
    id: 4,
    color: "from-rose-300 to-violet-200",
    title: "MERN Full-Stack Job Tracker",
    desc: "This is a simple job tracker application built from scratch using MongoDB, Express.js, React.js, and Node.js (MERN stack). Users can securely log in to their own account to record and manage their job search journey.",
    img: "https://snipboard.io/d1OQKC.jpg",
    link: "https://mern-jobify-app-zxv5.onrender.com/",
    source: "https://github.com/jaswoo73/mern-jobify-app",
    stacks: [
      <SiMongodb title="MongoDB" />,
      <SiExpress title="Express.js" />,
      <SiReact title="React.js" />,
      <SiNodedotjs title="Node.js" />,
      <SiMongoose title="Mongoose" />,
      <SiCloudinary title="Cloudinary" />,
      <SiJsonwebtokens title="JWT" />,
      <SiStyledcomponents title="Styled Components" />,
      <SiReactquery title="React Query" />,
      <SiReactrouter title="React Router" />,
    ],
  },
  {
    id: 5,
    color: "from-violet-200 to-violet-300",
    title: "React Furniture Shop With Daisy UI",
    desc: "A online furniture shop that is built using React.js and styled with Tailwind CSS and Daisy UI. Users can browse, filter, and add items to their cart. This app also utilizes React Query for fetching and caching data.",
    img: "https://snipboard.io/G3kMhc.jpg",
    link: "https://react-comfy-store-app-rrd-rtk-query.netlify.app/",
    source: "https://github.com/jaswoo73/react-comfy-store-app",
    stacks: [
      <SiReact title="React.js" />,
      <SiReactrouter title="React Router" />,
      <SiTailwindcss title="Tailwind CSS" />,
      <SiDaisyui title="Daisy UI" />,
      <SiRedux title="Redux" />,
      <SiReactquery title="React Query" />,
    ],
  },
  {
    id: 6,
    color: "from-violet-300 to-blue-200",
    title: "React Budget App With React Router",
    desc: "This is a budget app built using React.js and React Router. Users can add expenses and view their balance in different budget categories. This app utilizes route actions and loaders to handle data fetching and form submission.",
    img: "https://snipboard.io/FLAZDv.jpg",
    link: "https://budgeteer-rrd.netlify.app/",
    source: "https://github.com/jaswoo73/react-rrd-budget-app",
    stacks: [
      <SiReact title="React.js" />,
      <SiReactrouter title="React Router" />,
      <SiCss3 title="CSS" />,
    ],
  },
  {
    id: 7,
    color: "from-blue-200 to-blue-300",
    title: "React Todo App With Theme Switcher",
    desc: "This is a simple todo application built with React.js. Users can add new tasks and mark them as completed. This app also allows users to not only switch between light and dark theme, but the color scheme of the entire application interface as well. ",
    img: "https://snipboard.io/6UjwNr.jpg",
    link: "https://jaswoo73.github.io/React-Todo-With-ThemeSwitcher/",
    source: "https://github.com/jaswoo73/React-Todo-With-ThemeSwitcher",
    stacks: [
      <SiReact title="React.js" />,
      <SiReactrouter title="React Router" />,
      <SiCss3 title="CSS" />,
    ],
  },
  {
    id: 8,
    color: "from-blue-300 to-green-200",
    title: "React Movie Search App",
    desc: "This is a simple movie search app built using React.js and the OMDb API for the data. Users can search for movies and then access the details of the selected movies on IMDb site with a click of the info button. ",
    img: "https://snipboard.io/a3LNWM.jpg",
    link: "https://jaswoo73.github.io/react-movie-search-app/",
    source: "https://github.com/jaswoo73/react-movie-search-app",
    stacks: [<SiReact title="React.js" />, <SiCss3 title="CSS" />],
  },
];

const PortfolioPage = () => {
  // const [currentCard, setCurrentCard] = useState(null);
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
      className="h-full"
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
                  <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl w-[95%] md:w-[90%] lg:w-[75%] mx-auto min-h-[10%]">
                    {item.title}
                  </h1>
                  <span className="h-1 w-[30%] mx-auto my-2 lg:my-4 bg-white"></span>
                  <div className="relative mx-auto w-[95%] h-[40%] sm:h-[50%] md:w-[90%] md:h-[80%] lg:w-[75%] lg:h-[60%]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="lg:text-lg w-[95%] md:w-[90%] lg:w-[75%] mx-auto text-balance">
                    {item.desc}
                  </p>
                  <div className="flex gap-3 w-[95%] md:w-[90%] lg:w-[75%] mx-auto justify-between">
                    <div className="flex flex-wrap gap-2 items-center">
                      {item.stacks?.map((stack) => (
                        <span className=" bg-neutral-600 p-1 rounded-full text-xl lg:text-2xl cursor-help">
                          {stack}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col gap-2 max-w-content flex-nowrap min-w-[130px]">
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
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center bg-gradient-to-bl from-green-200 to-orange-300">
        <h1 className="text-6xl 2xl:text-8xl font-Titi text-white font-bold">
          Ready to contribute and learn
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
                d="M 150, 150 m -75, 0 a 75,75 0 0,1 150,0 a 75,75 0 0,1 -150,0 "
              />
            </defs>
            <text fill="#4b4b4b">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Web Developer &#8901; Available For Work Immediately &#8901;
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-indigo-600 text-white rounded-full flex justify-center items-center font-Titi font-semibold"
          >
            GET IN TOUCH
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
