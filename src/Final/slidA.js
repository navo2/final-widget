import React, { useState, useEffect } from 'react';
import '../App.css';
import Logo from '../asset/WC_1st Semi B.jpg';
import SlideB from "./slidB"

function SlidA() {
  const [Slide_B, setSlide_B] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSlide_B(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  if (Slide_B) {
    return <SlideB />;
  }


  return (
      <div className='MalibanfirstImgEng'>
     
              <img className='lastImg' src={Logo} />

      </div>

  );
}

export default SlidA;
