import React from 'react';
import { FaCss3Alt, FaGitAlt, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiPlaywright, SiSwagger, SiTypescript } from 'react-icons/si';
import { TbSql } from 'react-icons/tb';
import wotchLogo from '../../assets/wotch/wotchLogo.png';
import Card from '../card/Card';


const Experience: React.FC = () => {
    const tools = [FaHtml5, FaCss3Alt, SiTypescript, FaReact, FaNodeJs, SiPlaywright, SiSwagger, TbSql, FaGitAlt];

    return (
        <section id='Experience' className="p-6">
            <h2 className="text-3xl font-bold mb-6">Experience</h2>
            <Card
                title="Full Stack Developer"
                logo={wotchLogo}
                linkedinUrl="https://www.linkedin.com/company/wotch-health/"
                tools={tools}
            />
        </section>
    );
};

export default Experience;
