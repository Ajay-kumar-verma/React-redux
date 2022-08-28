import axios from 'axios'   
import { useState } from 'react';

export const FetchData = (state="",action) => {
   
    // state return prevState data
    // current state data 

    // action has two field 
    // type : WhAT TO DO  // name 
    // payload  : how much to do  // data //amount 



    
    console.log(state,action);

//    const [tkn,setTkn]=useState(" a");   1

        let id=action?.payload?.userId;
        let pswd=action?.payload?.pswd;
        
            // axios.post('https://reqres.in/api/login',{
            //     "email": "eve.holt@reqres.in",
            //     "password": "cityslicka"
            // }).then(res=>setTkn(res));

    //    console.log(tkn)



   switch(action.type){
   case "token":
    return JSON.stringify(state);
   default :return state; 
  }



}
