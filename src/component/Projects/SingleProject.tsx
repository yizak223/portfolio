import React from 'react';

interface SingleProjectProps {
    logo: string;
    homePage: string;
}

const SingleProject: React.FC<SingleProjectProps> = ({ logo, homePage }) => {
    const containerClasses = "relative flex flex-col items-center gap-2 p-4 transition-opacity duration-300 rounded-lg cursor-pointer bg-slate-400 group";
    const imageClasses = "transition-opacity duration-300 rounded-lg group-hover:opacity-70";
    const overlayClasses = "absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100";
    const textClasses = "p-2 text-white rounded-lg";

    return (
        <div className={containerClasses}>
            <img className={`size-1/3 ${imageClasses}`} src={logo} alt="" />
            <img className={`object-contain w-24 ${imageClasses}`} src={homePage} alt="" />
            <div className={overlayClasses}>
                <p className={`${textClasses} bg-black`}>Visit Site</p>
                <p className={`${textClasses} mt-2 bg-mainblue`}>Go Github</p>
            </div>
        </div>
    );
}

export default SingleProject;
