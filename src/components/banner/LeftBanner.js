import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["React.js Developer", "Web & Mobile Developer", "Backend Enthusiast"],
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
        I am a React.js Developer with <span className="text-designColor capitalize">2.8 years</span> of experience in web and mobile development, specializing in creating dynamic, user-friendly applications. I have expertise in React Native for mobile solutions and a strong foundation in backend technologies to support seamless, end-to-end development. My focus is on delivering scalable, responsive, and efficient applications that enhance user experience. </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner