import { takeEvery, put ,call} from 'redux-saga/effects'
import {api}  from './api.js';
export default function* helloSaga() {
  // console.log('Hi i am saga !')
  // console.log(" from saga ", data)
   yield takeEvery("fetch_data", getData);
} 

function* getData(data){
 
// console.log("get data called  ",data);

let tkn=  yield call(api,data);

console.log("get token ",tkn);

yield put({type: "token", tkn});

return ;

}

