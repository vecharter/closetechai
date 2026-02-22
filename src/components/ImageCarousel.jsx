import { h } from "preact";
import "./ImageCarousel.css";

export default function ImageCarousel({
  images = [],
  autoScroll = true,
  speed = "20s",
}) {
  return (
    <div className="carousel-container">
      <div
        className={`carousel-track ${autoScroll ? "carousel-animate" : ""}`}
        style={{ animationDuration: speed }}
      >
        {/* Render images twice for seamless looping */}
        {images.map((src, idx) => (
          <div key={`original-${idx}`} className="carousel-item">
            <img src={src} alt={`carousel-${idx}`} />
          </div>
        ))}
        {images.map((src, idx) => (
          <div key={`duplicate-${idx}`} className="carousel-item">
            <img src={src} alt={`carousel-duplicate-${idx}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
