import React, { useEffect } from 'react'
import DynamicServices from './DynamicServices'
import AccordianSection from './AccordianSection'

const DrugSafety = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <div >
        <DynamicServices index = {0} />
        <AccordianSection index = {0} />
    </div>
  )
}

export default DrugSafety