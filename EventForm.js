import { useState } from "react";

const EventForm = ({ addEvent }) => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && date && category) {
            addEvent({ id: Date.now(), title, date, category });
            setTitle("");
            setDate("");
            setCategory("");
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
            <input type="text" placeholder="Event Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                <option value="">Select Category</option>
                <option value="Religious">Religious</option>
                <option value="Social">Social</option>
                <option value="Charity">Charity</option>
            </select>
            <button type="submit">Add Event</button>
        </form>
    );
};

export default EventForm;
