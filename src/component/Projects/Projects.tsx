import resumeLogo from '../../assets/logoProjects/RESUMElogo.png';
import resumeHomePage from '../../assets/homePage/resume.png';
import yaFlixLogo from '../../assets/logoProjects/YA-FLIXLogo.png'
import yaFlixHomePage from '../../assets/homePage/yaFlix.png';
import revolBankLogo from '../../assets/logoProjects/revolBankLogo.png';
import revolBankHomePage from '../../assets/homePage/revolBank.png';
import SingleProject from './SingleProject';
import { IoLogoFirebase, IoLogoJavascript } from 'react-icons/io5';
import { FaArrowLeft, FaGitAlt, FaReact, FaArrowRight, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { MdHttp } from 'react-icons/md';
import { SiExpress, SiMongodb } from 'react-icons/si';
import { useState } from 'react';

export default function Projects() {
  const toolsMovie = [FaHtml5, FaCss3Alt, IoLogoJavascript, MdHttp, FaGitAlt]
  const toolsBank = [FaHtml5, FaCss3Alt, IoLogoJavascript, FaReact, IoLogoFirebase, FaGitAlt, SiExpress, SiMongodb]
  const toolResume = [FaHtml5, FaCss3Alt, IoLogoJavascript, FaReact, IoLogoFirebase, FaGitAlt]

  const [currentSlide, setCurrentSlide] = useState(0);
  const [leftOrRightMode, setLeftOrRightMode] = useState(true)

  const handleNext = () => {
    if (leftOrRightMode) {
      setCurrentSlide((prev) => (prev === 3 ? 0 : prev + 1));
      setLeftOrRightMode(false)
    }
  };

  const handlePrev = () => {
    if (!leftOrRightMode) {
      setCurrentSlide((prev) => (prev === 0 ? 3 : prev - 1));
      setLeftOrRightMode(true);
    }
  };

  return (
    <section id='Projects' className="h-100 flex flex-col justify-center items-center">
      <h2 className="text-2xl text-white font-bold border-b-4 border-purple-400 w-fit">Projects</h2>
      <div className="flex items-center justify-between absolute w-full h-full">
        <button onClick={handlePrev} className="bg-purple-400 text-white p-5 rounded-full ml-9"><FaArrowLeft /></button>
        <button onClick={handleNext} className="bg-purple-400 text-white p-5 rounded-full mr-9"><FaArrowRight /></button>
      </div>
      <div className="flex w-83 overflow-hidden ">
        <div className="flex gap-3 p-6 transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 25.5}%)` }}>
          <SingleProject
            logo={yaFlixLogo}
            explanation='A Web app to explore movies'
            homePage={yaFlixHomePage}
            url='https://yizak223.github.io/YA_Flix/html/index.html'
            github='https://github.com/yizak223/YA_Flix'
            tools={toolsMovie} />
          <SingleProject
            logo={yaFlixLogo}
            explanation='A Web app to explore movies'
            homePage={yaFlixHomePage}
            url='https://yizak223.github.io/YA_Flix/html/index.html'
            github='https://github.com/yizak223/YA_Flix'
            tools={toolsMovie} />
          <SingleProject
            logo={resumeLogo}
            explanation='A Web app to create resume'
            homePage={resumeHomePage}
            url='https://made-me-resume.web.app/'
            github='https://github.com/yizak223/Resume-Maker'
            tools={toolResume} />
          <SingleProject
            logo={revolBankLogo}
            explanation='A Web app that simulates a bank'
            homePage={revolBankHomePage}
            url='https://revol-bank.onrender.com/'
            github='https://github.com/yizak223/RevolBank'
            tools={toolsBank} />
        </div>
      </div>
    </section>
  );
}
