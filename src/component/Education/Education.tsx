import Card from "../card/Card";
import iitcLogo from '../../assets/IItc/iitc.png'
import { FaCss3Alt, FaGitAlt, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { TbSql } from 'react-icons/tb';
import { IoLogoFirebase, IoLogoJavascript } from 'react-icons/io5';
import { SiExpress, SiMongodb ,SiTypescript} from 'react-icons/si';



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

    return (
        <section id="Education" className="p-6">
            <h2 className="text-3xl font-bold mb-6">Education</h2>
            <Card
                title="Full Stack Bootcamp"
                logo={iitcLogo}
                linkedinUrl="https://www.linkedin.com/school/iitc-college/"
                tools={tools} />
        </section>
    )
}
