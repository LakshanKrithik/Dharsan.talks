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

      <div className="massive-header-wrapper">
        
        {/* Left Side: Brand Typography */}
        <div className="footer-focus-container ibm-plex-sans-condensed-bold">
            <TrueFocus 
              sentence="dharsan.talks" 
              manualMode={false} 
              blurAmount={5} 
              borderColor="#5227FF" 
              glowColor="rgba(82, 39, 255, 0.4)"
              animationDuration={0.5} 
              pauseBetweenAnimations={2}
            />
        </div>

        {/* Right Side: Columns and Socials */}
        <div className="footer-right-content">
          <div className="footer-nav-col">
            <a href="#value">About</a>
            <a href="#curriculum">Curriculum</a>
            <a href="#contact">Perks</a>
            <a href="#pricing">Pricing</a>
          </div>

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

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} dharsan.talks. All rights reserved.</p>
      </div>
    </footer>
  );
}
