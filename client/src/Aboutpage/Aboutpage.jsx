import React from 'react'
import { BsArrowUpRightCircle } from "react-icons/bs";
import { MdOutlineHorizontalRule } from "react-icons/md";
import cap1 from "../assets/Capsule.gif";
import './Aboutpage.css';

function Aboutpage() {
  return (
    <div className='container-fluid bgaboutpage'>
    <div className='container py-5'>
      <div className='row'>
        <div className='col-sm-12 col-md-6 col-lg-5'>
          <h3 className='abttxt'><MdOutlineHorizontalRule style={{color:"#0d868f"}} /> About Us</h3>
          <h1 className='subhead2 text-start pb-2'>Oviya MedSafe <BsArrowUpRightCircle className="arrowic"/></h1>
          <p className='para'>is a global Pharmacovigilance Consulting & Drug Safety Services company incorporated in India in 2012 and in the United Kingdom in 2014, offering advisory and outsourced support to the pharmaceutical industry. Oviya MedSafe is backed by 50 years of collective intelligence of its founding groups and works with renowned pharmaceutical companies and marketing authorization holders in various parts of the world.</p>
        </div>
  <div className='col-sm-12 col-md-6 col-lg-7'>
    <img src={cap1} alt='Pharmacovigilance Solutions for Safety' title='Comprehensive Pharmacovigilance Solutions' className='capsuleimg'/>
</div>
        </div>
        </div>
        </div>
  )
}

export default Aboutpage