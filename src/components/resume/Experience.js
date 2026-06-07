import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - Present</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Developer"
            subTitle="[Your Company] - (2022 - Present)"
            result="Hyderabad, IN"
            des="Built and maintained full-stack web and mobile applications using React.js, Node.js, Express.js, and Java. Designed RESTful APIs, managed MySQL databases, and delivered cross-platform mobile apps with React Native."
          />
          <ResumeCard
            title="Frontend Developer"
            subTitle="[Previous Company] - (2021 - 2022)"
            result="Hyderabad, IN"
            des="Developed responsive React.js applications, implemented state management, and collaborated with backend teams on API integration. Improved page load performance by optimising component re-renders."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
