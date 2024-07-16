import me from '../../assets/me.jpeg';
// import me2 from '../../assets/me2.jpeg';

export default function About() {
    return (
        <section id='About'>
            <div className='bg-mainblue h-66 text-white flex p-2 justify-around items-center'>
                <img className='rounded-lg object-cover w-40 h-63' src={me} alt="me" />
                <h1 className="text-7xl w-2/5 leading-tight">Hello there! <br /> My name is Yitzhak Alaluf</h1>
            </div>
            <div>
                <h2 className="text-3xl font-bold p-6">About Me</h2>
                <p className="text-lg p-6">
                    I'm a fullstack developer with a passion for creating engaging and user-friendly applications. I have recently graduated from the Coding Academy in Tel Aviv and have been working remotely for the past year. My goal is to contribute to the tech community by helping others find solutions to their problems and making them smoother to use.
                </p>
            </div>
        </section>
    );
}
