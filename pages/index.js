import Feature from "../components/organisms/Feature";
import Footer from "../components/organisms/Footer";
import Header from "../components/organisms/Header";
import Hero from "../components/organisms/Hero";
import Jelajah from "../components/organisms/Jelajah";
import Newsletter from "../components/organisms/Newsletter";
import Promo from "../components/organisms/Promo";
import Testimonials from "../components/organisms/Testimonials";
import Trial from "../components/organisms/Trial";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Promo />
      <Feature />
      <Trial />
      <Testimonials />
      <Jelajah />
      <Newsletter />
      <Footer />
    </div>
  );
}
