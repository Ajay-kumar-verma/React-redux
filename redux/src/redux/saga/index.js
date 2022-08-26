// import { delay } from "redux-saga";
import { takeLatest, put } from "redux-saga/effects";

function* ageUpAsync() {
//   yield delay(4000);
  yield put({ type: "fetch_data", value: 1 });
}


 export function* watchAgeUp() {
  yield takeLatest("fetch_data", ageUpAsync);
}
