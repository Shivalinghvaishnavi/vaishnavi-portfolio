import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
  words: ["Full Stack Developer", "Software Engineer", "React.js + Java Developer", "Web & Mobile Developer"],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
  Hi, I'm <span className="text-designColor capitalize leading-relaxed">Vaishnavi Shivalingh</span>
</h1>

        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I am a Full Stack Developer with <span className="text-designColor capitalize">3 years</span> of experience building end-to-end web and mobile applications. I specialise in React.js for frontend, Node.js and Java for backend services, and React Native for cross-platform mobile. My focus is on delivering scalable, performant, and maintainable solutions across the full stack.</p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner