import { h } from "preact";
import "./Quotation.css";

export default function Quotation({ quote, name }) {
  return (
    <div className="quotation-container">
      <div className="quotation-inner">
        <blockquote className="quotation-quote">“{quote}”</blockquote>
        <div className="quotation-name">{name}</div>
      </div>
    </div>
  );
}
