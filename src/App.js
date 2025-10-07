import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">🏥 VR HealthCare Hospital</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/departments">Departments</Link>
        <Link to="/doctors">Doctors</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <section className="hero">
      <h2>Welcome to VR HealthCare Hospital</h2>
      <p>
        We provide world-class healthcare services with compassion, technology, and trust.
      </p>
      <button>Book Appointment</button>
    </section>
  );
}

function About() {
  return (
    <section className="about">
      <h2>About Us</h2>
      <p>
        VR HealthCare Hospital is a trusted name in medical excellence, offering modern
        facilities, specialized care, and experienced doctors dedicated to your well-being.
      </p>
    </section>
  );
}

function Departments() {
  const departments = [
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Pediatrics",
    "Dermatology",
    "Emergency",
  ];
  return (
    <section className="departments">
      <h2>Our Departments</h2>
      <div className="dept-grid">
        {departments.map((d) => (
          <div className="dept-card" key={d}>
            <h3>{d}</h3>
            <p>Expert doctors and modern facilities ensure top-notch treatment.</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Doctors() {
  const doctors = [
    { name: "Dr. TEJA ROYAL", field: "Cardiologist" },
    { name: "Dr. BRO", field: "Neurologist" },
    { name: "Dr. TEAM DEATH", field: "Orthopedic Surgeon" },
  ];
  return (
    <section className="doctors">
      <h2>Our Doctors</h2>
      <div className="doctor-grid">
        {doctors.map((d) => (
          <div className="doctor-card" key={d.name}>
            <img
              src="https://via.placeholder.com/150"
              alt={d.name}
            />
            <h3>{d.name}</h3>
            <p>{d.field}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Email Address" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      © 2025 VR HealthCare Hospital — All Rights Reserved
    </footer>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
