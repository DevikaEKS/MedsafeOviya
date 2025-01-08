import React, { useEffect } from 'react'
import DynamicServices from './DynamicServices'
import AccordianSection from './AccordianSection'

const Pharmacovigilance = () => {
    useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);
  return (
    <div>
        <DynamicServices index = {1} />
        <AccordianSection index = {1} />
    </div>
  )
}

export default Pharmacovigilance