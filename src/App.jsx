import { useState } from "react";
import logo from "./assets/logo.svg";

const services = [
  {
    title: "Strategic Advisory",
    description: "Transform complex business challenges into lasting advantages with tailored consulting and growth planning.",
  },
  {
    title: "Operational Excellence",
    description: "Accelerate execution and strengthen process reliability with efficient operations design.",
  },
  {
    title: "Customer Experience",
    description: "Create memorable, high-trust experiences that drive loyalty and repeat partnerships.",
  },
];

const portfolio = [
  {
    title: "Digital Market Launch",
    detail: "Led launch planning for an enterprise client entering a new regional market.",
  },
  {
    title: "Scale Optimization",
    detail: "Streamlined workflows and reduced handoffs to improve time-to-delivery by 32%.",
  },
  {
    title: "Premium Support Model",
    detail: "Designed a high-touch customer service model for sustained brand reputation.",
  },
];

function App() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-identity">
          <img src={logo} alt="Karya Sahabi Makmur logo" className="brand-logo" />
          <div>
            <h1>Karya Sahabi Makmur</h1>
            <p>Corporate strategy, operations, and customer success.</p>
          </div>
        </div>
        <nav className="topnav">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero-panel" id="home">
          <div className="hero-copy">
            <span className="eyebrow">Powerful corporate profile</span>
            <h2>Build momentum with trusted business insight and modern execution.</h2>
            <p>We combine leadership thinking, practical operational design, and customer-centric delivery for companies that want measurable growth.</p>
            <div className="hero-actions">
              <a href="#contact" className="button primary">Book a strategy call</a>
              <a href="#portfolio" className="button secondary">Explore our work</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-card">
              <div className="stats-grid">
                <div>
                  <strong>32%</strong>
                  <span>Faster delivery</span>
                </div>
                <div>
                  <strong>12+</strong>
                  <span>Market launches</span>
                </div>
                <div>
                  <strong>99%</strong>
                  <span>Client satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section card-background" id="about">
          <div className="section-header">
            <span>About Karya Sahabi Makmur</span>
            <h2>We deliver high-impact results for ambitious organizations.</h2>
          </div>
          <p>At Karya Sahabi Makmur, we believe powerful solutions begin with clarity. Our team helps businesses refine strategy, optimize operations, and create exceptional customer journeys that scale with confidence.</p>
        </section>

        <section className="section" id="services">
          <div className="section-header">
            <span>Services</span>
            <h2>Capabilities built for growth and resilience.</h2>
          </div>
          <div className="grid columns-3">
            {services.map((service) => (
              <article key={service.title} className="feature-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-light" id="portfolio">
          <div className="section-header">
            <span>Portfolio</span>
            <h2>Recent initiatives that created measurable impact.</h2>
          </div>
          <div className="grid columns-3">
            {portfolio.map((item) => (
              <article key={item.title} className="portfolio-card">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <div className="section-header">
            <span>Contact</span>
            <h2>Let’s create results that matter.</h2>
          </div>
          <div className="contact-grid">
            <div className="contact-panel">
              <p>Send a message and our team will respond within 24 hours.</p>
              <div className="contact-detail">
                <strong>Email</strong>
                <span>info@karyasahabimakmur.id</span>
              </div>
              <div className="contact-detail">
                <strong>Phone</strong>
                <span>+62 812 3456 7890</span>
              </div>
              <div className="contact-detail">
                <strong>Location</strong>
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
              </label>
              <label>
                Email
                <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your email" required />
              </label>
              <label>
                Message
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="How can we help?" required />
              </label>
              <button type="submit" className="button primary">Send message</button>
              {submitted && <p className="success-message">Thanks! Your request has been received.</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer-bar">
        <p>© 2026 Karya Sahabi Makmur. Designed with clarity and power.</p>
      </footer>
    </div>
  );
}

export default App;
