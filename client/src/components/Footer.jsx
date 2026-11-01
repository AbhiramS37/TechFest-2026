import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div>
                <h2>TECHFEST 2026</h2>
                <p>Innovate. Create. Inspire.</p>
            </div>

            <div className="footer-links">
                <Link to="/">Home</Link>
                <Link to="/registration">Register</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </div>

            <p className="copyright">
                © 2026 TechFest. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;