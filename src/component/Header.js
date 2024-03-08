import { useState } from 'react';
import { MdMenu } from "react-icons/md";
export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-black md:bg-inherit text-white md:text-black px-10 xl:px-56 py-5  z-10" id="home">
            <div className="flex flex-row justify-between items-center">
                <div className="logo text-lg md:text-2xl font-bold">Mayur</div>
                <nav className="lg:flex hidden">
                    <ul className="flex gap-10 text-lg">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#resume">Resume</a></li>
                        <li><a href="#page-2">Skills</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="lg:hidden cursor-pointer text-lg text-gray-400  flex items-center" onClick={toggleMenu}>
                    
                <MdMenu className="mr-1 "  /> MENU
                </div>
            </div>
            {menuOpen && (
                <nav className="lg:hidden flex flex-col items-end pt-3">
                    <ul className="flex flex-col gap-2 items-end text-sm">
                    <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#resume">Resume</a></li>
                        <li><a href="#page-2">Skills</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            )}
        </header>
    )
}
