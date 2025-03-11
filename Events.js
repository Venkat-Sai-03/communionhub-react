import { useState, useEffect } from "react";
import EventList from "../components/EventList";
import { Link } from "react-router-dom";
import "../styles/Events.css";

const Events = ({ events }) => {

    const [selectedFilter, setSelectedFilter] = useState("All");

    const filteredEvents = selectedFilter === "All"
        ? events
        : events.filter(event => event.category === selectedFilter);


    useEffect(() => {
        console.log("Updated Events List:", events + ", selectedFilter :: " + selectedFilter);
    }, [events, selectedFilter]);

    return (
        <div>
            <h2 style={{ textAlign: "center" }}> We Helped Communities Connect & Flourish <br />
                ✦ Upcoming Events</h2>

            <div className="filter-buttons" style={{ textAlign: "start", marginLeft: "20px" }}>
                {["All", "Religious", "Social", "Charity"].map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedFilter(category)}
                        style={{
                            margin: "5px",
                            padding: "8px",
                            fontSize: "16px",
                            backgroundColor: selectedFilter === category ? "#007bff" : "#f0f0f0",
                            color: selectedFilter === category ? "white" : "black",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }}
                    >
                        {category}
                    </button>
                ))}

                <button className="submit-btn" style={{ fontSize: "17px", marginLeft: "1000px" }}>
                    <Link to="/add_events" style={{ textDecoration: "none", color: "white" }}>Add New Event +</Link>
                </button>
            </div>



            {filteredEvents.length === 0 ? (
                <p>No upcoming events</p>
            ) : (
                <ul className="event-list">
                    {filteredEvents.map((event) => (
                        <div key={event.id} style={{ padding: "1px" }}>
                            <EventList event={event} />
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Events;
