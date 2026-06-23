import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import img1 from '../../assets/Img 1.jpg';
import img2 from '../../assets/Img 2.jpg';
import img3 from '../../assets/Img 3.jpg';
import './Hero.css';

const SKOOL_URL = '#pricing';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }
  }
});

function VectorField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width, height;
    let lines = [];
    const spacing = 50;
    const lineLength = 12;

    let mouse = { x: -1000, y: -1000, radius: 400 };
    let targetMouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e) => {
      targetMouse.x = e.clientX;
      targetMouse.y = e.clientY;
    };

    const handleTouchMove = (e) => {
      targetMouse.x = e.touches[0].clientX;
      targetMouse.y = e.touches[0].clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    class Line {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.baseAngle = -Math.PI / 4;
        this.angle = this.baseAngle;
        this.opacity = 0.2;
      }

      draw() {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.hypot(dx, dy);

        if (distance < mouse.radius) {
          const targetAngle = Math.atan2(dy, dx) + Math.PI / 2;
          const effectStrength = 1 - (distance / mouse.radius);
          const angleDiff = targetAngle - this.angle;
          this.angle += angleDiff * 0.1;
          this.opacity = 0.2 + (0.6 * effectStrength);
        } else {
          const angleDiff = this.baseAngle - this.angle;
          this.angle += angleDiff * 0.05;
          this.opacity += (0.2 - this.opacity) * 0.05;
        }

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.beginPath();
        ctx.moveTo(-lineLength / 2, 0);
        ctx.lineTo(lineLength / 2, 0);
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.lineWidth = 1.5;
        ctx.lineCap = 'round';
        ctx.stroke();
        ctx.restore();
      }
    }

    function initGrid() {
      lines = [];
      const buffer = spacing;
      for (let x = -buffer; x < width + buffer; x += spacing) {
        for (let y = -buffer; y < height + buffer; y += spacing) {
          lines.push(new Line(x, y));
        }
      }
    }

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initGrid();
    }

    let animId;
    function animate() {
      mouse.x += (targetMouse.x - mouse.x) * 0.1;
      mouse.y += (targetMouse.y - mouse.y) * 0.1;

      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, width, height);

      lines.forEach(line => line.draw());
      animId = requestAnimationFrame(animate);
    }

    resize();
    animate();

    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-vector-field" />;
}

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Vector Field Canvas */}
      <VectorField />

      {/* Blue aura glow */}
      <div className="hero-blue-aura" />

      {/* Content */}
      <motion.div
        className="hero-content"
        initial="hidden"
        animate="visible"
      >
        <div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', width: '100%', zIndex: 10 }}>
            <h1 className="hero-title">
              The Complete Communication School to Help You Speak With
              <span className="hero-title-line2"><span className="hero-title-accent">Confidence</span> and <span className="hero-title-accent">Fluency</span></span>
            </h1>
          </div>
        </div>

        {/* Image placeholders */}
        <motion.div className="hero-images" variants={fadeUp(0.24)}>
          <div className="hero-img-placeholder">
            <img src={img1} alt="Speaking showcase 1" />
          </div>
          <div className="hero-img-placeholder">
            <img src={img2} alt="Speaking showcase 2" />
          </div>
          <div className="hero-img-placeholder">
            <img src={img3} alt="Speaking showcase 3" />
          </div>
        </motion.div>

        <motion.p className="hero-subtitle" variants={fadeUp(0.28)}>
          Dedicate just 12 weeks of your life to master the most valuable skill ever
        </motion.p>

        <motion.div className="hero-cta-group" variants={fadeUp(0.4)}>
          <a href={SKOOL_URL}>
            <button className="hero-join-btn">
              Join Now
            </button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
