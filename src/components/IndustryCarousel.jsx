import { h } from "preact";
import "./IndustryCarousel.css";

export default function IndustryCarousel({
  images = [],
  autoScroll = true,
  speed = "30s",
}) {
  return (
    <div className="industry-carousel">
      <div
        className="industry-carousel-track"
        style={{
          animation:
            autoScroll && images.length > 1
              ? `industry-carousel-scroll ${speed} linear infinite`
              : "none",
          width: images.length > 0 ? `${images.length * 220}px` : undefined,
        }}
      >
        {images.concat(images).map((img, i) => (
          <div className="industry-carousel-img-wrapper" key={i}>
            <img
              src={img.src}
              alt={img.alt}
              className="industry-carousel-img"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
