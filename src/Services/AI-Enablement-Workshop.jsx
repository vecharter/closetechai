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

export default function AIEnablementWorkshop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // SEO
  if (typeof window !== "undefined") {
    document.title = "AI Enablement Workshop | CloseTech AI";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Empower your team with hands-on AI training and enablement. Build foundational knowledge and practical skills for AI adoption."
      );
    } else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content =
        "Empower your team with hands-on AI training and enablement. Build foundational knowledge and practical skills for AI adoption.";
      document.head.appendChild(m);
    }
  }
  return (
    <div className="container">
      <Header />
      <div className="main-margin-div"></div>
      <PageOverview
        mainHeader="AI Enablement Workshop"
        subHeader="Services"
        description="Empower your team with hands-on AI training and enablement. The AI Enablement Workshop is designed to build foundational knowledge, practical skills, and confidence for adopting and leveraging AI in your organization."
        showLearnMore={false}
      />

      <div className="main-margin-div"></div>
      <HeaderBody
        header="Content of the AI Enablement Workshop"
        body="Equip your workforce with the skills and mindset needed to succeed in an AI-driven world."
      />
      <div className="main-mini-margin-div"></div>
      <SplitCard
        image="/images/showcase.png"
        alt="Product illustration"
        body={
          <ul className="splitcard-features">
            <li>
              We deliver interactive training sessions covering AI fundamentals,
              use cases, and best practices tailored to your industry.
            </li>
            <li>
              We provide hands-on exercises and real-world scenarios to help
              your team apply AI concepts to their daily work.
            </li>
            <li>
              We facilitate group discussions, Q&A, and collaborative
              problem-solving to foster engagement and learning.
            </li>
            <li>
              We assess participant progress and provide resources for continued
              learning and development.
            </li>
            <li>
              We help your organization build a culture of innovation,
              experimentation, and continuous improvement with AI.
            </li>
            <li>
              We offer follow-up support and guidance to ensure successful
              adoption and ongoing enablement.
            </li>
          </ul>
        }
        imagePosition="left"
      />
      <div className="main-margin-div"></div>
      <Quotation quote="Empowering your people is the first step to unlocking AI’s full potential—our workshop is your catalyst for change." />
      <div className="main-margin-div"></div>
      <BookACall header="Book Your AI Enablement Workshop" />
      <div className="main-margin-div"></div>
      <Footer />
    </div>
  );
}
