import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    // Disable custom cursor on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      document.body.style.cursor = 'auto'; // Restore default cursor
      return;
    }

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(follower, { xPercent: -50, yPercent: -50 });

    const handleMouseMove = (e) => {
      // Instantly set the main cursor position
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      // Keep the follower trailing with GSAP
      gsap.to(follower, { duration: 0.6, x: e.clientX, y: e.clientY, ease: 'power2.out' });
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Handle project image preview in Projects.jsx, this part remains for non-touch devices
    const projectItems = document.querySelectorAll('.project-item');
    const imagePreview = document.querySelector('.project-image-preview');

    projectItems.forEach(item => {
      const imgSrc = item.getAttribute('data-img');

      item.addEventListener('mouseenter', () => {
        if (imagePreview) {
          imagePreview.style.backgroundImage = `url(${imgSrc})`;
          gsap.to(imagePreview, {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: 'power2.out'
          });
        }
      });

      item.addEventListener('mouseleave', () => {
        if (imagePreview) {
          gsap.to(imagePreview, {
            opacity: 0,
            scale: 0.8,
            duration: 0.4,
            ease: 'power2.out'
          });
        }
      });
    });

    // Mouse events for cursor follower on links and buttons
    const linksAndButtons = document.querySelectorAll('a, button, .project-item');
    linksAndButtons.forEach(el => {
      el.addEventListener('mouseenter', () => {
        gsap.to(follower, { scale: 1.5, duration: 0.3 });
      });
      el.addEventListener('mouseleave', () => {
        gsap.to(follower, { scale: 1, duration: 0.3 });
      });
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      linksAndButtons.forEach(el => {
        el.removeEventListener('mouseenter', () => {
          gsap.to(follower, { scale: 1.5, duration: 0.3 });
        });
        el.removeEventListener('mouseleave', () => {
          gsap.to(follower, { scale: 1, duration: 0.3 });
        });
      });
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
      {/* project-image-preview is now managed and rendered within Projects.jsx */}
    </>
  );
};

export default CustomCursor; 