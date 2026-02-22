import { h } from "preact";
import "./SplitCard.css";

export default function SplitCard({
  image,
  alt = "",
  title,
  body,
  imagePosition = "left",
  children,
}) {
  const isLeft = imagePosition === "left";

  return (
    <div className={`split-card-main`}>
      <div className={`split-card ${isLeft ? "image-left" : "image-right"}`}>
        <div className="split-card__image">
          <img src={image} alt={alt} />
        </div>
        <div className="split-card__content">
          {title && <h3 className="split-card__title">{title}</h3>}

          {/* Render `body` as JSX/node. If it's a string, wrap in a paragraph. */}
          {body &&
            (typeof body === "string" ? (
              <p className="split-card__body">{body}</p>
            ) : (
              <div className="split-card__body">{body}</div>
            ))}

          {children}
        </div>
      </div>
    </div>
  );
}
