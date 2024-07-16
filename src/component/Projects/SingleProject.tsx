import React from 'react';

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
    const commonClasses = "transition-opacity duration-300 rounded-lg group-hover:opacity-50";

    return (
        <div className='relative flex flex-col items-center gap-2 p-4 rounded-lg cursor-pointer bg-gray-300 group'>
            <div className='w-11 p-3'>
                <img className={commonClasses} src={logo} alt="" />
            </div>
            <p className={`font-bold text-lg ${commonClasses}`}>{explanation}</p>
            <img className={`object-contain w-24 ${commonClasses}`} src={homePage} alt="" />
            <div className={overlayClasses}>
                <a href={url} className={`${textClasses} bg-black`}>Visit Site</a>
                <a href={github} className={`${textClasses} mt-2 bg-mainblue`}>Go Github</a>
            </div>
            <div className={`self-start ${commonClasses}`}>
                <div className='h-p1 bg-blue-950'></div>
                <p className='font-bold text-lg'>Tools</p>
                <div className='flex justify-center flex-wrap gap-5 w-24'>
                    {tools.map((ToolIcon, index) => (
                        <div key={index} className='flex items-center gap-1 text-6xl'>
                            <ToolIcon key={index} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SingleProject;
