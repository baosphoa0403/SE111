import { all, call } from "redux-saga/effects";
import * as TheoDoiShoes from "./shoesSaga";

export  function * rootSaga() {
    // console.log("hello root Saga");
    // yield fork(getShoesApi); // cách cũ 

    // yield takeEvery("getShoesApi", getShoesApi); // vừa kiểm tra type vừa chạy action

    // yield takeLatest("getShoesApi", getShoesApi);// nhấn 10 lần nghe 1 lần cúi cùng 
    yield all([
   // theo dõi action shoes
     TheoDoiShoes.theoDoiShoes()
    ])
}


// redux saga  chia thành 2 loại
// loại 1 : actions => object (action thường)
// loai 2 : actions => function (xử lý api hoặc gọi các action khác)

