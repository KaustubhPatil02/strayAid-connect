import React, { useState, useEffect } from 'react';

const TypewriterEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate delay based on text length
  const delay = 9000 / text.length; // Adjust the base delay (3000 in this case) as needed

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        setTimeout(() => {
          setDisplayText('');
          setCurrentIndex(0);
        }, 4000); // Hold the text for 4 seconds
      }
    }, delay);

    return () => clearInterval(interval);
  }, [currentIndex, text, delay]);

  return <span>{displayText}</span>;
};

export default TypewriterEffect;