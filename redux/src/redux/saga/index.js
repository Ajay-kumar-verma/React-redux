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

let tkn=axios.post(url,{
      "email": "eve.holt@reqres.in",
      "password": "cityslicka"
  }).then(res=>{
   console.log("FETCHED DATA ...",res);
   return  res;
 })

  tkn = yield tkn.json();

   console.info("token is fetched :", tkn);
   yield put({type: "token", tkn});
}


// function* searchProducts(data) {
//    let result = yield fetch(`http://localhost:3500/products?q=${data.query}`);
//    result = yield result.json();
//    console.warn("action is called", result)
//    yield put({type: SET_PRODUCT_LIST, data:result})
// }


// function* productSaga() {
//    yield takeEvery(PRODUCT_LIST, getProducts)
//    yield takeEvery(SEARCH_PRODUCT, searchProducts)
// }
