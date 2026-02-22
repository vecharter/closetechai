import { h } from "preact";
import { useEffect } from "preact/hooks";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import HeaderBody from "../components/HeaderBody.jsx";
import PageOverview from "../components/PageOverview.jsx";
import SplitCard from "../components/SplitCard.jsx";
import BookACall from "../components/BookACall.jsx";
import Quotation from "../components/Quotation.jsx";
import "../components/PageOverview.css";

export default function AIShowcaseDemo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // SEO
  if (typeof window !== "undefined") {
    document.title = "AI Showcase Demo | CloseTech AI";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Experience the power of AI in action. Live, interactive demonstrations of cutting-edge AI solutions for your business."
      );
    } else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content =
        "Experience the power of AI in action. Live, interactive demonstrations of cutting-edge AI solutions for your business.";
      document.head.appendChild(m);
    }
  }
  return (
    <div className="container">
      <Header />
      <div className="main-margin-div"></div>
      <PageOverview
        mainHeader="AI Showcase Demo"
        subHeader="Services"
        description="Experience the power of AI in action. The AI Showcase Demo is a live, interactive demonstration of cutting-edge AI solutions tailored to your business needs, designed to inspire, educate, and spark new ideas."
        showLearnMore={false}
      />

      <div className="main-margin-div"></div>
      <HeaderBody
        header="Content of the AI Showcase Demo"
        body="See real-world AI applications and discover how they can transform your organization."
      />
      <div className="main-mini-margin-div"></div>
      <SplitCard
        image="/images/showcase.png"
        alt="Product illustration"
        body={
          <ul className="splitcard-features">
            <li>
              We present live demonstrations of AI models and solutions relevant
              to your industry and business challenges.
            </li>
            <li>
              We showcase practical use cases, workflows, and integrations to
              help you visualize the impact of AI on your operations.
            </li>
            <li>
              We answer your questions and provide expert insights into the
              technology, implementation, and benefits of AI.
            </li>
            <li>
              We offer hands-on opportunities for your team to interact with AI
              tools and explore their capabilities.
            </li>
            <li>
              We discuss next steps for piloting, adopting, or scaling AI
              solutions in your organization.
            </li>
            <li>
              We inspire innovation and help you identify new opportunities for
              AI-driven growth and transformation.
            </li>
          </ul>
        }
        imagePosition="left"
      />
      <div className="main-margin-div"></div>
      <Quotation quote="Seeing is believing—our AI Showcase Demo brings the future to your fingertips." />
      <div className="main-margin-div"></div>
      <BookACall header="Book Your AI Showcase Demo" />
      <div className="main-margin-div"></div>
      <Footer />
    </div>
  );
}
