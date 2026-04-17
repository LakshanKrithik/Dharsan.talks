import './Footer.css';

export default function Footer() {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          dharsan<span>.talks</span>
        </div>
        
        <ul className="footer-nav">
          <li><a href="#hero" onClick={e => { e.preventDefault(); handleScroll('#hero'); }}>Home</a></li>
          <li><a href="#value" onClick={e => { e.preventDefault(); handleScroll('#value'); }}>The Method</a></li>
          <li><a href="#curriculum" onClick={e => { e.preventDefault(); handleScroll('#curriculum'); }}>Curriculum</a></li>
          <li><a href="#pricing" onClick={e => { e.preventDefault(); handleScroll('#pricing'); }}>Enroll</a></li>
        </ul>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} dharsan.talks. All rights reserved.</p>
      </div>
    </footer>
  );
}
