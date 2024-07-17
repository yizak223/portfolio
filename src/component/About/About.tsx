import me from '../../assets/portfolioImages/me.jpeg';

export default function About() {
    return (
        <section id='About' className='h-95'>
            <div className='h-full flex gap-9 justify-center items-center'>
                <div className='bg-white flex gap-9 justify-around items-center w-75 h-75 rounded-lg'>
                    <img className='rounded-l-lg object-cover size-full shadow-lg shadow-[#040c16] ' src={me} alt="me" />
                    <div className='leading-loose text-black'>
                        <div className='flex flex-col items-center'>
                            <p className="text-sm text-black ">Hello, </p>
                            <p className='text-5xl text-blueText '>I am Yitzhak</p>
                            <p className='mb-7 font-bold'>A Full Stack Developer</p>
                        </div>
                        <p className='w-30  p-2 leading-6'>
                            I'm a fullstack developer with a passion for creating engaging and user-friendly applications.
                            I recently graduated from IITC College in Ramat Gan and spent two months interning at a start-up company.
                            My goal is to contribute to the tech community by helping others
                            find solutions to their problems and making them smoother to use.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
