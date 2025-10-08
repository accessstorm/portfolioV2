import React, { useCallback, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

// Spark component for individual spark particles
const Spark = ({ x, y, color, onComplete }) => {
  const sparkRef = useRef(null);

  useEffect(() => {
    const spark = sparkRef.current;
    if (!spark) return;

    // Animation
    const angle = Math.random() * Math.PI * 2;
    const distance = 60 + Math.random() * 80;
    const duration = 0.3 + Math.random() * 0.3;
    
    gsap.set(spark, {
      scale: 0,
      rotation: 0,
      opacity: 1
    });
    
    gsap.to(spark, {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
      scale: 1.5,
      rotation: 360,
      duration: duration,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(spark, {
          scale: 0,
          opacity: 0,
          duration: 0.15,
          onComplete: onComplete
        });
      }
    });
  }, [onComplete]);

  return (
    <div
      ref={sparkRef}
      className="spark"
      style={{
        position: 'fixed',
        left: x,
        top: y,
        width: '8px',
        height: '8px',
        background: color,
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 10000,
        boxShadow: `0 0 20px ${color}, 0 0 40px ${color}40`,
        transform: 'translate(-50%, -50%)'
      }}
    />
  );
};

const ClickSparks = () => {
  const [sparks, setSparks] = useState([]);
  const sparkIdRef = useRef(0);

  const colors = ['#ffda03', '#00aaff', '#a259ff', '#ff4c60', '#00c896', '#ffb300'];

  const createSparks = useCallback((x, y) => {
    const sparkCount = 12 + Math.floor(Math.random() * 8);
    const newSparks = [];
    
    for (let i = 0; i < sparkCount; i++) {
      const id = sparkIdRef.current++;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      newSparks.push({
        id,
        x,
        y,
        color,
        delay: i * 8
      });
    }
    
    setSparks(prev => [...prev, ...newSparks]);
  }, [colors]);

  const removeSpark = useCallback((id) => {
    setSparks(prev => prev.filter(spark => spark.id !== id));
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      createSparks(e.clientX, e.clientY);
    };

    document.addEventListener('click', handleClick);
    
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [createSparks]);

  return (
    <div className="click-sparks-container">
      {sparks.map((spark) => (
        <Spark
          key={spark.id}
          x={spark.x}
          y={spark.y}
          color={spark.color}
          onComplete={() => removeSpark(spark.id)}
        />
      ))}
    </div>
  );
};

export default ClickSparks;
