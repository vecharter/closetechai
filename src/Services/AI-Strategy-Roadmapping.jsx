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

export default function AIStrategyRoadmapping() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // SEO
  if (typeof window !== "undefined") {
    document.title = "AI Strategy & Roadmapping | CloseTech AI";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Develop a clear, actionable strategy for AI adoption and growth. Define your vision and build a step-by-step plan for AI success."
      );
    } else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content =
        "Develop a clear, actionable strategy for AI adoption and growth. Define your vision and build a step-by-step plan for AI success.";
      document.head.appendChild(m);
    }
  }
  return (
    <div className="container">
      <Header />
      <div className="main-margin-div"></div>
      <PageOverview
        mainHeader="AI Strategy & Roadmapping"
        subHeader="Services"
        description="Develop a clear, actionable strategy for AI adoption and growth. Our AI Strategy & Roadmapping service guides you through defining your vision, setting priorities, and building a step-by-step plan to maximize the impact of artificial intelligence in your organization."
        showLearnMore={false}
      />

      <div className="main-margin-div"></div>
      <HeaderBody
        header="Content of the AI Strategy & Roadmapping Session"
        body="Gain a strategic roadmap for integrating AI into your business, tailored to your goals and resources."
      />
      <div className="main-mini-margin-div"></div>
      <SplitCard
        image="/images/roadmap.png"
        alt="Product illustration"
        body={
          <ul className="splitcard-features">
            <li>
              We work with your leadership team to define a compelling AI vision
              and align it with your business objectives and market
              opportunities.
            </li>
            <li>
              We assess your current capabilities, resources, and data to
              identify strengths, gaps, and areas for investment.
            </li>
            <li>
              We help you prioritize AI initiatives based on impact,
              feasibility, and strategic fit, ensuring your roadmap delivers
              measurable value.
            </li>
            <li>
              We outline key milestones, timelines, and resource requirements,
              providing a clear path from concept to deployment.
            </li>
            <li>
              We address change management, stakeholder engagement, and risk
              mitigation to ensure successful adoption and scaling of AI
              solutions.
            </li>
            <li>
              We deliver a comprehensive roadmap document, empowering your team
              to execute with confidence and track progress over time.
            </li>
          </ul>
        }
        imagePosition="left"
      />
      <div className="main-margin-div"></div>
      <Quotation quote="A well-crafted AI strategy is the foundation for lasting transformation—your roadmap is the key to unlocking it." />
      <div className="main-margin-div"></div>
      <BookACall header="Start Your AI Strategy Journey Today" />
      <div className="main-margin-div"></div>
      <Footer />
    </div>
  );
}
