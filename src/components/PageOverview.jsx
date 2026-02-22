import { h } from "preact";
import { LearnMoreButton, ContactUsButton } from "./Buttons.jsx";
import "./PageOverview.css";

export default function PageOverview({
  subHeader,
  mainHeader,
  description,
  showLearnMore = true,
  showContactUs = true,
}) {
  return (
    <div className="page-overview">
      <div className="main-title-div-container">
        <div className="main-title-div">
          {subHeader && <p className="main-title-1">{subHeader}</p>}
          {mainHeader && <h1 className="main-title">{mainHeader}</h1>}
          {description && (
            <p className="main-title-description">{description}</p>
          )}
          {(showLearnMore || showContactUs) && (
            <div className="button-group">
              {showLearnMore && <LearnMoreButton />}
              {showContactUs && (
                <ContactUsButton
                  onClick={() => (window.location.href = "/Contact-Us")}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
