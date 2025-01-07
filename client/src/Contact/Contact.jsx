import React from 'react';
import Contactform from './Contactform';
import './Contact.css';
import { IoMdMail } from 'react-icons/io';
import uklogo from "../assets/uk.png";
import indlogo from "../assets/india.png";
import { FaLocationDot } from "react-icons/fa6";
import { HiPhone } from "react-icons/hi2";
function Contact() {
  return (
    <div className="container-fluid m-0 contactpart contactfoot">
        <div className='container'>
      <h1 className="text-center text-light subhead2 pt-3">Contact Us</h1>
      <p className="text-center text-light contactpara">Reach out and let's explore collaboration possibilities!</p>
      <div className="row  text-light">
        {/* Address Section */}
        <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center align-items-start">
          <div className="row">
          <h4 className='iconparas d-flex align-items-center py-3'> <FaLocationDot className="bg-light p-2 rounded-circle me-3 iconmail " />Address</h4>
            <div className="col-sm-12 col-md-7">
             
              <p className='d-flex ps-3 ps-md-5'>
                
              <img src={indlogo} alt="India Logo" className="countrylogo me-2" />
                2nd Floor, KTVR Gardens <br />
                220a-3, Marudha Konar Road <br />
                Velandipalayam<br />
                Coimbatore – 641 025<br />
                Tamil Nadu, India
              </p>
            </div>
            <div className="col-sm-12 col-md-5 ">
              <p className='d-flex ps-2'>
              <img src={uklogo} alt="UK Logo" className="countrylogo me-2" />
                Suite LP25393,<br />
                20-22, Wenlock Road <br />
                London, N1 7GU<br />
                United Kingdom
              </p>
            </div>
          </div>

          {/* Email Support */}
          <h4 className="d-flex align-items-center py-3 iconparas ">
            <IoMdMail className="bg-light p-2 rounded-circle me-3 iconmail" />
            Email Support
          </h4>
          <p className='ps-0 ps-md-5'>If you prefer the e-route, you can write to</p>
          <p className='ps-0 ps-md-5'>
            <a href="mailto:info@oviyamedsafe.com" style={{ textDecoration: 'none', color: 'inherit' }}>
              info@oviyamedsafe.com
            </a>
          </p>
          

          {/* Phone Support */}
          <h4 className="d-flex align-items-center py-3  iconparas ">
            <HiPhone className="bg-light p-2 rounded-circle me-3 iconmail" />
            Phone
          </h4>
          <p className="d-flex align-items-center ps-0 ps-md-5">
  <img src={indlogo} alt="India Logo" className="countrylogo me-2" />
  <a href="tel:+914223502276" className="text-decoration-none text-light">
    +91 422 3502276
  </a>
</p>
<p className="d-flex align-items-center ps-0 ps-md-5">
  <img src={uklogo} alt="UK Logo" className="countrylogo me-2" />
  <a href="tel:+442033936037" className="text-decoration-none text-light">
    +44 20 3393 6037
  </a>
</p>


        </div>

        {/* Contact Form Section */}
        <div className="col-sm-12 col-md-6">
          <Contactform />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;
