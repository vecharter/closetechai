import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import emailjs from "emailjs-com";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import PageOverview from "./components/PageOverview.jsx";
import "./components/PageOverview.css";
import "./components/ContactUs.css";

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // SEO
  // eslint-disable-next-line
  if (typeof window !== "undefined") {
    document.title = "Contact Us | CloseTech AI";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Contact CloseTech AI to discuss your AI project, ask questions, or learn more about our solutions."
      );
    } else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content =
        "Contact CloseTech AI to discuss your AI project, ask questions, or learn more about our solutions.";
      document.head.appendChild(m);
    }
  }

  const [form, setForm] = useState({
    name: "",
    company: "",
    description: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // EmailJS integration
    const serviceID = "service_a0k07gf";
    const templateID = "template_ejy898q"; // Change this to your actual template ID
    const userID = "Du8sK9ct0VfdzNZVz"; // Change this to your actual EmailJS user ID (public key)

    emailjs
      .send(
        serviceID,
        templateID,
        {
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          description: form.description,
        },
        userID
      )
      .then(
        (response) => {
          setSubmitted(true);
        },
        (error) => {
          alert(
            "There was an error sending your message. Please try again later."
          );
        }
      );
  }

  return (
    <div className="container">
      <Header />
      <div className="main-margin-div"></div>
      <PageOverview
        mainHeader="Contact Us"
        subHeader="Let's Connect"
        description="Have a question, want to discuss a project, or just want to learn more about our AI solutions? Fill out the form below and our team will get back to you as soon as possible."
        showLearnMore={false}
        showContactUs={false}
      />
      <div className="main-mini-margin-div"></div>
      <div className="contact-form-section">
        {submitted ? (
          <div
            style={{
              textAlign: "center",
              color: "#FFFFFF",
              fontWeight: 500,
              fontSize: "1.2rem",
            }}
          >
            Thank you for reaching out! We'll be in touch soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name*</label>
              <div className="input-wrapper">
                <input
                  className="custom-input"
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  aria-required="true"
                  aria-invalid="false"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="company">Company*</label>
              <div className="input-wrapper">
                <input
                  className="custom-input"
                  type="text"
                  id="company"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  required
                  autoComplete="organization"
                  aria-required="true"
                  aria-invalid="false"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <div className="input-wrapper">
                <input
                  className="custom-input"
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  aria-required="true"
                  aria-invalid="false"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone (optional)</label>
              <div className="input-wrapper">
                <input
                  className="custom-input"
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  aria-invalid="false"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="description">Comment</label>
              <div className="input-wrapper">
                <input
                  className="custom-input"
                  type="text"
                  id="description"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid="false"
                />
              </div>
            </div>
            <button
              type="submit"
              style={{ marginTop: "30px" }}
              className="btn-contact-us"
            >
              Submit
            </button>
          </form>
        )}
      </div>
      <div className="main-margin-div"></div>
      <Footer />
    </div>
  );
}
