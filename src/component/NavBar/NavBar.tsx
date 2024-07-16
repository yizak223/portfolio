import logo from '../../assets/logoPortfolio.png'

export default function NavBar() {
    const active: boolean = true; // Example of active state

    const commonClasses = 'mx-2 hover:bg-mainblue hover:text-white transition-all duration-300 cursor-pointer p-2';
    const activeClasses = 'bg-mainblue text-white p-2';

    return (
        <div className="sticky top-0 bg-white flex justify-center items-center h-10 border-b border-black z-20">
            <nav className='flex justify-between w-3/4'>
                <div>
                    <img className='h-9 object-cover' src={logo} alt="" />
                </div>
                <ul className='flex m-0 p-0 list-none'>
                    <li className={`${commonClasses} ${active ? activeClasses : ''}`}>
                        About
                    </li>
                    <li className={commonClasses}>
                        Experince
                    </li>
                    <li className={commonClasses}>
                        Projects
                    </li>
                    <li className={commonClasses}>
                        Education
                    </li>
                    <li className={commonClasses}>
                        Military Service
                    </li>
                    <li className={commonClasses}>
                        Others
                    </li>
                </ul>
            </nav>
        </div>
    );
}
