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

export default function AIPerformanceOptimization() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // SEO
  if (typeof window !== "undefined") {
    document.title = "AI Performance Optimization | CloseTech AI";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Maximize the value of your AI investments. Analyze, tune, and enhance your AI models and systems for optimal results.",
      );
    } else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content =
        "Maximize the value of your AI investments. Analyze, tune, and enhance your AI models and systems for optimal results.";
      document.head.appendChild(m);
    }
  }
  return (
    <div className="container">
      <Header />
      <div className="main-margin-div"></div>
      <PageOverview
        mainHeader="AI Performance Optimization"
        subHeader="Services"
        description="Maximize the value of your AI investments. Our AI Performance Optimization service analyzes, tunes, and enhances your AI models and systems to ensure they deliver the best possible results for your business."
        showLearnMore={false}
      />

      <div className="main-margin-div"></div>
      <HeaderBody
        header="Content of the AI Performance Optimization Service"
        body="Unlock greater accuracy, efficiency, and ROI from your AI solutions with expert optimization."
      />
      <div className="main-mini-margin-div"></div>
      <SplitCard
        image="/images/performance.png"
        alt="Product illustration"
        body={
          <ul className="splitcard-features">
            <li>
              We review your deployed AI models and systems to identify
              bottlenecks, inefficiencies, and areas for improvement.
            </li>
            <li>
              We analyze data pipelines, feature engineering, and model
              architectures to boost performance and reliability.
            </li>
            <li>
              We fine-tune models, retrain with new data, and implement advanced
              techniques to enhance accuracy and speed.
            </li>
            <li>
              We monitor real-world performance, provide actionable insights,
              and recommend ongoing improvements.
            </li>
            <li>
              We help you reduce costs, minimize latency, and ensure your AI
              solutions scale with your business needs.
            </li>
            <li>
              We empower your team with best practices and tools for continuous
              optimization and success.
            </li>
          </ul>
        }
        imagePosition="left"
      />
      <div className="main-margin-div"></div>
      <Quotation quote="Optimization is the key to sustainable AI success—let us help you unlock your models’ full potential." />
      <div className="main-margin-div"></div>
      <BookACall header="Optimize Your AI Performance Today" />
      <div className="main-margin-div"></div>
      <Footer />
    </div>
  );
}
