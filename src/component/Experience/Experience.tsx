import React from 'react';
import { FaCss3Alt, FaGitAlt, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiPlaywright, SiSwagger, SiTypescript } from 'react-icons/si';
import { TbSql } from 'react-icons/tb';
import wotchLogo from '../../assets/wotch/wotchLogo.png';
import Card from '../card/Card';


const Experience: React.FC = () => {
    const tools = [FaHtml5, FaCss3Alt, SiTypescript, FaReact, FaNodeJs, SiPlaywright, SiSwagger, TbSql, FaGitAlt];

    return (
        <section id='Experience' className='h-95 flex justify-center'>
            <div className='h-full text-white flex flex-col gap-9 w-63 justify-center'>
                <div className='flex justify-between'>
                    <h2 className="text-2xl font-bold border-b-4 border-purple-400 w-fit">Experience</h2>
                    <h2 className="text-2xl ">APR 2024 - JULY 2024</h2>
                </div>
                <Card
                    title="Full Stack Developer"
                    logo={wotchLogo}
                    linkedinUrl="https://www.linkedin.com/company/wotch-health/"
                    tools={tools}
                    experienceEducationMode={true}
                />
            </div>
        </section>
    );
};

export default Experience;
