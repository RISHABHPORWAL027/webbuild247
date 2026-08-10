import React, { useState, useEffect } from 'react';

const CountUp = ({ end, duration = 1500, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const target = parseInt(end, 10);
    if (isNaN(target)) {
      return;
    }

    let start = 0;
    const endValue = target;
    if (start === endValue) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * endValue));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  const parsed = parseInt(end, 10);
  if (isNaN(parsed)) {
    return <span>{prefix}{end}{suffix}</span>;
  }

  return <span>{prefix}{count}{suffix}</span>;
};

export default CountUp;
