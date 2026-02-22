import { h } from "preact";
import "./Buttons.css";

export function LearnMoreButton({ onClick }) {
  return (
    <button
      className="btn-learn-more"
      onClick={onClick || (() => (window.location.href = "/About-Us"))}
    >
      Learn more
      <svg
        className="btn-icon"
        width="11"
        viewBox="0 0 11 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M1.70985 4.5H7.7804M7.7804 4.5V10.5705M7.7804 4.5L0.780396 11.5"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export function ContactUsButton({ onClick }) {
  return (
    <button
      className="btn-contact-us"
      onClick={onClick || (() => (window.location.href = "/Contact-Us"))}
    >
      Contact us
    </button>
  );
}
