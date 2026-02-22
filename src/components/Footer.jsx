import { h } from "preact";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-columns">
        <div className="footer-col">
          <div className="footer-section">
            <div className="footer-header">Our Research</div>
            <a href="/Research/EcoEfficiency-AI-Model" className="footer-link">
              EcoEfficiency AI Model
            </a>
            <a
              href="/Research/Workplace-Vision-Analytics"
              className="footer-link"
            >
              Workplace Vision Analytics
            </a>
            <a href="/Research/Malware-Analysis-AI" className="footer-link">
              Malware Analysis AI
            </a>
          </div>
          <div className="footer-section">
            <div className="footer-header">Safety</div>
            <a href="/Security-Privacy" className="footer-link">
              Security &amp; Privacy
            </a>
            <a href="/Trust-Transparency" className="footer-link">
              Trust &amp; Transparency
            </a>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-section">
            <div className="footer-header">AI Models</div>
            <a
              href="https://openai.com/gpt-4"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GPT
            </a>
            <a
              href="https://gemini.google.com/"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gemini
            </a>
            <a
              href="https://www.anthropic.com/claude"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Claude
            </a>
          </div>
          <div className="footer-section">
            <div className="footer-header">Company</div>
            <a href="/About-Us" className="footer-link">
              About Us
            </a>
            <a href="/Contact-Us" className="footer-link">
              Contact Us
            </a>
            <a
              href="https://calendly.com/closetechai-pointoai/"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Call
            </a>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-section">
            <div className="footer-header">Services</div>
            <a href="/Services/AI-Discovery-Session" className="footer-link">
              AI Discovery Session
            </a>
            <a href="/Services/AI-Strategy-Roadmapping" className="footer-link">
              AI Strategy &amp; Roadmapping
            </a>
            <a href="/Services/Model-Innovation-Lab" className="footer-link">
              Model Innovation Lab
            </a>
            <a href="/Services/AI-Enablement-Workshop" className="footer-link">
              AI Enablement Workshop
            </a>
            <a href="/Services/AI-Showcase-Demo" className="footer-link">
              AI Showcase Demo
            </a>
            <a
              href="/Services/AI-Integration-Deployment"
              className="footer-link"
            >
              AI Integration &amp; Deployment
            </a>
            <a
              href="/Services/AI-Performance-Optimization"
              className="footer-link"
            >
              AI Performance Optimization
            </a>
          </div>
        </div>
      </div>
      <div className="footer-logo-bottom">
        {/* site logo - place `logo.png` in `public/images/logo.png` */}
        <a href="/" className="footer-logo-link">
          <img
            src="/images/logo.png"
            alt="CloseTechAi"
            className="footer-site-logo"
          />
        </a>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} CloseTechAi. All rights reserved.
      </div>
    </footer>
  );
}
