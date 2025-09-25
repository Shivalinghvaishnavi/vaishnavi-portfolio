import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  tsrtcwebsite,
  watermelon,
  watermelonmobile,
  cbp,
  trieditor,
  projectIq,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";
import { cbp1 } from "../../assets/index";
const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
         <ProjectsCard
          title="Cognitive Integrated Business Planning"
          des="A next-gen solution for integrated business planning and decision-making."
          src={cbp1}
          link="https://blueyonder.com/solutions#f-bysolutioncategory=Supply%20Chain%20Planning"
        />
        <ProjectsCard
          title="Watermelon Marketplace"
          des="A feature-rich marketplace for suppliers and buyers!"
          src={watermelon}
          link="https://watermelon.market/suppliers/"
        />
        <ProjectsCard
          title="Watermelon Marketplace"
          des="A feature-rich marketplace for suppliers and buyers!"
          src={watermelonmobile}
          link="https://play.google.com/store/apps/details?id=com.watermelon.watermelonmarket&hl=en_IN"
        />
        <ProjectsCard
          title="TSRTC Website"
          des="A comprehensive platform for bus transportation services."
          src={tsrtcwebsite}
          link="https://www.tgsrtc.telangana.gov.in/"
        />
       
        {/* <ProjectsCard
    title="Project IQ"
    des="A sophisticated Jira extension that provides a comprehensive dashboard, enabling users to track total logged hours based on project, date, and persona selection."
    src={projectIq}
    link="https://iqqa.divami.com/"
  /> */}
        <ProjectsCard
          title="Trieditor"
          des="An intuitive online editor for HTML, CSS, and JavaScript, allowing users to write and test code in real-time."
          src={trieditor}
          link="https://triedithub.netlify.app/"
          gitLink={"https://github.com/Shivalinghvaishnavi/tri-editor"}
        />
      </div>
    </section>
  );
};

export default Projects;
