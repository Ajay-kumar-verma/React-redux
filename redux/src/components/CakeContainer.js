import React from 'react'
import { useSelector  } from 'react-redux'
import  buyCake  from '../redux'

const  CakeContainer = () => {
 
   const numOfcakes =useSelector(state => state.numOfCakes) 
 
    return (
    <>
  <h2>Number of Cake:{numOfcakes}  </h2>
  {/* <button onClick={()=>{}} >Buy cake</button> */}

    </>

    )
}




export default CakeContainer;

