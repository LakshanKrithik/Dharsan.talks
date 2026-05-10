import Navbar from './components/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import ValueProp from './sections/ValueProp/ValueProp';
import Curriculum from './sections/Curriculum/Curriculum';
import WhyChoose from './sections/WhyChoose/WhyChoose';
import Pricing from './sections/Pricing/Pricing';
import FAQ from './sections/FAQ/FAQ';
import Footer from './sections/Footer/Footer';
import { FloatingPaths } from './components/ui/BackgroundPaths';

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
        
        <div style={{ position: 'relative' }}>
          {/* Shared background for Pricing and FAQ to blend animations together */}
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden', opacity: 0.8 }}>
            <FloatingPaths position={1} />
            <FloatingPaths position={-1} />
          </div>
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <Pricing />
            <FAQ />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
