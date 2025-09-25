import React from "react";
import Title from "../layouts/Title";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaGithub,
  FaGit,
  FaJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiTypescript,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiScss,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const Media = () => {
  return (
    <div className="flex flex-col gap-6 lgl:gap-8 w-full">
      {/* Skills Section - Two Rows Layout */}
      <div className="w-full">
        <Title title="BEST SKILL ON" />

        {/* First Row - Frontend Skills */}
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 xs:gap-4 sm:gap-6 mt-6">
          {/* HTML */}
          <div className="flex flex-col items-center group">
            <span className="bannerIcon text-xl sm:text-2xl md:text-3xl lg:text-4xl group-hover:scale-110 transition-transform duration-300">
              <SiHtml5 />
            </span>
            <span className="mt-2 xs:mt-3 text-xs sm:text-sm text-center text-gray-300 group-hover:text-designColor transition-colors duration-300">
              HTML
            </span>
          </div>

          {/* CSS */}
          <div className="flex flex-col items-center group">
            <span className="bannerIcon text-xl sm:text-2xl md:text-3xl lg:text-4xl group-hover:scale-110 transition-transform duration-300">
              <SiCss3 />
            </span>
            <span className="mt-2 xs:mt-3 text-xs sm:text-sm text-center text-gray-300 group-hover:text-designColor transition-colors duration-300">
              CSS
            </span>
          </div>

          {/* JavaScript */}
          <div className="flex flex-col items-center group">
            <span className="bannerIcon text-xl sm:text-2xl md:text-3xl lg:text-4xl group-hover:scale-110 transition-transform duration-300">
              <FaJs />
            </span>
            <span className="mt-2 xs:mt-3 text-xs sm:text-sm text-center text-gray-300 group-hover:text-designColor transition-colors duration-300">
              JavaScript
            </span>
          </div>

          {/* TypeScript */}
          <div className="flex flex-col items-center group">
            <span className="bannerIcon text-xl sm:text-2xl md:text-3xl lg:text-4xl group-hover:scale-110 transition-transform duration-300">
              <SiTypescript />
            </span>
            <span className="mt-2 xs:mt-3 text-xs sm:text-sm text-center text-gray-300 group-hover:text-designColor transition-colors duration-300">
              TypeScript
            </span>
          </div>

          {/* React.js */}
          <div className="flex flex-col items-center group">
            <span className="bannerIcon text-xl sm:text-2xl md:text-3xl lg:text-4xl group-hover:scale-110 transition-transform duration-300">
              <FaReact />
            </span>
            <span className="mt-2 xs:mt-3 text-xs sm:text-sm text-center text-gray-300 group-hover:text-designColor transition-colors duration-300">
              React.js
            </span>
          </div>
        </div>

        {/* Second Row - Backend & Tools */}
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 xs:gap-4 sm:gap-6 mt-4">
          {/* Tailwind CSS */}
          <div className="flex flex-col items-center group">
            <span className="bannerIcon text-xl sm:text-2xl md:text-3xl lg:text-4xl group-hover:scale-110 transition-transform duration-300">
              <SiTailwindcss />
            </span>
            <span className="mt-2 xs:mt-3 text-xs sm:text-sm text-center text-gray-300 group-hover:text-designColor transition-colors duration-300">
              Tailwind
            </span>
          </div>

          {/* Node.js */}
          <div className="flex flex-col items-center group">
            <span className="bannerIcon text-xl sm:text-2xl md:text-3xl lg:text-4xl group-hover:scale-110 transition-transform duration-300">
              <SiNodedotjs />
            </span>
            <span className="mt-2 xs:mt-3 text-xs sm:text-sm text-center text-gray-300 group-hover:text-designColor transition-colors duration-300">
              Node.js
            </span>
          </div>

          {/* Express.js */}
          <div className="flex flex-col items-center group">
            <span className="bannerIcon text-xl sm:text-2xl md:text-3xl lg:text-4xl group-hover:scale-110 transition-transform duration-300">
              <SiExpress />
            </span>
            <span className="mt-2 xs:mt-3 text-xs sm:text-sm text-center text-gray-300 group-hover:text-designColor transition-colors duration-300">
              Express.js
            </span>
          </div>

          {/* React Native - Fixed Icon */}
          <div className="flex flex-col items-center group">
            <span className="bannerIcon text-xl sm:text-2xl md:text-3xl lg:text-4xl group-hover:scale-110 transition-transform duration-300">
              <TbBrandReactNative />
            </span>
            <span className="mt-2 xs:mt-3 text-xs sm:text-sm text-center text-gray-300 group-hover:text-designColor transition-colors duration-300">
              React Native
            </span>
          </div>

          {/* Git */}
          <div className="flex flex-col items-center group">
            <span className="bannerIcon text-xl sm:text-2xl md:text-3xl lg:text-4xl group-hover:scale-110 transition-transform duration-300">
              <FaGit />
            </span>
            <span className="mt-2 xs:mt-3 text-xs sm:text-sm text-center text-gray-300 group-hover:text-designColor transition-colors duration-300">
              Git
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
