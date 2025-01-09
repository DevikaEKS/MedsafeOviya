import React, { useState,useEffect, useRef } from 'react';
import date from '../assets/Calendar.png';
import "./Downloads.css";
import DownloadForm from './DownloadForm';


const Downloads = () => {
  const [activeIndex, setActiveIndex] = useState(null);
   useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);
  const contentRefs = useRef([]); // Use an array to reference each accordion content
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the current accordion
  };

  return (
    <div className='container-fluid text-justify text-light'>
      <div className='col mx-1 mx-md-5'>
        <h1 className='subhead2 py-4'>Downloads</h1>
        <div className='d-flex flex-column card-margin'>
          {/* Card 1 */}
          <div className="card custom-card mb-3">
            <div className="card-body d-flex flex-column">
              <div className='w-100 d-flex align-items-center justify-content-between'>
                {/* Title */}
                <div className='width-heading'>
                  <h5 className="card-title card-title-size">
                    Oviya MedSafe – Convincing Leaders to Constitute Pharmacovigilance
                  </h5>
                </div>
                {/* Button */}
                <div>
                  <button
                    className='custom-btn btn btn-primary'
                    onClick={() => toggleAccordion(0)} // Pass the index 0 for the first accordion
                  >
                    Download PDF
                  </button>
                </div>
              </div>

              <div className='d-flex align-items-center mt-0'>
                <div style={{ paddingRight: '10px' }}>
                  <img
                    src={date}
                    alt='date'
                    className='imgwidth'
                  />
                </div>
                <div>March, 2023</div>
              </div>
            </div>

            {/* Accordion Content */}
            <div
              className="accordion-content"
              style={{
                maxHeight: activeIndex === 0 ? `${contentRefs.current[0].scrollHeight}px` : '0',
                overflow: 'hidden',
                transition: 'max-height 0.3s ease',
              }}
              ref={(el) => (contentRefs.current[0] = el)}
            >
              {/* Form content */}
              {/* <DownloadForm /> */}
              <DownloadForm/>
              
             
            </div>
          </div>

          {/* Card 2 */}
          <div className="card custom-card mb-3">
            <div className="card-body d-flex flex-column">
              <div className='d-flex align-items-center justify-content-between'>
                <div className='width-heading'>
                  <h5 className="card-title text-left">
                  Oviya MedSafe - Accomplishing Pharmacovigilance Equilibrium Since 2012
                  </h5>
                </div>
                <div>
                  <button
                    className='custom-btn btn btn-primary'
                    onClick={() => toggleAccordion(1)} // Pass the index 1 for the second accordion
                  >
                    Download PDF
                  </button>
                </div>
              </div>

              <div className='d-flex align-items-center mt-0'>
                <div style={{ paddingRight: '10px' }}>
                  <img
                    src={date}
                    alt='date'
                    className='imgwidth'
                  />
                </div>
                <div>February, 2023</div>
              </div>
            </div>

            {/* Accordion Content */}
            <div
              className="accordion-content"
              style={{
                maxHeight: activeIndex === 1 ? `${contentRefs.current[1].scrollHeight}px` : '0',
                overflow: 'hidden',
                transition: 'max-height 0.3s ease',
              }}
              ref={(el) => (contentRefs.current[1] = el)}
            >
                 <DownloadForm/>
              {/* Form content */}
              {/* <DownloadForm /> */}
            </div>
          </div>

          {/* Card 3 */}
          <div className="card custom-card mb-3">
            <div className="card-body d-flex flex-column">
              <div className='d-flex align-items-center justify-content-between'>
                <div className='width-heading'>
                  <h5 className="card-title">
                  Oviya MedSafe – Perfecting Professionalism in Pharmacovigilance
                  </h5>
                </div>
                <div>
                  <button
                    className='custom-btn btn btn-primary'
                    onClick={() => toggleAccordion(2)} // Pass the index 2 for the third accordion
                  >
                    Download PDF
                  </button>
                </div>
              </div>

              <div className='d-flex align-items-center mt-0'>
                <div style={{ paddingRight: '10px' }}>
                  <img
                    src={date}
                    alt='date'
                    className='imgwidth'
                  />
                </div>
                <div>January, 2023</div>
              </div>
            </div>

            {/* Accordion Content */}
            <div
              className="accordion-content"
              style={{
                maxHeight: activeIndex === 2 ? `${contentRefs.current[2].scrollHeight}px` : '0',
                overflow: 'hidden',
                transition: 'max-height 0.3s ease',
              }}
              ref={(el) => (contentRefs.current[2] = el)}
            >
                 <DownloadForm/>
              {/* Form content */}
              {/* <DownloadForm /> */}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Downloads;
