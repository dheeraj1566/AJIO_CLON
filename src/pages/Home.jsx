import React from 'react';
import Slideshow from '../components/slider';
// import Men from '../components/Men';
// import Newtrand from '../components/Newtrend';

function Home() {
  return (
    <div className="min-h-screen">
      {/* Slider Section */}
      <Slideshow />
      <div className="w-full  mx-auto py-8">
      <img 
      src="src/assets/PROEARTH (1).avif" 
      alt="photo" 
      className="w-full h-auto object-cover rounded-lg shadow-md" 
    />
      </div>
      {/* <Men />
      <Newtrand /> */}
    </div>
  );
}

export default Home;
