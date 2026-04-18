import { FaInstagram, FaYoutube } from 'react-icons/fa6';
import TrueFocus from '../../components/ui/TrueFocus';
import { GridPattern } from '../../components/ui/GridPattern';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      
      {/* Background Grid Pattern Layer */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <GridPattern
          width={30}
          height={30}
          x={-1}
          y={-1}
          strokeDasharray={"4 4"}
          squares={[
            [4, 4], [5, 1], [8, 2], [5, 3], [5, 5], 
            [10, 10], [12, 5], [15, 6], [2, 7], 
            [1, 2], [18, 2], [25, 4]
          ]}
          style={{
             WebkitMaskImage: 'radial-gradient(400px circle at top center, white, transparent)',
             maskImage: 'radial-gradient(400px circle at top center, white, transparent)',
          }}
        />
      </div>

      {/* Massive Full Width Brand Typography Layer dynamically adapting across breakpoints */}
      <div className="massive-header-wrapper">
        <div className="footer-focus-container">
            <TrueFocus 
              sentence="dharsan. talks" 
              manualMode={false} 
              blurAmount={5} 
              borderColor="#5227FF" 
              glowColor="rgba(82, 39, 255, 0.4)"
              animationDuration={0.5} 
              pauseBetweenAnimations={2}
            />
        </div>

        {/* Social Bindings safely wrapped into standardized media-query CSS classes */}
        <div className="footer-socials">
          <a 
            href="https://www.instagram.com/dharsan.talks/" 
            target="_blank" 
            rel="noreferrer" 
            className="social-ig"
          >
            <FaInstagram />
          </a>
          <a 
            href="https://www.youtube.com/@Dharsan-Talks15" 
            target="_blank" 
            rel="noreferrer" 
            className="social-yt"
          >
            <FaYoutube />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} dharsan.talks. All rights reserved.</p>
      </div>
    </footer>
  );
}
