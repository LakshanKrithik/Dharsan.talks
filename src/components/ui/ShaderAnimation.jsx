import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ShaderAnimation() {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const isInViewRef = useRef(true);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isInViewRef.current = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(containerRef.current);

    const container = containerRef.current;

    // Vertex shader
    const vertexShader = `
      void main() {
        gl_Position = vec4( position, 1.0 );
      }
    `;

    // Fragment shader
    const fragmentShader = `
      #define TWO_PI 6.2831853072
      #define PI 3.14159265359

      precision highp float;
      uniform vec2 resolution;
      uniform float time;

      void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
        float t = time*0.05;
        float lineWidth = 0.002;

        float c1 = 0.0;
        float c2 = 0.0;
        float c3 = 0.0;
        
        for(int i=0; i < 5; i++){
          c1 += lineWidth*float(i*i) / abs(fract(t - 0.01*0.0 + float(i)*0.01)*5.0 - length(uv) + mod(uv.x+uv.y, 0.2));
          c2 += lineWidth*float(i*i) / abs(fract(t - 0.01*1.0 + float(i)*0.01)*5.0 - length(uv) + mod(uv.x+uv.y, 0.2));
          c3 += lineWidth*float(i*i) / abs(fract(t - 0.01*2.0 + float(i)*0.01)*5.0 - length(uv) + mod(uv.x+uv.y, 0.2));
        }
        
        // Blend c1, c2, c3 using our blue theme colors
        // Accent Dark: #224EA3 -> 34, 78, 163
        // Accent: #3D6ED6 -> 61, 110, 214
        // Accent Light: #6391F5 -> 99, 145, 245
        
        vec3 col1 = vec3(0.13, 0.31, 0.64);
        vec3 col2 = vec3(0.24, 0.43, 0.84);
        vec3 col3 = vec3(0.39, 0.57, 0.96);

        // Dull the brightness by multiplying the final output by 0.45
        vec3 color = (c1 * col1 + c2 * col2 + c3 * col3) * 0.45;
        
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    // Initialize Three.js scene
    const camera = new THREE.Camera();
    camera.position.z = 1;

    const scene = new THREE.Scene();
    const geometry = new THREE.PlaneGeometry(2, 2);

    const uniforms = {
      time: { type: "f", value: 1.0 },
      resolution: { type: "v2", value: new THREE.Vector2() },
    };

    const material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Capped at 1.5 for performance

    container.appendChild(renderer.domElement);

    // Handle window resize
    const onWindowResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      uniforms.resolution.value.x = renderer.domElement.width;
      uniforms.resolution.value.y = renderer.domElement.height;
    };

    // Initial resize
    onWindowResize();
    window.addEventListener("resize", onWindowResize, false);

    // Animation loop
    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      
      if (sceneRef.current) {
        sceneRef.current.animationId = animationId;
      }

      // Skip heavy rendering if not in view
      if (!isInViewRef.current) return;

      // Increased loop speed
      uniforms.time.value += 0.05 * 1.2;
      renderer.render(scene, camera);

      if (sceneRef.current) {
        sceneRef.current.animationId = animationId;
      }
    };

    // Store scene references for cleanup
    sceneRef.current = {
      camera,
      scene,
      renderer,
      uniforms,
      animationId: 0,
    };

    // Start animation
    animate();

    // Cleanup function
    return () => {
      window.removeEventListener("resize", onWindowResize);
      observer.disconnect();

      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId);

        if (container && sceneRef.current.renderer.domElement) {
          container.removeChild(sceneRef.current.renderer.domElement);
        }

        sceneRef.current.renderer.dispose();
        geometry.dispose();
        material.dispose();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
      style={{
        position: 'absolute',
        inset: 0,
        background: "var(--bg-primary, #080808)",
        overflow: "hidden",
      }}
    />
  );
}
