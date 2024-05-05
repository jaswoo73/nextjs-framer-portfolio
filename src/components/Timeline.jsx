import timelineElements from "../utils/constant";
import schoolIcon from "../assets/school.svg";
import workIcon from "../assets/work.svg";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Timeline = ({ defaultColor }) => {
  const { scrollYProgress } = useScroll();
  const height = useTransform(scrollYProgress, [0, 1], ["0px", "100%"]);
  return (
    <div className="">
      {timelineElements.map((element, index) => {
        const colors = [
          "bg-purple-400",
          "bg-pink-400",
          "bg-orange-400",
          "bg-fuchsia-400",
          "bg-rose-400",
          "bg-emerald-400",
        ];
        const color = defaultColor || `bg-${element.color}-400`;
        return (
          <div key={element.id} className="flex m-4 relative">
            <span
              className={`bg-black w-0.5 h-4 absolute -bottom-[16px] left-20 opacity-60 sm:hidden ${
                index === timelineElements.length - 1 && "hidden"
              }`}
            ></span>
            <div className="hidden items-start w-44 pt-0.5 relative sm:flex">
              <span className="w-4/5 text-gray-500 flex justify-end mr-2">
                {element.date}
              </span>
              <span
                className={`bg-gradient-to-t from-indigo-600 to-white w-[2px] translate-x-5 translate-y-10 opacity-50 ${
                  index === timelineElements.length - 1 && "hidden"
                }`}
                style={{ scaleY: height }}
              ></span>
              <Image
                src={element.icon === "study" ? schoolIcon : workIcon}
                alt="icon"
                className={`${color} w-10 p-1 rounded-lg z-20`}
              />
              <span
                className={`${color} h-[2px] w-8 translate-y-5 opacity-50`}
              ></span>
            </div>
            <div
              className={`shadow-md border bg-transparent  border-slate-500/30 rounded-lg px-8 py-4 w-full text-center z-10 sm:w-96`}
            >
              <div className="text-xl font-medium mb-1">{element.title}</div>
              <div className="text-gray-500 mb-6 sm:mb-8 sm:text-xs">
                {element.location}{" "}
                <span className="sm:hidden">| {element.date}</span>
              </div>
              <div className="mb-4 text-left">{element.description}</div>
              <div className="flex flex-wrap mb-6 justify-center">
                {element.tech?.map((item, index) => (
                  <span
                    key={index}
                    className="bg-gray-900 rounded-xl px-2 py-1 text-sm m-1 text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <Image
                src={element.icon === "study" ? schoolIcon : workIcon}
                alt="icon"
                className={`${color} w-8 p-1 rounded-lg z-20 absolute top-4 left-3 sm:hidden`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
