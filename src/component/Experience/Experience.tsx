import React from 'react';
import { FaCss3Alt, FaGitAlt, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiPlaywright, SiSwagger, SiTypescript } from 'react-icons/si';
import { TbSql } from 'react-icons/tb';
import wotchLogo from '../../assets/wotch/wotchLogo.png';
import Card from '../card/Card';


const Experience: React.FC = () => {
    const tools = [FaHtml5, FaCss3Alt, SiTypescript, FaReact, FaNodeJs, SiPlaywright, SiSwagger, TbSql, FaGitAlt];
    const paragrph = [
        'Research and build a new UX in main screen using React  to improveuser experience.',
        'Development of a tool to optimize the tests by writing TypeScript and SQL.',
        'Critical test cases for client-side automation using Playwright, Swagger and SQL.',
        'Agile development, teamwork with R & D members and other interns.'
    ] 
    
    return (
        <section id='Experience' className='h-100 flex justify-center items-center'>
            <div className=' bg-white w-75 h-75 flex flex-col gap-9 p-6 rounded-lg'>
                <div className='flex justify-between'>
                    <h2 className="text-2xl font-bold border-b-4 border-purple-400 w-fit">Experience</h2>
                    <h2 className="text-2xl ">APR 2024 - JULY 2024</h2>
                </div>
                <Card
                    title="Full Stack Developer"
                    paragrph={paragrph}
                    logo={wotchLogo}
                    linkedinUrl="https://www.linkedin.com/company/wotch-health/"
                    tools={tools}
                    technologiesSentence='Technologies I used'
                />
            </div>
        </section>
    );
};

export default Experience;
