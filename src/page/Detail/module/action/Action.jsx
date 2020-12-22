import Axios from "axios";
import * as ActionType from "../constants/ActionType";
export const createAtion = (content, data) => {
  return {
    type: content,
    payload: data
  };
};

export const FetchMovieDetail = id => {
  return dispatch => {
    Axios({
      url:
        `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
      method: "GET"
    })
      .then(res => {
        // khi nào data thành  thì bắn len
        //response
        console.log(res.data);
        dispatch(createAtion(ActionType.FETCH_MOVIE_DETAIL, res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
