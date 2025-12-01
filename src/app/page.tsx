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
    <main> 
      <Header />
      <Hero />
      <Navigator />
      <Featured />
      <Renting />
      <Repairing />
      <Detailing />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
