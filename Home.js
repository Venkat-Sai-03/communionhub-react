import { Link } from "react-router-dom";
import image from "../assets/background.png";

const Home = () => {
    return (
        <div style={{ textAlign: "center", marginTop: "0px" }}>
            {/* Image Container with Overlay */}
            <div style={{ position: "relative", width: "100%", height: "695px", overflow: "hidden" }}>
                {/* Dark Overlay */}
                <div style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}></div>

                {/* Text Overlay */}
                <div style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "white",
                    padding: "20px",
                    fontSize: "26px",
                    fontWeight: "bolder",
                    textAlign: "center",
                    width: "80%"
                }}>
                    <h1 style={{ marginBottom: "10px" }}>Welcome to CommunionHub</h1>
                    <p style={{ fontSize: "20px" }}>
                        Connecting people of all faiths through events and community support.
                    </p>
                    <button style={{
                        padding: "12px",
                        fontSize: "18px",
                        borderRadius: "5px",
                        backgroundColor: "white",
                        border: "none",
                        cursor: "pointer",
                        fontWeight: "bold"
                    }}>
                        <Link to="/events" style={{ textDecoration: "none", color: "#000" }}>
                            Explore Events
                        </Link>
                    </button>
                </div>

                {/* Background Image */}
                <img src={image} alt="Celebration" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
        </div>
    );
};

export default Home;
