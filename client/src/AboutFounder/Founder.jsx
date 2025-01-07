// import { faLinkedin} from '@fortawesome/free-brands-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import React from 'react'
// import founderimg from "../assets/founder.png"

// function Founder() {
//   return (
//     <div className='container-fluid testimonialpart text-light founderpart'>
//         <div className='container mx-5 text-justify'>
//         <h1 className='text-light text-center philosophyhead'>Our Founder</h1>
//         <div className='row mx-1 mx-md-5'>
          
//             <div className='col-sm-12 col-md-4'>
//             <img src={founderimg} className='founderimg'/>
//             </div>
//             <div className='col-sm-12 col-md-8 text-light d-flex flex-column justify-content-center align-items-center'>
//                 <h1 className='foundername'>Dr J Vijay Venkatraman</h1>
//                 <p className='py-2 founderqualification'>MBBS., F. Diab., MBA, FPIPA (UK)<br/>Managing Director & CEO,<br/>Oviya MedSafe</p>
//                 <a href='https://www.linkedin.com/in/drjvvr/' className='text-light'> <FontAwesomeIcon icon={faLinkedin} className='linkedicon px-2 '/>Get in touch</a>
            
//             </div>
//             <p>Dr J Vijay Venkatraman is a Diabetologist, Drug Safety Physician and Entrepreneur, with 2 decades of experience. He holds a MBA degree in Services Management. He is the first Indian to have been conferred the Fellowship of the Pharmaceutical Information & Pharmacovigilance Association (PIPA), United Kingdom.</p>
//             <p>Dr Vijay founded Oviya MedSafe, a global Pharmacovigilance consulting & Drug Safety services providing company incorporated in Coimbatore, India and London, UK, which has been fulfilling the compliance needs of the pharmaceutical industry since 2012.</p>
//             <p>Dr Vijay has held the honorary position ‘Regional Editor, India’ of Global Forum, the official magazine of the Drug Information Association (DIA) since April 2017. He served as the Chairman of the Indian Medical Association (IMA) Headquarters’ Standing Committee for Pharmacovigilance for the year 2021. He was the Chair of the Pharmacovigilance Council of the Indian Society for Clinical Research (ISCR) since the inception of the council in April 2015 until 2019.</p>
//             <p>Dr Vijay has been an invited faculty in conferences around the world. He has numerous publications to his credit and has often been featured in the media. He is a member of several professional associations and is actively involved in promoting pharmacovigilance awareness among all stakeholders of the discipline.</p>
//             <p>Dr Vijay is a recipient of many awards including the ‘Leadership Excellence Award’ and the ‘State Appreciation Award for Co-ordinating Academic Activities’ by the Indian Medical Association.</p>
//         </div>
//     </div>
//     </div>
//   )
// }

// export default Founder





import { faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import founderimg from "../assets/founder.png"
import TOP from "../assets/aboutTop.png";
import BOTTOM from "../assets/aboutBottom.png";

function Founder() {
  return (
    <div className='position-relative container-fluid aboutfounder text-light founderpart '>
        <div className='container mx-5 text-justify'>
        <h1 className='text-light text-center philosophyhead'>Our Founder</h1>
        <div className='row mx-1 mx-md-5'>
          <div className='col-sm-0 col-md-2'></div>
            <div className='col-sm-12 col-md-2'>
            <img src={founderimg} style={{zIndex:1000}} className='founderimg'/>
            </div>
            <div className='col-sm-12 col-md-8 text-light d-flex flex-column justify-content-center align-items-center'>
                <h1 className='foundername'>Dr J Vijay Venkatraman</h1>
                <p className='py-2 founderqualification'>MBBS., F. Diab., MBA, FPIPA (UK)<br/>Managing Director & CEO,<br/>Oviya MedSafe</p>
                <a href='https://www.linkedin.com/in/drjvvr/' className='text-light'> <FontAwesomeIcon icon={faLinkedin} className='linkedicon px-2 '/>Get in touch</a>
            
            </div>
            <p>Dr J Vijay Venkatraman is a Diabetologist, Drug Safety Physician and Entrepreneur, with 2 decades of experience. He holds a MBA degree in Services Management. He is the first Indian to have been conferred the Fellowship of the Pharmaceutical Information & Pharmacovigilance Association (PIPA), United Kingdom.</p>
            <p>Dr Vijay founded Oviya MedSafe, a global Pharmacovigilance consulting & Drug Safety services providing company incorporated in Coimbatore, India and London, UK, which has been fulfilling the compliance needs of the pharmaceutical industry since 2012.</p>
            <p>Dr Vijay has held the honorary position ‘Regional Editor, India’ of Global Forum, the official magazine of the Drug Information Association (DIA) since April 2017. He served as the Chairman of the Indian Medical Association (IMA) Headquarters’ Standing Committee for Pharmacovigilance for the year 2021. He was the Chair of the Pharmacovigilance Council of the Indian Society for Clinical Research (ISCR) since the inception of the council in April 2015 until 2019.</p>
            <p>Dr Vijay has been an invited faculty in conferences around the world. He has numerous publications to his credit and has often been featured in the media. He is a member of several professional associations and is actively involved in promoting pharmacovigilance awareness among all stakeholders of the discipline.</p>
            <p>Dr Vijay is a recipient of many awards including the ‘Leadership Excellence Award’ and the ‘State Appreciation Award for Co-ordinating Academic Activities’ by the Indian Medical Association.</p>
        </div>
    </div>

    {/* TOP SVG */}
    <img 
        src={TOP}
        alt=""
        className="position-absolute"
        style={{
          top: "0",
          left: "0",
          margin: "auto",
          width: "",
          maxWidth: "",
        }}
      />
      {/* Bottom SVG */}
      <img 
          src={BOTTOM}
          alt=""
          className="position-absolute"
          style={{
              bottom: "0px",
              right: "0",
              margin: "auto",
              width: "",
              maxWidth: "",
          }}
      />
    </div>
  )
}

export default Founder