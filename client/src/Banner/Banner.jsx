import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Banner.css';
import moleculeim from "../assets/mol.png";
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
      
      <div className="container servicesbg pt-0 pt-md-5 " id="ourservices">
        <div className="row align-items-center pb-sm-5 pb-md-0">
          {/* Left side: Animated Text */}
          <div className="col-sm-6 col-md-6 d-flex justify-content-center mb-4 mb-lg-0">
            <motion.h4
              className="saptext py-3 text-light ms-0 ms-lg-3"
              key={currentText}  
              initial={{ opacity: 0, y: 70 }}  
              animate={{ opacity: 1, y: 0 }}   
              exit={{ opacity: 0, y: -50 }}    
              transition={{ duration: 1 }} >
              {texts[currentText]}
            </motion.h4>
          </div>

          
          <div className="col-sm-6 col-md-6 px-2 secondpart">
            <motion.img
              src={images[currentText]}  
              alt={`Banner Image ${currentText + 1}`}
              className="img-fluid rounded text-light bimg"
              key={currentText}  
              initial={{ opacity: 0.4, y: 10 }} 
              animate={{ opacity: 1, y: 0 }}   
              exit={{ opacity: 0, y: -20 }}   
              transition={{ duration: 1 }}/>
          </div>
        </div>
      </div>

     
      <motion.img
        src={moleculeim}  
        alt="Rotating Image Top Left"
        className="rotating-img-left d-none d-lg-block"
        animate={{
          rotate: 360,  
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",  
          duration: 10,  
        }}
      />
      <motion.img
        src={moleculeim}  
        alt="Rotating Image Top Right"
        className="rotating-img-right d-none d-lg-block"
        animate={{
          rotate: -360,  
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",  
          duration: 10,  
        }}
      />
    </div>
  );
}

export default Banner;
