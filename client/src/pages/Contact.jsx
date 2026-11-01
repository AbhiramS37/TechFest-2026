function Contact() {
    return (
        <main className="section contact-page">
            <div className="form-heading">
                <p className="eyebrow">WE'RE HERE TO HELP</p>
                <h1>Get in <span>Touch</span></h1>
                <p>Have questions about TechFest 2026? Contact our team.</p>
            </div>

            <div className="contact-grid">
                <div className="contact-card">
                    <span>01</span>
                    <h3>Email</h3>
                    <p>Contact the event organizing team through your college email.</p>
                </div>

                <div className="contact-card">
                    <span>02</span>
                    <h3>Location</h3>
                    <p>Mar Baselios College of Engineering and Technology</p>
                </div>

                <div className="contact-card">
                    <span>03</span>
                    <h3>Event Support</h3>
                    <p>Reach out to the TechFest organizing committee for assistance.</p>
                </div>
            </div>
        </main>
    );
}

export default Contact;