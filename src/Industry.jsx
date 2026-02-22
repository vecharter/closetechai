import { h } from "preact";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import PageOverview from "./components/PageOverview.jsx";
import HeaderBody from "./components/HeaderBody.jsx";
import IndustryCarousel from "./components/IndustryCarousel.jsx";
import Quotation from "./components/Quotation.jsx";
import BookACall from "./components/BookACall.jsx";

export default function Industry() {
  return (
    <div className="container">
      <Header />
      <div className="main-margin-div"></div>
      <PageOverview
        mainHeader="Industries We Serve"
        subHeader="Industry"
        description="We help organizations across diverse industries unlock the power of AI. Explore how our solutions drive innovation, efficiency, and growth in your sector."
        showContactUs={true}
        showLearnMore={false}
      />
      <div className="main-margin-div"></div>

      <HeaderBody
        header="AI Solutions for Every Industry"
        body="From corporate enterprises and governments to hospitals and small businesses — we implement existing AI models and lead R&D to create optimized, industry-specific AI systems."
      />
      <div className="main-mini-margin-div"></div>

      {(() => {
        const industryImages = [
          { src: "/images/healthcare.jpg", alt: "Healthcare" },
          { src: "/images/finance.jpg", alt: "Finance" },
          { src: "/images/retail.jpg", alt: "Retail" },
          { src: "/images/manufacture.jpg", alt: "Manufacturing" },
          { src: "/images/energy.jpg", alt: "Energy" },
          { src: "/images/education.jpg", alt: "Education" },
          { src: "/images/government.jpg", alt: "Government" },
          { src: "/images/technology.jpg", alt: "Technology" },
          { src: "/images/telecommunication.jpg", alt: "Telecom" },
          { src: "/images/payment.jpg", alt: "Professional Services" },
        ];
        return (
          <>
            <IndustryCarousel
              images={industryImages}
              autoScroll={true}
              speed="35s"
            />
            <IndustryCarousel
              images={[...industryImages].reverse()}
              autoScroll={true}
              speed="35s"
            />
          </>
        );
      })()}
      <div className="main-margin-div"></div>
      <Quotation quote="AI transformation in your industry starts with a single step—discover what's possible for your sector." />
      <div className="main-margin-div"></div>
      <BookACall header="Begin Your Industry AI Transformation" />
      <Footer />
    </div>
  );
}
