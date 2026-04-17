import Navbar from './components/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import ValueProp from './sections/ValueProp/ValueProp';
import Curriculum from './sections/Curriculum/Curriculum';
import WhyChoose from './sections/WhyChoose/WhyChoose';
import Pricing from './sections/Pricing/Pricing';
import FAQ from './sections/FAQ/FAQ';
import Footer from './sections/Footer/Footer';

function App() {
  return (
    <>
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <ValueProp />
        <Curriculum />
        <WhyChoose />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

export default App;
