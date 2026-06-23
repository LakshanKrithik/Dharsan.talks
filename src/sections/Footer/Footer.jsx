import { FaInstagram, FaYoutube } from 'react-icons/fa6';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">

      <div className="massive-header-wrapper">
        
        {/* Left Side: Brand Typography */}
        <div className="footer-focus-container ibm-plex-sans-condensed-bold">
            <span className="footer-brand-text">dharsan.<span className="footer-focus-word">talks<span className="footer-frame"><span className="footer-corner footer-tl"></span><span className="footer-corner footer-tr"></span><span className="footer-corner footer-bl"></span><span className="footer-corner footer-br"></span></span></span></span>
        </div>

        {/* Right Side: Columns and Socials (desktop) */}
        <div className="footer-right-content">
          <div className="footer-nav-col">
            <a href="#value">About</a>
            <a href="#curriculum">Curriculum</a>
            <a href="#why">Perks</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
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

      {/* Mobile-only: brand + horizontal nav */}
      <div className="footer-mobile-layout">
        <h2 className="footer-mobile-brand ibm-plex-sans-condensed-bold">dharsan.<span className="footer-focus-word">talks<span className="footer-frame"><span className="footer-corner footer-tl"></span><span className="footer-corner footer-tr"></span><span className="footer-corner footer-bl"></span><span className="footer-corner footer-br"></span></span></span></h2>
        <nav className="footer-mobile-nav">
          <a href="#value">About</a>
          <a href="#curriculum">Curriculum</a>
          <a href="#why">Perks</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="footer-mobile-socials">
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
        <p>&nbsp;</p>
      </div>
    </footer>
  );
}
