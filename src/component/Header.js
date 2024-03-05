import { useState } from 'react';
import { MdMenu } from "react-icons/md";
export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-black md:bg-inherit text-white md:text-black px-10 md:px-56 py-5  z-10">
            <div className="flex flex-row justify-between items-center">
                <div className="logo text-lg md:text-2xl font-bold">Mayur</div>
                <nav className="md:flex hidden">
                    <ul className="flex gap-10 text-lg">
                        <li>Home</li>
                        <li>About</li>
                        <li>Resume</li>
                        <li>Skills</li>
                        <li>Services</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <div className="md:hidden cursor-pointer text-lg text-gray-400  flex items-center" onClick={toggleMenu}>
                    
                <MdMenu className="mr-1 "  /> MENU
                </div>
            </div>
            {menuOpen && (
                <nav className="md:hidden flex flex-col items-end pt-3">
                    <ul className="flex flex-col gap-2 items-end text-sm">
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            )}
        </header>
    )
}
