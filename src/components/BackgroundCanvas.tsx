import React, { useEffect, useRef } from 'react';

interface BackgroundCanvasProps {
  currentScene: number;
  isDarkMode: boolean;
}

export const BackgroundCanvas: React.FC<BackgroundCanvasProps> = ({ currentScene, isDarkMode }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes
    const particleCount = Math.min(Math.floor(width / 35), 45);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 1,
      color: Math.random() > 0.4 ? 'rgba(16, 185, 129, ' : 'rgba(99, 102, 241, ',
    }));

    let targetShiftX = (currentScene - 1) * -40;
    let currentShiftX = 0;

    const render = () => {
      targetShiftX = (currentScene - 1) * -35;
      currentShiftX += (targetShiftX - currentShiftX) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Ambient Orbs
      const orb1X = width * 0.2 + currentShiftX * 1.2;
      const orb1Y = height * 0.3;
      const grad1 = ctx.createRadialGradient(orb1X, orb1Y, 10, orb1X, orb1Y, width * 0.45);
      grad1.addColorStop(0, isDarkMode ? 'rgba(16, 185, 129, 0.12)' : 'rgba(16, 185, 129, 0.06)');
      grad1.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad1;
      ctx.beginPath();
      ctx.arc(orb1X, orb1Y, width * 0.45, 0, Math.PI * 2);
      ctx.fill();

      const orb2X = width * 0.8 + currentShiftX * 0.8;
      const orb2Y = height * 0.7;
      const grad2 = ctx.createRadialGradient(orb2X, orb2Y, 10, orb2X, orb2Y, width * 0.4);
      grad2.addColorStop(0, isDarkMode ? 'rgba(99, 102, 241, 0.1)' : 'rgba(99, 102, 241, 0.05)');
      grad2.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad2;
      ctx.beginPath();
      ctx.arc(orb2X, orb2Y, width * 0.4, 0, Math.PI * 2);
      ctx.fill();

      // Draw subtle grid mesh
      ctx.strokeStyle = isDarkMode ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)';
      ctx.lineWidth = 1;
      const gridSize = 80;
      const gridOffsetX = (currentShiftX * 0.5) % gridSize;

      for (let x = gridOffsetX; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Render connected particles
      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const posX = p.x + currentShiftX * 0.3;

        ctx.fillStyle = p.color + (isDarkMode ? '0.6)' : '0.4)');
        ctx.beginPath();
        ctx.arc(posX, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const posX2 = p2.x + currentShiftX * 0.3;
          const dx = posX - posX2;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const alpha = (1 - dist / 120) * (isDarkMode ? 0.12 : 0.06);
            ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(posX, p.y);
            ctx.lineTo(posX2, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [currentScene, isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-500"
    />
  );
};
