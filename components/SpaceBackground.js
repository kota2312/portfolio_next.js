import { useEffect, useRef } from "react";

export default function SpaceBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas || typeof window === "undefined") {
      return undefined;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const starCount = window.innerWidth < 768 ? 90 : 170;
    let animationFrameId = 0;
    let width = 0;
    let height = 0;
    let deviceScale = 1;

    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random(),
      y: Math.random(),
      radius: Math.random() * 1.6 + 0.3,
      speed: Math.random() * 0.00018 + 0.00004,
      drift: Math.random() * 0.00008 + 0.00002,
      alpha: Math.random() * 0.5 + 0.2,
      pulse: Math.random() * Math.PI * 2,
    }));

    const nebulas = [
      {
        x: 0.16,
        y: 0.22,
        radius: 0.28,
        hue: "62, 92, 168",
        alpha: 0.28,
        vx: 0.00005,
        vy: 0.00003,
      },
      {
        x: 0.66,
        y: 0.48,
        radius: 0.34,
        hue: "176, 82, 64",
        alpha: 0.2,
        vx: -0.00003,
        vy: 0.00002,
      },
      {
        x: 0.88,
        y: 0.18,
        radius: 0.24,
        hue: "120, 116, 152",
        alpha: 0.18,
        vx: -0.00004,
        vy: 0.00004,
      },
    ];

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      deviceScale = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * deviceScale;
      canvas.height = height * deviceScale;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(deviceScale, 0, 0, deviceScale, 0, 0);
    };

    const drawFrame = (time) => {
      context.clearRect(0, 0, width, height);

      const skyGradient = context.createLinearGradient(0, 0, width, height);
      skyGradient.addColorStop(0, "rgba(4, 8, 18, 0.82)");
      skyGradient.addColorStop(0.5, "rgba(7, 8, 16, 0.48)");
      skyGradient.addColorStop(1, "rgba(0, 0, 0, 0.72)");
      context.fillStyle = skyGradient;
      context.fillRect(0, 0, width, height);

      nebulas.forEach((nebula, index) => {
        const x =
          ((nebula.x + (prefersReducedMotion ? 0 : time * nebula.vx)) % 1) * width;
        const y =
          ((nebula.y + (prefersReducedMotion ? 0 : time * nebula.vy)) % 1) * height;
        const radius = Math.max(width, height) * nebula.radius;
        const radial = context.createRadialGradient(x, y, 0, x, y, radius);

        radial.addColorStop(0, `rgba(${nebula.hue}, ${nebula.alpha})`);
        radial.addColorStop(0.45, `rgba(${nebula.hue}, ${nebula.alpha * 0.36})`);
        radial.addColorStop(1, `rgba(${nebula.hue}, 0)`);

        context.globalCompositeOperation = index === 1 ? "screen" : "lighter";
        context.fillStyle = radial;
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fill();
      });

      context.globalCompositeOperation = "screen";

      stars.forEach((star) => {
        const x =
          ((star.x + (prefersReducedMotion ? 0 : time * star.speed)) % 1) * width;
        const y =
          ((star.y + (prefersReducedMotion ? 0 : time * star.drift)) % 1) * height;
        const alpha =
          star.alpha + Math.sin(time * 0.0012 + star.pulse) * 0.18;

        context.beginPath();
        context.fillStyle = `rgba(255, 255, 255, ${Math.max(alpha, 0.08)})`;
        context.arc(x, y, star.radius, 0, Math.PI * 2);
        context.fill();
      });

      context.globalCompositeOperation = "source-over";

      const scanGradient = context.createLinearGradient(width * 0.15, 0, width, 0);
      const offset = prefersReducedMotion ? 0.45 : (time * 0.00006) % 1;
      scanGradient.addColorStop(Math.max(offset - 0.2, 0), "rgba(255, 255, 255, 0)");
      scanGradient.addColorStop(offset, "rgba(128, 170, 255, 0.06)");
      scanGradient.addColorStop(Math.min(offset + 0.2, 1), "rgba(255, 255, 255, 0)");
      context.fillStyle = scanGradient;
      context.fillRect(0, 0, width, height);

      animationFrameId = window.requestAnimationFrame(drawFrame);
    };

    resizeCanvas();
    animationFrameId = window.requestAnimationFrame(drawFrame);
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="app_spaceMotion" aria-hidden="true">
      <canvas ref={canvasRef} className="app_spaceMotion_canvas" />
    </div>
  );
}
