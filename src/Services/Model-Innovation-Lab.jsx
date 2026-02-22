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

export default function ModelInnovationLab() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // SEO
  if (typeof window !== "undefined") {
    document.title = "Model Innovation Lab | CloseTech AI";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Experiment, prototype, and validate AI models tailored to your business. Collaborate with experts to rapidly test and deploy custom AI solutions."
      );
    } else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content =
        "Experiment, prototype, and validate AI models tailored to your business. Collaborate with experts to rapidly test and deploy custom AI solutions.";
      document.head.appendChild(m);
    }
  }
  return (
    <div className="container">
      <Header />
      <div className="main-margin-div"></div>
      <PageOverview
        mainHeader="Model Innovation Lab"
        subHeader="Services"
        description="Experiment, prototype, and validate AI models tailored to your business. The Model Innovation Lab is a hands-on environment where your team collaborates with our experts to rapidly test, iterate, and deploy custom AI solutions."
        showLearnMore={false}
      />

      <div className="main-margin-div"></div>
      <HeaderBody
        header="Content of the Model Innovation Lab"
        body="Accelerate your AI journey by building, testing, and refining models in a collaborative lab setting."
      />
      <div className="main-mini-margin-div"></div>
      <SplitCard
        image="/images/aimodel.png"
        alt="Product illustration"
        body={
          <ul className="splitcard-features">
            <li>
              We work closely with your team to define project goals, success
              metrics, and the scope of your AI model experiments.
            </li>
            <li>
              We provide access to state-of-the-art tools, frameworks, and
              datasets to accelerate model development and testing.
            </li>
            <li>
              We guide you through rapid prototyping, helping you iterate on
              model architectures, features, and training strategies.
            </li>
            <li>
              We evaluate model performance, interpretability, and business
              impact, ensuring your solutions are robust and actionable.
            </li>
            <li>
              We document findings, lessons learned, and next steps, empowering
              your team to scale successful prototypes into production.
            </li>
            <li>
              We foster a culture of innovation, experimentation, and continuous
              improvement throughout your AI journey.
            </li>
          </ul>
        }
        imagePosition="left"
      />
      <div className="main-margin-div"></div>
      <Quotation quote="Innovation thrives where experimentation is encouraged—your Model Innovation Lab is the launchpad for AI breakthroughs." />
      <div className="main-margin-div"></div>
      <BookACall header="Start Your Model Innovation Lab Today" />
      <div className="main-margin-div"></div>
      <Footer />
    </div>
  );
}
