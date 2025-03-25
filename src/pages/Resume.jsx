import '../styles/Resume.css';

const Resume = () => {
    return (
        <>
            <section className='enitre-resume-section'>
                <div className="Resume-page">
                    <h1>About Me</h1>
                        <p>Welcome to my portfolio! I am a passionate developer with experience in various technologies.</p>
                    <h1>Experience</h1>
                        <ul className='resume-list-containers'>
                            <li>
                                <p><span className='resume-title'>Social Media Manager </span>2023 - present</p>
                            </li>
                            <li>
                                <p><span className='resume-title'>Patient Care Assistant </span> 2022 - present</p>
                            </li>
                            <li>
                                <p><span className='resume-title'>Paramedic </span>2022 </p>
                            </li>
                            <li>
                                <p><span className='resume-title'>Paramedic Support Staff </span> 2022</p>
                            </li>
                            <li>
                                <p><span className='resume-title'>Student Emergency Response Team Lead </span>2021 - 2022</p>
                            </li>
                        </ul>
                    <h1>Education</h1>
                        <ul className='resume-list-containers'>
                            <li>
                                <p><span className='resume-title'>Meta Front-End Developer Specialization </span> 2024</p>
                            </li>
                            <li>
                                <p><span className='resume-title'>Fanshawe College Paramedic Program </span> 2022</p>
                            </li>
                            <li>
                                <p><span className='resume-title'>Fanshawe College Pre-health Sciences Program </span> 2020</p>
                            </li>
                        </ul>
                    <h1>Volunteering</h1>
                        <ul className='resume-list-containers'>
                            <li>
                                <p><span className='resume-title'>Realtor&apos;s Care Food Drive </span> 2010 - present</p>
                                <p className='resume-details'>I go door to door in my local community spreading awreness for the food drive and collect food.</p>
                            </li>
                            <li>
                                <p><span className='resume-title'>Spring Clean-up </span> 2006 - present</p>
                                <p className='resume-details'>In an assigned area I go clean up any litter every spring in my local community.</p>
                            </li>
                            <li>
                                <p><span className='resume-title'>Peer Mentor </span>2021 - 2023</p>
                                <p className='resume-details'>Volunteered as a peer mentor for the Paramedic Program. I mentored a few students in the year below mine in the program. I helped them prepare to be the best Paramedic they could be, in any way I could.</p>
                            </li>
                            <li>
                                <p><span className='resume-title'>Volunteer Student Representative </span> 2020 - 2022</p>
                                <p className='resume-details'>At Fanshawe College&apos;s Paramedic Program I was voted in as the Volunteer Student Representative by my peers. I was responsible for researching, organizing and running volunteer events and opportunities the paramedic program could run for our program, paramedics, the school and for the community.</p>
                            </li>
                            <li>
                                <p><span className='resume-title'>Student Emergency Response Team Member </span> 2020 </p>
                                <p className='resume-details'> Volunteered for a minimum of four hours a week to be Fanshawe College&apos;s on site first responder. I would respond to any emergencies on the college&apos;s property to provide care and transfer care to any additional emergency services if needed. After one year, I applied and was hired by Fanshawe as the Team Leader for the department and run all activities.</p>
                            </li>
                            <li>
                                <p><span className='resume-title'>First Aider </span> 2019</p>
                                <p className='resume-details'>Provided first aid response at the St Thomas christmas parade</p>
                            </li>
                        </ul>
                    <h1>Honors and Awards</h1>
                        <ul className='resume-list-containers'>
                            <li>
                                <p><span className='resume-title'>Dean&apos;s Honour Roll </span> 2019 </p>
                                <p className='resume-details'> Acheived a GPA greater than 3.9 for the term and was accredited by Fanshawe College</p>
                            </li>
                            <li>
                                <p><span className='resume-title'>Highest Standing for Introductory Kinesiology PSK4U1 </span></p>
                                <p className='resume-details'>Accredited by Ingersoll District Collegiate Institute</p>
                            </li>
                        </ul>
                </div>
            </section>
            <footer className='home-page-footer'>
                    <div className="footer-contact-btn-div">
                    <a onClick={() => window.scrollTo({ top: 0 })} href="/#/contact" className="resume-contact-btn">CONTACT ME</a>
                    <a onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="contact-button back-to-top-btn">Back To Top</a>
                </div>
            </footer>
        </>
    );
};

export default Resume;