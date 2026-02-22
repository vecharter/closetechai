import { h } from "preact";
import Header from "./components/Header.jsx";
import PageOverview from "./components/PageOverview.jsx";
import HeaderBody from "./components/HeaderBody.jsx";
import Footer from "./components/Footer.jsx";
import { LearnMoreButton, ContactUsButton } from "./components/Buttons.jsx";
import SplitCard from "./components/SplitCard.jsx";
import ImageCarousel from "./components/ImageCarousel.jsx";
import ResearchOverview from "./components/ResearchOverview.jsx";

export default function App() {
  return (
    <div className="container">
      <Header />
      <div className="main-margin-div"></div>
      <PageOverview
        subHeader="AI Solutions for Modern Business"
        mainHeader="Unlock the Power of Artificial Intelligence"
        description="We help organizations of all sizes leverage AI to innovate, automate, and grow. Discover how our tailored solutions can transform your business."
      />
      <div className="main-margin-div"></div>
      <ImageCarousel
        images={[
          "/images/chatgpt.png",
          "/images/meta.png",
          "/images/gemini.png",
          "/images/deepseek.png",
          "/images/claude.png",
        ]}
        autoScroll={true}
        speed="30s"
      />
      <div className="main-margin-div"></div>
      <HeaderBody
        header="Let’s Get You Started!"
        body="No matter your industry or size, we provide the AI expertise to help you innovate, scale, and drive real results."
      />
      <div className="main-mini-margin-div"></div>
      <SplitCard
        image="/images/building.png"
        alt="Product illustration"
        title="Enable Your Workforce with AI"
        body={
          <ul className="splitcard-features">
            <li>
              We create tailored AI solutions to automate processes, analyze
              data, and optimize workflows, enabling teams to collaborate and
              innovate more effectively.
            </li>

            <li>
              Our team integrates AI seamlessly with your existing tools—like
              Google Drive, SharePoint, and GitHub—to provide real-time insights
              and boost efficiency.
            </li>

            <li>
              We build intelligent bots for customer support and internal
              processes, streamlining workflows and providing actionable
              insights to improve decision-making.
            </li>

            <li>
              We use machine learning to forecast sales trends, helping you make
              data-driven decisions and plan for growth with confidence.
            </li>
          </ul>
        }
        imagePosition="right"
      />
      <div className="main-margin-div"></div>
      <SplitCard
        image="/images/threeline.png"
        alt="Product illustration"
        title="Build AI-Native Products and Experiences"
        body={
          <ul className="splitcard-features">
            <li>
              We help you enhance customer service, knowledge management,
              recommendation engines, and other core experiences with powerful
              AI capabilities.
            </li>

            <li>
              Our solutions architects guide you from proof of concept to full
              deployment, ensuring seamless and strategic integration of AI into
              your products.
            </li>

            <li>
              We fine-tune AI models for your specific industry or use case to
              deliver optimized, high-performance results tailored to your
              needs.
            </li>
          </ul>
        }
        imagePosition="left"
      />
      <div className="main-margin-div"></div>
      <SplitCard
        image="/images/security.png"
        alt="Product illustration"
        title="Enterprise-Grade Data Privacy, Security, and Admin Controls"
        body={
          <ul className="splitcard-features">
            <li>
              We design AI tools with advanced encryption to safeguard sensitive
              business data while enabling secure automation and analysis.
            </li>

            <li>
              We build internal AI solutions that meet strict privacy and
              compliance standards, ensuring your organization can innovate with
              confidence.
            </li>
          </ul>
        }
        imagePosition="right"
      />
      <div className="main-margin-div"></div>
      <ResearchOverview />
      <div className="main-margin-div"></div>
      <Footer />
    </div>
  );
}
