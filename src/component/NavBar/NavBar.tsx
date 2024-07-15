import logo from '../../assets/logoPortfolio.png'

export default function NavBar() {
    const active: boolean = true; // Example of active state

    return (
        <div className="sticky top-0 bg-white flex justify-center items-center h-10">
            <nav className='flex justify-between w-3/4'>
                <div>
                    <img className='h-9 object-cover' src={logo} alt="" />
                </div>
                <ul className='flex m-0 p-0 list-none'>
                    <li className={`mx-2 ${active ? 'bg-mainblue text-white p-2' : ''}`}>
                        About
                    </li>
                    <li className='mx-2 hover:bg-mainblue hover:text-white  transition-all duration-30 cursor-pointer p-2'>
                        Projects
                    </li>
                    <li className='mx-2 hover:bg-mainblue hover:text-white  transition-all duration-30 cursor-pointer p-2'>
                        Education
                    </li>
                    <li className='mx-2 hover:bg-mainblue hover:text-white  transition-all duration-30 cursor-pointer p-2'>
                        Military Service
                    </li>
                    <li className='mx-2 hover:bg-mainblue hover:text-white  transition-all duration-30 cursor-pointerp-2 p-2'>
                        Others
                    </li>
                </ul>
            </nav>
        </div>
    );
}
