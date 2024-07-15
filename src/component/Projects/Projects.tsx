import resumeLogo from '../../assets/logoProjects/RESUMElogo.png'
import resumeHomePage from '../../assets/homePage/resume.png'

import yaFlixHomePage from '../../assets/homePage/yaFlix.png'

import revolBankLogo from '../../assets/logoProjects/revolBankLogo.png'
import revolBankHomePage from '../../assets/homePage/revolBank.png'


export default function Projects() {
  return (
    <div>
      <h2 className="text-3xl font-bold p-6">Projects</h2>
      <div>
        <div className="flex justify-between p-6 gap-9">
          <div className='bg-slate-400 p-4 rounded-lg flex flex-col gap-2'>
            <img className='min-h-20' src={resumeLogo} alt="" />
            <img className='h-20' src={resumeHomePage} alt="" />
          </div>
          <div className='bg-slate-400 p-4 rounded-lg flex flex-col gap-2'>
            <h3 className='bg-black text-yaFlixBlue font-bold text-7xl w-24 text-center'>YA-FLIX</h3>
            <img className='w-24' src={yaFlixHomePage} alt="" />
          </div>
          <div className='bg-slate-400 p-4 rounded-lg flex flex-col gap-2'>
            <img className='w-24' src={revolBankLogo} alt="" />
            <img className='w-24' src={revolBankHomePage} alt="" />

          </div>
        </div>
      </div>
      <p></p>
    </div>
  )
}
