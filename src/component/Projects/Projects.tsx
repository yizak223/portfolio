import resumeLogo from '../../assets/logoProjects/RESUMElogo.png';
import resumeHomePage from '../../assets/homePage/resume.png';
import yaFlixLogo from '../../assets/logoProjects/YA-FLIXLogo.png'
import yaFlixHomePage from '../../assets/homePage/yaFlix.png';
import revolBankLogo from '../../assets/logoProjects/revolBankLogo.png';
import revolBankHomePage from '../../assets/homePage/revolBank.png';
import SingleProject from './SingleProject';
import { IoLogoFirebase, IoLogoJavascript } from 'react-icons/io5';
import { FaGitAlt, FaReact } from "react-icons/fa";
import { FaCss3Alt, FaHtml5, FaNodeJs } from 'react-icons/fa6';
import { MdHttp } from 'react-icons/md';
import { SiExpress, SiMongodb } from 'react-icons/si';


export default function Projects() {
  return (
    <section id='Projects'>
      <h2 className="p-6 text-3xl font-bold">Projects</h2>
      <div>
        <div className="flex justify-between p-6 gap-9">
          <SingleProject
            logo={yaFlixLogo}
            explanation='A Web app to explore movies'
            homePage={yaFlixHomePage}
            url='https://yizak223.github.io/YA_Flix/html/index.html'
            github='https://github.com/yizak223/YA_Flix'
            tools={[
              <FaHtml5 />,
              <FaCss3Alt />,
              <IoLogoJavascript />,
              <MdHttp />,
              <FaGitAlt />
            ]} />
          <SingleProject
            logo={resumeLogo}
            explanation='A Web app to create resume'
            homePage={resumeHomePage}
            url='https://made-me-resume.web.app/'
            github='https://github.com/yizak223/Resume-Maker'
            tools={[
              <FaHtml5 />,
              <FaCss3Alt />,
              <IoLogoJavascript />,
              <FaReact />,
              <IoLogoFirebase />,
              <FaGitAlt />
            ]} />
          <SingleProject
            logo={revolBankLogo}
            explanation='A Web app that simulates a bank'
            homePage={revolBankHomePage}
            url='https://revol-bank.onrender.com/'
            github='https://github.com/yizak223/RevolBank'
            tools={[
              <FaHtml5 />,
              <FaCss3Alt />,
              <IoLogoJavascript />,
              <FaReact />,
              <FaNodeJs />,
              <SiExpress />,
              <SiMongodb />,
              <FaGitAlt />,
            ]} />
        </div>
      </div>
    </section>
  );
}
