import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import "./Header.css";
import { Icon } from "@iconify/react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openServices, setOpenServices] = useState(false);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-left">
        {/* site logo - place `logo.png` in `public/images/logo.png` */}
        <a href="/" className="logo-link">
          <img src="/images/logo.png" alt="CloseTechAi" className="site-logo" />
        </a>
      </div>

      <div className="header-right">
        <nav className="header-nav" aria-label="Primary navigation">
          <div className="nav-dropdown-wrapper">
            <a
              className="nav-dropdown-btn"
              type="button"
              aria-haspopup="true"
              aria-expanded={open === "services"}
              onClick={() => setOpenServices(!openServices)}
            >
              Services
              <Icon
                icon="mdi:chevron-down"
                width="21"
                height="21"
                style={{
                  marginLeft: 4,
                  marginTop: 1,
                  transform: openServices ? "rotate(180deg)" : "none",
                  transition: "transform 0.18s",
                }}
              />
            </a>
            {openServices && (
              <DropdownModal onClose={() => setOpenServices(false)} />
            )}
          </div>
          <a href="/industry" onClick={() => setOpen(false)}>
            Industry
          </a>
          <a href="/Research" onClick={() => setOpen(false)}>
            Research
          </a>
          <a href="/About-Us" onClick={() => setOpen(false)}>
            About Us
          </a>
          <a href="/Contact-Us" onClick={() => setOpen(false)}>
            Contact Us
          </a>
        </nav>

        <div className="header-actions">
          <button
            className="btn-contact-us header-cta"
            type="button"
            onClick={() =>
              window.open(
                "https://calendly.com/closetechai-pointoai/",
                "_blank",
              )
            }
          >
            Book a call
          </button>

          <button
            className="menu-button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            type="button"
          >
            <Icon
              icon={open ? "mdi:close" : "mdi:menu"}
              className="menu-icon"
              width="20"
              height="20"
            />
          </button>
        </div>
      </div>

      {/* overlay + drawer for mobile menu */}
      {open && (
        <div
          className={`drawer-overlay ${open ? "open" : ""}`}
          onClick={() => setOpen(false)}
        >
          <aside
            className={`mobile-drawer ${open ? "open" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="drawer-close"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <Icon icon="mdi:close" width="25" height="25" />
            </button>

            <nav className="mobile-nav" aria-label="Mobile navigation">
              <div style={{ position: "relative", width: "100%" }}>
                <a
                  className="mobile-services-btn"
                  type="button"
                  onClick={() => setOpenServices(!openServices)}
                  aria-haspopup="true"
                  aria-expanded={openServices}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    color: "#fff",
                    padding: "0.8rem 1.2rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Services
                  <Icon
                    icon="mdi:chevron-down"
                    width="21"
                    height="21"
                    style={{
                      marginLeft: 4,
                      marginTop: 1,
                      transform: openServices ? "rotate(180deg)" : "none",
                      transition: "transform 0.18s",
                    }}
                  />
                </a>
                {openServices && (
                  <MobileServicesDropdown
                    onClose={() => setOpenServices(false)}
                  />
                )}
              </div>
              <a href="/industry" onClick={() => setOpen(false)}>
                Industry
              </a>
              <a href="/Research" onClick={() => setOpen(false)}>
                Research
              </a>
              <a href="/About-Us" onClick={() => setOpen(false)}>
                About Us
              </a>
              <a href="/Contact-Us" onClick={() => setOpen(false)}>
                Contact Us
              </a>
            </nav>
          </aside>
        </div>
      )}
    </header>
  );
}

// DropdownModal closes itself when clicking outside
function DropdownModal({ onClose }) {
  useEffect(() => {
    function handleClick(e) {
      // Only close if click is outside both modal and button
      if (
        !e.target.closest(".nav-dropdown-modal") &&
        !e.target.closest(".nav-dropdown-btn") &&
        !e.target.closest(".mobile-services-btn")
      ) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [onClose]);
  return (
    <div className="nav-dropdown-modal" role="menu" tabIndex={-1}>
      <ul className="nav-dropdown-list">
        <li>
          <a href="/Services/AI-Discovery-Session">AI Discovery Session</a>
        </li>
        <li>
          <a href="/Services/AI-Strategy-Roadmapping">
            AI Strategy &amp; Roadmapping
          </a>
        </li>
        <li>
          <a href="/Services/Model-Innovation-Lab">Model Innovation Lab</a>
        </li>
        <li>
          <a href="/Services/AI-Enablement-Workshop">AI Enablement Workshop</a>
        </li>
        <li>
          <a href="/Services/AI-Showcase-Demo">AI Showcase Demo</a>
        </li>
        <li>
          <a href="/Services/AI-Integration-Deployment">
            AI Integration &amp; Deployment
          </a>
        </li>
        <li>
          <a href="/Services/AI-Performance-Optimization">
            AI Performance Optimization
          </a>
        </li>
      </ul>
    </div>
  );
}

// MobileServicesDropdown: dropdown panel for mobile menu
function MobileServicesDropdown({ onClose }) {
  useEffect(() => {
    function handleClick(e) {
      if (
        !e.target.closest(".mobile-services-dropdown") &&
        !e.target.closest(".mobile-services-btn")
      ) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [onClose]);
  return (
    <ul
      style={{
        listStyle: "none",
        padding: "0.5rem 0",
        margin: 0,
        marginLeft: "1rem",
      }}
    >
      <li>
        <a href="/Services/AI-Discovery-Session" style={mobileServiceLinkStyle}>
          AI Discovery Session
        </a>
      </li>
      <li>
        <a
          href="/Services/AI-Strategy-Roadmapping"
          style={mobileServiceLinkStyle}
        >
          AI Strategy & Roadmapping
        </a>
      </li>
      <li>
        <a href="/Services/Model-Innovation-Lab" style={mobileServiceLinkStyle}>
          Model Innovation Lab
        </a>
      </li>
      <li>
        <a
          href="/Services/AI-Enablement-Workshop"
          style={mobileServiceLinkStyle}
        >
          AI Enablement Workshop
        </a>
      </li>
      <li>
        <a href="/Services/AI-Showcase-Demo" style={mobileServiceLinkStyle}>
          AI Showcase Demo
        </a>
      </li>
      <li>
        <a
          href="/Services/AI-Integration-Deployment"
          style={mobileServiceLinkStyle}
        >
          AI Integration & Deployment
        </a>
      </li>
      <li>
        <a
          href="/Services/AI-Performance-Optimization"
          style={mobileServiceLinkStyle}
        >
          AI Performance Optimization
        </a>
      </li>
    </ul>
  );
}

const mobileServiceLinkStyle = {
  display: "block",
  color: "#fff",
  textDecoration: "none",
  fontSize: "1rem",
  padding: "0.8rem 1.2rem",
  borderRadius: "6px",
  margin: "0.1rem 0",
  background: "none",
  transition: "background 0.15s, color 0.15s",
};
