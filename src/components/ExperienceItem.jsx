import { motion } from "framer-motion";

const ExperienceItem = ({ isExperienceRefInView }) => {
  return (
    <motion.div
      initial={{ x: "-300px" }}
      animate={isExperienceRefInView ? { x: 0 } : {}}
      className=""
    >
      {/* EXPERIENCE LIST ITEM 1*/}
      <div className="flex justify-between h-auto">
        {/* TIMELINE */}
        <div className="w-1/3 flex justify-center">
          {/* LINE */}
          <div className="w-1 h-full bg-gray-400 rounded relative">
            {/* CIRCLE NODE */}
            <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-300 bg-white -left-2"></div>
          </div>
        </div>
        {/* EXPERIENCE ITEM */}
        <div className="w-2/3">
          {/* EXPERIENCE TITLE */}
          <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
            Master in Engineering with Honours in Civil Engineering
          </div>
          {/* EXPERIENCE DESC */}
          <div className="p-3 text-sm italic">
            Completed an undergraduate master's program and conducted a thesis
            on criticality analysis and resilience assessment of water
            distribution systems.
          </div>
          {/* EXPERIENCE DATE */}
          <div className="p-3 text-red-400 text-sm font-semibold">
            2015-2018
          </div>
          {/* EXPERIENCE PLACE/COMPANY */}
          <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
            University of Nottingham, UK
          </div>
        </div>
      </div>
      {/* ****************** */}
      {/* EXPERIENCE LIST ITEM 1*/}
      <div className="flex justify-between h-auto">
        {/* TIMELINE */}
        <div className="w-1/3 flex justify-center">
          {/* LINE */}
          <div className="w-1 h-full bg-gray-400 rounded relative">
            {/* CIRCLE NODE */}
            <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-300 bg-white -left-2"></div>
          </div>
        </div>
        {/* EXPERIENCE ITEM */}
        <div className="w-2/3">
          {/* EXPERIENCE TITLE */}
          <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
            Master in Engineering with Honours in Civil Engineering
          </div>
          {/* EXPERIENCE DESC */}
          <div className="p-3 text-sm italic">
            Completed an undergraduate master's program and conducted a thesis
            on criticality analysis and resilience assessment of water
            distribution systems.
          </div>
          {/* EXPERIENCE DATE */}
          <div className="p-3 text-red-400 text-sm font-semibold">
            2015-2018
          </div>
          {/* EXPERIENCE PLACE/COMPANY */}
          <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
            University of Nottingham, UK
          </div>
        </div>
      </div>
      {/* EXPERIENCE LIST ITEM 1*/}
      <div className="flex justify-between h-auto">
        {/* TIMELINE */}
        <div className="w-1/3 flex justify-center">
          {/* LINE */}
          <div className="w-1 h-full bg-gray-400 rounded relative">
            {/* CIRCLE NODE */}
            <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-300 bg-white -left-2"></div>
          </div>
        </div>
        {/* EXPERIENCE ITEM */}
        <div className="w-2/3">
          {/* EXPERIENCE TITLE */}
          <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
            Master in Engineering with Honours in Civil Engineering
          </div>
          {/* EXPERIENCE DESC */}
          <div className="p-3 text-sm italic">
            Completed an undergraduate master's program and conducted a thesis
            on criticality analysis and resilience assessment of water
            distribution systems.
          </div>
          {/* EXPERIENCE DATE */}
          <div className="p-3 text-red-400 text-sm font-semibold">
            2015-2018
          </div>
          {/* EXPERIENCE PLACE/COMPANY */}
          <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
            University of Nottingham, UK
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceItem;
