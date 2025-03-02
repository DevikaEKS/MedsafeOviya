import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CiFacebook,CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import Phwhite from "../../assets/phonewhite.png";
import Mailwhite from "../../assets/Mailwhite.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Footer.css"
function Footer() {

  const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      toast.error("Please enter an email address.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message); // Display success message
        setEmail(""); // Clear the email input
      } else {
        toast.error(data.message || "Subscription failed."); // Display error message
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later."); // Handle fetch errors
    }
  };

  const now=new Date();
const years=now.getFullYear()
  return (
    <div className='container-fluid footerbg'>
      <div className='container'>
        <div className='row px-3 py-5'>
            <div className='col-sm-12 col-md-6 col-lg-3'>
              <h4 className='footerhead py-3'>Location</h4>
              <h5 className='oviyafooter'>Oviya MedSafe Pvt Ltd</h5>
              <p className='pe-4'>2nd Floor, KTVR Gardens
                220a-3,<br/> Marudha Konar Road Velandipalayam<br/>
                Coimbatore – 641 025</p>
                <h5 className='oviyafooter'>Oviya MedSafe UK Ltd</h5>
                <p>Suite LP25393
                20-22, Wenlock Road
                London, N1 7GU
                United Kingdom</p>
              </div>
            <div className='col-sm-12 col-md-6 col-lg-2'>
              <h5 className='footerhead py-3'>Explore</h5>
              <Link to={"/"} className='text-decoration-none text-light'><p>Home</p></Link>
              <Link to={"/about-us"} className='text-decoration-none text-light'><p>Who we are</p></Link>
              <Link to={"/drug-safety-services"} className='text-decoration-none text-light'><p>Services</p></Link>
              <Link to={"/news"} className='text-decoration-none text-light'><p>News</p></Link>
              <Link to={"/downloads"}className='text-decoration-none text-light'><p>Downloads</p></Link>
              <Link  to={"/careers"} className='text-decoration-none text-light'><p>Careers</p></Link>
              <Link to={"/contact"} className='text-decoration-none text-light'><p>Contact</p></Link>
              <Link to={"/disclaimer-and-privacy-policy"} className='text-decoration-none text-light'><p>Disclaimer & Privacy Policy</p></Link>
              </div>
            <div className='col-sm-12 col-md-6 col-lg-3'>
              <h4 className='footerhead py-3'>Services</h4>
              <p><Link to="/drug-safety-services" className='text-decoration-none text-light'>Drug Safety Services</Link></p>
              <p><Link to="/pharmacovigilance-consulting" className='text-decoration-none text-light'>Pharmacovigilance Consulting</Link></p>
              <p><Link to="/strategic-partnerships" className='text-decoration-none text-light'>Strategic Partnerships</Link></p>
              </div>
            <div className='col-sm-12 col-md-6 col-lg-3'>
            {/* Update the email to database */}
            <div className="d-flex flex-column">
              <h4 className="footerhead py-3">Subscribe Here</h4>
              <input
                type="email"
                className="email-input py-3 border-0"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update state with email input
              />
              <button className="border-0 subscribebtn py-3 mt-2"
                   onClick={handleSubscribe} // Trigger subscription logic
              >SUBSCRIBE</button>
            </div>
 
              <div className='col-sm-12 d-block d-md-none'>
              <h4 className='footerhead py-3'>Contact</h4>
             <p className='text-decoration-none'><a href="mailto:info@oviyamedsafe.com" className='text-light text-decoration-none'><img src={Mailwhite} height={"18px"} className='pe-2 mb-1'/>info@oviyamedsafe.com</a></p> 
              <p className='text-decoration-none'><a href="tel:+91-422-3502276" className='text-light text-decoration-none'><img src={Phwhite} height={"20px"} className='pe-2'/>IND +91 422 3502276</a></p> 
              <p className='text-decoration-none'><a href="tel:+44-20-3393-6037" className='text-light text-decoration-none'><img src={Phwhite} height={"20px"} className='pe-2'/>UK +44 20 3393 6037</a></p>
              </div>
               <div className='d-flex social-links py-5'>
             <a href='https://www.facebook.com/OviyaMedSafe'><CiFacebook className='icon'/></a>
                     <a href='https://x.com/OviyaMedSafe' > <FaXTwitter className='icon'/></a>
                     <a href='https://www.youtube.com/channel/UCJMIsvtEWEP0NwUalnRgODQ/videos'><AiOutlineYoutube/></a>
             <a href='https://www.linkedin.com/company/oviya-medsafe/'><CiLinkedin/></a>
              </div>
              </div>  
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center'>
        <p className='text-center'>Copyright © {years} Oviya MedSafe. All Rights Reserved.</p>
        <a href='https://www.kggeniuslabs.com/' className='text-decoration-none'><p className='text-light '>Designed and Developed by KG Genius Labs</p></a>
        </div>
    </div>
    <ToastContainer />
    </div>

  )
}

export default Footer