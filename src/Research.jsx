import { h } from "preact";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import PageOverview from "./components/PageOverview.jsx";
import ResearchOverview from "./components/ResearchOverview.jsx";
import Quotation from "./components/Quotation.jsx";
import BookACall from "./components/BookACall.jsx";
import "./components/PageOverview.css";

export default function Research() {
  // SEO
  if (typeof window !== "undefined") {
    document.title = "Research | CloseTech AI";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Explore the latest AI research, machine learning, and data science projects from CloseTech AI."
      );
    } else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content =
        "Explore the latest AI research, machine learning, and data science projects from CloseTech AI.";
      document.head.appendChild(m);
    }
  }
  return (
    <div className="container">
      <Header />
      <div className="main-margin-div"></div>
      <PageOverview
        mainHeader="Research"
        subHeader="Innovation & Discovery"
        description="Explore our latest research in artificial intelligence, machine learning, and data science. Our team is dedicated to advancing the field and sharing insights that drive innovation and real-world impact."
        showLearnMore={false}
        showContactUs={true}
      />
      <div className="main-margin-div"></div>
      <ResearchOverview />
      <div className="main-margin-div"></div>
      <Quotation quote="Pushing the boundaries of AI research to create real-world impact and inspire the next generation of innovation." />
      <div className="main-margin-div"></div>
      <BookACall header="Learn more about our research" />
      <Footer />
    </div>
  );
}
