import { h } from "preact";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import PageOverview from "./components/PageOverview.jsx";
import Quotation from "./components/Quotation.jsx";
import BookACall from "./components/BookACall.jsx";
import "./components/PageOverview.css";

export default function SecurityPrivacy() {
  // SEO
  if (typeof window !== "undefined") {
    document.title = "Security & Privacy | CloseTech AI";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Learn how CloseTech AI protects your data, ensures privacy, and meets compliance standards with advanced security practices."
      );
    } else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content =
        "Learn how CloseTech AI protects your data, ensures privacy, and meets compliance standards with advanced security practices.";
      document.head.appendChild(m);
    }
  }
  return (
    <div className="container">
      <Header />
      <div className="main-margin-div"></div>
      <PageOverview
        mainHeader="Security & Privacy"
        subHeader="Trust & Data Protection"
        description="We're committed to building trust in our organization and platform by protecting our customer and user data, models, and products."
        showLearnMore={false}
        showContactUs={true}
      />
      <div className="main-mini-margin-div"></div>
      <div
        className="content-section"
        style={{
          color: "#fff",
          maxWidth: 700,
          margin: "0 auto",
          fontSize: "1.1rem",
          lineHeight: 1.7,
        }}
      >
        <style>{`
          .content-section p { font-weight: 300; }
          .content-section h2 { margin-top: 2.2em; }
          .content-section .faq-list li { font-weight: 300; }
        `}</style>
        <h2>Customer requirements</h2>
        <p>
          We strive to support our customers with regulatory, industry, and
          contractual requirements such as HIPAA.
        </p>
        <h2>Data Protection</h2>
        <p>
          Protecting your data is our top priority. We employ industry-leading
          encryption, access controls, and monitoring to safeguard your
          information at every stage—whether in transit, at rest, or in use by
          our AI models.
        </p>
        <h2>Compliance & Certifications</h2>
        <p>
          Our platform is designed to help you meet your compliance obligations.
          We regularly review our processes and controls to align with standards
          such as GDPR, SOC 2, and other relevant frameworks. Documentation and
          audit support are available upon request.
        </p>
        <h2>Security Practices</h2>
        <ul>
          <li>Regular security assessments and penetration testing</li>
          <li>Strict access management and employee training</li>
          <li>Continuous monitoring for threats and vulnerabilities</li>
          <li>Incident response plans and rapid mitigation</li>
        </ul>
        <h2>Privacy Commitment</h2>
        <p>
          We are committed to transparency in how we collect, use, and store
          data. Our privacy policy outlines your rights and our
          responsibilities. We never sell customer data and only use it to
          provide and improve our services.
        </p>
        <h2>AI Model Security</h2>
        <p>
          Our AI models are developed and deployed with security in mind. We
          implement rigorous controls to prevent unauthorized access,
          adversarial attacks, and data leakage. Model updates are reviewed and
          tested for security vulnerabilities before release.
        </p>
        <h2>Data Residency & Sovereignty</h2>
        <p>
          We offer flexible data residency options to help you comply with local
          regulations and organizational policies. Your data can be stored and
          processed in specific geographic regions as required by your business
          or legal needs.
        </p>
        <h2>Responsible AI</h2>
        <p>
          We are committed to building AI systems that are ethical, fair, and
          transparent. Our development process includes bias assessments,
          explainability reviews, and ongoing monitoring to ensure our models
          serve all users equitably.
        </p>
        <h2>User Empowerment</h2>
        <p>
          We provide tools and resources to help you manage your data, review
          access logs, and configure privacy settings. You are always in control
          of your information and can request data export or deletion at any
          time.
        </p>
        <h2>Frequently Asked Questions</h2>
        <ul className="faq-list">
          <li>
            <strong>How do you handle data breaches?</strong>
            <br />
            We have a robust incident response plan in place. In the unlikely
            event of a breach, we notify affected customers promptly and take
            immediate action to mitigate risks.
          </li>
          <li>
            <strong>Can I request my data to be deleted?</strong>
            <br />
            Yes, you can request data deletion at any time by contacting our
            support team or using our privacy tools.
          </li>
          <li>
            <strong>Where is my data stored?</strong>
            <br />
            We offer data residency options and can store your data in specific
            regions to meet your compliance needs.
          </li>
          <li>
            <strong>How do you ensure AI model fairness?</strong>
            <br />
            We conduct regular bias and fairness assessments and are committed
            to transparency in our AI development process.
          </li>
        </ul>
        <h2>Contact Us</h2>
        <p>
          If you have questions about our security or privacy practices, please{" "}
          <a
            href="/Contact-Us"
            style={{ color: "#ffffff", textDecoration: "underline" }}
          >
            contact us
          </a>
          .
        </p>
      </div>
      <div className="main-margin-div"></div>
      <Quotation quote="Security and privacy are not just features—they are our foundation for trust and innovation." />
      <div className="main-margin-div"></div>
      <BookACall header="Discuss your security & privacy needs with our experts" />
      <Footer />
    </div>
  );
}
