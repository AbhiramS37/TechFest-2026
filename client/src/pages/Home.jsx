import { Link } from "react-router-dom";

function Home() {
    return (
        <main>
            <section className="hero">
                <div className="hero-content">
                    <p className="eyebrow">THE BIGGEST COLLEGE TECH EVENT</p>
                    <h1>WHERE IDEAS<br />BECOME <span>INNOVATION.</span></h1>
                    <p>
                        Experience technology, creativity and innovation.
                        Join us at TechFest 2026!
                    </p>

                    <div className="hero-buttons">
                        <Link to="/registration" className="primary-btn">
                            Register Now →
                        </Link>
                        <Link to="/gallery" className="secondary-btn">
                            Explore Gallery
                        </Link>
                    </div>
                </div>

                <div className="hero-year">2026</div>
            </section>

            <section className="section">
                <p className="eyebrow">WHAT'S WAITING FOR YOU</p>
                <h2 className="section-title">Experience the Future</h2>

                <div className="feature-grid">
                    <div className="feature-card">
                        <span>01</span>
                        <h3>Technical Events</h3>
                        <p>Showcase your technical skills and compete with brilliant minds.</p>
                    </div>

                    <div className="feature-card">
                        <span>02</span>
                        <h3>Workshops</h3>
                        <p>Learn emerging technologies through interactive sessions.</p>
                    </div>

                    <div className="feature-card">
                        <span>03</span>
                        <h3>Creative Challenges</h3>
                        <p>Bring your imagination to life and explore new possibilities.</p>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <h2>Ready to be part of it?</h2>
                <p>Your next big opportunity starts here.</p>
                <Link to="/registration" className="primary-btn">
                    Join TechFest 2026 →
                </Link>
            </section>
        </main>
    );
}

export default Home;