import { useEffect, useRef } from 'react';

const ParticleNetwork = () => {
  const canvasRef = useRef(null);
  const particlesArrayRef = useRef([]);
  const mouseRef = useRef({ x: null, y: null, radius: 150 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      mouseRef.current.radius = (canvas.height / 120) * (canvas.width / 120);
      initParticles();
    };

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fill();
      }

      update() {
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        let dx = mouseRef.current.x - this.x;
        let dy = mouseRef.current.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseRef.current.radius + this.size) {
          if (mouseRef.current.x < this.x && this.x < canvas.width - this.size * 10) {
            this.x += 5;
          }
          if (mouseRef.current.x > this.x && this.x > this.size * 10) {
            this.x -= 5;
          }
          if (mouseRef.current.y < this.y && this.y < canvas.height - this.size * 10) {
            this.y += 5;
          }
          if (mouseRef.current.y > this.y && this.y > this.size * 10) {
            this.y -= 5;
          }
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    const initParticles = () => {
      particlesArrayRef.current = [];
      const numberOfParticles = (canvas.height * canvas.width) / 9000;

      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1;
        let x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 0.4) - 0.2;
        let directionY = (Math.random() * 0.4) - 0.2;
        particlesArrayRef.current.push(new Particle(x, y, directionX, directionY, size, '#fff'));
      }
    };

    const connect = () => {
      let opacityValue = 1;
      for (let a = 0; a < particlesArrayRef.current.length; a++) {
        for (let b = a; b < particlesArrayRef.current.length; b++) {
          let distance = ((particlesArrayRef.current[a].x - particlesArrayRef.current[b].x) * 
            (particlesArrayRef.current[a].x - particlesArrayRef.current[b].x)) + 
            ((particlesArrayRef.current[a].y - particlesArrayRef.current[b].y) * 
            (particlesArrayRef.current[a].y - particlesArrayRef.current[b].y));

          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            opacityValue = 1 - (distance / 20000);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacityValue})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArrayRef.current[a].x, particlesArrayRef.current[a].y);
            ctx.lineTo(particlesArrayRef.current[b].x, particlesArrayRef.current[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArrayRef.current.length; i++) {
        particlesArrayRef.current[i].update();
      }
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.x;
      mouseRef.current.y = e.y;
    };

    const handleMouseOut = () => {
      mouseRef.current.x = undefined;
      mouseRef.current.y = undefined;
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} id="particle-network" />;
};

export default ParticleNetwork; 