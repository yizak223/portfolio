import { useState, useEffect } from 'react';
import logo from '../../assets//portfolioImages/logoPortfolio.png';

export default function NavBar() {
    const [activeItem, setActiveItem] = useState('About');

    const commonClasses = 'mx-2 hover:bg-mainblue hover:text-white transition-all duration-300 cursor-pointer p-2';
    const activeClasses = 'bg-mainblue text-white p-2';

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');

            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionBottom = sectionTop + section.clientHeight;
                const scrollPosition = window.scrollY;

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    setActiveItem(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="sticky top-0 bg-white flex justify-center items-center h-10 border-b border-black z-20">
            <nav className='flex justify-between w-3/4'>
                <div>
                    <img className='h-9 object-cover' src={logo} alt="" />
                </div>
                <ul className='flex m-0 p-0 list-none'>
                    <li className={`${commonClasses} ${activeItem === 'About' ? activeClasses : ''}`} onClick={() => scrollToSection('About')}>
                        About
                    </li>
                    <li className={`${commonClasses} ${activeItem === 'Experience' ? activeClasses : ''}`} onClick={() => scrollToSection('Experience')}>
                        Experience
                    </li>
                    <li className={`${commonClasses} ${activeItem === 'Projects' ? activeClasses : ''}`} onClick={() => scrollToSection('Projects')}>
                        Projects
                    </li>
                    <li className={`${commonClasses} ${activeItem === 'Education' ? activeClasses : ''}`} onClick={() => scrollToSection('Education')}>
                        Education
                    </li>
                    <li className={`${commonClasses} ${activeItem === 'MilitaryService' ? activeClasses : ''}`} onClick={() => scrollToSection('MilitaryService')}>
                        Military Service
                    </li>
                    <li className={`${commonClasses} ${activeItem === 'Contact' ? activeClasses : ''}`} onClick={() => scrollToSection('Contact')}>
                        Contact
                    </li>
                </ul>
            </nav>
        </div>
    );
}
