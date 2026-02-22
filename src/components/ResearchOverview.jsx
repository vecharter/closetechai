import { h } from "preact";
import "./ResearchOverview.css";
import HeaderBody from "./HeaderBody.jsx";

const researchItems = [
  {
    src: "/images/ecoefficency.png",
    label:
      "EcoEfficiency AI Model — a fast-training, energy-efficient AI for smarter learning.",
    link: "/Research/EcoEfficiency-AI-Model",
  },
  {
    src: "/images/aisurvelliance.png",
    label:
      "Workplace Vision Analytics — an AI system that identifies activity patterns to improve workflow.",
    link: "/Research/Workplace-Vision-Analytics",
  },
  {
    src: "/images/malware.png",
    label:
      "Malware Analysis AI — quickly detects and analyzes malicious software.",
    link: "/Research/Malware-Analysis-AI",
  },
];

export default function ResearchOverview() {
  return (
    <section className="research-overview">
      <HeaderBody
        header="AI Research in Progress"
        body="Our active research drives the advanced AI strategies and tools we
          bring to every engagement."
      />
      <div className="main-mini-margin-div"></div>

      <div className="research-list">
        {researchItems.map((item) => (
          <div
            className="research-item"
            key={item.label}
            style={{ cursor: "pointer" }}
            onClick={() => (window.location.href = item.link)}
            tabIndex={0}
            role="button"
            onKeyPress={(e) => {
              if (e.key === "Enter" || e.key === " ")
                window.location.href = item.link;
            }}
            aria-label={item.label}
          >
            <img src={item.src} alt={item.label} className="research-img" />
            <div className="research-img-label">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
