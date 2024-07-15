export default function NavBar() {
    return (
        <div className="flex justify-center">
            <nav className='sticky flex justify-between w-3/4'>
                <div >
                    <h1>LOGO</h1>
                </div>
                <ul className='flex m-0 p-0 list-none'>
                    <li className='mx-2'>About</li>
                    <li className='mx-2'>Projects</li>
                    <li className='mx-2'>Education</li>
                    <li className='mx-2'>Military Service</li>
                    <li className='mx-2'>Others</li>
                </ul>
            </nav>
        </div>
    )
}
