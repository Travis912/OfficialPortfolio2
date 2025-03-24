import '../styles/Home.css'
import { useState, useEffect } from 'react';
import headshot from '../assets/headshotNoBg.png';
import Carousel from '../components/carousel';
import LamborghiniImg from '../assets/lamborghini.jpeg';
import banffImg from '../assets/banffLouise.jpeg';
import starlink from '../assets/starlink.jpeg';


const Home = () => {

const [opacity, setOpacity] = useState(1);

useEffect(() => {
const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const screenHeight = window.innerHeight;

    if (scrollPosition > screenHeight / 2) {
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
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>TypeScript</li>
                        <li>Redux</li>
                        <li>Git-Hub</li>
                        <li>VScode</li>
                        <li>Responsive Designs</li>
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
    );
};

export default Home;