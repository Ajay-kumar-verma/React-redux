import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects'
export default function* helloSaga() {
  // console.log('Hi i am saga !')
  // console.log(" from saga ", data)
   yield takeEvery("fetch_data", getData);
} 

function* getData(data) {
let {userId, pswd}=data.payload;
let email= userId ; let password=pswd;

const url="https://reqres.in/api/login";

  axios.post(url,{
      "email": "eve.holt@reqres.in",
      "password": "cityslicka"
  }).then(res=>{
   console.log("FETCHED DATA ...",res);
   return  res;
 })

  // tkn = yield tkn.json();

  //  console.info("token is fetched :", tkn);

  let tkn="ajay kumar verma ";
   yield put({type: "token", tkn });
}

