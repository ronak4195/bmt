import React, { useState, useEffect } from 'react';
import './Slideshow.css';

const Slideshow = ({ movies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === movies.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [movies.length]);

  return (
    <div className="slideshow">
      {movies.length > 0 && (
        <div
          className="slideshow-slide"
          style={{ backgroundImage: `url(${movies[currentIndex].banner})` }}
        />
      )}
      <div className="slideshow-controls">
        <button onClick={() => setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? movies.length - 1 : prevIndex - 1
        )}>
          &lt;
        </button>
        <button onClick={() => setCurrentIndex((prevIndex) =>
          prevIndex === movies.length - 1 ? 0 : prevIndex + 1
        )}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
