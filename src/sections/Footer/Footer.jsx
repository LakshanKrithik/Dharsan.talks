import { FaInstagram, FaYoutube } from 'react-icons/fa6';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      


      <div className="massive-header-wrapper">
        
        {/* Left Side: Brand Typography */}
        <div className="footer-focus-container ibm-plex-sans-condensed-bold">
            <span className="footer-brand-text">dharsan.talks</span>
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
