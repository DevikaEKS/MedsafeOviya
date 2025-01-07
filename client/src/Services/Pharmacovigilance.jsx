import React from 'react'
import DynamicServices from './DynamicServices'
import AccordianSection from './AccordianSection'

const Pharmacovigilance = () => {
  return (
    <div>
        <DynamicServices index = {1} />
        <AccordianSection index = {1} />
    </div>
  )
}

export default Pharmacovigilance