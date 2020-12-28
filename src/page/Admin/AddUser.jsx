import React, { Component } from "react";
import { connect } from "react-redux";
import * as Action from "../SignIn/module/action/action";
import axios from "axios";
class AddUser extends Component {
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

  handleOnChane = event => {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value
      },
      () => {
        console.log(this.state);
      }
    );
  };
  handleSubmit = event => {
    event.preventDefault();
    // this.props.addUser(this.state);
   const admin = JSON.parse(localStorage.getItem("userAdmin"))
   console.log(admin.token);
  // 
    axios({
      method: "POST",
      url: " https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
      data: this.state,
      Authorization: `Bearer ${admin.token}`
    })
      .then(rs => {
        console.log(rs.data);
        alert("đăng ký thành công");
        //    dispatch(createAction(ActionType.SIGN_UP_API, rs.data))
      })
      .catch(err => {
        console.log({ ...err });
      });
  };
  render() {
    return (
      <>
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
export default connect()(AddUser);
