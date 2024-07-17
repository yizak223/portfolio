import About from "../../component/About/About";
import Contact from "../../component/Contact/Contact";
import Education from "../../component/Education/Education";
import Experience from "../../component/Experience/Experience";
import MiltaryService from "../../component/MiltaryService/MiltaryService";
import Projects from "../../component/Projects/Projects";

export default function Home() {
  return (
    <main className="bg-mainblue">
        <About/>
        <Experience/>
        <Projects/>
        <Education/>
        <MiltaryService/>
        <Contact/>
    </main>
  )
}
