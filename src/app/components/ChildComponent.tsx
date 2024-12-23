import React from 'react'

const ChildComponent = (props:any) => {
    console.log(props);
    
  return (
    <div className=' flex flexbox border-black border-4
     justify-center  w-96 h-full
    items-center mx-auto my-64  '>

       <div className='text-2xl '>
    <h1 > Personal Details</h1>

    
    <div className='mt-3 text-red-800 font-bold'>
    <p> Name: {props.x.name}</p>
    <p> Age: {props.x.age}</p>
    <p> Subject: {props.x.Subject}</p>
    </div>
    </div>
   
    </div>
  )
}

export default ChildComponent
