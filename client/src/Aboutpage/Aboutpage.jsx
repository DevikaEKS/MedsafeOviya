import React from 'react'
import { BsArrowUpRightCircle } from "react-icons/bs";
import { MdOutlineHorizontalRule } from "react-icons/md";
import './Aboutpage.css';
function Aboutpage() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-12 col-md-6'>
          <h3 className='abttxt'><MdOutlineHorizontalRule style={{color:"#0d868f"}} /> About Us</h3>
          <h1 className='subhead2 text-start'>Oviya MedSafe <BsArrowUpRightCircle className="arrow-icon"/></h1>
          <p className='para'>is a global Pharmacovigilance Consulting & Drug Safety Services company incorporated in India in 2012 and in the United Kingdom in 2014, offering advisory and outsourced support to the pharmaceutical industry. Oviya MedSafe is backed by 50 years of collective intelligence of its founding groups and works with renowned pharmaceutical companies and marketing authorization holders in various parts of the world.</p>
        </div>
        <div className='col-sm-12 col-md-6'>

        </div>
        </div>
        </div>
  )
}

export default Aboutpage