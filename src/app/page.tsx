import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Navigator from '@/components/Navigator/Navigator';
import Featured from '@/components/Featured/Featured';
import Renting from '@/components/Renting/Renting';
import Repairing from '@/components/Repairing/Repairing';
import Detailing from '@/components/Detailing/Detailing';
import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main itemScope itemType="https://schema.org/WebPage"> 
      <Header />
      <Hero />
      <Navigator />
      <section id="featured" aria-label="Featured luxury cars">
        <Featured />
      </section>
      <section id="renting" aria-label="Car rental services">
        <Renting />
      </section>
      <section id="repairing" aria-label="Car repair services">
        <Repairing />
      </section>
      <section id="detailing" aria-label="Car detailing services">
        <Detailing />
      </section>
      <section id="about" aria-label="About TingCar">
        <About />
      </section>
      <section id="contact" aria-label="Contact information">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
