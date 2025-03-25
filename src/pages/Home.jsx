import '../styles/Home.css'
import { useState, useEffect } from 'react';
import headshot from '../assets/headshotNoBg.png';
import Carousel from '../components/carousel';
import LamborghiniImg from '../assets/lamborghini.jpeg';
import banffImg from '../assets/banffLouise.jpeg';
import starlink from '../assets/starlink.jpeg';

/* Expertise Logo's */
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import redux from '../assets/redux.png';
import typescript from '../assets/typescript.png';
import github from '../assets/github.png';
import vscode from '../assets/vscode.png';
import responsive from '../assets/responsivedesign.png';

const Home = () => {

const [opacity, setOpacity] = useState(1);

useEffect(() => {
const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const screenHeight = window.innerHeight;

    if (scrollPosition > screenHeight / 1.5) {
    setOpacity(0);
    } else {
    setOpacity(1);
    }
};

window.addEventListener('scroll', handleScroll);

return () => {
    window.removeEventListener('scroll', handleScroll);
};
}, []);

    return (
        <>
        <div className="home-container">

            <header className="home-header">

                <div className='home-header-and-text-container'>

                    <div className='home-header-text-container' style={{ opacity: opacity }}>
                        <div className='home-header-text'>
                            <h4>Hello</h4>
                            <h1>I&apos;m <span>Travis</span></h1>
                            <h1>Front-End Engineer</h1>
                            <a href="/#/contact" className="contact-button">Contact Me</a>
                        </div>
                    </div>

                    <div className='home-header-img' style={{ opacity: opacity }}>
                        <img src={headshot} alt="Travis" />
                    </div>
                </div>
            </header>

            <body className="home-body">

                <section className="home-expertise">
                    <h2>My Expertise:</h2>
                    <ul className='expertise-list'>
                        <li><img className='expertise-logos' src={react} alt='React'></img></li>
                        <li><img className='expertise-logos' src={javascript} alt='JavaScript'></img></li>
                        <li><img className='expertise-logos' src={html} alt='HTML'></img></li>
                        <li><img className='expertise-logos' src={css} alt='CSS'></img></li>
                        <li><img className='expertise-logos' src={typescript} alt='TypeScript'></img></li>
                        <li><img className='expertise-logos' src={redux} alt='Redux'></img></li>
                        <li><img className='expertise-logos' src={github} alt='Git-hub'></img></li>
                        <li><img className='expertise-logos' src={vscode} alt='Visual Studio Code'></img></li>
                        <div className='responsive-design'>
                            <img src={responsive} alt='Responsive Designs'></img>
                            <p>Responisve Designs</p>
                        </div>
                    </ul>
                </section>

                <section className="home-video-container">
                    <h2>Me in 30 seconds</h2>
                    <iframe
                        className='video'
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </section>

                <section className="home-about">
                    <h2>Over The Past Few Years</h2>
                    <br></br>
                    <p>
                        Two years ago I was working as a Paramedic, but I was not content. I knew I wanted to become a Software Engineer and decided to take the leap into the world of web development. So I started learning.
                    </p>
                    <br></br>
                    <p>
                        Some of the courses I have completed include CS50 offered by Harvard University, Front-End Expert by the AlgoExpert team, and credited with a Font-End Development Certification from Meta.
                    </p>
                    <br></br>
                    <p>
                        I have been honing my skills by building a variety of projects, including this portfolio site, and many projects. Some of which you can view in the projects section. I am always eager to learn more and grow as a developer and I pride myself in the work I do.
                    </p>
                    <br></br>
                    <p>
                        Please leave me any feedback or hiring inquires you have in the contact section.
                    </p>

                </section>
            </body>
            <section className='ft-section'>
                <div className='ft-section-heading-container'>
                    <h2 id='featured-projects-heading'>Featured Projects</h2>
                </div>
                <section className="home-projects">
                    <Carousel images={[
                        {image: LamborghiniImg, link: '/#/lamborghini'},
                        {image: starlink, link: '/#/starlink'},
                        {image: banffImg, link: '/#/banff'},
                        ]}></Carousel>
                </section>
            </section>
        </div>
        <footer className='home-page-footer'>
                 <div className="footer-contact-btn-div">
                    <a href="/#/contact" className="contact-button">Contact Me</a>
                    <a href="#" className="contact-button back-to-top-btn">Back To Top</a>
                </div>
            </footer>
        </>
    );
};

export default Home;