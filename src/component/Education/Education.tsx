import Card from "../card/Card";
import iitcLogo from '../../assets/IItc/iitc.png'
import { FaCss3Alt, FaGitAlt, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { TbSql } from 'react-icons/tb';
import { IoLogoFirebase, IoLogoJavascript } from 'react-icons/io5';
import { SiExpress, SiMongodb, SiTypescript } from 'react-icons/si';



export default function Education() {
    const tools = [
        FaHtml5,
        FaCss3Alt,
        IoLogoJavascript,
        SiTypescript,
        FaReact,
        FaNodeJs,
        SiExpress,
        IoLogoFirebase,
        TbSql,
        SiMongodb,
        FaGitAlt];

    return (
        <section id="Education" className="h-95 flex justify-center">
            <div className='h-full text-white flex flex-col gap-9 w-63 justify-center'>
                <div className='flex justify-between'>
                    <h2 className="text-2xl font-bold border-b-4 border-purple-400 w-fit">Education</h2>
                    <h2 className="text-2xl ">2023 - 2024</h2>
                </div>
                <Card
                    firstSentence="I completed"
                    secondSentence="at"
                    title="Full Stack Bootcamp"
                    logo={iitcLogo}
                    linkedinUrl="https://www.linkedin.com/school/iitc-college/"
                    tools={tools}
                    technologiesSentence='Technologies I learned'
                />
            </div>
        </section>
    )
}
