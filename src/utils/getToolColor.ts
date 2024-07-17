import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { MdHttp } from "react-icons/md";
import { SiTypescript, SiPlaywright, SiSwagger, SiExpress, SiMongodb } from "react-icons/si";
import { TbSql } from "react-icons/tb";

const getToolColor = (ToolIcon: React.ElementType): string => {
    switch (ToolIcon) {
        case FaHtml5:
            return 'text-orange-500';
        case FaCss3Alt:
            return 'text-blue-500';
        case SiTypescript:
            return 'text-blue-600';
        case FaReact:
            return 'text-blue-400';
        case FaNodeJs:
            return 'text-green-500';
        case SiPlaywright:
            return 'text-green-600';
        case SiSwagger:
            return 'text-green-700';
        case TbSql:
            return 'text-blue-800';
        case FaGitAlt:
            return 'text-orange-600';
        case SiExpress:
            return 'text-gray-700';
        case IoLogoFirebase:
            return 'text-yellow-500';
        case IoLogoJavascript:
            return 'text-yellow-400';
        case SiMongodb:
            return 'text-green-700';
            case MdHttp:
                return 'text-red-600';
        default:
            return '';
    }
};

export default getToolColor;