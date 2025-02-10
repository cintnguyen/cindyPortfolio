import { useState } from "react";
import "./Header.css";

const Header = ({ darkMode, setDarkMode }) => {


    return (
        <nav className={`header ${darkMode ? "dark" : "light"}`}>
            <ul>
                <li><a href="#about">About Me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <button onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
        </nav>



    )
}

export default Header