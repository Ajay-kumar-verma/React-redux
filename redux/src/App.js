import {useState } from 'react'
import {getData} from './redux/action/index'
import { useDispatch, useSelector } from 'react-redux'

function App() {

  const tkn=useSelector(state=>{
    // state return object of containing all values   
    // with thier function name        

    console.log("useselector part",state,state.FetchData);
    return state.FetchData;

  });
 
  const dispatch=useDispatch();
  const [data,setData]=useState({});
 
  const info=(e)=>{
  
   data[e.target.name]=e.target.value;
   setData(data);

  }

const getToken=()=>{
let obj=getData(data);

  console.log("Action object ",obj);
 
  dispatch(obj)
   
  // console.log(data);
  // console.log(tkn);

}


  return (
    <>
  
   <input type="text"  name='userId' defaultValue={"eve.holt@reqres.in"} onChange={e=>{info(e)}} />
   <input type="text"  name='pswd'   defaultValue={"cityslicka"}  onChange={e=>{info(e)}}  />
   <input type="submit" value="login" onClick={()=>{getToken()}} />
   <p>
  Token is: {tkn}
 
   </p>
    
    </>
  );
}

export default App;
