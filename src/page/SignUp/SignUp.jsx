import React, { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "GP01",
      maLoaiNguoiDung: "",
      hoTen: ""
    };
  }
  notifySignUpSuccess = (str) => toast.success(`🦄 ${str}`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });;
  handleOnChane = event => {
    // console.log(event.target);
    
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value
      },
      () => {
        // console.log(this.state);
      }
    );
  };
  handleSubmit = event => {
    event.preventDefault();
    // this.props.addUser(this.state);
    axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      data: this.state
    })
      .then(rs => {
        console.log(rs.data);
        //    dispatch(createAction(ActionType.SIGN_UP_API, rs.data))
        this.notifySignUpSuccess("đăng ký thành công")
      })
      .catch(err => {
        this.notifySignUpSuccess("đăng ký thất bại")
        console.log({ ...err });
      });
  };
  render() {
    return (
      <>
      <ToastContainer />
      <h1 className="text-center">đăng ký</h1>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form className="container" onSubmit={this.handleSubmit}>
                <h3>Thêm người dùng</h3>
                <div className="form-group">
                  <span>Tài khoản</span>
                  <input
                    className="form-control"
                    name="taiKhoan"
                    onChange={this.handleOnChane}
                  />
                </div>
                <div className="form-group">
                  <span>Mật khẩu</span>
                  <input
                    className="form-control"
                    name="matKhau"
                    onChange={this.handleOnChane}
                  />
                </div>
                <div className="form-group">
                  <span>Họ tên</span>
                  <input
                    className="form-control"
                    name="hoTen"
                    onChange={this.handleOnChane}
                  />
                </div>
                <div className="form-group">
                  <span>Email</span>
                  <input
                    className="form-control"
                    name="email"
                    onChange={this.handleOnChane}
                  />
                </div>
                <div className="form-group">
                  <span>Số điện thoại</span>
                  <input
                    className="form-control"
                    name="soDt"
                    onChange={this.handleOnChane}
                  />
                </div>
                <div className="form-group">
                  <span>Mã nhóm</span>
                  <input
                    className="form-control"
                    name="maNhom"
                    onChange={this.handleOnChane}
                  />
                </div>
                <div className="form-group">
                  <span>Mã loại người dùng</span>
                  <input
                    className="form-control"
                    name="maLoaiNguoiDung"
                    onChange={this.handleOnChane}
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-success">
                    Thêm người dùng
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default SignIn;
