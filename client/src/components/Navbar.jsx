import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="logo">
                TECH<span>FEST</span>
                <small>2026</small>
            </Link>

            <div className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/registration">Registration</NavLink>
                <NavLink to="/gallery">Gallery</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>

            <Link to="/registration" className="nav-button">
                Register Now →
            </Link>
        </nav>
    );
}

export default Navbar;