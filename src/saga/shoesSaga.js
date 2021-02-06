import Axios from "axios";
import {
  call,
  delay,
  fork,
  put,
  take,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
function* getShoesApi(action) {
  // yield delay(5000)
  //  console.log("getShoesApi", action);
  //   while (true) {
  //     yield take("getShoesApi") //theo dõi action -> xem action nào dispatch mới làm các công việc bên dưới
  //     console.log("getShoesApi running");
  //     // call api dispatch lên store
  //   }
  yield put({
    type: "Hien",
    // payload: result.data
  });
  
  try {
    let result = yield call(() => {
      return Axios({
        method: "GET",
        url: "https://nike0403.herokuapp.com/product",
      });
    }); // thành công phải mới xử lý ở dưới giống promise
    // sau khi xong dùng dispacth lên store  dùng put giống
    yield delay(5000);
    yield put({
      type: "GetListShoes",
      payload: result.data,
    });
    //   console.log("result",result);
    //
  } catch (error) {
    console.log(error);
  }
  yield put({
    type: "An",
  });
}

export function* theoDoiShoes() {
  console.log("hello root Saga");
  // yield fork(getShoesApi); // cách cũ

  // yield takeEvery("getShoesApi", getShoesApi); // vừa kiểm tra type vừa chạy action

  yield takeLatest("getShoesApi", getShoesApi); // nhấn 10 lần nghe 1 lần cúi cùng
}
