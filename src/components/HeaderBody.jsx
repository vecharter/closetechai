import { h } from "preact";
import "./HeaderBody.css";

export default function HeaderBody({ header, body }) {
  return (
    <div className="headerbody">
      <div className="headerbody-title-div-container">
        <div className="headerbody-title-div">
          <h1 className="headerbody-title">{header}</h1>
          <p className="headerbody-title-description">{body}</p>
        </div>
      </div>
    </div>
  );
}
