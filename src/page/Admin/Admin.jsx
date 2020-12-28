import React, { Component } from "react";
import axios from "axios";

export default class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
          taiKhoan: "",
          matKhau: ""
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
       axios({
        method: "POST",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        data: this.state
       }).then((rs)=>{
           console.log(rs.data);
           
            if (rs.data.maLoaiNguoiDung === "QuanTri") {
                alert("hello admin");
                localStorage.setItem("userAdmin", JSON.stringify(rs.data));
                this.props.history.push("/admin/dashboard")
            }else{
                alert("you not admin");
            }
       }).catch((err)=>{
          alert("tk sai")
           console.log({...err});
           
       })
    }
  render() {
    //   console.log(this.props);
      
    return (
      <div>
        <h1  className="text-center">Đang nhập r zo admin nè</h1>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form className="container" onSubmit={this.handleSubmit}>
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
                  <button type="submit" className="btn btn-success">
                    Đăng nhập
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
