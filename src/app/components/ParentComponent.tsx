import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {

   let x = {
    name : "simra",
    age  : 20,
    Subject : "NextJs"

   }
  
  return (
    <div className='mt-24 text-center'>
      
     
      <ChildComponent x={x} />
    </div>
  )
}

export default ParentComponent
