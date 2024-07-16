import me from '../../assets/portfolioImages/me.jpeg';

export default function About() {
    return (
        <section id='About' className='h-95'>
            <div className='h-full text-white flex gap-9 justify-center items-center'>
                <img className='rounded-full object-cover size-64 shadow-lg shadow-[#040c16] ' src={me} alt="me" />
                <div className='leading-loose text-blueText'>
                    <p className="text-sm text-white">Hello, </p>
                    <p className='text-5xl text-blueText'>I am Yitzhak</p>
                    <p className='mb-7'>A Full Stack Developer</p>
                    <p className='w-31 leading-6'>
                        I'm a fullstack developer with a passion for creating engaging and user-friendly applications.
                        I recently graduated from IITC College in Ramat Gan and spent two months interning at a start-up company.
                        My goal is to contribute to the tech community by helping others
                        find solutions to their problems and making them smoother to use.
                    </p>
                </div>
            </div>
        </section>
    );
}
