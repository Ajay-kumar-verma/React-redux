import React, { useEffect } from 'react'
import { useSelector ,useDispatch } from 'react-redux'
// import {cakeActions} from '../rtk/features/cake/cakeSlice'
import   {icecream,cake, user} from '../rtk/actions'
// import  buyCake  from '../redux'

const  CakeContainer = () => {
 
 const state =useSelector(state=>state);
  
  const dispatch = useDispatch();
 console.log("State",state);
//  console.log("user",user);
//  console.log("Dispatch",dispatch);
//  console.log("Actions",cake);


 useEffect(()=>{
  dispatch(cake.ordered())
  dispatch(user()); 
  
  // dispatch(icecream.ordered());
  // dispatch(cake.reStocked(200));

  // dispatch(cakeActions.reStocked(10000))
  
  // dispatch({type:'cake/reStocked',payload:200})
  
 },[])
  
  return (
    <>
  {/* <h2>Number of Cake:{cake.numOfCake}  </h2> */}
seflkjs

  {/* <button onClick={()=>{buyCake()}} >Buy cake</button> */}

    </>

    )
}




export default CakeContainer;

