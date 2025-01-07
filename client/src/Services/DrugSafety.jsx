import React from 'react'
import DynamicServices from './DynamicServices'
import AccordianSection from './AccordianSection'

const DrugSafety = () => {
  return (
    <div >
        <DynamicServices index = {0} />
        <AccordianSection index = {0} />
    </div>
  )
}

export default DrugSafety