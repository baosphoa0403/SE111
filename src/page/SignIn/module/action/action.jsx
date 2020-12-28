import Axios from "axios"
import * as ActionType from "../constants/constants"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const createAction = (type, payload) => {
  return {
      type,
      payload
  }
}
// action creator
const notifySignUpSuccess = (str) => toast.success(`🦄 ${str}`, {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  });;
  const notifySignUpFail = (str) => toast.error(`🦄 ${str}`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });;
    //async action
export const callAPIlogin = (value, history) => {
  return (dispatch)=>{
    Axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: value
    })
      .then(rs => {
        console.log(rs);
        notifySignUpSuccess("đăng nhập thành công");
       // localStorgae, session, cookie
        localStorage.setItem("user", JSON.stringify(rs.data))
       setTimeout(()=>{
        history.push("/listMovie")
       },3000)
        dispatch(createAction(ActionType.SIGN_IN_API, rs.data))
        // lưu local 
      })
      .catch(err => {
        notifySignUpFail("đăng nhập thất bại" + err.response.data);
        console.log({ ...err });
      });
  }
}
