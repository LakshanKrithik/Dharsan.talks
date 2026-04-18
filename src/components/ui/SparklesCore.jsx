import React, { useId, useEffect, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion, useAnimation } from "framer-motion";

export const SparklesCore = (props) => {
  const {
    id,
    className = "",
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props;
  const [init, setInit] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Actively track component container resizing (e.g. accordion expansions) 
  // and force tsParticles engine to recalculate the canvas bounds dynamically.
  useEffect(() => {
    if (!containerRef.current || !init) return;
    const resizeObserver = new ResizeObserver(() => {
      window.dispatchEvent(new Event("resize"));
    });
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [init]);

  const controls = useAnimation();

  const particlesLoaded = async (container) => {
    if (container) {
      controls.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
  };

  const generatedId = useId();

  return (
    <motion.div ref={containerRef} animate={controls} className={className} style={{ opacity: 0, position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
      {init && (
        <Particles
          id={id || generatedId}
          style={{ height: '100%', width: '100%' }}
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: background || "transparent",
              },
            },
            fullScreen: {
              enable: false,
              zIndex: 1,
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: false,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              bounce: {
                horizontal: {
                  value: 1,
                },
                vertical: {
                  value: 1,
                },
              },
              collisions: {
                enable: false,
              },
              color: {
                value: particleColor || "#ffffff",
              },
              move: {
                angle: {
                  offset: 0,
                  value: 90,
                },
                direction: "none",
                drift: 0,
                enable: true,
                gravity: {
                  acceleration: 9.81,
                  enable: false,
                  inverse: false,
                  maxSpeed: 50,
                },
                outModes: {
                  default: "out",
                },
                random: false,
                size: false,
                speed: {
                  min: 0.1,
                  max: 1,
                },
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  width: 400,
                  height: 400,
                },
                limit: {
                  mode: "delete",
                  value: 0,
                },
                value: particleDensity || 120,
              },
              opacity: {
                value: {
                  min: 0.1,
                  max: 1,
                },
                animation: {
                  enable: true,
                  speed: speed || 4,
                  sync: false,
                  mode: "auto",
                  startValue: "random",
                },
              },
              shape: {
                type: "circle",
              },
              size: {
                value: {
                  min: minSize || 1,
                  max: maxSize || 3,
                },
                animation: {
                  enable: false,
                  speed: 5,
                  sync: false,
                  mode: "auto",
                  startValue: "random",
                },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </motion.div>
  );
};
