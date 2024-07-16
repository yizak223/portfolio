import resumeLogo from '../../assets/logoProjects/RESUMElogo.png';
import resumeHomePage from '../../assets/homePage/resume.png';
import yaFlixLogo from '../../assets/logoProjects/YA-FLIXLogo.png'
import yaFlixHomePage from '../../assets/homePage/yaFlix.png';
import revolBankLogo from '../../assets/logoProjects/revolBankLogo.png';
import revolBankHomePage from '../../assets/homePage/revolBank.png';
import SingleProject from './SingleProject';

export default function Projects() {
  return (
    <div>
      <h2 className="p-6 text-3xl font-bold">Projects</h2>
      <div>
        <div className="flex justify-between p-6 gap-9">
          <SingleProject logo={resumeLogo} homePage={resumeHomePage} />
          <SingleProject logo={yaFlixLogo} homePage={yaFlixHomePage} />
          <SingleProject logo={revolBankLogo} homePage={revolBankHomePage} />
        </div>
      </div>
    </div>
  );
}
