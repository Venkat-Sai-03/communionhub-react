import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Header.css";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
    const [category, setCategory] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/events") {
            setCategory("upcoming_events");
        } else if (location.pathname === "/add_events") {
            setCategory("add_events");
        } else {
            setCategory("");
        }
    }, [location.pathname]);

    const onCategoryChange = (e) => {
        const selectedEvent = e.target.value;
        setCategory(selectedEvent);
        if (selectedEvent === "upcoming_events") {
            navigate("/events");
        } else if (selectedEvent === "add_events") {
            navigate("/add_events");
        } else {
            navigate("/");
        }
    };

    return (
        <nav className="navbar">
            <img src="logo.png" alt="CommunionHub" className="logo" />
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
            <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                <select value={category} onChange={onCategoryChange} required>
                    <option value="">Events</option>
                    <option value="upcoming_events">Upcoming Events</option>
                    <option value="add_events">Add Events</option>
                </select>
                <Link to="/about" className="about-link" onClick={() => setMenuOpen(false)}>About</Link>
            </div>
        </nav>
    );
};

export default Header;
