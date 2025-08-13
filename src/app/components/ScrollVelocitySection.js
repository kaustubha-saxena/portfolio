import React from 'react'
import ScrollVelocity from './UICompoents/ScrollVelocity'
const ScrollVelocitySection = () => {
  return (
    <div>
      <ScrollVelocity
  texts={['Design. Code.',' Innovate. Repeat.']} 
  velocity={80} 
  className="custom-scroll-text"
/>
    </div>
  )
}

export default ScrollVelocitySection
