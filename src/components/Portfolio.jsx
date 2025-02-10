import { useState } from "react";
import AboutMe from './AboutMe'
import Projects from './Projects'
import "./Portfolio.css";



const Portfolio = () => {


    return (
        <main className="portfolio">
            <section id="about">
                <h2>About Me</h2>
                <p>
                    Hi, I'm Cindy, a software engineer passionate about building interactive and accessible web applications. Welcome to my portfolio!
                </p>
            </section>

            <section id="projects">
                <h2>Projects</h2>
                <p>Here are some of the projects I’ve worked on:</p>
                {/* You can add a ProjectList component later */}
            </section>

            <section id="contact">
                <h2>Contact</h2>
                <p>
                    Feel free to reach out to me at <a href="mailto:your@email.com">your@email.com</a>
                </p>
            </section>
        </main>
    )
}

export default Portfolio