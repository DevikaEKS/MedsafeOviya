import React, { useEffect } from 'react'
import DynamicServices from './DynamicServices'
import StrategySection from './StrategySection'

const Partnerships = () => {
   useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);
  return (
    <div>
        <DynamicServices index = {2} />
        <StrategySection />
    </div>
  )
}

export default Partnerships