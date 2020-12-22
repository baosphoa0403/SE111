import Axios from "axios";
import * as ActionType from "../constants/constants";
// action creator
export const createAtion = (content, data) => {
    return {
       type: content,
       payload: data
    }
}
// aysnc action
export const FetchListMovie = (dispatch) => {
    // console.log(dispatch);
    Axios({
        url:
          "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        method: "GET"
      })
        .then(res => { // khi nào data thành  thì bắn len
          //response
          //   console.log(res.data);
          dispatch(
            createAtion(ActionType.FETCH_LIST_MOVIE, res.data)
          );
        })
        .catch(err => {
          console.log(err);
    });
}