import { h } from "preact";
import "./BookACall.css";

export default function BookACall({ header = "Ready to get started?" }) {
  const handleBookCall = () => {
    window.open("https://calendly.com/closetechai-pointoai/", "_blank");
  };
  return (
    <div className="main-bookacall-container">
      <div className="second-bookacall-container">
        <div className="third-bookacall-container">
          <div className="bookacall-header">{header}</div>
          <button className="bookacall-btn" onClick={handleBookCall}>
            Book a Call
          </button>
        </div>
      </div>
    </div>
  );
}
