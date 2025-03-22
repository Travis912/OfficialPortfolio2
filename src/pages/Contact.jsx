import '../styles/Contact.css';

const Contact = () => {
    return (
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
                <form className='contact-form-container'>
                    <div className='contact-form-line'>
                        <label className="" htmlFor="name">Hi, I&apos;m </label>
                        <input className="contact-form-input" type="text" id="name" name="name" placeholder='Name*' required />
                    </div>
                    <div className='contact-form-line'>
                        <label htmlFor="company">and I work with </label>
                        <input className="contact-form-input" type="email" id="company" name="company" placeholder='Company*' required />
                    </div>
                    <div className='contact-form-line'>
                        <label htmlFor="Phone">You can reach me at </label>
                        <input className="contact-form-input" type="Phone" id="Phone" name="Phone" placeholder='Phone*' />
                    </div>
                    <div className='contact-form-line'>
                        <label htmlFor="email">or at </label>
                        <input className="contact-form-input" type="email" id="email" name="email" placeholder='Email*' required />
                    </div>
                    <div className='contact-form-line'>
                        <label htmlFor="message"></label>
                        <textarea className="contact-form-input" id="message" name="message" placeholder='Message*' required></textarea>
                    </div>
                    <button className="contact-submit-btn" type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;