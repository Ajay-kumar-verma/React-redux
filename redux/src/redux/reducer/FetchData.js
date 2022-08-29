import axios from 'axios'   
import { useState } from 'react';

export const FetchData = (state="",action) => {
   
    // state return prevState data
    // current state data 

    // action has two field 
    // type : WhAT TO DO  // name 
    // payload  : how much to do  // data //amount 



    
    console.log("Reducer function   \nState", state,"\nAction",action);


   switch(action.type){
   case "token":
    return JSON.stringify(action.tkn);
   default :return state; 
  }



}
