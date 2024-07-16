import { FaLinkedin } from "react-icons/fa";

interface CardProps {
    title: string;
    logo: string;
    linkedinUrl: string;
    tools: React.ElementType[];
    experienceEducationMode: boolean;
}
const Card: React.FC<CardProps> = ({ title, logo, linkedinUrl, tools, experienceEducationMode }) => (
    <div className="flex items-center justify-between ">
        <div>
            <div>
                <p className="text-blueText text-xl">{experienceEducationMode?'I worked as a':'I completed'}</p>
                <h2 className="text-3xl font-bold bg-mainblue text-white mb-6">
                    {title}
                </h2>
            </div>
            <div className="relative cursor-pointer group">
                <p className="text-blueText mb-4 text-xl"> {experienceEducationMode?'at the company':'at'}</p>
                <img src={logo} className="h-28 transition-opacity duration-300 group-hover:opacity-50" alt={`${title} logo`} />
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <a href={linkedinUrl} className="flex gap-2 items-center bg-mainblue text-white p-3 rounded-md w-fit">
                        <FaLinkedin /> LinkedIn
                    </a>
                </div>
            </div>
        </div>
        <div className="space-y-6 ">
            <p className="text-blueText text-xl"> {experienceEducationMode?'Technologies I used':'Technologies I learned'}</p>
            <div className="text-6xl w-25 flex flex-wrap gap-5">
                {tools.map((ToolIcon, index) => (
                    <ToolIcon key={index} />
                ))}
            </div>
        </div>
    </div>
);
export default Card