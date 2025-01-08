// import React from 'react';
// import './Philosophy.css';


// function Philosophy() {
//   return (
//     <div className="container-fluid">
//       <div className="row philosophybg text-light px-4 text-center">
//         <h1 className="text-center py-2 philosophyhead">Philosophy</h1>
//         <div className="col-sm-12 col-md-4 my-2">
//           <div className="card bg-light p-3 philosophy-card">
//             <div className="d-flex justify-content-center">
//               {/* <img src={bulbimg} className="philosophyimg" alt="Vision Icon" /> */}
//             </div>
//             <h2 className="text-center mt-3">Vision</h2>
//             <p className="text-justify">
//               To become a leader in pharmacovigilance consulting services by
//               strategically partnering with global pharmaceutical companies.
//             </p>
//           </div>
//         </div>
//         <div className="col-sm-12 col-md-4 my-2">
//           <div className="card bg-light p-3 philosophy-card">
//             <div className="d-flex justify-content-center">
//               {/* <img src={bulbimg} className="philosophyimg" alt="Mission Icon" /> */}
//             </div>
//             <h2 className="text-center mt-3">Mission</h2>
//             <p className="text-justify">
//               To inculcate a pharmacovigilant culture and proactively support
//               the growth of drug safety practices across the globe. We will
//               achieve this by integrating our expertise in pharmacovigilance
//               with our medical experience, ensuring compliance to the dynamic
//               regulatory frameworks and deploying the most appropriate
//               technology.
//             </p>
//           </div>
//         </div>
//         <div className="col-sm-12 col-md-4 my-2">
//           <div className="card bg-light p-3 philosophy-card">
//             <div className="d-flex justify-content-center">
//               {/* <img src={bulbimg} className="philosophyimg" alt="Values Icon" /> */}
//             </div>
//             <h2 className="text-center mt-3">Values</h2>
//             <ul className="text-justify">
//               <li>Passion for Pharmacovigilance</li>
//               <li>Continuous learning to empower clients</li>
//               <li>Perpetual capability building</li>
//               <li>Deep-rooted business integrity</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Philosophy;

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
              <img src={bulb} alt="philosophy1" />
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
              <img src={target} alt="philosophy1" style={{width:'100px'}}/>
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
              <img src={diamond} alt="philosophy1" />
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