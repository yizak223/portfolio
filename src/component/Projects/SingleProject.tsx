import React from 'react';
import getToolColor from '../../utils/getToolColor';

interface SingleProjectProps {
    logo: string;
    explanation: string;
    homePage: string;
    url: string;
    github: string;
    tools: React.ElementType[];
}

const SingleProject: React.FC<SingleProjectProps> = ({ logo, explanation, homePage, url, github, tools }) => {
    const overlayClasses = "absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100";
    const textClasses = "p-2 text-white rounded-lg";
    const commonClasses = "transition-opacity duration-300 rounded-lg group-hover:opacity-10";

    return (
        <div className='relative flex flex-col items-center gap-2 p-4 rounded-lg cursor-pointer bg-white shadow-lg shadow-[#040c16] group'>
            <img className={`object-contain w-24 ${commonClasses}`} src={homePage} alt="" />
            <div className={overlayClasses}>
                <div className='w-11 p-3'>
                    <img className='rounded-lg' src={logo} alt="" />
                </div>
                <p className='font-bold text-lg mb-6'>{explanation}</p>
                <a href={`${url}`} className={`${textClasses} bg-black z-10`}>Visit Site</a>
                <a href={`${github}`} className={`${textClasses} mt-2 bg-mainblue z-10`}>Go Github</a>
            </div>
            <div className={`self-start ${commonClasses}`}>
                <div className='h-p1 bg-blue-950 space-x-2'></div>
                <p className='font-bold text-lg mb-3'>Technologies</p>
                <div className='flex justify-center flex-wrap gap-5 w-24'>
                    {tools.map((ToolIcon, index) => (
                        <div key={index} className='flex items-center gap-1 text-4xl'>
                            <ToolIcon className={getToolColor(ToolIcon)} key={index} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SingleProject;
