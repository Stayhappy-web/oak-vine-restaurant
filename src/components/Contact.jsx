function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact & Opening Hours</h2>

      <div className="contact-info">

        <div className="info-card">
          <h3>Contact Us</h3>

          <p>📞 +1 (555) 123-4567</p>

          <p>📧 reservations@oakandvine.com</p>

          <p>
            📍 125 Riverside Avenue
            <br />
            New York, NY
          </p>
        </div>

        <div className="info-card">
          <h3>Opening Hours</h3>

          <p>Mon - Thu: 11AM - 10PM</p>

          <p>Fri - Sat: 11AM - 11PM</p>

          <p>Sun: 12PM - 9PM</p>
        </div>

      </div>

      <a href="#reservation" className="hero-btn">
        Reserve A Table
      </a>

    </section>
  );
}

export default Contact;