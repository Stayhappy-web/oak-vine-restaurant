import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedDishes from "./components/FeaturedDishes";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Reservation from "./components/Reservation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedDishes />
      <About />
      <Testimonials />
      <Reservation />
      <Contact />
      <Footer />
    </>
  );
}

export default App;