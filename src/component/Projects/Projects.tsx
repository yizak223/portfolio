import resumeLogo from '../../assets/logoProjects/RESUMElogo.png';
import resumeHomePage from '../../assets/homePage/resume.png';
import yaFlixHomePage from '../../assets/homePage/yaFlix.png';
import revolBankLogo from '../../assets/logoProjects/revolBankLogo.png';
import revolBankHomePage from '../../assets/homePage/revolBank.png';

export default function Projects() {
  return (
    <div>
      <h2 className="text-3xl font-bold p-6">Projects</h2>
      <div>
        <div className="flex justify-between p-6 gap-9">
          <div className="relative bg-slate-400 p-4 rounded-lg flex flex-col items-center gap-2 transition-opacity duration-300 cursor-pointer group">
            <img className="w-24 h-20 rounded-lg group-hover:opacity-70 transition-opacity duration-300" src={resumeLogo} alt="" />
            <img className="w-24 object-right group-hover:opacity-70 transition-opacity duration-300" src={resumeHomePage} alt="" />
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white bg-black p-2 rounded-lg">Visit Site</p>
              <p className="text-white bg-mainblue p-2 rounded-lg mt-2">Go Github</p>
            </div>
          </div>
          <div className="relative bg-slate-400 p-4 rounded-lg flex flex-col gap-2 transition-opacity duration-300 cursor-pointer group">
            <h3 className="w-24 h-20 flex justify-center items-center bg-black text-yaFlixBlue font-bold text-7xl rounded-lg group-hover:opacity-70 transition-opacity duration-300">YA-FLIX</h3>
            <img className="w-24 object-cover group-hover:opacity-70 transition-opacity duration-300" src={yaFlixHomePage} alt="" />
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white bg-black p-2 rounded-lg">Visit Site</p>
              <p className="text-white bg-mainblue p-2 rounded-lg mt-2">Go Github</p>
            </div>
          </div>
          <div className="relative bg-slate-400 p-4 rounded-lg flex flex-col gap-2 transition-opacity duration-300 cursor-pointer group">
            <img className="w-24 h-20 p-7 bg-white rounded-lg group-hover:opacity-70 transition-opacity duration-300" src={revolBankLogo} alt="" />
            <img className="w-24 object-cover group-hover:opacity-70 transition-opacity duration-300" src={revolBankHomePage} alt="" />
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white bg-black p-2 rounded-lg">Visit Site</p>
              <p className="text-white bg-mainblue p-2 rounded-lg mt-2">Go Github</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
