import axios from 'axios'   
import { useState } from 'react';

export const FetchData = (state="",action) => {
   

//    const [tkn,setTkn]=useState(" a");   1

        let id=action?.payload?.userId;
        let pswd=action?.payload?.pswd;
        
            // axios.post('https://reqres.in/api/login',{
            //     "email": "eve.holt@reqres.in",
            //     "password": "cityslicka"
            // }).then(res=>setTkn(res));

    //    console.log(tkn)



   switch(action.type){
   case "fetch_data":
    return id+pswd ;

   default :return state; 
  }



}
