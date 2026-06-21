function Hero({ openReservation }) {
  return (
    <section id="home" className="hero">
      <div className="overlay">
        <h1>Luxury Dining Experience</h1>

        <p>
          Fresh ingredients. Elegant atmosphere.
          Unforgettable meals.
        </p>

        <a href="#reservation"
        className="hero-btn">
  <button>
    Reserve A Table
  </button>
</a>
      </div>
    </section>
  );
}

export default Hero;