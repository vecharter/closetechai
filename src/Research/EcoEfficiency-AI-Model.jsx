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

export default function EcoEfficiencyAIModel() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // SEO
  if (typeof window !== "undefined") {
    document.title = "EcoEfficiency AI Model | CloseTech AI Research";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Discover our research on eco-efficient AI models that minimize energy consumption and maximize learning from minimal data."
      );
    } else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content =
        "Discover our research on eco-efficient AI models that minimize energy consumption and maximize learning from minimal data.";
      document.head.appendChild(m);
    }
  }
  return (
    <div className="container">
      <Header />
      <div className="main-margin-div"></div>
      <PageOverview
        mainHeader="EcoEfficiency AI Model"
        subHeader="Research"
        description="We are actively researching and developing AI models that are eco-efficient—designed to minimize energy consumption and maximize learning from minimal training data. Our goal is to enable smarter, greener AI for the future."
        showLearnMore={false}
      />
      <div className="main-margin-div"></div>
      <HeaderBody
        header="Our Mission: Smarter, Greener AI"
        body="We are working to make AI models more eco-efficient by reducing the amount of training data required and lowering the energy footprint of model development. Our research focuses on innovative architectures, data-efficient learning, and sustainable AI practices."
      />
      <div className="main-mini-margin-div"></div>
      <SplitCard
        image="/images/ecoefficency.png"
        alt="EcoEfficiency AI Model illustration"
        body={
          <ul className="splitcard-features">
            <li>
              Researching model architectures that require less data for
              effective training, enabling rapid deployment with minimal
              resources.
            </li>
            <li>
              Developing energy-efficient training techniques to reduce the
              carbon footprint of AI development and operation.
            </li>
            <li>
              Experimenting with transfer learning and data augmentation to
              maximize learning from small datasets.
            </li>
            <li>
              Building tools to monitor and optimize energy usage during model
              training and inference.
            </li>
            <li>
              Collaborating with academic and industry partners to advance
              sustainable AI research and share best practices.
            </li>
            <li>
              Committed to open science—publishing results, sharing code, and
              enabling others to build eco-efficient AI solutions.
            </li>
          </ul>
        }
        imagePosition="left"
      />
      <div className="main-margin-div"></div>
      <Quotation quote="Our vision is to make AI smarter and greener—achieving high performance with minimal data and energy." />
      <div className="main-margin-div"></div>
      <BookACall header="Connect With Us About Eco-Efficient AI Research" />
      <div className="main-margin-div"></div>
      <Footer />
    </div>
  );
}
