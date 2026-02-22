import { h } from "preact";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import PageOverview from "./components/PageOverview.jsx";
import Quotation from "./components/Quotation.jsx";
import BookACall from "./components/BookACall.jsx";
import "./components/PageOverview.css";

export default function TrustTransparency() {
  // SEO
  if (typeof window !== "undefined") {
    document.title = "Trust & Transparency | CloseTech AI";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "See how CloseTech AI is committed to transparency, government data request reporting, child safety, and content moderation."
      );
    } else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content =
        "See how CloseTech AI is committed to transparency, government data request reporting, child safety, and content moderation.";
      document.head.appendChild(m);
    }
  }
  return (
    <div className="container">
      <Header />
      <div className="main-margin-div"></div>
      <PageOverview
        mainHeader="Trust & Transparency"
        subHeader="Openness & Accountability"
        description="Your trust is important to us, and we are dedicated to being transparent about government user data requests, our child safety efforts, and our content moderation practices."
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
        `}</style>
        <h2>Government Data Requests</h2>
        <p>
          We carefully evaluate all requests seeking user data to protect
          privacy and safety and to ensure compliance with applicable law. Our
          process is designed to be rigorous and transparent, and we only
          disclose information when legally required.
        </p>
        <h2>Child Safety</h2>
        <p>
          We are committed to protecting children online. Our systems and
          policies are designed to detect and prevent the exploitation of
          minors, and we work closely with relevant authorities to report and
          address any violations.
        </p>
        <h2>Content Moderation</h2>
        <p>
          We use a combination of automated tools and human review to moderate
          content on our platform. Our goal is to foster a safe, respectful, and
          inclusive environment for all users, while upholding freedom of
          expression and legal requirements.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have questions about our trust and transparency practices,
          please
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
      <Quotation quote="Transparency is the foundation of trust—our commitment to openness empowers our users and strengthens our community." />
      <div className="main-margin-div"></div>
      <BookACall header="Talk to us about trust & transparency" />
      <Footer />
    </div>
  );
}
