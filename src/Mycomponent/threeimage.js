import React, { useState, useEffect } from 'react';
import './threeimage.css';
const ImageCarousel = () => {
  const [images, setImages] = useState([
    '1.jpg','2.jpg','3.jpg', '4.jpg','5.jpg','6.jpg', '7.jpg','8.jpg',
    // Add more image filenames as needed
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-md-4 p-0">
          <img
            src={process.env.PUBLIC_URL + '/' + images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-4 p-0">
          <img
            src={process.env.PUBLIC_URL + '/' + images[(currentIndex + 1) % images.length]}
            alt={`Image ${currentIndex + 2}`}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-4 p-0">
          <img
            src={process.env.PUBLIC_URL + '/' + images[(currentIndex + 2) % images.length]}
            alt={`Image ${currentIndex + 3}`}
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
