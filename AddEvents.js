import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AddEvents.css";
import { Link } from "react-router-dom";

const AddEvents = ({ addEvent }) => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("");
    const [location, setLocation] = useState("");
    const navigate = useNavigate();
    const [newEvent, setNewEvent] = useState({ title: "", date: "", category: "", location: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newEvent.title || !newEvent.date || !newEvent.category || !newEvent.location) {
            alert("All fields are required!");
            return;
        }

        addEvent({ ...newEvent, id: Date.now() });
        navigate("/events");
    };

    return (
        <div>
            <div style={{ position: "fixed", top: "100px", right: "150px" }}>
                <button className="submit-btn" style={{ padding: "8px", fontSize: "17px" }}>
                    <Link to="/events" style={{ textDecoration: "none", color: "#000" }}>All Events</Link>
                </button>
            </div>

            <div className="card" style={{ marginTop: "60px" }}>
                <h2 className="card-title">Add New Event</h2>
                <form onSubmit={handleSubmit} className="form">
                    <input type="text" placeholder="Title" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                    <input type="date" placeholder="Date" value={newEvent.date} onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })} />
                    <select value={newEvent.category} onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}>
                        <option value="">Select Category</option>
                        <option value="Charity">Charity</option>
                        <option value="Religious">Religious</option>
                        <option value="Social">Social</option>
                    </select>
                    <input type="text" placeholder="Location" value={newEvent.location} onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })} />
                    <button type="submit" className="submit-btn">Add Event</button>
                </form>
            </div>
        </div>
    );
};

export default AddEvents;