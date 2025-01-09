import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Banner.css';

// Import images

import founderImage from "../assets/b1.png";
import founder1Image from "../assets/b2.png";
import founder2Image from "../assets/b3.png";
import founder3Image from "../assets/b4.png";
import indiaImage from "../assets/b5.png";

const texts = ["Welcome to Oviya Medsafe", "Meticulosity", "Commitment", "Team Work", "Client Satisfaction"];
const images = [
  founderImage,
  founder1Image,
  founder2Image,
  founder3Image,
  indiaImage,
];

function Banner() {
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => (prevText + 1) % texts.length);
    }, 5100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='container-fluid bnpart w-100'>
      <div className="container servicesbg pt-5 " id="ourservices">
        <div className="row align-items-center">
          {/* Left side: Animated Text */}
          <div className="col-sm-12 col-md-6 d-flex justify-content-center mb-4 mb-lg-0">
            <motion.h4
              className="saptext py-3 text-light"
              key={currentText}  // Ensures transition reset with every change
              initial={{ opacity: 0, y: 50 }}  // Start from bottom
              animate={{ opacity: 1, y: 0 }}   // Move to normal position
              exit={{ opacity: 0, y: -50 }}    // Exit upwards
              transition={{ duration: 1 }}
            >
              {texts[currentText]}
            </motion.h4>
          </div>

          {/* Right side: Animated Image */}
          <div className="col-sm-12 col-md-6 px-2 d-flex justify-content-end">
            <motion.img
              src={images[currentText]}  // Change image based on currentText
              alt={`Banner Image ${currentText + 1}`}
              className="img-fluid rounded text-light bimg"
              key={currentText}  // Ensures transition reset with every change
              initial={{ opacity: 0, y: 50 }}  // Start from bottom
              animate={{ opacity: 1, y: 0 }}   // Move to normal position
              exit={{ opacity: 0, y: -50 }}    // Exit upwards
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
