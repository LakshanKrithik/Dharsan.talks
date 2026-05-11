import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const FloatingPaths = ({ position }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Render all 36 paths on desktop, but fewer on mobile to prevent overcrowding
    const pathCount = isMobile ? 12 : 36;
    
    const paths = Array.from({ length: pathCount }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
            <svg
                style={{ width: '100%', height: '100%', color: 'white' }}
                viewBox="0 0 696 316"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        // Tuned opacity way down mapping against our dark background natively 
                        strokeOpacity={0.02 + path.id * 0.015}
                        initial={{ pathLength: 1, opacity: 0.1 }}
                        /* Removed animations to keep paths fully static for performance */
                    />
                ))}
            </svg>
        </div>
    );
};
