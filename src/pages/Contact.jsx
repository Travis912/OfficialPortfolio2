import '../styles/Contact.css';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const Contact = () => {

const [successMessage, setSuccessMessage] = useState(false);
const form = useRef();

const sendEmail = (e) => {
e.preventDefault();

emailjs
    .sendForm('service_lyc1mrm', 'template_ugwfonr', form.current, {
    publicKey: 'Z-1JEP5h3M5CBotBx',
    })
    .then(
    () => {
        console.log('SUCCESS!');
        setSuccessMessage(true); // Show success message
        setTimeout(() => setSuccessMessage(false), 3000); // Hide after 5 seconds
    },
    (error) => {
        console.log('FAILED...', error.text);
    },
    );
};

    return (
        <section className='enitre-contact-section'>
            <div className="contact-page">
                <div className="contact-content-container">
                    <div className='contact-page-text-container'>
                        <div className="contact-info">
                            <h3>Get In Touch</h3>
                            <p>Travismounsteven@gmail.com</p>
                            <p>(226) 883 - 1999</p>
                        </div>
                        <p>Like what you see? Have feedback on how I can improve? Contact me for any hiring inquires or to leave feedback. </p>
                    </div>
                    <form className='contact-form-container' ref={form} onSubmit={sendEmail}>
                        <div className='contact-form-line'>
                            <label className="" htmlFor="name">Hi, I&apos;m </label>
                            <input className="contact-form-input" type="text" id="name" name="from_name" placeholder='Name*' required />
                        </div>
                        <div className='contact-form-line'>
                            <label htmlFor="company">and I work with </label>
                            <input className="contact-form-input" type="text" id="company" name="user_company" placeholder='Company*' required />
                        </div>
                        <div className='contact-form-line'>
                            <label htmlFor="Phone">You can reach me at </label>
                            <input className="contact-form-input" type="Phone" id="Phone" name="user_phone" placeholder='Phone*' />
                        </div>
                        <div className='contact-form-line'>
                            <label htmlFor="email">or at </label>
                            <input className="contact-form-input" type="email" id="email" name="user_email" placeholder='Email*' required />
                        </div>
                        <div className='contact-form-line'>
                            <label htmlFor="message"></label>
                            <textarea className="contact-form-input" id="message" name="message" placeholder='Message*' required></textarea>
                        </div>
                        <button className="contact-submit-btn" type="submit" value="Send">
                            <h6>Send Message</h6>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                            </svg>
                        </button>
                    </form>
                    {successMessage && ( // Conditionally render success message
                        <div className="success-message">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                            <p>Sent!</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;