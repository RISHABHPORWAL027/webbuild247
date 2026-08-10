import React, { useState, useEffect, useRef } from 'react';

const Typewriter = ({ text, delay = 60, className = '' }) => {
  const [currentText, setCurrentText] = useState('');
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isIntersecting) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setCurrentText(text.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [isIntersecting, text, delay]);

  return (
    <span ref={elementRef} className={`${className} inline-block`}>
      {currentText}
      {!isComplete && (
        <span className="animate-pulse font-light text-indigo-400">|</span>
      )}
    </span>
  );
};

export default Typewriter;
