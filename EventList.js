import "../styles/EventList.css"
const EventList = ({ event }) => {
    return (
        <div className="event-list">
            <div key={event.id} className="event-container">
                <div className="event-card">
                    <h3 className="event-name">{event.title}</h3>
                    <p className="event-date">Date: {event.date}</p>
                    <p className="event-category">Category: {event.category}</p>
                    <p className="event-location">Location: {event.location}</p>

                    <button type="submit" className="submit-btn">Event Details</button>
                </div>
            </div>
        </div>
    );
};

export default EventList;





