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
    const paragrph = [
        'Graduated with honors with an average grade of 95.',
        `An intensive bootcamp course where I worked on projects using React,
         MongoDB, SQL, Git, HTML, CSS, JavaScript, TypeScript, Node.js, and
         Express. `
    ]

    return (
        <section id="Education" className="h-100 flex justify-center items-center">
            <div className='bg-white w-75 h-75 flex flex-col gap-9 p-6 rounded-lg'>
                <div className='flex justify-between'>
                    <h2 className="text-2xl font-bold border-b-4 border-purple-400 ">Education</h2>
                    <h2 className="text-2xl">2023 - 2024</h2>
                </div>
                <Card
                    title="Full Stack Bootcamp"
                    paragrph={paragrph}
                    logo={iitcLogo}
                    linkedinUrl="https://www.linkedin.com/school/iitc-college/"
                    tools={tools}
                    technologiesSentence='Technologies I learned'
                />
            </div>
        </section>
    )
}
