import { h } from "preact";
import { useEffect } from "preact/hooks";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HeaderBody from "./components/HeaderBody.jsx";
import PageOverview from "./components/PageOverview.jsx";
import SplitCard from "./components/SplitCard.jsx";
import Quotation from "./components/Quotation.jsx";
import "./components/PageOverview.css";
import BookACall from "./components/BookACall.jsx";

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <head>
        <title>About Us | CloseTech AI</title>
        <meta
          name="description"
          content="Learn about CloseTech AI, a Canadian company dedicated to responsible, innovative, and ethical artificial intelligence solutions."
        />
      </head>
      <Header />
      <div className="main-margin-div"></div>
      <PageOverview
        mainHeader="About Us"
        subHeader="Who We Are"
        description="CloseTech AI is a Canadian born, owned, and operated company based in beautiful Maritime Canada. We are dedicated to advancing the responsible use of artificial intelligence, helping organizations unlock the power of AI to innovate, automate, and grow—while upholding the highest standards of privacy, security, and ethics."
        showLearnMore={false}
      />
      <div className="main-margin-div"></div>
      <HeaderBody
        header="What We Do"
        body="We design, build, and deploy AI solutions tailored to the unique needs of our clients. From AI strategy and consulting to custom model development and integration, our team delivers end-to-end expertise to help organizations succeed in the AI era."
      />
      <div className="main-margin-div"></div>
      <SplitCard
        image="/images/maritime.jpg"
        alt="Maritime Canada illustration"
        title="Rooted in Maritime Canada"
        body={
          <ul className="splitcard-features">
            <li>
              Proudly headquartered in the Maritime provinces, we draw
              inspiration from the region’s spirit of resilience, innovation,
              and community.
            </li>
            <li>
              Our local roots drive our commitment to ethical technology and
              supporting Canadian talent.
            </li>
            <li>
              We believe in building technology that uplifts our region and
              makes a global impact.
            </li>
          </ul>
        }
        imagePosition="right"
      />
      <div className="main-margin-div"></div>
      <SplitCard
        image="/images/government.jpg"
        alt="Canadian company illustration"
        title="Proudly Canadian"
        body={
          <ul className="splitcard-features">
            <li>
              100% Canadian born, owned, and operated—serving clients across
              Canada and beyond.
            </li>
            <li>
              Deep commitment to local innovation, talent development, and
              ethical AI leadership.
            </li>
            <li>
              We believe in building technology that benefits people,
              organizations, and society as a whole.
            </li>
          </ul>
        }
        imagePosition="left"
      />
      <div className="main-margin-div"></div>
      <HeaderBody
        header="Our Purpose and Passion"
        body="We are driven by a passion for using AI to solve real-world problems and create positive impact. Our team is made up of innovators, dreamers, and builders who believe in the power of technology to make a difference. We are committed to empowering organizations to harness AI responsibly, drive innovation, and build a better future for all."
      />
      <div className="main-margin-div"></div>
      <Quotation quote="Innovation with integrity—building a smarter, more responsible future with Canadian AI." />
      <div className="main-margin-div"></div>
      <BookACall header="Let's start today!" />

      <Footer />
    </div>
  );
}
