import React from 'react';
import { FaCss3Alt, FaGitAlt, FaHtml5, FaLinkedin, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiPlaywright, SiSwagger, SiTypescript } from 'react-icons/si';
import { TbSql } from 'react-icons/tb';
import wotchLogo from '../../assets/wotch/wotchLogo.png';

interface ExperienceCardProps {
    title: string;
    logo: string;
    linkedinUrl: string;
    tools: React.ElementType[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, logo, linkedinUrl, tools }) => (
    <div className="flex items-center justify-between h-28">
        <div>
            <h2 className="text-3xl font-bold bg-mainblue text-white p-2 rounded-md h-fit">
                {title}
            </h2>
        </div>
        <div className="relative cursor-pointer group">
            <img src={logo} className="h-28 transition-opacity duration-300 group-hover:opacity-50" alt={`${title} logo`} />
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <a href={linkedinUrl} className="flex gap-2 items-center bg-mainblue text-white p-3 rounded-md w-fit">
                    <FaLinkedin /> LinkedIn
                </a>
            </div>
        </div>
        <div className="text-6xl w-25 flex flex-wrap gap-5">
            {tools.map((ToolIcon, index) => (
                <ToolIcon key={index} />
            ))}
        </div>
    </div>
);

const Experience: React.FC = () => {
    const tools = [FaHtml5, FaCss3Alt, SiTypescript, FaReact, FaNodeJs, SiPlaywright, SiSwagger, TbSql, FaGitAlt];

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-6">Experience</h2>
            <ExperienceCard
                title="Full Stack Developer"
                logo={wotchLogo}
                linkedinUrl="https://www.linkedin.com/company/wotch-health/"
                tools={tools}
            />
        </div>
    );
};

export default Experience;
