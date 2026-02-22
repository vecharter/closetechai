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

export default function AIIntegrationDeployment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // SEO
  if (typeof window !== "undefined") {
    document.title = "AI Integration & Deployment | CloseTech AI";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Seamlessly integrate and deploy AI solutions into your business processes. Secure, scalable, and efficient AI implementation."
      );
    } else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content =
        "Seamlessly integrate and deploy AI solutions into your business processes. Secure, scalable, and efficient AI implementation.";
      document.head.appendChild(m);
    }
  }
  return (
    <div className="container">
      <Header />
      <div className="main-margin-div"></div>
      <PageOverview
        mainHeader="AI Integration & Deployment"
        subHeader="Services"
        description="Seamlessly integrate and deploy AI solutions into your business processes. Our AI Integration & Deployment service ensures your models and systems are implemented efficiently, securely, and at scale for maximum impact."
        showLearnMore={false}
      />

      <div className="main-margin-div"></div>
      <HeaderBody
        header="Content of the AI Integration & Deployment Service"
        body="Transform your business by operationalizing AI and embedding intelligence into your workflows."
      />
      <div className="main-mini-margin-div"></div>
      <SplitCard
        image="/images/aiintegration.png"
        alt="Product illustration"
        body={
          <ul className="splitcard-features">
            <li>
              We design and implement robust integration strategies to connect
              AI models with your existing systems and data sources.
            </li>
            <li>
              We ensure secure, compliant, and scalable deployment of AI
              solutions across your organization.
            </li>
            <li>
              We provide end-to-end support, from pilot projects to full
              production rollout, minimizing disruption and maximizing value.
            </li>
            <li>
              We monitor performance, optimize models, and provide ongoing
              maintenance to ensure sustained success.
            </li>
            <li>
              We train your teams and provide documentation for smooth adoption
              and long-term management.
            </li>
            <li>
              We help you measure impact, gather feedback, and continuously
              improve your AI deployments.
            </li>
          </ul>
        }
        imagePosition="left"
      />
      <div className="main-margin-div"></div>
      <Quotation quote="True transformation happens when AI is woven into the fabric of your business—our integration service makes it real." />
      <div className="main-margin-div"></div>
      <BookACall header="Start Your AI Integration Journey" />
      <div className="main-margin-div"></div>
      <Footer />
    </div>
  );
}
