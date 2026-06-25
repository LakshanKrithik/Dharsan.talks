import Navbar from './components/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import ValueProp from './sections/ValueProp/ValueProp';
import Curriculum from './sections/Curriculum/Curriculum';
import WhyChoose from './sections/WhyChoose/WhyChoose';
import Testimonials from './sections/Testimonials/Testimonials';
import Pricing from './sections/Pricing/Pricing';
import FAQ from './sections/FAQ/FAQ';
import Footer from './sections/Footer/Footer';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ValueProp />
        <Curriculum />
        <WhyChoose />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
