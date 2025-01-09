import React, { useEffect } from 'react'
import "./Careers.css"
function Careers() {

   useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);
  return (
    <div className='container-fluid contactpart text-center text-light'>
       <div className='py-5'>
        <h1 className='text-light careershead pb-3'>CAREERS</h1>
        <h2 className='emptxt'>"Empowering Your Future:</h2>
        <h2 className='emptxt'>Explore Exciting Career Opportunities with Us!"</h2>
        </div>
    </div>
  )
}

export default Careers