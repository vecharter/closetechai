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

export default function WorkplaceVisionAnalytics() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // SEO
  if (typeof window !== "undefined") {
    document.title = "Workplace Vision Analytics | CloseTech AI Research";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Explore our research on computer vision AI systems for workplace efficiency, compliance, and safety analytics."
      );
    } else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content =
        "Explore our research on computer vision AI systems for workplace efficiency, compliance, and safety analytics.";
      document.head.appendChild(m);
    }
  }
  return (
    <div className="container">
      <Header />
      <div className="main-margin-div"></div>
      <PageOverview
        mainHeader="Workplace Vision Analytics"
        subHeader="Research"
        description="We are developing a computer vision AI system to analyze workplace efficiency and compliance. Our goal is to help organizations monitor employee productivity and adherence to rules and regulations using advanced camera-based analytics."
        showLearnMore={false}
      />
      <div className="main-margin-div"></div>
      <HeaderBody
        header="Building Smarter, Safer Workplaces"
        body="Our research focuses on leveraging computer vision to provide actionable insights into workplace behavior, efficiency, and compliance. We aim to empower organizations to create productive and safe environments."
      />
      <div className="main-mini-margin-div"></div>
      <SplitCard
        image="/images/aisurvelliance.png"
        alt="Workplace Vision Analytics illustration"
        body={
          <ul className="splitcard-features">
            <li>
              Designing AI models that detect and analyze employee activity,
              work patterns, and engagement levels through camera feeds.
            </li>
            <li>
              Monitoring compliance with workplace rules, safety protocols, and
              organizational policies in real time.
            </li>
            <li>
              Identifying areas for improvement in workflow, collaboration, and
              resource utilization.
            </li>
            <li>
              Ensuring privacy and ethical use of computer vision technologies
              in workplace settings.
            </li>
            <li>
              Providing customizable analytics dashboards for managers and HR
              teams to track efficiency and compliance metrics.
            </li>
            <li>
              Collaborating with industry partners to validate and enhance our
              computer vision models for diverse workplace environments.
            </li>
          </ul>
        }
        imagePosition="left"
      />
      <div className="main-margin-div"></div>
      <Quotation quote="Empowering organizations to build efficient, compliant, and safe workplaces through computer vision AI." />
      <div className="main-margin-div"></div>
      <BookACall header="Learn More About Workplace Vision Analytics" />
      <div className="main-margin-div"></div>
      <Footer />
    </div>
  );
}
