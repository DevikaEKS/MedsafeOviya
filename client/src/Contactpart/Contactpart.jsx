// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import necessary icons
// import { CiFacebook,CiLinkedin } from "react-icons/ci";
// import { FaXTwitter } from "react-icons/fa6";
// import { AiOutlineYoutube } from "react-icons/ai";
// import { MdOutlineMailOutline } from "react-icons/md";
// // import "./Contactpart.scss"
// function Contactpart() {
//   return (
//     <div className='container py-2 d-none d-md-block'>
//       <div className='row '>
//         <div className='col-md-4'>
//         <div className='d-flex '>
//         <CiFacebook className='ms-5 me-2 iconclr'/>
//         <FaXTwitter className='mx-2 iconclr'/>
//         <AiOutlineYoutube className='mx-2 iconclr'/>
//         <CiLinkedin className='mx-2 iconclr'/>
//         </div>
//         </div>
//         <div className='col-md-8 d-flex justify-content-end'>
//           <a href="mailto:info@oviyamedsafe.com" className="text-decoration-none d-block d-md-inline mx-0 mx-md-2">
//             <FontAwesomeIcon icon={faEnvelope} className="me-2" />
//             info@oviyamedsafe.com
//           </a>
//           <a href="tel:+442033936037" className="text-decoration-none d-block d-md-inline mx-0 mx-md-2">
//             <FontAwesomeIcon icon={faPhone} className="me-2 " />
//             UK +44 20 3393 6037
//           </a>
//           <a href="tel:+914223502276" className="text-decoration-none d-block d-md-inline mx-0 mx-md-2">
//             <FontAwesomeIcon icon={faPhone} className="me-2" />
//             IND +91 422 3502276
//           </a>
//         </div>

      
         
       
//       </div>
//     </div>
//   );
// }

// export default Contactpart;



import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import necessary icons
import './Contactpart.css';
import { Link } from 'react-router-dom';
import TWT from '../assets/Twitter.png';
import FB from '../assets/Facebook.png';
import LI from '../assets/Linkedin.png';
import YT from '../assets/Youtube.png';
import ML from '../assets/Mailicon.png';
function Contactpart() {
  return (
    <div className='d-none d-md-block' style={{paddingLeft:'68px', paddingRight:'0px',paddingBottom:"11px",paddingTop:"11px"}}>
      <div className='row'>
        <div className='col-md-4'>
          <div className='d-flex gap-4'>
            <div>
              <Link>
                <img src={TWT} alt='logo' className='me-1' style={{width: '16px'}} />
              </Link>
            </div>

            <div>
              <Link>
                <img src={FB} alt='logo' className='mx-1'  style={{width: '20px'}}/>
              </Link>
            </div>

            <div>
              <Link>
                <img src={YT} alt='logo' className='mx-1' style={{width: '22px'}} />
              </Link>
            </div>

            <div>
              <Link>
                <img src={LI} alt='logo' className='mx-1' style={{width: '20px'}}/>
              </Link>
            </div>
          </div>
        </div>
        <div className='col-md-8 d-flex align-items-center justify-content-end'>
          <Link to="mailto:info@oviyamedsafe.com" className="text-decoration-none text-size d-block d-lg-inline mx-0 mx-md-1 mx-lg-3 paracontact">
            {/* <FontAwesomeIcon icon={faEnvelope} className="me-2 iconclr" /> */}
            <img src={ML} alt='logo' className='mx-1' style={{width: '20px'}}/>
            info@oviyamedsafe.com
          </Link>
          <a href="tel:+442033936037" className="text-decoration-none d-block text-size d-lg-inline mx-0 mx-md-2 mx-lg-3 paracontact">
            <FontAwesomeIcon icon={faPhone} className="me-2 iconclr " />
            UK +44 20 3393 6037
          </a>
          <a href="tel:+914223502276" className="text-decoration-none d-block text-size d-md-inline mx-0 mx-md-2 ms-lg-3 me-lg-5 pe-0 pe-lg-5 paracontact ">
            <FontAwesomeIcon icon={faPhone} className="me-2 iconclr" />
            IND +91 422 3502276
          </a>
        </div>

      
         
       
      </div>
    </div>
  );
}

export default Contactpart;
