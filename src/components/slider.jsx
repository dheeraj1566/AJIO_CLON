import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'; 

const Slideshow = () => {
  const images = [
    '/src/assets/image1.jpeg',
    '/src/assets/image2.jpeg',
    '/src/assets/image3.jpeg',
    '/src/assets/image4.jpeg',
    '/src/assets/image5.jpeg',
    '/src/assets/image6.jpeg',
  ];

  return (
    <div className="w-full max-w-screen-lg mx-auto py-8 mt-40">
      <Slide
  autoplay={true}
  transitionDuration={100}
  infinite={true}
  indicators={true}
>
  {images.map((image, index) => (
    <div key={index} className="relative">
      <img
        src={image}
        alt={`Slide ${index}`}
        className="w-full h-96 object-cover rounded-lg shadow-lg"
      />
    </div>
  ))}
</Slide>

    </div>
  );
};

export default Slideshow;
