import React from 'react';
import Slideshow from '../components/slider';
// import Men from '../components/Men';
// import Newtrand from '../components/Newtrend';

function Home() {
  return (
    <div className="min-h-screen">
      {/* Slider Section */}
      <Slideshow />
      <div>
        <img src="src/assets/PROEARTH (1).avif" alt="photo" />
      </div>
      {/* <Men />
      <Newtrand /> */}
    </div>
  );
}

export default Home;
