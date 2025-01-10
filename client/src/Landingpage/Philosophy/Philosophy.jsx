

import React from 'react'
import './Philosophy.css'
import bulb from '../../assets/bulb.png';
import target from '../../assets/Target.png';
import diamond from '../../assets/Diamond.png'; 

const Philosophy = () => {
  return (
    <div className='philosophybg'>
      <div className='container-pad'>
        <h1 className='heading text-center text-white' style={{fontSize: '50px'}}>Philosophy</h1>
      </div>
    
      <div className='d-flex flex-column flex-lg-row gap-4 gap-lg-10 justify-content-center card-container-pad align-items-center'>
        {/* Card 1 */}
        
        <div className="card-container">
            {/* Circle Animation */}
            <span className="circle-animation"></span>

            {/* Content */}
            <div className="image-container">
              <img src={bulb} alt="Our Vision is leading Pharmacovigilance Consulting via Global Partnerships." title="Oviya MedSafe's vision to lead in pharmacovigilance consulting through strategic global partnerships."/>
            </div>
            <div className="title-container">
              <h1>Vision</h1>
            </div>
            <div className="description-container">
              <p>
                To become a leader in pharmacovigilance consulting services by strategically partnering with global pharmaceutical companies.
              </p>
            </div>
        </div>

         {/* Card 2 */}
         <div className="card-container">
            {/* Circle Animation */}
            <span className="circle-animation"></span>

            {/* Content */}
            <div className="image-container">
              <img src={target} title='Our Mission is promoting a Pharmacovigilant Culture Worldwide.
' alt="Oviya MedSafe's mission to promote a pharmacovigilant culture and advance global drug safety practices." style={{width:'100px'}}/>
            </div>
            <div className="title-container">
              <h1>Mission</h1>
            </div>
            <div className="description-container">
              <p>
              To inculcate a pharmacovigilant culture and proactively support
              the growth of drug safety practices across the globe. We will
              achieve this by integrating our expertise in pharmacovigilance
              with our medical experience, ensuring compliance to the dynamic
              regulatory frameworks and deploying the most appropriate
              technology.
              </p>
            </div>
        </div>

         {/* Card 3 */}
         <div className="card-container">
            {/* Circle Animation */}
            <span className="circle-animation"></span>

            {/* Content */}
            <div className="image-container">
              <img src={diamond} alt="Oviya MedSafe's core values: passion for pharmacovigilance, continuous learning, capability building, and business integrity.
" title='Our Values: Passion, Learning, Capability, Integrity.'/>
            </div>
            <div className="title-container">
              <h1>Values</h1>
            </div>
            <div className="description-container">
              <ul className="flex flex-col list-disc">
                <li>Passion for Pharmacovigilance</li>
                <li>Continuous learning to empower clients</li>
                <li>Perpetual capability building</li>
                <li>Deep-rooted business integrity</li>
              </ul>
          </div>
        </div>

      </div>  
    </div>
  )
}

export default Philosophy