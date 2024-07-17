import React from "react";
import { FaLinkedin } from "react-icons/fa";
import getToolColor from "../../utils/getToolColor";

interface CardProps {
    title: string;
    paragrph: string[];
    logo: string;
    linkedinUrl: string;
    technologiesSentence: string;
    tools: React.ElementType[];
}

const Card: React.FC<CardProps> = ({ title, paragrph, logo, linkedinUrl, tools, technologiesSentence }) => {


    return (
        <div className="flex flex-col items-center justify-around h-full">
            <div className="flex justify-around w-full items-center">
                <div className="relative cursor-pointer rounded-lg border shadow-lg shadow-[#040c16] group">
                    <img src={logo} className="h-28 p-3 transition-opacity duration-300 group-hover:opacity-50" alt={`${title} logo`} />
                    <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                        <a href={linkedinUrl} className="flex gap-2 items-center bg-mainblue text-white p-3 rounded-md w-fit">
                            <FaLinkedin /> LinkedIn
                        </a>
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-6 border-b-4 border-black w-fit m-auto">
                        {title}
                    </h2>
                    <ul className="w-30 font-custom">
                        {paragrph.map((paragraph, index) => (
                            <li key={index} className="list-disc">
                                {paragraph}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="space-y-6">
                <p className="font-bold text-xl">{technologiesSentence}</p>
                <div className="text-5xl flex flex-wrap gap-5">
                    {tools.map((ToolIcon, index) => (
                        <div className="bg-white-500 p-3 shadow-lg shadow-[#040c16] hover:scale-120 transition duration-300">
                            <ToolIcon className={getToolColor(ToolIcon)} key={index} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;
