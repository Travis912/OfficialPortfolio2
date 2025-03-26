import '../styles/Contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {

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
                        <button className="contact-submit-btn" type="submit" value="Send">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;