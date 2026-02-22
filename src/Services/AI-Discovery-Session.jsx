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

export default function AIDiscoverySession() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // SEO
  if (typeof window !== "undefined") {
    document.title = "AI Discovery Session | CloseTech AI";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Identify high-impact AI use cases and chart a clear path to value. Collaborative workshops for AI discovery and readiness."
      );
    } else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content =
        "Identify high-impact AI use cases and chart a clear path to value. Collaborative workshops for AI discovery and readiness.";
      document.head.appendChild(m);
    }
  }
  return (
    <div className="container">
      <Header />
      <div className="main-margin-div"></div>
      <PageOverview
        mainHeader="AI Discovery Session"
        subHeader="Services"
        description="Uncover the best opportunities for AI in your business. Our AI
              Discovery Session is a collaborative workshop designed to identify
              high-impact use cases, assess readiness, and chart a clear path to
              value with artificial intelligence."
        showLearnMore={false}
      />

      <div className="main-margin-div"></div>
      <HeaderBody
        header="Content of the AI Discovery Session"
        body="Gain clarity on how Artificial Intelligence can transform your organization. "
      />
      <div className="main-mini-margin-div"></div>
      <SplitCard
        image="/images/aidiscovery.png"
        alt="Product illustration"
        body={
          <ul class="splitcard-features">
            <li>
              We begin by understanding your organization’s goals, challenges,
              and current workflows to identify where AI can unlock the greatest
              value and drive measurable improvements.
            </li>

            <li>
              We present industry-specific AI use cases and real-world examples
              that illustrate how similar organizations are leveraging AI to
              enhance productivity, reduce costs, and innovate faster.
            </li>

            <li>
              We review your existing data, tools, and infrastructure to assess
              your AI readiness and highlight opportunities for seamless
              integration with your current systems.
            </li>

            <li>
              We provide strategic guidance and clear recommendations, outlining
              the high-impact AI solutions you can adopt, potential timelines,
              and the expected benefits across your operations.
            </li>

            <li>
              We identify potential risks, limitations, and ethical
              considerations, helping you understand how to adopt AI responsibly
              and securely within your organization.
            </li>

            <li>
              We conclude with a clear next-step roadmap, giving your team
              direction on pilot projects, resource needs, and how to move from
              discovery to execution with confidence.
            </li>
          </ul>
        }
        imagePosition="left"
      />
      <div className="main-margin-div"></div>
      <Quotation quote="Every successful AI journey begins with a moment of clarity—your Discovery Session is that moment." />
      <div className="main-margin-div"></div>
      <BookACall header="Start Your AI Discovery Journey Today" />
      <div className="main-margin-div"></div>
      <Footer />
    </div>
  );
}
